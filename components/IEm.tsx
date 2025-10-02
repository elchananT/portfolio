import React from 'react'
import {MarqueeContent, MarqueeFade, MarqueeItem} from "./ui/shadcn-io/marquee";

type Item = {
    title: string,
    color: string,
}

const itemsAbout: Item[] = [
    {
        title: "I'm",
        color: '#3796b8'
    },
    {
        title: "Elchanan",
        color: '#3796b8'
    },
    {
        title: "Workout",
        color: '#001219'
    },
     {
        title: "Friends",
        color: '#001219'
    },
     {
        title: "Movies",
        color: '#001219'
    }
]

const developAbout: Item[] = [
    {
        title: "Code",
        color: "#001219"
    },
    {
        title: "Design",
        color: "#2aae6d"
    },
    {
        title: "Sites",
        color: "#001219"
    },
    {
        title: "UI",
        color: "#001219"
    },
    {
        title: "Developer",
        color: "#d57043"
    },
    {
        title: "UX",
        color: "#001219"
    }
]
const IEm = () => {
    return <div className="relative bg-[#F4F3EE] h-[60vh] overflow-x-hidden">

        <div className="flex flex-col items-center justify-center h-full gap-14">

            <MarqueeFade side="left"/>
            <MarqueeFade side="right"/>
            <MarqueeContent direction={'left'}>
                {itemsAbout.map(({ title, color}: Item, index: number) => (
                    <MarqueeItem key={index}>
                        <p style={{ color }} className="font-extralight text-5xl w-full text-center">
                            {title} {title !== "I'm" && <span className="text-[#001219]">|</span>}
                        </p>
                    </MarqueeItem>
                ))}
            </MarqueeContent>

            <MarqueeContent direction={'right'}>
                {developAbout.map(({ title, color }: Item, index: number) => (
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