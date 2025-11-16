import React from 'react'
import Card from "./Card";

type CardType = {
    title: string;
    description: string;
    image: string;
}

const cards: CardType[] = [
    {
        title: "Strategy & Planning",
        description: "We start with discovery to understand your goals, audience, and competitive landscape",
        image: "/design-img.webp"
    },
    {
        title: "Design & Prototype",
        description: "Crafting pixel-perfect designs that align with your brand and convert visitors",
        image: "/development-img.webp",
    },
    {
        title: "Development & Launch",
        description: "Building fast, secure, and scalable solutions that exceed expectations",
        image: "/website-img.webp",
    },
];

const WhatIBuild = () => {
    return (
        <div id="projects" className="pt-10 md:pt-20">
            <div className="relative flex justify-center">
                <h2 className="absolute text-4xl md:text-9xl font-extralight font-cormorant">Get to see</h2>
                <h3 className="absolute text-4xl md:text-7xl text-gray-700 font-extralight font-cormorant mt-32">Our process</h3>
                <div className="relative flex flex-col justify-center items-center mb-[500px]">
                    {cards.map(({title, description, image}: CardType, index: number) => (
                        <Card
                            key={index}
                            index={index}
                            image={image}
                            title={title}
                            description={description}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}
export default WhatIBuild
