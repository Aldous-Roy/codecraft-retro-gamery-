import React from "react";

const events = [
  { time: "09:00 – 09:30", activity: "Registrations & Welcome Kit" },
  { time: "09:30 – 10:00", activity: "Opening Ceremony & Keynote" },
  { time: "10:00 – 13:00", activity: "Hackathon Coding Session" },
  { time: "13:00 – 14:00", activity: "Lunch Break" },
  { time: "14:00 – 17:00", activity: "Hackathon Continues" },
  { time: "17:00 – 18:00", activity: "Project Submission & Demos" },
  { time: "18:00 – 19:00", activity: "Judging & Networking" },
  { time: "19:00 – 19:30", activity: "Winners Announcement & Closing" },
];

const TimeLine = () => {
  return (
    <div className="flex flex-col items-center py-10 text-[#33ff33] font-[VT323] min-h-screen w-full bg-black relative overflow-hidden">
      <h1 className="text-5xl mb-12 flicker tracking-widest neon-text">Event Timeline</h1>
      <div className="absolute inset-0 bg-[linear-gradient(transparent_95%,rgba(0,255,0,0.1)_100%)] bg-[length:100%_2px] pointer-events-none" />
      <div className="relative border-l-2 border-[#33ff33]/40 neon-border">
        {events.map((event, index) => (
          <div key={index} className={`mb-12 flex ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"} items-center`}>
            <div className="relative flex-1 px-6">
              <div className="absolute w-4 h-4 bg-[#33ff33] rounded-full top-1/2 -translate-y-1/2 shadow-[0_0_15px_#00ff00] animate-pulse -left-2" />
              <p className="text-xl mb-1 flicker">{event.time}</p>
              <p className="text-2xl">{event.activity}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TimeLine;
