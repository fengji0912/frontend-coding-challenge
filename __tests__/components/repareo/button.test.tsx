import { render, screen } from "@testing-library/react";
import Button from "../../../components/repareo/button";

describe("Button", () => {
	it("applies primary colors per default", async () => {
		const onClick = jest.fn();
		render(<Button onClick={onClick}>My button</Button>);
		const button = await screen.findByRole("button");
		expect(button.className).toContain("bg-blue-600 text-white");
	});

	it("applies secondary colors", async () => {
		const onClick = jest.fn();
		render(
			<Button onClick={onClick} color={"secondary"}>
				My secondary button
			</Button>,
		);
		const button = await screen.findByRole("button");
		expect(button.className).toContain(
			"bg-white border border-gray-200 text-black",
		);
	});
});
