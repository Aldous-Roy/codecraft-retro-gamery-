import { useState, useEffect, useRef } from "react";

export default function TerminalNav() {
  const [command, setCommand] = useState("");
  const [logs, setLogs] = useState([
    "> Welcome to CodeCraft Terminal",
    "> Type `help` to see available commands",
  ]);
  const [history, setHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(null);
  const logsEndRef = useRef(null);

  useEffect(() => {
    logsEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [logs]);

  const handleCommand = (e) => {
    if (e.key === "Enter") {
      if (!command.trim()) return;
      let newLogs = [...logs, `> ${command}`];

      if (command === "help") {
        newLogs.push("Available commands:");
        newLogs.push("ls          - list sections");
        newLogs.push("cd <name>   - go to section (home, prize, domain, instructions, contact, masterminds)");
        newLogs.push("clear       - clear the terminal");
        newLogs.push("echo <msg>  - print a message");
        newLogs.push("whoami      - show user");
        newLogs.push("date        - show hackathon date");
      } else if (command === "ls") {
        newLogs.push("home   prize   domain   instructions   contact   masterminds");
      } else if (command === "clear") {
        newLogs = [];
      } else if (command.startsWith("cd ")) {
        const target = command.split(" ")[1];
        const validSections = [
          "home",
          "prize",
          "domain",
          "instructions",
          "contact",
          "masterminds",
        ];
        if (validSections.includes(target)) {
          newLogs.push(`Navigating to ${target}...`);
          document.getElementById(target)?.scrollIntoView({ behavior: "smooth" });
        } else {
          newLogs.push(`bash: cd: ${target}: No such directory`);
        }
      } else if (command.startsWith("echo ")) {
        newLogs.push("Welcome to CodeCraft 2025!");
      } else if (command === "whoami") {
        newLogs.push("guest");
      } else if (command === "date") {
        newLogs.push("Hackathon starts on: Thu Oct 13 2025, 00:00 IST");
      } else {
        newLogs.push("command not found");
      }

      setLogs(newLogs);
      setHistory((prev) => [...prev, command]);
      setHistoryIndex(null);
      setCommand("");
    } else if (e.key === "ArrowUp") {
      if (history.length === 0) return;
      setHistoryIndex((prev) => {
        const newIndex = prev === null ? history.length - 1 : Math.max(prev - 1, 0);
        setCommand(history[newIndex]);
        return newIndex;
      });
    } else if (e.key === "ArrowDown") {
      if (history.length === 0) return;
      setHistoryIndex((prev) => {
        if (prev === null) return null;
        const newIndex = Math.min(prev + 1, history.length);
        if (newIndex === history.length) {
          setCommand("");
          return null;
        } else {
          setCommand(history[newIndex]);
          return newIndex;
        }
      });
    }
  };

  return (
    <div
      className="w-11/12 max-w-4xl bg-black rounded-md font-mono text-green-400 p-4 border-4 flex flex-col"
      style={{
        borderImageSlice: 1,
        borderWidth: "4px",
        borderImageSource:
          "linear-gradient(45deg, #00ff00, #00ccff, #ff00ff, #00ff00)",
        boxShadow:
          "0 0 15px 2px rgba(0, 255, 0, 0.6), 0 0 8px 1px rgba(0, 204, 255, 0.5)",
      }}
    >
      <div
        className="overflow-y-auto max-h-[400px] mb-2"
        style={{ scrollbarWidth: "thin", scrollbarColor: "#00ff00 transparent" }}
      >
        {logs.map((line, idx) => (
          <p key={idx} className="leading-relaxed select-text">
            {line}
          </p>
        ))}
        <div ref={logsEndRef} />
      </div>
      <div className="flex items-center">
        <span className="mr-1">&gt;</span>
        <input
          type="text"
          className="bg-black outline-none text-green-400 flex-grow text-lg font-mono tracking-wide"
          value={command}
          onChange={(e) => setCommand(e.target.value)}
          onKeyDown={handleCommand}
          autoFocus
          spellCheck={false}
          style={{ caretColor: "transparent" }}
        />
        <span
          className="ml-1 w-3 h-6 bg-green-400 animate-blink"
          style={{ borderRadius: "2px" }}
          aria-hidden="true"
        />
      </div>
      <style>{`
        @keyframes blink {
          0%, 50%, 100% { opacity: 1; }
          25%, 75% { opacity: 0; }
        }
        .animate-blink {
          animation: blink 1s step-start infinite;
        }
        ::-webkit-scrollbar {
          width: 8px;
          height: 8px;
        }
        ::-webkit-scrollbar-track {
          background: transparent;
        }
        ::-webkit-scrollbar-thumb {
          background-color: #00ff00;
          border-radius: 10px;
          border: 2px solid transparent;
          background-clip: content-box;
        }
      `}</style>
    </div>
  );
}