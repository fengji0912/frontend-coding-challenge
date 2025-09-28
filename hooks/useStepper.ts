import { useState } from "react";

export default function useStepper() {
	const [currentStep, setCurrentStep] = useState<number>(0);
	function handleNextStep() {
		setCurrentStep((prev) => {
			return prev + 1;
		});
	}
	return { currentStep, handleNextStep };
}
