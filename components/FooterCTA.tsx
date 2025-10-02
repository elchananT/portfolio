import React from 'react'
import Button from "@/components/Button";

const FooterCta = () => {
    return (
        <div className="w-screen h-[70vh] flex flex-col items-center justify-center gap-24">
            <h2 className="text-7xl font-cormorant font-extralight">Are you ready?</h2>

            <Button className="px-8 py-4 text-2xl text-[#0a1628]" href={"booking"}>
                Book a Meeting
            </Button>
        </div>
    )
}
export default FooterCta
