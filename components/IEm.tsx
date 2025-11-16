import React from 'react'
import {MarqueeContent, MarqueeFade, MarqueeItem} from "./ui/shadcn-io/marquee";

type Item = {
    title: string,
    color: string,
}

const capabilities: Item[] = [
    {
        title: "Strategy",
        color: '#3796b8'
    },
    {
        title: "Design",
        color: '#2aae6d'
    },
    {
        title: "Development",
        color: '#d57043'
    },
    {
        title: "Optimization",
        color: '#3796b8'
    }
]

const services: Item[] = [
    {
        title: "Web Apps",
        color: "#2aae6d"
    },
    {
        title: "E-Commerce",
        color: "#d57043"
    },
    {
        title: "Landing Pages",
        color: "#3796b8"
    },
    {
        title: "UI/UX",
        color: "#2aae6d"
    }
]

const IEm = () => {
    return <div className="relative bg-[#F4F3EE] h-[60vh] overflow-x-hidden">
        <div className="flex flex-col items-center justify-center h-full gap-14">
            <MarqueeFade side="left"/>
            <MarqueeFade side="right"/>

            <MarqueeContent direction={'left'}>
                {capabilities.map(({ title, color}: Item, index: number) => (
                    <MarqueeItem key={index}>
                        <p style={{ color }} className="font-extralight text-5xl w-full text-center">
                            {title} <span className="text-[#001219]">|</span>
                        </p>
                    </MarqueeItem>
                ))}
            </MarqueeContent>

            <MarqueeContent direction={'right'}>
                {services.map(({ title, color }: Item, index: number) => (
                    <MarqueeItem key={index}>
                        <p style={{ color }} className="font-extralight text-5xl w-full text-center">
                            {title} <span className="text-[#001219]">|</span>
                        </p>
                    </MarqueeItem>
                ))}
            </MarqueeContent>
        </div>
    </div>;
};

export default IEm;
