import type { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	children: ReactNode;
	color?: "primary" | "secondary";
}

export default function Button({
	onClick,
	children,
	color = "primary",
}: ButtonProps) {
	let colorCns = "bg-blue-600 text-white";
	if (color === "secondary") {
		colorCns = "bg-white border border-gray-200 text-black";
	}
	return (
		<button
			onClick={onClick}
			type={"button"}
			className={`${colorCns} hover:opacity-90 shadow-sm py-3 px-6 w-full rounded-lg lg:mt-8 mt-6`}
		>
			{children}
		</button>
	);
}
