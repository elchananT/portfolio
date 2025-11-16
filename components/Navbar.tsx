'use client'

import React from 'react'
import Link from 'next/link'
import { motion} from 'framer-motion'
import Image from "next/image";

const Navbar = () => {
    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-[#001219] `}
        >
            <div className="max-w-7xl mx-auto px-6 md:px-12 py-2 md:py-2">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="group cursor-pointer">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            className="flex items-center gap-3 cursor-pointer"
                        >
                            <Image src="/navbar-logo.png" alt="logo" width={200} height={50} />
                        </motion.div>
                    </Link>

                    {/* Navigation Links */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="flex items-center gap-6 md:gap-10"
                    >
                        <Link
                            href="/"
                            className="cursor-pointer text-gray-300 hover:text-white text-sm md:text-base font-light tracking-wide transition-colors duration-300 relative group"
                        >
                            Home
                            <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#CCE3DE] group-hover:w-full transition-all duration-300" />
                        </Link>

                        <Link
                            href="/contact"
                            className="cursor-pointer text-gray-300 hover:text-white text-sm md:text-base font-light tracking-wide transition-colors duration-300 relative group"
                        >
                            Contact
                            <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#CCE3DE] group-hover:w-full transition-all duration-300" />
                        </Link>

                        {/* Optional CTA Button */}
                        <Link
                            href="/contact"
                            className="cursor-pointer hidden md:block px-5 py-2 rounded-lg border border-gray-100/20 text-gray-100 hover:bg-[#CCE3DE] hover:text-[#001219] hover:border-transparent text-sm font-light tracking-wide transition-all duration-300"
                        >
                            Get Started
                        </Link>
                    </motion.div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar