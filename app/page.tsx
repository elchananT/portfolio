import Hero from "@/components/Hero";
import IEm from "@/components/IEm";
import About from "@/components/About";
import Contact from "@/components/Contact";
import FooterCta from "@/components/FooterCTA";
import Footer from "@/components/Footer";
import type {Metadata} from "next";
import WhatIBuild from "@/components/WhatIBuild";
import {VideoCarousel} from "@/components/VideoCarousel";
import React from "react";

export const metadata: Metadata = {
    title: "Elchanan | Portfolio",
    description: "My portfolio to showcase my abilities to design and develop a great looking & feeling websites",
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
          <WhatIBuild/>
          <VideoCarousel/>
      <Contact/>
      <FooterCta/>
      <Footer/>
    </div>
  );
}
