import { useState } from "react";

const stepperContent = [
  "Personal Info Content",
  "Account Info Content",
  "Payment Content",
  "Confirmation Content",
];

const NUMBER_DIAMETER = 48;
const GAP = 20;

function Stepper() {
  const [currStep, setCurrStep] = useState(0);

  return (
    <div className="flex flex-row items-center gap-10">
      {/* Stepper */}

      <div className="flex flex-col gap-5 relative">
        <div className="bg-gray-600 w-1 absolute h-full left-1/2 -translate-x-1/2">
          <div
            style={{ height: currStep * (NUMBER_DIAMETER + GAP) }}
            className="z-10 bg-blue-800"
          />
        </div>
        {Array(stepperContent.length)
          .fill("")
          .map((_, idx) => (
            <div
              key={idx}
              className={`flex items-center justify-center w-12 h-12 rounded-full text-white text-lg z-50 ${
                idx <= currStep ? "bg-blue-800" : "bg-gray-600"
              }`}
            >
              {idx + 1}
            </div>
          ))}
      </div>

      {/* Content */}
      <div>{stepperContent[currStep]}</div>

      {/* Button */}
      <div className="flex flex-col gap-5">
        {currStep !== 0 && (
          <button onClick={() => setCurrStep((prev) => prev - 1)}>Back</button>
        )}
        {currStep !== stepperContent.length - 1 && (
          <button onClick={() => setCurrStep((prev) => prev + 1)}>
            Continue
          </button>
        )}
      </div>
    </div>
  );
}
export default Stepper;
