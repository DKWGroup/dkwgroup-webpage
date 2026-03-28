/**
 * Anti-bot security utilities for form submissions.
 * 
 * Multi-layer protection:
 * 1. Honeypot — hidden field that bots fill but humans don't
 * 2. Time trap — rejects submissions faster than humanly possible
 * 3. Input sanitization — strips HTML, enforces max length
 */

import { NextResponse } from 'next/server';

// ─── Honeypot Validation ───────────────────────────────────────────
// The hidden field is named "website" — a common honeypot name that
// attracts bots looking for URL fields. If it has any value, it's a bot.

export function validateHoneypot(body: Record<string, unknown>): boolean {
    const honeypotValue = body.website || body._hp_website || '';
    return honeypotValue === '' || honeypotValue === undefined || honeypotValue === null;
}

// ─── Time Trap ─────────────────────────────────────────────────────
// Minimum time (ms) a human needs to fill out a form.
// Anything under 2 seconds is almost certainly automated.

const MIN_SUBMISSION_TIME_MS = 2000;

export function validateTimestamp(body: Record<string, unknown>): boolean {
    const formLoadedAt = Number(body._formLoadedAt);
    
    if (!formLoadedAt || isNaN(formLoadedAt)) {
        // If no timestamp provided, it's suspicious but we allow it
        // to avoid breaking forms during rollout
        return true;
    }
    
    const elapsed = Date.now() - formLoadedAt;
    return elapsed >= MIN_SUBMISSION_TIME_MS;
}

// ─── Input Sanitization ────────────────────────────────────────────

const HTML_TAG_REGEX = /<[^>]*>/g;
const SCRIPT_REGEX = /javascript:|on\w+\s*=|<script/gi;

export function sanitizeInput(input: string, maxLength: number = 1000): string {
    if (typeof input !== 'string') return '';
    
    return input
        .replace(HTML_TAG_REGEX, '')        // Strip HTML tags
        .replace(SCRIPT_REGEX, '')          // Remove script injections
        .trim()
        .slice(0, maxLength);               // Enforce max length
}

// Field-specific max lengths
export const MAX_LENGTHS = {
    name: 100,
    email: 254,    // RFC 5321 max email length
    message: 5000,
    source: 50,
} as const;

// ─── Validation Helpers ────────────────────────────────────────────

export function containsSuspiciousPatterns(text: string): boolean {
    const suspiciousPatterns = [
        /\[url=/i,                  // BBCode links (spam signature)
        /https?:\/\/.*https?:\/\//i, // Multiple URLs
        /<a\s+href/i,               // HTML links
        /\{.*\|.*\}/,              // Template injection
        /{{.*}}/,                   // Template injection
    ];
    
    return suspiciousPatterns.some(pattern => pattern.test(text));
}

// ─── Security Response ─────────────────────────────────────────────
// Generic error message — never reveals why the submission was rejected.

export function createSecurityResponse(reason: string) {
    // Log the real reason server-side for monitoring
    console.warn(`[SECURITY] Form submission blocked: ${reason}`);
    
    // Return a generic response to avoid giving bots information
    return NextResponse.json(
        { error: 'Unable to process your request. Please try again later.' },
        { status: 400 }
    );
}

// ─── Combined Validation ───────────────────────────────────────────

export interface SecurityCheckResult {
    passed: boolean;
    reason?: string;
}

export function runSecurityChecks(body: Record<string, unknown>): SecurityCheckResult {
    if (!validateHoneypot(body)) {
        return { passed: false, reason: 'honeypot_triggered' };
    }
    
    if (!validateTimestamp(body)) {
        return { passed: false, reason: 'submission_too_fast' };
    }
    
    // Check message content for spam patterns (if message field exists)
    const message = body.message;
    if (typeof message === 'string' && containsSuspiciousPatterns(message)) {
        return { passed: false, reason: 'suspicious_content_pattern' };
    }
    
    return { passed: true };
}
