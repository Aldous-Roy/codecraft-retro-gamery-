import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const coordinators = [
  { name: "Dr. Nithya M", role: "HOD", phone: "999-888-7777", github: "https://github.com/nithya", linkedin: "https://linkedin.com/in/nithya", image: "nithya.png", type: "faculty" },
  { name: "Mr.Yuvaraj G", role: "Faculty", info: "Full Stack Web Developer", phone: "123-456-7890", image: "nithya.png", type: "faculty", github: "https://github.com/yuvaraj", linkedin: "https://linkedin.com/in/yuvaraj" },
  { name: "Ms Shiny A", role: "Faculty", info: "AR/VR Developer", phone: "234-567-8901", image: "/nithya.png", type: "faculty", github: "https://github.com/shinya", linkedin: "https://linkedin.com/in/shinya" },
  { name: "Hasumathi", role: "Student", info: "Front-End Developer", phone: "345-678-9012", image: "/nithya.png", type: "student", github: "https://github.com/hasumathi", linkedin: "https://linkedin.com/in/hasumathi" },
  { name: "Kirithika", role: "Student", info: "UI/UX Designer", phone: "456-789-0123", image: "/nithya.png", type: "student", github: "https://github.com/kirithika", linkedin: "https://linkedin.com/in/kirithika" },
  { name: "Lakshitha", role: "Student", info: "Full Stack Developer", phone: "567-890-1234", image: "nithya.png", type: "student", github: "https://github.com/lakshitha", linkedin: "https://linkedin.com/in/lakshitha" },
  { name: "Rishi", role: "Student", info: "Mobile App Developer", phone: "678-901-2345", image: "nithya.png", type: "student", github: "https://github.com/rishi", linkedin: "https://linkedin.com/in/rishi" },
  { name: "Selva Vignesh", role: "Student", info: "Game Developer", phone: "789-012-3456", image: "nithya.png", type: "student", github: "https://github.com/selvavignesh", linkedin: "https://linkedin.com/in/selvavignesh" },
  { name: "Aldous Roy", role: "Student", info: "AI/ML Developer", phone: "890-123-4567", image: "nithya.png", type: "student", github: "https://github.com/aldousroy", linkedin: "https://linkedin.com/in/aldousroy" },
];

const Contact = () => {
  const [selected, setSelected] = useState(null);
  const [animateCards, setAnimateCards] = useState(false);
  const navigate = useNavigate();

  const faculty = coordinators.filter(c => c.type === "faculty");
  const students = coordinators.filter(c => c.type === "student");

  useEffect(() => {
    // Trigger staggered animation after mount
    const timer = setTimeout(() => setAnimateCards(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative py-12 bg-black text-[#33ff33] font-[VT323] overflow-x-hidden">
      {/* Floating Neon Grid Background */}
      <div className="absolute inset-0 pointer-events-none -z-20">
        <canvas id="neonGrid" className="w-full h-full" />
      </div>

      {/* Video Background */}
      <video
        className="absolute w-full h-full object-cover blur-xs"
        src="/0901.mp4"
        autoPlay
        loop
        muted
      />

      <div className="max-w-4xl mx-auto mb-12 flex items-center gap-4 relative z-10">
        <button
          onClick={() => navigate(-1)}
          className="text-2xl border border-[#33ff33] rounded px-3 py-1 hover:shadow-[0_0_10px_#00ff00] text-[#33ff33] font-[VT323] transition-all duration-300"
          aria-label="Back"
        >
          &larr;
        </button>
        <h2 className="text-5xl flicker text-white">The legend</h2>
      </div>

      {/* Faculty Section */}
      <div className="p-6 mb-16 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 max-w-4xl mx-auto">
          {faculty.map((person, index) => (
            <div
              key={index}
              className={`relative flex flex-col items-center cursor-pointer bg-black/40 rounded-lg p-5 shadow-[0_0_10px_#00cc44] transition-transform duration-500 transform-gpu
                hover:rotate-3 hover:scale-[1.06] hover:shadow-[0_0_18px_#00cc44] hover:brightness-95
                tilt3d
                ${animateCards ? `animate-fadeInUp delay-[${index * 150}ms]` : "opacity-0"}
              `}
              onClick={() => setSelected(person)}
              aria-label={`View details for ${person.name}`}
            >
              <div className="relative w-32 h-32 rounded-full overflow-hidden shadow-[0_0_14px_#00cc44]">
                <img
                  src={person.image}
                  alt={person.name}
                  className="w-full h-full object-cover rounded-full"
                />
                {/* Neon particle sparks */}
                <span className="particle-spark absolute top-1 left-2 w-1 h-1 rounded-full bg-[#33ff33] opacity-75 animate-spark1"></span>
                <span className="particle-spark absolute bottom-3 right-4 w-1.5 h-1.5 rounded-full bg-[#33ff33] opacity-60 animate-spark2"></span>
                <span className="particle-spark absolute top-5 right-3 w-1 h-1 rounded-full bg-[#33ff33] opacity-50 animate-spark3"></span>
              </div>
              <span className="mt-4 text-xl text-white">{person.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Students Section */}
      <div className="p-6 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 max-w-3xl mx-auto">
          {students.map((person, index) => (
            <div
              key={index}
              className={`relative w-40 h-40 perspective cursor-pointer ${animateCards ? `animate-fadeInUp delay-[${(index + faculty.length) * 150}ms]` : "opacity-0"}`}
              onClick={() => setSelected(person)}
              aria-label={`View details for ${person.name}`}
            >
              <div className="relative w-full h-full duration-700 transform-style-preserve-3d transition-transform rounded-lg shadow-[0_0_15px_#00ff00] hover:rotate-y-180 hover:shadow-[0_0_30px_#00ff00]">
                <div className="absolute w-full h-full backface-hidden flex flex-col items-center justify-center rounded-lg bg-black/90 p-4">
                  <img
                    src={person.image}
                    alt={person.name}
                    className="w-32 h-32 rounded-full shadow-[0_0_15px_#00ff00]"
                  />
                  {/* Neon particle sparks */}
                  <span className="particle-spark absolute top-3 left-3 w-1 h-1 rounded-full bg-[#33ff33] opacity-75 animate-spark1"></span>
                  <span className="particle-spark absolute bottom-5 right-5 w-1.5 h-1.5 rounded-full bg-[#33ff33] opacity-60 animate-spark2"></span>
                </div>
                <div className="absolute w-full h-full backface-hidden rotate-y-180 flex flex-col items-center justify-center rounded-lg bg-black/90 text-[#33ff33] text-center text-lg flicker p-4 shadow-[0_0_15px_#00ff00]">
                  <h3 className="font-bold text-xl">{person.name}</h3>
                  <p className="mt-1">{person.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for selected coordinator */}
      {selected && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50"
          onClick={() => setSelected(null)}
        >
          <div
            className="relative bg-black/90 border-4 border-gradient-neon rounded-lg p-8 w-80 flex flex-col items-center shadow-[0_0_40px_#00ff00] animate-fadeIn animate-scaleUp scale-95"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-3 right-3 text-[#33ff33] text-3xl font-bold hover:shadow-[0_0_25px_#00ff00] transition-all duration-300"
              onClick={() => setSelected(null)}
              aria-label="Close"
            >
              &times;
            </button>
            <img
              src={selected.image}
              alt={selected.name}
              className="w-32 h-32 rounded-full mb-6 border-4 border-gradient-neon shadow-[0_0_20px_#00ff00]"
            />
            <h3 className="text-2xl mb-2">{selected.name}</h3>
            <p className="mb-1 text-lg">{selected.role}</p>
            {selected.info && <p className="text-sm mb-1">{selected.info}</p>}
            <p className="text-sm mb-3">{selected.phone}</p>
            <div className="flex space-x-6 mt-3">
              <a href={selected.github} target="_blank" rel="noopener noreferrer" className="text-[#33ff33] hover:scale-110 transition transform relative group">
                {/* GitHub SVG Icon */}
                <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.1 3.29 9.42 7.86 10.95.58.11.79-.25.79-.56v-2.06c-3.2.7-3.88-1.54-3.88-1.54-.53-1.36-1.3-1.72-1.3-1.72-1.07-.73.08-.72.08-.72 1.18.08 1.8 1.21 1.8 1.21 1.05 1.8 2.75 1.28 3.42.98.11-.76.41-1.28.75-1.57-2.55-.29-5.23-1.27-5.23-5.64 0-1.25.45-2.27 1.21-3.07-.12-.29-.52-1.46.11-3.05 0 0 .99-.32 3.24 1.17a11.2 11.2 0 0 1 5.88 0c2.25-1.49 3.24-1.17 3.24-1.17.63 1.59.23 2.76.11 3.05.76.8 1.21 1.82 1.21 3.07 0 4.38-2.68 5.35-5.23 5.63.42.36.8 1.08.8 2.18v3.24c0 .31.21.68.8.56A10.99 10.99 0 0 0 23.5 12c0-6.27-5.23-11.5-11.5-11.5z"/>
                </svg>
                <span className="particle-burst absolute top-1/2 left-1/2 w-6 h-6 rounded-full pointer-events-none opacity-0 group-hover:opacity-100 animate-particleBurst"></span>
              </a>
              <a href={selected.linkedin} target="_blank" rel="noopener noreferrer" className="text-[#33ff33] hover:scale-110 transition transform relative group">
                {/* LinkedIn SVG Icon */}
                <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4.98 3.5C3.34 3.5 2 4.84 2 6.48s1.34 2.98 2.98 2.98 2.98-1.34 2.98-2.98S6.62 3.5 4.98 3.5zM2 21.5h5.96v-12H2v12zM9.75 9.5h5.72v1.64h.08c.8-1.52 2.76-3.12 5.68-3.12 6.08 0 7.2 4 7.2 9.16v10.32H17.9v-9.12c0-2.18-.04-5-3.04-5s-3.5 2.38-3.5 4.84v9.28H9.75v-12z"/>
                </svg>
                <span className="particle-burst absolute top-1/2 left-1/2 w-6 h-6 rounded-full pointer-events-none opacity-0 group-hover:opacity-100 animate-particleBurst"></span>
              </a>
            </div>
          </div>
        </div>
      )}

      <style>{`
        /* Neon Gradient Border */
        .border-gradient-neon {
          border-image: linear-gradient(45deg, #00ff99, #33ff33, #00ff99, #33ff33);
          border-image-slice: 1;
        }

        /* Perspective and 3D */
        .perspective {
          perspective: 1000px;
        }
        .transform-style-preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }

        /* Tilt 3D effect for faculty cards */
        .tilt3d:hover {
          animation: tiltGlow 0.6s ease forwards;
        }
        @keyframes tiltGlow {
          0% {
            transform: rotateX(0deg) rotateY(0deg);
            filter: drop-shadow(0 0 3px #00cc44);
          }
          50% {
            transform: rotateX(5deg) rotateY(10deg);
            filter: drop-shadow(0 0 12px #00cc44);
          }
          100% {
            transform: rotateX(0deg) rotateY(0deg);
            filter: drop-shadow(0 0 3px #00cc44);
          }
        }

        /* Particle sparks animations */
        .particle-spark {
          animation-timing-function: ease-in-out;
          animation-iteration-count: infinite;
          animation-direction: alternate;
        }
        .animate-spark1 {
          animation-name: sparkMove1;
          animation-duration: 2.5s;
        }
        .animate-spark2 {
          animation-name: sparkMove2;
          animation-duration: 3s;
        }
        .animate-spark3 {
          animation-name: sparkMove3;
          animation-duration: 2.8s;
        }
        @keyframes sparkMove1 {
          0% { transform: translate(0, 0) scale(1); opacity: 0.8; }
          100% { transform: translate(2px, -2px) scale(1.2); opacity: 0.4; }
        }
        @keyframes sparkMove2 {
          0% { transform: translate(0, 0) scale(1); opacity: 0.7; }
          100% { transform: translate(-3px, 3px) scale(1.3); opacity: 0.3; }
        }
        @keyframes sparkMove3 {
          0% { transform: translate(0, 0) scale(1); opacity: 0.6; }
          100% { transform: translate(1.5px, 1.5px) scale(1.1); opacity: 0.5; }
        }

        /* Fade in staggered animation */
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeInUp {
          animation-name: fadeInUp;
          animation-fill-mode: forwards;
          animation-duration: 0.6s;
          animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        }

        /* Modal fade and scale animations */
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scaleUp {
          from { transform: scale(0.95); }
          to { transform: scale(1); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease forwards;
        }
        .animate-scaleUp {
          animation: scaleUp 0.3s ease forwards;
        }

        /* Particle burst on icon hover */
        .particle-burst {
          background: radial-gradient(circle, #33ff33 0%, transparent 70%);
          filter: drop-shadow(0 0 8px #00ff00);
          transform-origin: center;
          animation-fill-mode: forwards;
        }
        .animate-particleBurst {
          animation-name: particleBurst;
          animation-duration: 0.8s;
          animation-timing-function: ease-out;
          animation-iteration-count: 1;
          animation-play-state: paused;
        }
        .group:hover .animate-particleBurst {
          animation-play-state: running;
        }
        @keyframes particleBurst {
          0% {
            opacity: 0.8;
            transform: translate(-50%, -50%) scale(0.5);
          }
          50% {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1.2);
          }
          100% {
            opacity: 0;
            transform: translate(-50%, -50%) scale(1.5);
          }
        }

        /* Neon Grid Canvas styles */
        #neonGrid {
          display: block;
          width: 100%;
          height: 100%;
        }

        /* Flicker text effect */
        .flicker {
          animation: flickerAnimation 3s infinite alternate;
        }
        @keyframes flickerAnimation {
          0%, 19%, 21%, 23%, 25%, 54%, 56%, 100% {
            opacity: 1;
            text-shadow:
              0 0 5px #33ff33,
              0 0 10px #33ff33,
              0 0 20px #00ff00,
              0 0 30px #00ff00,
              0 0 40px #00ff00,
              0 0 50px #00ff00,
              0 0 75px #00ff00;
          }
          20%, 22%, 24%, 55% {
            opacity: 0.4;
            text-shadow: none;
          }
        }
      `}</style>

      <script dangerouslySetInnerHTML={{
        __html: `
          (() => {
            const canvas = document.getElementById('neonGrid');
            if (!canvas) return;
            const ctx = canvas.getContext('2d');
            let width, height;
            let gridSize = 40;
            let offset = 0;

            function resize() {
              width = canvas.width = window.innerWidth;
              height = canvas.height = window.innerHeight;
            }
            window.addEventListener('resize', resize);
            resize();

            function drawGrid() {
              ctx.clearRect(0, 0, width, height);
              ctx.strokeStyle = 'rgba(51, 255, 51, 0.15)';
              ctx.lineWidth = 1;

              for (let x = -gridSize + (offset % gridSize); x < width; x += gridSize) {
                ctx.beginPath();
                ctx.moveTo(x, 0);
                ctx.lineTo(x, height);
                ctx.stroke();
              }
              for (let y = -gridSize + (offset % gridSize); y < height; y += gridSize) {
                ctx.beginPath();
                ctx.moveTo(0, y);
                ctx.lineTo(width, y);
                ctx.stroke();
              }
            }

            function animate() {
              offset += 0.5;
              drawGrid();
              requestAnimationFrame(animate);
            }
            animate();
          })();
        `
      }} />
    </section>
  );
};

export default Contact;