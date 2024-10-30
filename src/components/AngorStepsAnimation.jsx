import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

const steps = [
  "Angor is a crowdfunding platform. Like all crowdfunding platforms, Angor allows founders to raise capital from a group of investors to finance various projects, such as innovative open source software for instance.",
  "What makes Angor different? First, Angor focuses on BITCOIN investments only. Investors must fund a BTC wallet.",
  "The platform is FULLY DECENTRALISED - no middlemen involved. Angor has no backend, all transactions are processed on the Bitcoin network, and metadata for funding projects is stored on Nostr.",
  "Funds are released to borrowers IN STAGES on predetermined dates, and investors can recover any unspent funds.",
  "Benefits include the ability to recall unspent funds, better alignment of investor and founder interests, and enhanced security and privacy via Bitcoin and Nostr."
];

const AngorStepsAnimation = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const stepRefs = useRef([]);

  useEffect(() => {
    if (currentStep >= 0) {
      gsap.fromTo(stepRefs.current[currentStep], { opacity: 0, x: -50, scale: 0.8 }, 
      { opacity: 1, x: 0, scale: 1, duration: 1, ease: "power4.out" });
    }
  }, [currentStep]);

  const handleNextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center mb-24 text-white px-4 py-8">
      <div className="w-full sm:w-10/12 md:w-8/12 lg:w-7/12">
        {steps.map((step, index) => (
          <p
            key={index}
            ref={(el) => (stepRefs.current[index] = el)}
            className={`text-base sm:text-lg md:text-xl lg:text-2xl text-center transition-all duration-700 transform ${
              index === currentStep ? 'block' : 'hidden'
            } my-6`}
          >
            {step}
          </p>
        ))}
      </div>
      {currentStep < steps.length - 1 && (
        <button
          onClick={handleNextStep}
          className="mt-8 px-6 py-2 bg-blue-500 text-base md:text-lg rounded-full hover:bg-blue-600 hover:scale-105 transform transition duration-300 ease-out shadow-lg"
        >
          Load Next Step
        </button>
      )}
    </div>
  );
};

export default AngorStepsAnimation;
