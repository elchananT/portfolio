'use client'
import {AppleHelloEnglishEffect} from "./ui/shadcn-io/apple-hello-effect";
import {motion} from "motion/react";
import TextPressure from "./ui/shadcn-io/text-pressure";
import TypingText from "./ui/shadcn-io/typing-text";
import Button from "./Button";

const Hero = () => {
    return (
        <main className="flex flex-col justify-center items-center h-screen bg-[#001219]">
            <AppleHelloEnglishEffect
                speed={1.1}
                className="text-white"
            />
            <motion.div
                className="flex flex-col md:grid grid-cols-2 gap-6 items-center mt-6 mb-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 4 }}
            >
                <TextPressure
                    text="We Build"
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
                    text={["Digital Experiences", "That Convert", "Your Vision"]}
                    typingSpeed={75}
                    pauseDuration={1500}
                    showCursor={true}
                    cursorCharacter="|"
                    className="text-4xl font-bold"
                    textColors={['#3796b8', '#2aae6d', '#3b82f6']}
                    variableSpeed={{ min: 50, max: 120 }}
                />
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 5 }}
            >
                <Button href="#contact">
                    Start Your Project
                </Button>
            </motion.div>
        </main>
    )
}

export default Hero;
