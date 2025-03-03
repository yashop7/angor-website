import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';

const slides = [
  {
    title: "Meet Alice & Bob",
    content: "Alice has an innovative project idea but needs funding. Bob is a Bitcoiner looking for secure and transparent investment opportunities.",
    icon: "👩‍💻👨‍💼"
  },
  {
    title: "Project Creation",
    content: "Alice creates her project on Angor, detailing implementation stages, milestones, and funding requirements with complete transparency.",
    icon: "📝"
  },
  {
    title: "Discovery",
    content: "Bob discovers Alice's project while browsing the Angor Hub, where various innovative projects seek funding.",
    icon: "🔍"
  },
  {
    title: "Multisig Setup",
    content: "Bob initiates the investment process by requesting to create a multisignature wallet. This ensures he can withdraw unspent bitcoins when needed.",
    icon: "🔐"
  },
  {
    title: "Confirmation",
    content: "Alice approves Bob's request, establishing a secure multisig arrangement. Bob sees the confirmation and proceeds with the investment.",
    icon: "✅"
  },
  {
    title: "Project Launch",
    content: "Once the project reaches its funding goal, Alice can begin implementation. Bob maintains the ability to withdraw unspent funds with a time-locked penalty.",
    icon: "🚀"
  },
  {
    title: "Safety Mechanisms",
    content: "If funding goals aren't met, Alice can release the funds back to investors without penalty. Otherwise, investors can withdraw with a time-locked penalty mechanism.",
    icon: "🛡️"
  }
];

const AngorWorkflow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const timeline = gsap.timeline();
    
    timeline
      .fromTo(slideRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5 }
      )
      .fromTo(contentRef.current,
        { opacity: 0, x: -30 },
        { opacity: 1, x: 0, duration: 0.5 },
        "-=0.3"
      );
  }, [currentSlide]);

  const handleNext = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(prev => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentSlide > 0) {
      setCurrentSlide(prev => prev - 1);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="bg-gradient-to-br from-bgDark1  to-bgDark1 rounded-2xl p-8">
        <div className="min-h-[400px] flex flex-col justify-between">
          <div ref={slideRef} className="text-center mb-8">
            <div className="text-6xl mb-4">{slides[currentSlide].icon}</div>
            <h3 className="text-2xl font-bold text-white mb-4">
              {slides[currentSlide].title}
            </h3>
            <div ref={contentRef} className="text-cyan-50 text-lg leading-relaxed">
              {slides[currentSlide].content}
            </div>
          </div>

          <div className="flex justify-between items-center mt-8">
            <button
              onClick={handlePrev}
              disabled={currentSlide === 0}
              className="px-6 py-2 bg-cyan-800 text-white rounded-full disabled:opacity-50 disabled:cursor-not-allowed hover:bg-cyan-500 transition-all duration-300 flex items-center gap-2"
            >
              ← Previous
            </button>

            <div className="flex gap-2">
              {slides.map((_, index) => (
                <div
                  key={index}
                  className={`h-2 w-2 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? 'bg-cyan-400 w-6'
                      : 'bg-cyan-700'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              disabled={currentSlide === slides.length - 1}
              className="px-6 py-2 bg-cyan-600 text-white rounded-full disabled:opacity-50 disabled:cursor-not-allowed hover:bg-cyan-500 transition-all duration-300 flex items-center gap-2"
            >
              Next →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AngorWorkflow;
