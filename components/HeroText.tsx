'use client'

import React, {useState} from 'react'
import {AppleHelloEnglishEffect} from "@/components/ui/shadcn-io/apple-hello-effect";
import TextPressure from "@/components/ui/shadcn-io/text-pressure";
import TypingText from "@/components/ui/shadcn-io/typing-text";
import Button from "@/components/Button";
import { motion } from "motion/react";

const HeroText = () => {
    const [step, setStep] = useState<number>(0)

    return (
        <div className="flex flex-col items-center">
            <AppleHelloEnglishEffect
                speed={1.1}
                className="text-white mt-40"
                onAnimationComplete={() => setStep(step + 1)}
            />
            {step > 0 && (
                <motion.div
                    className="relative grid grid-cols-2 gap-6 items-center mt-6 mb-12"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
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
                        text={["Your Web Designer", "And Developer"]}
                        typingSpeed={75}
                        pauseDuration={1500}
                        showCursor={true}
                        cursorCharacter="|"
                        className="text-4xl font-bold"
                        textColors={['#3b82f6', '#8b5cf6']}
                        variableSpeed={{ min: 50, max: 120 }}
                    />
                </motion.div>
                )}

            {step > 0 && (
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    <Button>
                        Book a meeting
                    </Button>
                </motion.div>
            )}
        </div>
    )
}
export default HeroText
