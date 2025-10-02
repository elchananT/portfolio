import React from 'react'
import Image from "next/image";
import {Quote} from "lucide-react";

const About = () => {
    return (
        <div id="about" className="relative bg-[#030116] w-screen h-full flex flex-col items-center pt-20 px-8 xl:px-40 overflow-x-hidden">
                <p className="absolute text-white left-16 top-76 md:left-90 md:top-12 xl:left-130 font-mono font-bold text-7xl -rotate-30">&</p>
                <div className="grid grid-cols-2 md:grid-cols-3  grid-rows-3 md:grid-rows-2 gap-6 w-full">
                    <div className="flex md:flex-col bg-[#09051C] col-span-2 row-span-1 md:col-span-1 md:row-span-2 border border-gray-100/20 rounded-md max-md:rounded-t-3xl md:rounded-l-3xl  px-10 pt-10">
                        <div>
                            <h2 className="text-gray-50 text-xl md:text-2xl font-light mb-6">Web Developer</h2>
                            <p className="text-gray-400 md:text-xl font-light w-full">
                                For me coding isn&#39;t just technical - it&#39;s
                                a way to invent, solve problems,
                                and bring ideas to life.
                            </p>
                        </div>

                        <div className="md:pt-16">
                            <div className="w-full">
                                <Image
                                    src="/frond-stack.png"
                                    alt="frond logo"
                                    width={900}
                                    height={900}
                                    className="md:scale-130 max-md:transform max-md:translate-x-10"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="bg-[#09051C] md:col-span-2 row-span-2 md:row-span-1 border border-gray-100/20 rounded-md max-md:rounded-l-3xl md:rounded-tr-3xl p-6">
                        <h2 className="text-gray-50 text-2xl font-light mb-6">And Web Designer</h2>
                        <p className="text-gray-400 text-xl font-light md:w-1/2">
                            Design is how I shape ideas into experiences that feel natural and inspiring.
                        </p>

                        <div className="relative">
                            <div className="absolute top-40 right-30 md:-right-10 md:-top-18 z-30 bg-[#001E36] w-[120px] h-[120px] rounded-xl flex justify-center items-center">
                                <h1 className="text-[#31A8FE] font-bold text-6xl">Ps</h1>
                            </div>

                            <div className="absolute top-20 right-6 md:-top-4">
                                <Image
                                    src="/figma-logo.png"
                                    alt="Figma"
                                    width={120}
                                    height={120}
                                    className="rounded-xl"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center items-center bg-[#09051C] col-span-1 row-span-1 border rounded-md border-gray-100/20">
                        <Image
                            src="/hero.png"
                            alt="hero"
                            height={220}
                            width={220}
                            className="object-contain rounded-xl object-center"
                        />
                    </div>

                    <div className=" flex flex-col  justify-center bg-[#09051C] col-span-1 row-span-1 border rounded-md border-gray-100/20 rounded-br-3xl h-[250px] px-8">
                        <Quote size={50} strokeWidth={0.5} className="text-white rotate-180 transform -translate-x-12 translate-y-2" />

                        <p className="text-gray-200 text-lg font-light px-4">
                            Design is not just what it looks like.
                            Design is how it work.
                        </p>

                        <p className="text-gray-500 font-light mt-12 ">Steve Jobs</p>
                    </div>

                </div>
                <h2 className="mt-20 mb-12 text-gray-50 text-9xl font-cormorant w-screen text-center">Get to Know</h2>
        </div>
    )
}
export default About
