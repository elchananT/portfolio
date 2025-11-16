import React from 'react'
import Button from "@/components/Button";

const FooterCta = () => {
    return (
        <div className="w-screen h-[70vh] flex flex-col items-center justify-center gap-24 bg-gradient-to-b from-transparent to-[#1B1710]">
            <h2 className="text-5xl md:text-7xl font-cormorant font-extralight text-center px-4">Ready to Build Something Great?</h2>

            <Button className="px-8 py-4 text-2xl" href={"#contact"}>
                Get Started
            </Button>
        </div>
    )
}
export default FooterCta
