import React, { useState, useRef, useEffect } from "react";
import testImage from "../../public/vite.svg";

const instructionsData = [
  {
    title: "Eligibility",
    content:
      "This event is open exclusively to students from institutions other than Sairam.\nWe truly appreciate the enthusiasm from Sairam students, but this particular event is designed to encourage wider participation from different colleges.",
    icon: "🎓",
    tip: "Check with your college eligibility before registering.",
    image: "eligibilityImage",
  },
  {
    title: "Team & Participation",
    content:
      "Teams of 2–4 members (solo entries not allowed).\nAll team members must stay on-site for the full 24-hour duration.",
    icon: "👥",
    tip: "Remember to coordinate with your teammates on your project idea.",
    image: "testImage",
  },
  {
    title: "Essentials",
    content:
      "Bring your own laptops and Ethernet cables.\nValid college ID is required for verification.",
    icon: "🎒",
    tip: "Double-check your bag to make sure you have all your essential gear!",
    image: "testImage",
  },
  {
    title: "Logistics",
    content: "Arrive at least 30 minutes before the event on their own .",
    icon: "🗺️",
    tip: "Plan your travel in advance to arrive on time and avoid a rush.",
    image: "testImage",
  },
  {
    title: "Project Rules",
    content:
      "All work must be done during the hackathon.\nMinor boilerplate code is allowed if declared in the README.",
    icon: "🛠️",
    tip: "Have a clear project plan and declare any pre-existing code to avoid disqualification.",
    image: "testImage",
  },
  {
    title: "Food & Refreshments",
    content:
      "Lunch & dinner on Day 1 and breakfast on Day 2 will be provided to all participants.",
    icon: "🍔",
    tip: "Pro tip: Stay hydrated and grab a bite to keep your energy up during the event!",
    image: "testImage",
  },
  {
    title: "Code of Conduct",
    content:
      "Maintain respectful behavior.\nHarassment or illegal activities will result in immediate removal from the event.",
    icon: "🛡️",
    tip: "Pro tip: Let's create a welcoming and productive environment for everyone!",
    image: "testImage",
  },
  {
    title: "Attire & Belongings",
    content:
      "A Formal attire is requested.\nParticipants are responsible for their personal belongings.",
    icon: "👔",
    tip: "Pro tip: While formal, dress comfortably for a 24-hour coding marathon!",
    image: "testImage",
  },
];

const Instructions = () => {
  const [activeInstruction, setActiveInstruction] = useState(null);
  const instructionsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Could add animation or other effects here if needed
        }
      },
      { threshold: 0.5 }
    );
    if (instructionsRef.current) observer.observe(instructionsRef.current);
    return () => {
      if (instructionsRef.current) observer.unobserve(instructionsRef.current);
    };
  }, []);

  return (
    <div
      id="instructions"
      ref={instructionsRef}
      className="relative z-0 pt-[120px] flex justify-center items-center min-h-screen font-mono"
    >
      {/* CRT Scanline Overlay */}
      <div className="pointer-events-none absolute inset-0 bg-[repeating-linear-gradient(0deg,#00ff0044,#00ff0044_1px,transparent_1px,transparent_6px)] mix-blend-overlay z-0 opacity-20" />

      <div className="relative z-10 flex flex-col items-center w-full max-w-6xl px-6 sm:px-8 py-6 sm:py-12 text-green-400">
        {/* Terminal-style header with blinking cursor */}
        <div className="w-full px-4 mb-8 select-none">
          <div className="flex items-center text-3xl sm:text-4xl">
            <span className="mr-2">&gt; Instructions</span>
            <span className="text-green-400 blink">|</span>
          </div>
        </div>

        <p className="mb-10 text-green-300 text-center select-none px-4 sm:px-8 max-w-3xl">
          Quick facts and essential rules for the hackathon.
        </p>

        {/* Grid layout for instructions */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full px-4 sm:px-0">
          {instructionsData.map((ins) => (
            <div
              key={ins.title}
              onDoubleClick={() => setActiveInstruction(ins)}
              className="bg-black/90 rounded-2xl shadow-[0_0_10px_#00ff00,0_0_20px_#00ff00_inset] p-6 cursor-pointer border border-white hover:shadow-[0_0_15px_#00ff00,0_0_25px_#00ff00_inset] transition-shadow duration-300"
            >
              <h3 className="font-bold text-2xl text-white mb-4">
                {ins.title}
              </h3>
              <p className="text-white whitespace-pre-line mb-4 leading-relaxed text-sm sm:text-base">
                {ins.content}
              </p>
              <span className="text-green-300 italic select-text">
                💬 {ins.tip}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for active instruction */}
      {activeInstruction && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 overflow-auto p-4">
          <div className="bg-black/90 border-2 shadow-[0_0_15px_#00ff00] p-8 rounded-lg max-w-lg w-full relative max-h-[90vh] overflow-y-auto">
            <button
              className="absolute top-2 right-2 text-white text-xl"
              onClick={() => setActiveInstruction(null)}
            >
              ✖
            </button>
            <div className="flex items-center mb-4 select-none">
              <h3 className="font-bold text-2xl text-white">
                {activeInstruction.title}
              </h3>
            </div>
            <p className="mb-4 text-white whitespace-pre-line">
              {activeInstruction.content}
            </p>
            <span className="text-green-300 italic">
              💬 {activeInstruction.tip}
            </span>
          </div>
        </div>
      )}

      {/* Animations and blinking cursor style */}
      <style>{`
        @keyframes blink {
          0%, 50%, 100% { opacity: 1; }
          25%, 75% { opacity: 0; }
        }
        .blink {
          animation: blink 1.2s step-start infinite;
        }
        @media (max-width: 640px) {
          #instructions > div > div:nth-child(3) {
            width: 90vw !important;
            height: auto !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Instructions;
