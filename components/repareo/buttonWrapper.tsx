import type { ReactNode } from "react";

export default function ButtonWrapper({ children }: { children: ReactNode }) {
	return (
		<div className={"lg:pt-12"}>
			<div
				className={
					"hidden lg:block rounded border border-dashed border-gray-200 h-[640px]"
				}
			/>
			{children}
		</div>
	);
}
