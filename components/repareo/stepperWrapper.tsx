import type { ReactNode } from "react";

export default function StepperWrapper({ children }: { children: ReactNode }) {
	return (
		<div className={"pt-6 lg:pt-0"}>
			<div className={"py-4 lg:py-8"}>{children}</div>
			<div
				className={
					"rounded border border-dashed border-gray-200 h-[169px] lg:h-[638px]"
				}
			></div>
		</div>
	);
}
