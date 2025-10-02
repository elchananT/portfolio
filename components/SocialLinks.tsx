import React from 'react'
import Link from "next/link";
import {Github, Instagram, Linkedin} from "lucide-react";

const SocialLinks = () => {
    return (
        <div className="flex items-center gap-4">
            <Link
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-100 hover:text-blue-300 transition-colors group"
            >
                <Linkedin className="w-6 md:w-12 h-6 md:h-12" />
            </Link>

            <Link
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-100 hover:text-pink-300 transition-colors group"
            >
                <Instagram className="w-6 md:w-12 h-6 md:h-12" />
            </Link>

            <Link
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-100 hover:text-gray-600 transition-colors group"
            >
                <Github className="w-6 md:w-12 h-6 md:h-12" />
            </Link>
        </div>
    )
}
export default SocialLinks
