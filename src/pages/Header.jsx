import { useGLTF } from "@react-three/drei";
import { useState, useEffect } from "react";
import RazorpayButton from "../components/RazorpayButton";

function RetroPC() {
  const { scene } = useGLTF("/models/retro_pc.glb");
  return <primitive object={scene} scale={2} />;
}

export const Header = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const eventDate = new Date("2025-10-09T00:00:00");
    const updateCountdown = () => {
      const now = new Date();
      const diff = eventDate - now;
      if (diff > 0) {
        const days = String(Math.floor(diff / (1000 * 60 * 60 * 24))).padStart(2, "0");
        const hours = String(Math.floor((diff / (1000 * 60 * 60)) % 24)).padStart(2, "0");
        const minutes = String(Math.floor((diff / (1000 * 60)) % 60)).padStart(2, "0");
        const seconds = String(Math.floor((diff / 1000) % 60)).padStart(2, "0");
        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: "00", hours: "00", minutes: "00", seconds: "00" });
      }
    };
    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative overflow-hidden w-full h-screen bg-black">
      <video
        className="absolute w-full h-full object-cover blur-xs"
        src="/0901.mp4"
        autoPlay
        loop
        muted
      />
      <div className="absolute w-full h-full bg-black/60" />
      <div className="relative z-10">
        <div className="fixed top-0 left-0 w-full flex items-center justify-between px-6 py-4 bg-black/40 backdrop-blur-md border-b-2 border-green-400 z-500">
          <span className="text-green-400 font-mono text-2xl drop-shadow-[0_0_6px_#00ff00]">⚡ CodeCraft</span>
          <div className="hidden md:flex gap-6">
            <a href="/" className="text-green-300 hover:text-green-100 font-mono">Home</a>
            <a href="#prize" className="text-green-300 hover:text-green-100 font-mono">Prize</a>
            <a href="#" className="text-green-300 hover:text-green-100 font-mono">Domain</a>
            <a href="#instructions" className="text-green-300 hover:text-green-100 font-mono">Instructions</a>
            <Link to="/contact" className="text-green-300 hover:text-green-100 font-mono">Contact</Link>
            <a href="/masterminds" className="text-green-300 hover:text-green-100 font-mono">Masterminds</a>
          </div>
          <button
            className="md:hidden text-green-300 hover:text-green-100 focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
              {menuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M3 12h18M3 6h18M3 18h18" />
              )}
            </svg>
          </button>
        </div>
        {menuOpen && (
          <div className="fixed top-[64px] left-0 w-full bg-black/90 border-b-2 border-green-400 flex flex-col items-center gap-4 py-4 z-40">
            <a href="/" className="text-green-300 hover:text-green-100 font-mono text-lg">Home</a>
            <a href="#prize" className="text-green-300 hover:text-green-100 font-mono text-lg">Prize</a>
            <a href="#" className="text-green-300 hover:text-green-100 font-mono text-lg">Domain</a>
            <a href="#instructions" className="text-green-300 hover:text-green-100 font-mono text-lg">Instructions</a>
            <Link to="/contact" className="text-green-300 hover:text-green-100 font-mono">Contact</Link>
            <a href="/masterminds" className="text-green-300 hover:text-green-100 font-mono text-lg">Masterminds</a>
          </div>
        )}
        <div className="h-screen inset-0 flex flex-col items-center justify-center text-center px-2">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl text-green-400 animate-opacityPulse">
            CodeCraft 25<span className="animate-pulse">█</span>
          </h1>
          <p className="mt-4 text-base sm:text-lg lg:text-xl text-green-300 opacity-80">
            Rewinding the future with retro vibes
          </p>
          <div className="mt-8">
            <div className="mt-6 flex gap-4 sm:gap-6 lg:gap-8 justify-center flex-wrap">
              <div className="border-2 border-green-400 rounded-md p-2 sm:p-4 hover:cursor-wait">
                <span className="text-3xl sm:text-5xl lg:text-6xl text-green-400 font-mono tracking-widest animate-opacityPulseSoft drop-shadow-[0_0_2px_#00ff00] block">{timeLeft.days}</span>
                <span className="text-xs sm:text-sm lg:text-lg text-green-300 opacity-70 tracking-wide font-mono block mt-2">DAYS</span>
              </div>
              <div className="border-2 border-green-400 rounded-md p-2 sm:p-4 hover:cursor-wait">
                <span className="text-3xl sm:text-5xl lg:text-6xl text-green-400 font-mono tracking-widest animate-opacityPulseSoft drop-shadow-[0_0_2px_#00ff00] block">{timeLeft.hours}</span>
                <span className="text-xs sm:text-sm lg:text-lg text-green-300 opacity-70 tracking-wide font-mono block mt-2">HOURS</span>
              </div>
              <div className="border-2 border-green-400 rounded-md p-2 sm:p-4 hover:cursor-wait">
                <span className="text-3xl sm:text-5xl lg:text-6xl text-green-400 font-mono tracking-widest animate-opacityPulseSoft drop-shadow-[0_0_2px_#00ff00] block">{timeLeft.minutes}</span>
                <span className="text-xs sm:text-sm lg:text-lg text-green-300 opacity-70 tracking-wide font-mono block mt-2">MINUTES</span>
              </div>
              <div className="border-2 border-green-400 rounded-md p-2 sm:p-4 hover:cursor-wait">
                <span className="text-3xl sm:text-5xl lg:text-6xl text-green-400 font-mono tracking-widest animate-opacityPulseSoft drop-shadow-[0_0_2px_#00ff00] block">{timeLeft.seconds}</span>
                <span className="text-xs sm:text-sm lg:text-lg text-green-300 opacity-70 tracking-wide font-mono block mt-2">SECONDS</span>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-14">
            {/* <button className="cursor-pointer hover:cursor-pointer text-3xl px-6 py-3 bg-black border-2 border-green-400 text-green-400 font-mono rounded-md hover:bg-green-400 hover:text-black hover:shadow-[0_0_15px_#00ff00] transition-all duration-300">
              Register Now
            </button> */}
            <div className="inline-block w-auto">
              <RazorpayButton />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
      {/* Subtle opacity pulse animation for countdown numbers */}
      <style>{`
        @keyframes opacityPulseSoft {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.85; }
        }
        .animate-opacityPulseSoft {
          animation: opacityPulseSoft 2s infinite;
        }
      `}</style>