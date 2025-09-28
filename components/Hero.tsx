import {AppleHelloEnglishEffect} from "@/components/ui/shadcn-io/apple-hello-effect";
import Button from "@/components/Button";
import TypingText from "@/components/ui/shadcn-io/typing-text";
import TextPressure from "@/components/ui/shadcn-io/text-pressure";

const Hero = () => {
    return (
        <main className="flex flex-col items-center h-screen bg-[#001219]">
            <AppleHelloEnglishEffect speed={1.1} className="text-white mt-40"/>
            <div className="grid grid-cols-2 gap-6 items-center mt-6 mb-12">
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
            </div>
            <Button>
                Book a meeting
            </Button>
        </main>
    )
}

export default Hero;