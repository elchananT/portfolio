import React from 'react'
import {MarqueeContent, MarqueeFade, MarqueeItem} from "./ui/shadcn-io/marquee";

const IEm = () => {
    return <div className="relative bg-[#F4F3EE] h-[60vh] overflow-x-hidden">

        <div className="flex flex-col items-center justify-center h-full gap-14">

            <MarqueeFade side="left"/>
            <MarqueeFade side="right"/>
            <MarqueeContent direction={'left'}>
                {["I'm", "Elchanan", "Workout", "Friends", "Movies"].map((title: string, index: number) => (
                    <MarqueeItem key={index}>
                        <p className="text-[#001219] font-extralight text-5xl w-full text-center">
                            {title} {title !== "I'm" && "|"}
                        </p>
                    </MarqueeItem>
                ))}
            </MarqueeContent>

            <MarqueeContent direction={'right'}>
                {["Code", "Design", "Developer", "Sites", "UI", "UX"].map((title: string, index: number) => (
                    <MarqueeItem key={index}>
                        <p className="text-[#001219] font-extralight text-5xl w-full text-center">
                            {title} |
                        </p>
                    </MarqueeItem>
                ))}
            </MarqueeContent>
        </div>
    </div>;
};

export default IEm;