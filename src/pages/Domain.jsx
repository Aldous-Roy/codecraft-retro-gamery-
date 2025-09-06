import React, { useState, useRef, useEffect } from "react";

const instructionsData = [
  {
    title: "Domain",
    content:
      "Explore the world of AI-driven development.\nChoose between Web or Mobile to start building with intelligence.",
    icon: "💡",
    tip: "Pro tip: AI can accelerate your workflow and innovation.",
  },
  {
    title: "Mobile Application Development",
    content:
      "Develop native or cross-platform mobile apps optimized for performance and user experience.\nLeverage device features and ensure compatibility across devices.",
    icon: "📱",
    tip: "Extra tip: Test on multiple devices for best results.",
  },
  {
    title: "Web Application Development",
    content:
      "Build responsive and scalable web apps using modern frameworks and tools.\nFocus on UI/UX, performance, and accessibility standards.",
    icon: "🌐",
    tip: "Pro tip: Use version control to manage your code effectively.",
  },
  {
    title: "AI Innovation",
    content:
      "Harness cutting-edge AI technologies to create intelligent, adaptive, and futuristic solutions.\nPush boundaries with creativity and experimentation.",
    icon: "🤖",
    tip: "Innovation thrives when AI meets bold ideas.",
  },
];

const Domain = () => {
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
      id="domain"
      ref={instructionsRef}
      className="relative z-0 flex justify-center items-center min-h-screen font-mono"
    >
      {/* CRT Scanline Overlay */}
      <div className="pointer-events-none absolute inset-0 bg-[repeating-linear-gradient(0deg,#00ff0044,#00ff0044_1px,transparent_1px,transparent_6px)] mix-blend-overlay z-0 opacity-20" />

      <div className="relative z-10 flex flex-col items-center h-auto w-full max-w-4xl px-6 sm:px-8 py-6 sm:py-12 text-green-400">
        {/* Terminal-style header with blinking cursor */}
        <div className="w-full px-4 mb-8 select-none">
          <div className="flex items-center text-3xl sm:text-4xl">
            <span className="mr-2">&gt; Domain & Development</span>
            <span className="text-green-400 blink">|</span>
          </div>
        </div>

        <p className="mb-6 text-green-300 text-center select-none px-4 sm:px-8">
          Develop web/mobile applications with the magic of AI.
        </p>

        {/* Cube container with perspective and jump animation */}
        <div
          ref={cubeRef}
          className={`cube-container w-[70vw] h-[70vw] max-w-[20rem] max-h-[20rem] md:max-w-[24rem] md:max-h-[24rem] lg:max-w-[28rem] lg:max-h-[28rem] p-1 ${animateCube ? "jump" : ""}`}
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
                key={ins.title + idx}
                onDoubleClick={() => setActiveInstruction(ins)}
                className="cube-face absolute w-[70vw] h-[70vw] max-w-[20rem] max-h-[20rem] md:max-w-[24rem] md:max-h-[24rem] lg:max-w-[28rem] lg:max-h-[28rem] bg-black/90 rounded-2xl shadow-[0_0_10px_#00ff00,0_0_20px_#00ff00_inset,0_0_30px_#00ff00] p-4 sm:p-6 flex flex-col justify-center text-white cursor-pointer border border-white shadow-[0_0_10px_#00ff00]"
                style={{
                  transform: faceStyles[idx],
                  WebkitBackfaceVisibility: "hidden",
                  backfaceVisibility: "hidden",
                }}
              >
                <div className="flex items-center mb-4 select-none">
                  <h3 className="font-bold text-2xl text-white">{ins.title}</h3>
                </div>
                <p className="flex-grow text-sm sm:text-base mb-4 leading-relaxed text-white ">
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
          <div className="bg-black/90 border-2 shadow-[0_0_15px_#00ff00] p-8 rounded-lg max-w-lg w-full relative max-h-[90vh] overflow-y-auto">
            <button
              className="absolute top-2 right-2 text-white text-xl"
              onClick={() => setActiveInstruction(null)}
            >
              ✖
            </button>
            <div className="flex items-center mb-4 select-none">
              <h3 className="font-bold text-2xl text-white">{activeInstruction.title}</h3>
            </div>
            <p className="mb-4 text-white">{activeInstruction.content}</p>
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
          #domain .cube-container {
            width: 90vw !important;
            height: 90vw !important;
          }
          #domain .cube-face {
            width: 90vw !important;
            height: 90vw !important;
          }
        }
      `}</style>
    </div>
  );
};


export default Domain