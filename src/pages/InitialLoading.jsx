import React, { useEffect, useState } from "react";

const bootLines = [
  "Booting CodeCraft v2.1...",
  "Checking memory .................. OK",
  "Loading kernel modules ........... OK",
  "Initializing devices ............. OK",
  "Mounting filesystem .............. OK",
  "[WARNING] Network latency detected",
  "Starting network services ........ OK",
  "System ready. Welcome to CodeCraft OS.",
  "Press Enter key to continue_"
];

const InitialLoading = ({ onFinish }) => {
  const [lines, setLines] = useState([]); // completed lines
  const [currentLine, setCurrentLine] = useState(""); // current typing line
  const [lineIndex, setLineIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (lineIndex < bootLines.length) {
      let charIndex = 0;
      const line = bootLines[lineIndex];
      const typeInterval = setInterval(() => {
        if (charIndex <= line.length) {
          setCurrentLine(line.substring(0, charIndex));
          charIndex++;
        } else {
          clearInterval(typeInterval);
          setLines((prev) => [...prev, line]);
          setCurrentLine("");
          setTimeout(() => {
            setLineIndex((prev) => prev + 1);
          }, Math.random() * 600 + 200); // random pause before next line
        }
      }, 30 + Math.random() * 40); // random typing speed
      return () => clearInterval(typeInterval);
    } else {
      setIsComplete(true);
      if (onFinish) {
        const timer = setTimeout(() => {
          onFinish();
        }, 20000);
        return () => clearTimeout(timer);
      }
    }
  }, [lineIndex, onFinish]);

  useEffect(() => {
    if (!isComplete) return;
    const handleKeyPress = () => {
      if (onFinish) onFinish();
    };
    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [isComplete, onFinish]);

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-black text-[#00ff00] font-mono text-lg p-6">
      <pre className="w-full max-w-2xl whitespace-pre-wrap relative z-10">
        {lines.join("\n")}
        {currentLine}
        {!isComplete && <span className="animate-pulse">_</span>}
      </pre>
    </div>
  );
};

export default InitialLoading;