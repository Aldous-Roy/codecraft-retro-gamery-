import { useState, useEffect, useRef } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./pages/Header";
import "./App.css";
import TerminalNav from "./components/TerminalNav";
import VantaBackground from "./components/VantaBackground";
import terminal from "../src/icons/terminal.svg";
import Prize from "./pages/Prize";
import Instructions from "./pages/Instructions";
import TimeLine from "./components/TimeLine";
import InitialLoading from "./pages/InitialLoading";
import Contact from "./components/Contact";
// import Masterminds from "./pages/Masterminds";

function App() {
  const [showTerminal, setShowTerminal] = useState(false);
  const [loading, setLoading] = useState(true);
  const [canClose, setCanClose] = useState(false);
  const firstLoad = useRef(true);

  useEffect(() => {
    const timer = setTimeout(() => setCanClose(true), 20000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (canClose && e.key === "Enter") {
        setLoading(false);
      }
    };
    const handleTouch = () => {
      if (canClose) {
        setLoading(false);
      }
    };
    window.addEventListener("keydown", handleKeyPress);
    window.addEventListener("click", handleTouch);
    window.addEventListener("touchstart", handleTouch);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
      window.removeEventListener("click", handleTouch);
      window.removeEventListener("touchstart", handleTouch);
    };
  }, [canClose]);

  if (loading && firstLoad.current) {
    firstLoad.current = false;
    return <InitialLoading />;
  }

  return (
    <Router>
      <div className="overflow-y-auto relative">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <Prize />
                <TimeLine />
                <Instructions />
              </>
            }
          />
          <Route path="/contact" element={<Contact />} />
          {/* <Route path="/masterminds" element={<Masterminds />} /> */}
        </Routes>

        {/* Terminal button */}
        <button
          className="fixed bottom-4 right-4 w-14 h-14 p-2 neon-border rounded-full bg-white/80 hover:neon-glow flex items-center justify-center z-50"
          onClick={() => setShowTerminal(true)}
          aria-label="Open Terminal"
        >
          <img
            src={terminal}
            alt="Terminal Icon"
            className="w-8 h-8 neon-text"
          />
        </button>

        {showTerminal && (
          <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
            <div
              className="relative bg-gray-900 p-6 rounded-lg shadow-lg neon-border w-[90%] h-[80%] sm:w-[600px] sm:h-[400px] overflow-y-auto"
              style={{
                borderImage: "linear-gradient(45deg, #00fff7, #ff00ff) 1",
              }}
            >
              <button
                className="absolute top-2 right-2 text-white text-xl font-bold hover:neon-glow"
                onClick={() => setShowTerminal(false)}
                aria-label="Close Terminal Modal"
              >
                &times;
              </button>
              <TerminalNav />
            </div>
          </div>
        )}
      </div>
    </Router>
  );
}

export default App;
