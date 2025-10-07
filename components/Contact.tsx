"use client"

import React, {useRef} from "react"
import {motion, useScroll, useTransform} from "framer-motion";
import SocialLinks from "./SocialLinks";
import ContactForm from "@/components/ContactForm";
import {useMediaQuery} from "@/hooks/useMediaQuery";

export default function Contact() {
    const ref = useRef<HTMLDivElement>(null);
    const isMobile = useMediaQuery('(max-width: 768px)');

    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    })

    const opacity = useTransform(scrollYProgress, [0.4, 0.41], [0, 1])
    const scale = useTransform(scrollYProgress, [0.3, 0.4], [0.5, 1])
    const fontSize = useTransform(scrollYProgress, [0, 0.4], [isMobile ? '140px' : '300px', '110px'])
    const borderRadius = useTransform(scrollYProgress, [0.3, 0.4], [isMobile ? '50px' : '90px', '0px'])
    const y = useTransform(scrollYProgress, [0, 0.4], [400, 0])



  return (
    <motion.div
        id="contact"
        ref={ref}
        style={{ scale , borderRadius, y }}
        className="min-h-screen bg-[#0a1628] flex items-center justify-center p-6 md:p-12"
    >
      <div className="w-full max-w-6xl grid md:grid-cols-2 gap-12 md:gap-20">
        {/* Left Side - Contact Heading and Social Links */}
        <div className={`flex flex-col max-md:items-center space-y-16`}>
          <motion.h1 style={{ fontSize }} className="text-7xl lg:text-8xl font-extralight font-cormorant text-white">Contact</motion.h1>

          <motion.div style={{ opacity }}>
            <SocialLinks/>
          </motion.div>
        </div>

        {/* Right Side - Form */}
        <motion.div style={{ opacity }} className="flex flex-col justify-center">
            <ContactForm />
        </motion.div>
      </div>
    </motion.div>
  )
}
