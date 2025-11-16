import React from "react"
import SocialLinks from "./SocialLinks";
import ContactForm from "@/components/ContactForm";

export default function Contact() {
    return (
        <div
            id="contact"
            className="min-h-screen bg-[#0a1628] flex items-center justify-center p-6 md:p-12"
        >
            <div className="w-full max-w-6xl grid md:grid-cols-2 gap-12 md:gap-20">
                <div className={`flex flex-col max-md:items-center space-y-16`}>
                    <div>
                        <h1 className="text-7xl lg:text-8xl font-extralight font-cormorant text-white mb-6">Let's Talk</h1>
                        <p className="text-xl text-gray-300 font-light">Ready to bring your vision to life? We're here to help.</p>
                    </div>

                    <div>
                        <SocialLinks/>
                    </div>
                </div>

                <div className="flex flex-col justify-center">
                    <ContactForm />
                </div>
            </div>
        </div>
    )
}