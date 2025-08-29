import React, { useState, useRef, useEffect } from "react";
import testImage from "../../public/vite.svg";

const instructionsData = [
  {
    title: "Event Info",
    content:
      "The event will take place on June 22nd, 2024, from 10:00 AM to 6:00 PM at the Main Auditorium. Please arrive 15 minutes early for registration and setup.",
    icon: "💡",
    tip: "Pro tip: Bring your ID for quick check-in!",
    image: testImage,
  },
  {
    title: "Bring All Peripherals",
    content:
      "Remember to bring your own laptop, charger, mouse, headphones, and any other peripherals you need. Power outlets will be available, but extension cords are limited.",
    icon: "🖥️",
    tip: "Extra tip: Label your cables to avoid mix-ups!",
    image: testImage,
  },
  {
    title: "On Spot Domain",
    content:
      "The problem domain will be revealed at the start of the event. Teams are expected to brainstorm and build their solution within the allotted time.",
    icon: "📝",
    tip: "Hint: Collaboration is key to success!",
    image: testImage,
  },
  {
    title: "Food and Refreshment",
    content:
      "Lunch and refreshments will be provided to all participants. Please inform us of any dietary restrictions at the registration desk.",
    icon: "🍔",
    tip: "Fun fact: We have vegan options too!",
    image: testImage,
  },
];

const Instructions = () => {
  const [rotationY, setRotationY] = useState(0);
  const cubeRef = useRef(null);
  const dragging = useRef(false);
  const lastX = useRef(0);
  const [activeInstruction, setActiveInstruction] = useState(null);
  const instructionsRef = useRef(null);
  const [animateCube, setAnimateCube] = useState(false);

  // Handle wheel scroll to rotate cube
  const handleWheel = (e) => {
    e.preventDefault();
    setRotationY((prev) => prev + e.deltaY * 0.3);
  };

  // Handle drag start
  const handleMouseDown = (e) => {
    dragging.current = true;
    lastX.current = e.clientX;
  };

  // Handle drag move
  const handleMouseMove = (e) => {
    if (!dragging.current) return;
    const deltaX = e.clientX - lastX.current;
    lastX.current = e.clientX;
    setRotationY((prev) => prev + deltaX * 0.5);
  };

  // Handle drag end
  const handleMouseUp = () => {
    dragging.current = false;
  };

  // Touch events for mobile
  const handleTouchStart = (e) => {
    dragging.current = true;
    lastX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    if (!dragging.current) return;
    const deltaX = e.touches[0].clientX - lastX.current;
    lastX.current = e.touches[0].clientX;
    setRotationY((prev) => prev + deltaX * 0.5);
  };

  const handleTouchEnd = () => {
    dragging.current = false;
  };

  useEffect(() => {
    const cube = cubeRef.current;
    if (!cube) return;

    cube.addEventListener("wheel", handleWheel, { passive: false });
    cube.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    cube.addEventListener("touchstart", handleTouchStart, { passive: false });
    cube.addEventListener("touchmove", handleTouchMove, { passive: false });
    window.addEventListener("touchend", handleTouchEnd);

    return () => {
      cube.removeEventListener("wheel", handleWheel);
      cube.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      cube.removeEventListener("touchstart", handleTouchStart);
      cube.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setAnimateCube(true);
      },
      { threshold: 0.5 }
    );
    if (instructionsRef.current) observer.observe(instructionsRef.current);
    return () => {
      if (instructionsRef.current) observer.unobserve(instructionsRef.current);
    };
  }, []);

  // Map each instruction to a cube face style and content
  // Faces: front, right, back, left
  const faceStyles = [
    "rotateY(0deg) translateZ(200px)",
    "rotateY(90deg) translateZ(200px)",
    "rotateY(180deg) translateZ(200px)",
    "rotateY(-90deg) translateZ(200px)",
  ];

  return (
    <div
      id="instructions"
      ref={instructionsRef}
      className="relative z-0 pt-[64px] flex justify-center items-center min-h-screen font-mono"
      style={{
        backgroundImage:
          "url('/images/retro-bg.gif'), linear-gradient(135deg, #000000 0%, #0f0f0f 50%, #001a00 100%)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Retro Neon Animated Background */}
      {/* (Already included as the first background image in backgroundImage above) */}

      {/* CRT Scanline Overlay */}
      <div className="pointer-events-none absolute inset-0 bg-[repeating-linear-gradient(0deg,#00ff0044,#00ff0044_1px,transparent_1px,transparent_6px)] mix-blend-overlay z-0 opacity-20" />

      <div className="relative z-10 flex flex-col items-center w-full max-w-4xl px-6 sm:px-8 py-6 sm:py-12 text-green-400">
        {/* Terminal-style header with blinking cursor */}
        <div className="w-full px-4 mb-8 select-none">
          <div className="flex items-center text-3xl sm:text-4xl">
            <span className="mr-2">&gt; Instructions</span>
            <span className="text-green-400 blink">|</span>
          </div>
        </div>

        <p className="mb-6 text-green-300 text-center select-none px-4 sm:px-8">
          Roll this cube and double tap for more info
        </p>

        {/* Cube container with perspective and jump animation */}
        <div
          ref={cubeRef}
          className={`w-64 h-64 sm:w-80 sm:h-80 md:w-[28rem] md:h-[28rem] ${animateCube ? "jump" : ""}`}
          style={{ perspective: "1000px", cursor: "grab", overflow: "visible" }}
        >
          {/* Cube */}
          <div
            className="relative w-full h-full transition-transform duration-300 ease-out"
            style={{
              transformStyle: "preserve-3d",
              transform: `translateZ(-200px) rotateY(${rotationY}deg)`,
            }}
          >
            {instructionsData.map((ins, idx) => (
              <div
                key={ins.title}
                onDoubleClick={() => setActiveInstruction(ins)}
                className="absolute w-64 h-64 sm:w-80 sm:h-80 md:w-[28rem] md:h-[28rem] bg-black/90 rounded-2xl shadow-[0_0_10px_#00ff00,0_0_20px_#00ff00_inset,0_0_30px_#00ff00] p-8 px-4 sm:px-6 flex flex-col justify-center text-green-400 cursor-pointer"
                style={{
                  transform: faceStyles[idx],
                  WebkitBackfaceVisibility: "hidden",
                  backfaceVisibility: "hidden",
                }}
              >
                <div className="flex items-center mb-4 select-none">
                  <span className="text-3xl mr-4">{ins.icon}</span>
                  <h3 className="font-bold text-2xl">{ins.title}</h3>
                </div>
                <p className="flex-grow text-sm sm:text-base mb-4 leading-relaxed">
                  {ins.content}
                </p>
                <span className="text-green-300 italic select-text">
                  💬 {ins.tip}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal for active instruction */}
      {activeInstruction && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 overflow-auto p-4">
          <div className="bg-black/90 border-2 border-green-400 shadow-[0_0_15px_#00ff00] p-8 rounded-lg max-w-lg w-full relative max-h-[90vh] overflow-y-auto">
            <button
              className="absolute top-2 right-2 text-green-400 text-xl"
              onClick={() => setActiveInstruction(null)}
            >
              ✖
            </button>
            <div className="flex items-center mb-4 select-none">
              <span className="text-3xl mr-4">{activeInstruction.icon}</span>
              <h3 className="font-bold text-2xl">{activeInstruction.title}</h3>
            </div>
            <p className="mb-4">{activeInstruction.content}</p>
            <span className="text-green-300 italic">💬 {activeInstruction.tip}</span>
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
        @keyframes jump {
          0% { transform: translateY(-200px); }
          50% { transform: translateY(20px); }
          70% { transform: translateY(-10px); }
          100% { transform: translateY(0); }
        }
        .jump {
          animation: jump 1s ease-out forwards;
        }
        @media (max-width: 640px) {
          #instructions > div > div:nth-child(3) {
            width: 90vw !important;
            height: 90vw !important;
          }
          #instructions > div > div:nth-child(3) > div > div {
            width: 90vw !important;
            height: 90vw !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Instructions;
