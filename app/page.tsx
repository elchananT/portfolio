import Hero from "@/components/Hero";
import IEm from "@/components/IEm";
import About from "@/components/About";
import WhatIBuild from "@/components/WhatIBuild";

export default function Home() {
  return (
      <div className="overflow-x-hidden">
        <Hero />
        <IEm/>
        <About/>
        <WhatIBuild/>
    </div>
  );
}
