import React from 'react'
import {Copyright} from "lucide-react";
import SocialLinks from "./SocialLinks";

const Footer = () => {
    return (
        <footer className="bg-[#1B1710] p-10">
            <div className="flex items-center justify-around flex-col-reverse gap-4 md:flex-row ">
                <SocialLinks/>
                <div className="flex items-center justify-center gap-8">
                    <a
                        href={"#about"}
                        className="text-gray-100 text-2xl font-extralight leading-none hover:text-[#B9960B] transition duration-300 ease-in-out"
                    >
                        About
                    </a>
                    <a
                        href={"#projects"}
                        className="text-gray-100 text-2xl font-extralight leading-none hover:text-[#B9960B] transition duration-300 ease-in-out"
                    >
                        Projects
                    </a>
                    <a
                        href={"#contact"}
                        className="text-gray-100 text-2xl font-extralight leading-none hover:text-[#B9960B] transition duration-300 ease-in-out"
                    >
                        Contact
                    </a>
                </div>
            </div>

            <div className="bg-gray-100 w-full h-px my-6 hover:bg-[#B9960B] transition duration-300 ease-in-out"/>

            <span className="flex items-center justify-center text-gray-400 gap-2 text-xl mt-5">
                <Copyright/>
                <span>Elchanan Treistman. All rights reserved.</span>
            </span>
        </footer>
    )
}
export default Footer
