'use client'

import React from "react"
import ContactForm from "@/components/ContactForm";
import { motion } from "framer-motion";
import SocialLinks from "@/components/SocialLinks";
import {Variants} from "motion";

export default function Contact() {
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeInOut",
            }
        }
    };

    return (
        <div
            id="contact"
            className="mt-16 md:mt-8 max-w-screen bg-gradient-to-b from-[#030116] via-[#0a1628] to-[#0a1628] flex items-center justify-center p-6 md:p-12 relative overflow-hidden"
        >
            {/* Subtle background effects */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
            </div>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className="w-full max-w-6xl grid md:grid-cols-2 gap-12 md:gap-20 relative z-10"
            >
                {/* Left Side - Heading & Social */}
                <motion.div
                    variants={itemVariants}
                    className="flex flex-col max-md:items-center justify-center space-y-12"
                >
                    {/* Main Heading */}
                    <div>
                        <h1 className="text-7xl lg:text-8xl xl:text-9xl font-extralight font-cormorant text-white mb-6 max-md:text-center">
                            Let&#39;s Talk
                        </h1>

                        <p className="text-xl md:text-2xl text-gray-300 font-light max-w-lg max-md:text-center leading-relaxed">
                            Ready to bring your vision to life? Share your project details and we&#39;ll get back to you within 24 hours.
                        </p>
                    </div>

                    {/* Social Links */}
                    <div className="space-y-4">
                        <h3 className="text-gray-400 text-sm font-light tracking-wider uppercase max-md:text-center">
                            Connect With Us
                        </h3>
                        <SocialLinks />
                    </div>

                    {/* Decorative element - optional tagline */}
                    <div className="max-md:hidden">
                        <p className="text-5xl font-light text-white/30 font-cormorant">
                            Your success is our mission
                        </p>
                    </div>
                </motion.div>

                {/* Right Side - Form Card */}
                <motion.div
                    variants={itemVariants}
                    className="flex flex-col justify-center"
                >
                    <div className="bg-[#09051C] border border-gray-100/20 rounded-3xl p-8 md:p-12 backdrop-blur-sm hover:border-gray-100/30 transition-colors duration-500">
                        <h2 className="text-3xl md:text-4xl font-light text-white mb-2 font-cormorant">
                            Start Your Project
                        </h2>
                        <p className="text-gray-400 font-light mb-8 text-sm">
                            * All fields are required
                        </p>
                        <ContactForm />
                    </div>
                </motion.div>
            </motion.div>
        </div>
    )
}