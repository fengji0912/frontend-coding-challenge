export default function Header() {
	return (
		<header className={"pt-6 p-4 lg:pt-4 lg:border-b lg:border-gray-200"}>
			<div className={"max-w-screen-lg mx-auto"}>
				<img
					src={"/repareo.svg"}
					alt={"Repareo logo"}
					className={"mx-auto lg:mx-0"}
				/>
			</div>
		</header>
	);
}
