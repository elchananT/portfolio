import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import Link from "next/link";

type ButtonProps = {
    children: ReactNode;
    onClick?: () => void;
    className?: string;
    href?: string;
    disabled?: boolean;
    background?: string;
};

const Button = ({ children, onClick, className = "", href, disabled, background }: ButtonProps) => {
    const style = twMerge(
        "px-4 py-2 rounded-lg font-mono hover:scale-110 border border-[#CCE3DE] text-[#CCE3DE] hover:text-[#0a1628] hover:bg-[#CCE3DE] text-lg font-medium flex items-center gap-2 transition duration-300",

        className
    );

    if (href) {
        return (
            <Link
                href={`/${href}`}
                className={`${style} bg-transparent`}
            >
                {children}
            </Link>
        );
    }

    return (
        <button className={style} onClick={onClick} disabled={disabled} style={{ backgroundColor: background }}>
            {children}
        </button>
    )

};

export default Button;
