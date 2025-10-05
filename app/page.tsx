import Hero from "@/components/Hero";
import IEm from "@/components/IEm";
import About from "@/components/About";
import WhatIBuild from "@/components/WhatIBuild";
import Contact from "@/components/Contact";
import FooterCta from "@/components/FooterCTA";
import Footer from "@/components/Footer";
import {VideoCarousel} from "@/components/VideoCarousel";

export default function Home() {
  return (
      <div className="overflow-x-hidden">
        <Hero />
        <IEm/>
        <About/>
        <WhatIBuild/>
          <VideoCarousel videos={[]}/>
          <Contact/>
          <FooterCta/>
          <Footer/>
    </div>
  );
}
