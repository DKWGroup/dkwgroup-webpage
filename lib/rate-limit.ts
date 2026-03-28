/**
 * In-memory sliding window rate limiter.
 * 
 * Tracks request timestamps per IP per route identifier.
 * Automatically cleans up stale entries to prevent memory leaks.
 * 
 * Note: In-memory store resets on server restart.
 * For Vercel/serverless, each instance has its own store —
 * this provides reasonable protection without external dependencies.
 * For stricter enforcement, consider Redis-backed rate limiting.
 */

import { NextRequest, NextResponse } from 'next/server';

interface RateLimitEntry {
    timestamps: number[];
}

interface RateLimitConfig {
    /** Maximum number of requests allowed within the interval */
    maxRequests: number;
    /** Time window in milliseconds */
    intervalMs: number;
}

// Store: Map<routeId, Map<ip, RateLimitEntry>>
const stores = new Map<string, Map<string, RateLimitEntry>>();

// Cleanup interval (60 seconds)
const CLEANUP_INTERVAL_MS = 60_000;
let lastCleanup = Date.now();

// ─── Predefined Configurations ─────────────────────────────────────

export const RATE_LIMITS = {
    contact: { maxRequests: 5, intervalMs: 60_000 },        // 5 per minute
    newsletter: { maxRequests: 3, intervalMs: 60_000 },     // 3 per minute
    general: { maxRequests: 20, intervalMs: 60_000 },       // 20 per minute
} as const;

// ─── IP Extraction ─────────────────────────────────────────────────

export function getClientIp(request: NextRequest): string {
    // Try standard forwarding headers (Vercel, Cloudflare, nginx)
    const forwarded = request.headers.get('x-forwarded-for');
    if (forwarded) {
        // x-forwarded-for can contain multiple IPs: client, proxy1, proxy2
        return forwarded.split(',')[0].trim();
    }
    
    const realIp = request.headers.get('x-real-ip');
    if (realIp) {
        return realIp.trim();
    }
    
    // Vercel-specific
    const vercelIp = request.headers.get('x-vercel-forwarded-for');
    if (vercelIp) {
        return vercelIp.split(',')[0].trim();
    }
    
    return 'unknown';
}

// ─── Cleanup ───────────────────────────────────────────────────────

function cleanupStaleEntries() {
    const now = Date.now();
    
    if (now - lastCleanup < CLEANUP_INTERVAL_MS) return;
    lastCleanup = now;
    
    for (const [routeId, ipMap] of stores) {
        for (const [ip, entry] of ipMap) {
            // Remove timestamps older than 5 minutes
            entry.timestamps = entry.timestamps.filter(t => now - t < 300_000);
            
            if (entry.timestamps.length === 0) {
                ipMap.delete(ip);
            }
        }
        
        if (ipMap.size === 0) {
            stores.delete(routeId);
        }
    }
}

// ─── Rate Limit Check ──────────────────────────────────────────────

export interface RateLimitResult {
    allowed: boolean;
    remaining: number;
    resetIn: number; // ms until oldest relevant request expires
}

export function checkRateLimit(
    routeId: string,
    ip: string,
    config: RateLimitConfig
): RateLimitResult {
    cleanupStaleEntries();
    
    const now = Date.now();
    const windowStart = now - config.intervalMs;
    
    // Get or create store for this route
    if (!stores.has(routeId)) {
        stores.set(routeId, new Map());
    }
    const ipMap = stores.get(routeId)!;
    
    // Get or create entry for this IP
    if (!ipMap.has(ip)) {
        ipMap.set(ip, { timestamps: [] });
    }
    const entry = ipMap.get(ip)!;
    
    // Remove timestamps outside the current window
    entry.timestamps = entry.timestamps.filter(t => t > windowStart);
    
    const currentCount = entry.timestamps.length;
    
    if (currentCount >= config.maxRequests) {
        // Rate limit exceeded
        const oldestInWindow = Math.min(...entry.timestamps);
        const resetIn = oldestInWindow + config.intervalMs - now;
        
        return {
            allowed: false,
            remaining: 0,
            resetIn: Math.max(0, resetIn),
        };
    }
    
    // Allow request and record timestamp
    entry.timestamps.push(now);
    
    return {
        allowed: true,
        remaining: config.maxRequests - currentCount - 1,
        resetIn: config.intervalMs,
    };
}

// ─── Middleware Helper ──────────────────────────────────────────────

export function createRateLimitResponse(result: RateLimitResult) {
    const retryAfterSeconds = Math.ceil(result.resetIn / 1000);
    
    return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        {
            status: 429,
            headers: {
                'Retry-After': String(retryAfterSeconds),
                'X-RateLimit-Remaining': String(result.remaining),
            },
        }
    );
}
