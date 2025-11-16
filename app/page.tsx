import Hero from "@/components/Hero";
import IEm from "@/components/IEm";
import About from "@/components/About";
import Services from "@/components/Services"; // ADD THIS NEW IMPORT
import Contact from "@/components/Contact";
import FooterCta from "@/components/FooterCTA";
import Footer from "@/components/Footer";
import type {Metadata} from "next";
import WhatIBuild from "@/components/WhatIBuild";
import {VideoCarousel} from "@/components/VideoCarousel";
import React from "react";

export const metadata: Metadata = {
    title: "Elchanan Studio | Web Design & Development",
    description: "Strategic web design and development for businesses ready to make an impact online",
    icons: {
        icon: "/favicon-new.svg",
    },
};

export default function Home() {
    return (
        <div className="overflow-x-hidden">
            <Hero />
            <IEm/>
            <About/>
            <Services/> {/* ADD THIS NEW COMPONENT */}
            <WhatIBuild/>
            <VideoCarousel/>
            <Contact/>
            <FooterCta/>
            <Footer/>
        </div>
    );
}