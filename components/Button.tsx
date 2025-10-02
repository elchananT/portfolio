import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import Link from "next/link";

type ButtonProps = {
    children: ReactNode;
    onClick?: () => void;
    className?: string;
    href: string;
};

const Button = ({ children, onClick, className = "", href }: ButtonProps) => {
    const style = twMerge(
        "px-4 py-2 rounded-lg font-mono hover:scale-110 bg-transparent border border-[#CCE3DE] text-[#CCE3DE] hover:text-[#0a1628] hover:bg-[#CCE3DE] text-lg font-medium flex items-center gap-2 transition duration-300",

        className
    );

    return (
        <Link
            href={`/${href}`}
            onClick={onClick}
            className={style}
        >
            {children}
        </Link>
    );
};

export default Button;
