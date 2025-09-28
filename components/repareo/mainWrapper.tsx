import type { ReactNode } from "react";

export default function MainWrapper({ children }: { children: ReactNode }) {
	return (
		<main className={"max-w-screen-lg mx-auto"}>
			<div
				className={
					"grid grid-cols-1 lg:grid-cols-[2.5fr_1fr] lg:gap-24 px-6 lg:px-0"
				}
			>
				{children}
			</div>
		</main>
	);
}
