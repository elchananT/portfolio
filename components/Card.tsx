'use client'

import React, {useRef} from 'react'
import {motion, useScroll, useTransform} from "framer-motion";
import {useMediaQuery} from "@/hooks/useMediaQuery";

type CardProps = {
    index: number;
    image: string;
    title: string;
    description: string;
}

const Card = ({ index, image, title, description }: CardProps) => {
    // Calculate dynamic scroll ranges based on card index
    const getYStart: number = (index * 800) + 1500
    const getYEnd: number = (index * 800) + 2500

    // Staggered initial widths for depth effect
    const initialWidth: number = 45 + (index * 8)
    const isMobile: boolean = useMediaQuery('(max-width: 600px)')

    const ref = useRef<HTMLDivElement>(null);

    const {scrollYProgress, scrollY} = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    })

    // Smoother height transitions
    const height = useTransform(
        scrollYProgress,
        [0.15, 0.45, 0.85],
        [isMobile ? '12vh' : '18vh', '70vh', '65vh']
    )

    // Better width progression with hold at peak
    const width = useTransform(
        scrollYProgress,
        [0.15, 0.45, 0.7, 1],
        [isMobile ? '45vw' : `${initialWidth}vw`, '92vw', '92vw', '88vw']
    )

    // Smoother border radius transition
    const borderRadius = useTransform(
        scrollYProgress,
        [0, 0.4, 0.8],
        ['50px', isMobile ? '60px' : '80px', isMobile ? '50px' : '70px']
    )

    // Gradual opacity fade in
    const opacity = useTransform(
        scrollYProgress,
        [0.3, 0.45],
        [0, 1]
    )

    // Parallax effect - cards move at different speeds
    const y = useTransform(
        scrollY,
        [getYStart, getYEnd],
        [0, 400 + (index * 50)]
    )

    // Scale effect for added depth
    const scale = useTransform(
        scrollYProgress,
        [0.15, 0.45, 0.85],
        [0.95, 1, 0.98]
    )

    // Subtle rotation for dynamism
    const rotateX = useTransform(
        scrollYProgress,
        [0.15, 0.45, 0.85],
        [2, 0, -1]
    )

    return (
        <motion.div
            ref={ref}
            style={{ y }}
            className="mb-24 md:mb-32"
        >
            <motion.div
                style={{
                    height,
                    width,
                    borderRadius,
                    scale,
                    rotateX,
                    backgroundImage: `url("${image}")`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
                className="relative flex flex-col justify-center md:justify-end p-6 md:p-12 shadow-2xl"
            >
                {/* Gradient overlay for better text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent rounded-[inherit]" />

                {/* Content */}
                <motion.div
                    style={{ opacity }}
                    className="relative z-10"
                >
                    <motion.h2
                        className="text-5xl md:text-7xl lg:text-8xl font-light leading-tight text-white mb-3 md:mb-4"
                        style={{
                            textShadow: '0 2px 10px rgba(0,0,0,0.5)'
                        }}
                    >
                        {title}
                    </motion.h2>

                    <motion.p
                        className="text-base md:text-xl lg:text-2xl max-w-2xl text-gray-100 font-light leading-relaxed"
                        style={{
                            textShadow: '0 1px 5px rgba(0,0,0,0.5)'
                        }}
                    >
                        {description}
                    </motion.p>
                </motion.div>
            </motion.div>
        </motion.div>
    )
}

export default Card