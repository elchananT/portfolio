import Hero from "@/components/Hero";
import IEm from "@/components/IEm";
import About from "@/components/About";
import WhatIBuild from "@/components/WhatIBuild";
import Contact from "@/components/Contact";
import FooterCta from "@/components/FooterCTA";
import Footer from "@/components/Footer";
import {VideoCarousel} from "@/components/VideoCarousel";
import type {Metadata} from "next";

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
      <VideoCarousel videos={['/videos/nutrition.webm', '/videos/gym.webm', '/videos/personal coach.webm']}/>
      <Contact/>
      <FooterCta/>
      <Footer/>
    </div>
  );
}
