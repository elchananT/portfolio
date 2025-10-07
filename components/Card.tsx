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
    const getYStart: number =  (index * 1000) + 1800
    const getYEnd: number = (index * 1000) + 2700
    const initialWidth: number = 50 + index * 10
    const isMobile: boolean = useMediaQuery('(max-width: 600px)')

    const ref = useRef<HTMLDivElement>(null);

    const {scrollYProgress, scrollY} = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    })

    const height = useTransform(scrollYProgress, [0.2, 0.5], [isMobile ? '10vh' : '16vh', '75vh'])
    const width = useTransform(scrollYProgress, [0.2, 0.5, 1], [isMobile ? '40vw' : `${initialWidth}vw`, '95vw', '90vw'])
    const borderRadius = useTransform(scrollYProgress, [0, 0.5], ['60px', isMobile ? '70px' : '90px'])
    const opacity = useTransform(scrollYProgress, [0.4, 0.41], [0, 1])
    const y = useTransform(scrollY, [getYStart, getYEnd], [0, 600])

    return (
        <motion.div
            ref={ref}
            style={{ y }}
            className="mb-30"
        >
            <motion.div
                style={{
                    height: height ?? '16vh',
                    width,
                    borderRadius,
                    backgroundImage: 'url("' + image + '")',
                    backgroundSize: 'cover',
            }}
                className="relative flex flex-col p-10"
            >
                <motion.h2
                    style={{ opacity }}
                    className="text-6xl md:text-8xl font-cormorant leading-14 md:leading-tight text-gray-50"
                >
                    {title}
                </motion.h2>

                <motion.p
                    style={{ opacity }}
                    className="text-xl text-wrap w-[300px] mt-6 md:mt-2 text-gray-100 font-chicle font-bold"
                >
                    {description}
                </motion.p>
            </motion.div>
        </motion.div>
    )
}
export default Card

