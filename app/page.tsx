import Hero from "@/components/Hero";
import IEm from "@/components/IEm";
import About from "@/components/About";
import Image from "next/image";

export default function Home() {
  return (
      <div className="overflow-x-hidden">
        <Hero />
        <IEm/>
        <About/>
    </div>
  );
}
