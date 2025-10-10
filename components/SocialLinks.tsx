import React from 'react'
import Link from "next/link";
import {Facebook, Instagram, Linkedin} from "lucide-react";

const SocialLinks = () => {
    return (
        <div className="flex items-center gap-4">
            <Link
                href="https://www.linkedin.com/in/elchanan-treistman-b39936389/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-100 hover:text-blue-300 transition-colors group"
            >
                <Linkedin className="w-6 md:w-12 h-6 md:h-12" />
            </Link>

            <Link
                href="https://www.instagram.com/elchanan_tre/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-100 hover:text-pink-300 transition-colors group"
            >
                <Instagram className="w-6 md:w-12 h-6 md:h-12" />
            </Link>

            <Link
                href="https://www.facebook.com/profile.php?id=61582153855653"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-100 hover:text-blue-400 transition-colors group"
            >
                <Facebook className="w-6 md:w-12 h-6 md:h-12" />
            </Link>
        </div>
    )
}
export default SocialLinks
