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
    if (currentStep > 0) {
      gsap.fromTo(stepRefs.current[currentStep], { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1.2, ease: "power4.out" });
    }
  }, [currentStep]);

  const handleNextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center -mx-10 text-white p-8 mb-24">
      {steps.map((step, index) => (
        <p
          key={index}
          ref={(el) => (stepRefs.current[index] = el)}
          className={`text-lg max-w-3xl text-center my-4 ${index > currentStep ? 'hidden' : ''}`}
        >
          {step}
        </p>
      ))}
      {currentStep < steps.length - 1 && (
        <button
          onClick={handleNextStep}
          className="mt-6 px-6 py-2 bg-blue-500 text-lg rounded-lg hover:bg-blue-700 transition duration-300 ease-in-out"
        >
          Load Next Step
        </button>
      )}
    </div>
  );
};

export default AngorStepsAnimation;
