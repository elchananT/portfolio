import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type ButtonProps = {
    children: ReactNode;
    onClick?: () => void;
    className?: string;
    variant?: "primary" | "secondary";
};

const Button = ({ children, onClick, className = "", variant = "primary" }: ButtonProps) => {
    const style = twMerge(
        "px-4 py-2 rounded-lg font-mono hover:scale-110 transition-all duration-200",

        variant === "primary" && "bg-[#CCE3DE] text-[#101010] px-6 py-3 text-lg",
        variant === "secondary" && "bg-[#CFE1B9] text-[#101010]",

        className
    );

    return (
        <button
            onClick={onClick}
            className={style}
        >
            {children}
        </button>
    );
};

export default Button;
