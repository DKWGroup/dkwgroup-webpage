"use client";

import { m, LazyMotion, domAnimation } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedSectionProps {
    children: ReactNode;
    className?: string;
    animation?: "fade-up" | "fade-down" | "fade-left" | "fade-right" | "scale" | "reveal";
    delay?: number;
    duration?: number;
    once?: boolean;
}

export default function AnimatedSection({
    children,
    className = "",
    animation = "fade-up",
    delay = 0,
    duration = 0.6,
    once = false
}: AnimatedSectionProps) {

    // Define animation variants based on the requested animation type
    const variants = {
        "fade-up": {
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0, transition: { duration, delay, ease: "easeOut" as const } }
        },
        "fade-down": {
            hidden: { opacity: 0, y: -50 },
            visible: { opacity: 1, y: 0, transition: { duration, delay, ease: "easeOut" as const } }
        },
        "fade-left": {
            hidden: { opacity: 0, x: 50 },
            visible: { opacity: 1, x: 0, transition: { duration, delay, ease: "easeOut" as const } }
        },
        "fade-right": {
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0, transition: { duration, delay, ease: "easeOut" as const } }
        },
        "scale": {
            hidden: { opacity: 0, scale: 0.9 },
            visible: { opacity: 1, scale: 1, transition: { duration, delay, ease: [0.25, 1, 0.5, 1] as const } }
        },
        "reveal": {
            hidden: { opacity: 0, y: 100, scale: 0.95 },
            visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] as const } }
        }
    };

    return (
        <LazyMotion features={domAnimation} strict>
            <m.div
                className={className}
                initial="hidden"
                whileInView="visible"
                viewport={{ once, amount: 0.15 }}
                variants={variants[animation]}
            >
                {children}
            </m.div>
        </LazyMotion>
    );
}
