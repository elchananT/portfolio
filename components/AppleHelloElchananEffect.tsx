"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { ComponentProps } from "react";

const initialProps = {
    pathLength: 0,
    opacity: 0,
} as const;

const animateProps = {
    pathLength: 1,
    opacity: 1,
} as const;

type Props = ComponentProps<typeof motion.svg> & {
    speed?: number;
    onAnimationComplete?: () => void;
};

export default function AppleHelloElchananEffect({
                                                     className,
                                                     speed = 1,
                                                     onAnimationComplete,
                                                     ...props
                                                 }: Props) {
    const calc = (x: number) => x * speed;

    return (
        <motion.svg
            className={cn("h-20", className)}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 850 200"
            fill="none"
            stroke="currentColor"
            strokeWidth="14.5"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            {...props}
        >
            <title>elchanan</title>

            {/* e */}
            <motion.path
                d="M30 120 C30 60, 90 40, 140 56 C190 72, 180 120, 140 140 C110 156, 60 156, 40 136"
                style={{ strokeLinecap: "round" }}
                initial={initialProps}
                animate={animateProps}
                transition={{
                    duration: calc(0.7),
                    ease: "easeInOut",
                    opacity: { duration: 0.35 },
                }}
            />

            {/* l */}
            <motion.path
                d="M170 40 C170 40, 170 140, 170 170"
                style={{ strokeLinecap: "round" }}
                initial={initialProps}
                animate={animateProps}
                transition={{
                    duration: calc(0.4),
                    ease: "easeOut",
                    delay: calc(0.5),
                    opacity: { duration: 0.2, delay: calc(0.5) },
                }}
            />

            {/* c */}
            <motion.path
                d="M210 110 C230 70, 270 66, 310 88"
                style={{ strokeLinecap: "round" }}
                initial={initialProps}
                animate={animateProps}
                transition={{
                    duration: calc(0.6),
                    ease: "easeInOut",
                    delay: calc(0.9),
                    opacity: { duration: 0.3, delay: calc(0.9) },
                }}
            />

            {/* h */}
            <motion.path
                d="M320 88 C340 36, 380 32, 400 80 C418 120, 418 160, 418 176"
                style={{ strokeLinecap: "round" }}
                initial={initialProps}
                animate={animateProps}
                transition={{
                    duration: calc(0.9),
                    ease: "easeOut",
                    delay: calc(1.5),
                    opacity: { duration: 0.45, delay: calc(1.5) },
                }}
            />

            {/* a */}
            <motion.path
                d="M450 140 C430 100, 440 80, 470 78 C500 76, 520 96, 520 120 C520 140, 500 156, 480 150 C460 144, 452 128, 460 114"
                style={{ strokeLinecap: "round" }}
                initial={initialProps}
                animate={animateProps}
                transition={{
                    duration: calc(0.8),
                    ease: "easeOut",
                    delay: calc(2.4),
                    opacity: { duration: 0.4, delay: calc(2.4) },
                }}
            />

            {/* n1 */}
            <motion.path
                d="M540 120 C540 72, 560 52, 588 76 C608 92, 612 132, 612 168"
                style={{ strokeLinecap: "round" }}
                initial={initialProps}
                animate={animateProps}
                transition={{
                    duration: calc(0.7),
                    ease: "easeOut",
                    delay: calc(3.2),
                    opacity: { duration: 0.35, delay: calc(3.2) },
                }}
            />

            {/* a2 */}
            <motion.path
                d="M650 140 C630 100, 640 82, 669 80 C700 78, 720 98, 720 122 C720 140, 702 154, 682 148 C662 142, 656 128, 664 114"
                style={{ strokeLinecap: "round" }}
                initial={initialProps}
                animate={animateProps}
                transition={{
                    duration: calc(0.8),
                    ease: "easeOut",
                    delay: calc(3.9),
                    opacity: { duration: 0.4, delay: calc(3.9) },
                }}
            />

            {/* n2 */}
            <motion.path
                d="M760 120 C760 80, 780 60, 808 84 C828 100, 832 138, 832 176 C832 188, 820 196, 802 192"
                style={{ strokeLinecap: "round" }}
                initial={initialProps}
                animate={animateProps}
                transition={{
                    duration: calc(1.0),
                    ease: "easeInOut",
                    delay: calc(4.6),
                    opacity: { duration: 0.5, delay: calc(4.6) },
                }}
                onAnimationComplete={onAnimationComplete}
            />
        </motion.svg>
    );
}
