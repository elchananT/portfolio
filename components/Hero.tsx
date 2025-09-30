'use client'

import {AppleHelloEnglishEffect} from "@/components/ui/shadcn-io/apple-hello-effect";
import {motion} from "motion/react";
import TextPressure from "@/components/ui/shadcn-io/text-pressure";
import TypingText from "@/components/ui/shadcn-io/typing-text";
import Button from "@/components/Button";

const Hero = () => {
    return (
        <main className="flex flex-col justify-center items-center h-screen bg-[#001219]">
                <AppleHelloEnglishEffect
                    speed={1.1}
                    className="text-white"
                />
                    <motion.div
                        className="grid grid-cols-2 gap-6 items-center mt-6 mb-10"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 4 }}
                    >
                        <TextPressure
                            text="I'm Elchanan"
                            flex={true}
                            alpha={false}
                            stroke={false}
                            width={false}
                            weight={true}
                            italic={false}
                            textColor="white"
                            minFontSize={56}
                            className="text-foreground"
                        />

                        <TypingText
                            text={["And Developer", "Your Web Designer"]}
                            typingSpeed={75}
                            pauseDuration={1500}
                            showCursor={true}
                            cursorCharacter="|"
                            className="text-4xl font-bold"
                            textColors={['#8b5cf6', '#3b82f6']}
                            variableSpeed={{ min: 50, max: 120 }}
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 5 }}
                    >
                        <Button>
                            Book a meeting
                        </Button>
                    </motion.div>
        </main>
    )
}

export default Hero;