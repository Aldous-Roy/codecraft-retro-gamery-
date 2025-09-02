import { useGLTF } from "@react-three/drei";
import { useState, useEffect } from "react";
import RazorpayButton from "../components/RazorpayButton";
import logo from "../../public/Codecraft-2.png";
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
    <div className="relative w-full h-screen bg-black overflow-hidden select-none">
      <video
        className="absolute w-full h-full object-cover blur-xs"
        src="/0901.mp4"
        autoPlay
        loop
        muted
      />
      <div className="absolute w-full h-full bg-black/60" />
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-black/80 backdrop-blur-sm z-50 border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          <div className="flex items-center">
            <img src={logo} alt="CodeCraft 25" className="h-10 w-auto" />
          </div>
          <div className="hidden md:flex space-x-6">
            <a href="/" className="text-white font-mono text-lg hover:text-gray-300 transition-colors duration-300">Home</a>
            <a href="#prize" className="text-white font-mono text-lg hover:text-gray-300 transition-colors duration-300">Prize</a>
            <a href="#" className="text-white font-mono text-lg hover:text-gray-300 transition-colors duration-300">Domain</a>
            <a href="#instructions" className="text-white font-mono text-lg hover:text-gray-300 transition-colors duration-300">Instructions</a>
            <a href="#" className="text-white font-mono text-lg hover:text-gray-300 transition-colors duration-300">Contact</a>
            <a href="#" className="text-white font-mono text-lg hover:text-gray-300 transition-colors duration-300">Masterminds</a>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              className="text-white focus:outline-none focus:ring-2 focus:ring-white"
            >
              {menuOpen ? (
                <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </svg>
              )}
            </button>
          </div>
        </div>
        {menuOpen && (
          <div className="md:hidden bg-black/90 border-t border-white/20 px-4 py-4 space-y-3 flex flex-col items-center">
            <a href="/" className="text-white font-mono text-lg hover:text-gray-300 transition-colors duration-300">Home</a>
            <a href="#prize" className="text-white font-mono text-lg hover:text-gray-300 transition-colors duration-300">Prize</a>
            <a href="#" className="text-white font-mono text-lg hover:text-gray-300 transition-colors duration-300">Domain</a>
            <a href="#instructions" className="text-white font-mono text-lg hover:text-gray-300 transition-colors duration-300">Instructions</a>
            <a href="#" className="text-white font-mono text-lg hover:text-gray-300 transition-colors duration-300">Contact</a>
            <a href="#" className="text-white font-mono text-lg hover:text-gray-300 transition-colors duration-300">Masterminds</a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <main className="relative z-10 flex flex-col items-center justify-center h-screen pt-16 px-4 text-center">
        <img src={logo} alt="CodeCraft 25" className="mb-10 w-3/4 max-w-full mx-auto" />
        <div className="flex flex-wrap justify-center gap-6 mb-12 max-w-full w-full overflow-x-auto px-2">
          <div className="flex flex-col items-center border border-white rounded-md px-5 py-3 min-w-[80px] flex-shrink-0">
            <span className="text-5xl sm:text-6xl font-mono text-white tracking-widest animate-opacityPulseSoft drop-shadow-[0_0_2px_#ffffff]">{timeLeft.days}</span>
            <span className="text-sm sm:text-base font-mono text-white opacity-80 mt-2">DAYS</span>
          </div>
          <div className="flex flex-col items-center border border-white rounded-md px-5 py-3 min-w-[80px] flex-shrink-0">
            <span className="text-5xl sm:text-6xl font-mono text-white tracking-widest animate-opacityPulseSoft drop-shadow-[0_0_2px_#ffffff]">{timeLeft.hours}</span>
            <span className="text-sm sm:text-base font-mono text-white opacity-80 mt-2">HOURS</span>
          </div>
          <div className="flex flex-col items-center border border-white rounded-md px-5 py-3 min-w-[80px] flex-shrink-0">
            <span className="text-5xl sm:text-6xl font-mono text-white tracking-widest animate-opacityPulseSoft drop-shadow-[0_0_2px_#ffffff]">{timeLeft.minutes}</span>
            <span className="text-sm sm:text-base font-mono text-white opacity-80 mt-2">MINUTES</span>
          </div>
          <div className="flex flex-col items-center border border-white rounded-md px-5 py-3 min-w-[80px] flex-shrink-0">
            <span className="text-5xl sm:text-6xl font-mono text-white tracking-widest animate-opacityPulseSoft drop-shadow-[0_0_2px_#ffffff]">{timeLeft.seconds}</span>
            <span className="text-sm sm:text-base font-mono text-white opacity-80 mt-2">SECONDS</span>
          </div>
        </div>
        <div className="w-full max-w-xs px-4">
          <RazorpayButton />
        </div>
      </main>

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
    </div>
  );
};