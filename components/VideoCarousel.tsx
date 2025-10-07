'use client'

import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import {useInView} from "react-intersection-observer";
import Image from "next/image";

type Video = {
    id: number;
    src: string;
    imagePlaceholder: string;
}

const videos: Video[] = [
    { id: 1, src: '/videos/gym.webm', imagePlaceholder: "/placeholder-gym.png" },
    { id: 2, src: '/videos/nutrition.webm', imagePlaceholder: '/placeholder-nutrition.png'},
    { id: 3, src: '/videos/personal coach.webm', imagePlaceholder: '/placeholder-personal coach.png' },
];

export function VideoCarousel() {
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [isVideoReady, setIsVideoReady] = useState<Record<number, boolean>>({});

    const { ref, inView} = useInView({ threshold: 0.2 })

    // Sample video URLs (using placeholder videos)

    const handlePrev = (): void => {
        setCurrentIndex((prev) => (prev === 0 ? videos.length - 1 : prev - 1));
    };

    const handleNext = (): void => {
        setCurrentIndex((prev) => (prev === videos.length - 1 ? 0 : prev + 1));
    };

    return (
        <div className="flex items-center justify-center min-h-screen p-4">
            <div className="w-full flex flex-col items-center">
                <div className="flex justify-center items-center md:mb-20">
                    <h2 className="text-4xl md:text-7xl text-center font-cormorant font-extralight">Watch some of my work</h2>
                </div>

                <div className="relative w-screen h-[70vh] overflow-hidden flex justify-center items-center">
                    {/* Video Container */}
                        <div className="aspect-video w-4/6 bg-black rounded-xl">
                            {isVideoReady ? (
                                <video
                                    key={videos[currentIndex].id}
                                    ref={ref}
                                    className="h-full"
                                    src={inView ? videos[currentIndex].src : undefined}
                                    autoPlay
                                    loop
                                    onLoadedData={() => setIsVideoReady(prev => ({ ...prev, [videos[currentIndex].id]: true }))}
                                >
                                    Your browser does not support the video tag.
                                </video>
                            ) : (
                                <Image
                                    src={videos[currentIndex].imagePlaceholder}
                                    alt={videos[currentIndex].imagePlaceholder}
                                    fill
                                    objectFit="contain"
                                    className="rounded-xl"
                                />
                            )}
                    </div>

                    {/* Navigation Buttons */}
                    <button
                        onClick={handlePrev}
                        className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-70 hover:bg-opacity-90 text-white p-2 md:p-3 rounded-full transition-all shadow-lg z-10"
                        aria-label="Previous video"
                    >
                        <ChevronLeft size={20} className="md:w-6 md:h-6"/>
                    </button>

                    <button
                        onClick={handleNext}
                        className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-70 hover:bg-opacity-90 text-white p-2 md:p-3 rounded-full transition-all shadow-lg z-10"
                        aria-label="Next video"
                    >
                        <ChevronRight size={20} className="md:w-6 md:h-6"/>
                    </button>
                </div>

                {/* Dots Indicator */}
                <div className="flex justify-center gap-2 mt-2">
                    {videos.map((_, index: number) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`w-3 h-3 rounded-full transition-all ${
                                index === currentIndex
                                    ? 'bg-blue-500 w-8'
                                    : 'bg-gray-500 hover:bg-gray-400'
                            }`}
                            aria-label={`Go to video ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}