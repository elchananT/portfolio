import React from 'react'
import Card from "@/components/Card";

type Card = {
    title: string;
    description: string;
    image: string;
}

const cards: Card[] = [
    {
        title: "Designing",
        description: "I love to design new stuff in many creative ways",
        image: "/design-img.png"
    },
    {
        title: "Code & Programing",
        description: "Love this and sometimes giving hours to fix a bug",
        image: "/development-img.png",
    },
    {
        title: "Sites",
        description: "This is one of my spacial and the favorite to build and design",
        image: "/website-img.png",
    },
];

const WhatIBuild = () => {
    return (
        <div className="pt-10 md:pt-20">
            <div className="relative flex justify-center">
                <h2 className="absolute left-5 top-4 md:left-10 md:top-0 z-0 text-4xl md:text-8xl font-extralight">What I</h2>
                <h2 className="absolute right-10 top-4 md:right-20 md:top-0 z-0 text-4xl md:text-8xl font-extralight">Build</h2>
                <div className="relative flex flex-col justify-center items-center mb-[500px]">
                    {cards.map(({title, description, image}: Card, index: number) => (
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
