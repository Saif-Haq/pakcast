import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/navigation";

const StepContent = ({ currentStep }) => {
  const [formData, setFormData] = useState({
    step1Data: {},
    step2Data: {},
    step3Data: {},
    // Add more steps as needed
  });

  const printFormData = () => console.log(formData);

  const handleFormDataChange = (step, data) => {
    setFormData((prevData) => ({
      ...prevData,
      [step]: data,
    }));
  };

  //   return currentStep == 0 ? (
  //     <div className="p-2 my-6 h-48 bg-gray-100 border-2 border-dashed border-gray-200 rounded-lg"></div>
  //   ) : (
  //     <div className="p-2 my-6 h-48 bg-red-300 border-2 border-dashed border-gray-200 rounded-lg"></div>
  //   );

  //   const [mutateFunction, { data, loading, error }] = useMutation(YOUR_MUTATION);

  const handleFinalSubmission = async () => {
    try {
      console.log(formData, "<<<<<<<<<<");
      //   const response = await mutateFunction({ variables: { input: formData } });
      //   console.log("Mutation response:", response);
    } catch (e) {
      //   console.error("Mutation error:", e);
    }
  };

  console.log(currentStep);

  return (
    // <div className="p-2 my-6 h-48 bg-gray-100 border-2 border-dashed border-gray-200 rounded-lg">
    <div>
      <p>{`HELLO ${currentStep} `}</p>
      {currentStep === 0 && (
        <Step1
          data={formData.step1Data}
          onChange={(data) => handleFormDataChange("step1Data", data)}
        />
      )}
      {currentStep === 1 && (
        <Step2
          data={formData.step2Data}
          onChange={(data) => handleFormDataChange("step2Data", data)}
        />
      )}
      {currentStep === 2 && (
        <>
          <Step3
            data={formData}
            onChange={(data) => handleFormDataChange("step3Data", data)}
          />
        </>
      )}
    </div>
  );
};

const Step1 = ({ data, onChange }) => {
  const handleChange = (e) => {
    onChange({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <input name="field1" value={data.field1 || ""} onChange={handleChange} />
      {/* Add more fields as needed */}
      <div className="p-2 my-6 h-48 bg-gray-100 border-2 border-dashed border-gray-200 rounded-lg"></div>
    </div>
  );
};

const Step2 = ({ data, onChange }) => {
  const handleChange = (e) => {
    onChange({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <div className="p-2 my-6 h-48 bg-gray-100 border-2 border-dashed border-gray-200 rounded-lg"></div>
  );
};

const Step3 = ({ data: wholeData, onChange }) => {
  const { step3Data: data } = wholeData;
  const handleChange = (e) => {
    onChange({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <div>
      {/* <div className="p-2 my-6 h-48 bg-gray-100 border-2 border-dashed border-gray-200 rounded-lg"></div> */}

      <input name="field3" value={data.field3 || ""} onChange={handleChange} />

      <button onClick={() => console.log(wholeData)}>PRINT DATA</button>
      {/* Add more fields as needed */}
    </div>
  );
};

const SteppedProgress = () => {
  const router = useRouter();
  const [stepsComplete, setStepsComplete] = useState(0);
  const numSteps = 4;

  const handleSetStep = (num) => {
    if (
      (stepsComplete === 0 && num === -1) ||
      (stepsComplete === numSteps && num === 1)
    ) {
      return;
    }

    setStepsComplete((pv) => pv + num);
  };

  return (
    // <div className="px-4 py-14 bg-white">
    <div className="p-8 bg-white shadow-lg rounded-md w-full max-w-2xl mx-auto">
      <button
        onClick={() => router.replace("/")}
        className="px-4 py-2 bg-blue-500 text-white text-base font-medium rounded-md shadow-sm hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300"
      >
        Close
      </button>

      <Steps numSteps={numSteps} stepsComplete={stepsComplete} />

      <StepContent currentStep={stepsComplete} />

      <div className="flex items-center justify-end gap-2">
        <button
          className="px-4 py-1 rounded hover:bg-gray-100 text-black"
          onClick={() => handleSetStep(-1)}
        >
          Prev
        </button>
        <button
          className="px-4 py-1 rounded bg-black text-white"
          onClick={() => handleSetStep(1)}
        >
          Next
        </button>
      </div>
    </div>
    // </div>
  );
};

const Steps = ({ numSteps, stepsComplete }) => {
  const stepArray = Array.from(Array(numSteps).keys());

  return (
    <div className="flex items-center justify-between gap-3">
      {stepArray.map((num) => {
        const stepNum = num + 1;
        const isActive = stepNum <= stepsComplete;
        return (
          <React.Fragment key={stepNum}>
            <Step num={stepNum} isActive={isActive} />
            {stepNum !== stepArray.length && (
              <div className="w-full h-1 rounded-full bg-gray-200 relative">
                <motion.div
                  className="absolute top-0 bottom-0 left-0 bg-indigo-600 rounded-full"
                  animate={{ width: isActive ? "100%" : 0 }}
                  transition={{ ease: "easeIn", duration: 0.3 }}
                />
              </div>
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
};

const Step = ({ num, isActive }) => {
  return (
    <div className="relative">
      <div
        className={`w-10 h-10 flex items-center justify-center shrink-0 border-2 rounded-full font-semibold text-sm relative z-10 transition-colors duration-300 ${
          isActive
            ? "border-indigo-600 bg-indigo-600 text-white"
            : "border-gray-300 text-gray-300"
        }`}
      >
        <AnimatePresence mode="wait">
          {isActive ? (
            <motion.svg
              key="icon-marker-check"
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 16 16"
              height="1.6em"
              width="1.6em"
              xmlns="http://www.w3.org/2000/svg"
              initial={{ rotate: 180, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -180, opacity: 0 }}
              transitidivon={{ duration: 0.125 }}
            >
              <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"></path>
            </motion.svg>
          ) : (
            <motion.span
              key="icon-marker-num"
              initial={{ rotate: 180, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -180, opacity: 0 }}
              transition={{ duration: 0.125 }}
            >
              {num}
            </motion.span>
          )}
        </AnimatePresence>
      </div>
      {isActive && (
        <div className="absolute z-0 -inset-1.5 bg-indigo-100 rounded-full animate-pulse" />
      )}
    </div>
  );
};

export default SteppedProgress;
