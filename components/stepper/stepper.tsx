interface StepperProps {
  steps: string[];
  currentStep: number;
}

export default function Stepper({ steps, currentStep }: StepperProps) {
  return (
    <div className="w-[392px] max-w-full h-[68px] mx-auto">
      {/* Steps Wrapper */}
      <div className="flex items-center justify-between w-[270px] lg:w-[360px] mx-auto">
        {steps.map((step, index) => (
          <div key={index} className={`flex items-center ${index !== steps.length - 1 ? 'flex-1' : ''}`}>
			{/* Circle + Text*/}
			<div className="relative flex items-center justify-center">
			{/* Circle */}
			<div
				className={`h-[30px] lg:h-[40px] w-[30px] lg:w-[40px] rounded-full flex items-center justify-center
				${index <= currentStep ? 'bg-blue-500' : 'bg-gray-200'}`}
			>
				{/* Label inside circle */}
				<span
				className={`h-[16px] lg:h-[20px] top-[7px] lg:top-[10px] text-xs leading-4 lg:text-sm lg:leading-5 font-semibold font-inter tracking-normal text-center ${
					index <= currentStep ? 'text-white' : 'text-gray-700'
				}`}
				>
				{index + 1}
				</span>
			</div>
			  {/* Step Text */}
              <span
                className={`h-4 lg:h-6 top-8 lg:top-11 absolute left-1/2 -translate-x-1/2 text-base leading-4 lg:leading-6 font-semibold text-center ${
                  index <= currentStep ? 'text-gray-700' : 'text-gray-500'
                }`}
              >
                {step}
              </span>
			</div>

            {/* Line*/}
            {index < steps.length - 1 && (
              <div
                className={`flex-1 h-[4px] lg:h-[6px] ${
                  index < currentStep ? 'bg-blue-500' : 'bg-gray-200'
                }`}
              ></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
