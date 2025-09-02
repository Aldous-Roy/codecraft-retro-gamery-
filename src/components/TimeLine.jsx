import React from "react";

const events = [
  { time: "09:30", activity: "Reporting & Welcome Kit" },
  { time: "10:00", activity: "Inaugural" },
  { time: "11:00", activity: "Countdown Starts!" },
  { time: "12:30 pm - 1:30 pm", activity: "Lunch" },
  { time: "8:00 pm", activity: "Dinner" },
  { time: "11:00 am", activity: "Countdown Ends!" },
  { time: "11:30 am", activity: "Valedictory" },
  { time: "12:00 pm", activity: "Code Craft Ends!!" },
];

const TimeLine = () => {
  return (
    <div className="flex flex-col items-center py-10 text-[#33ff33] font-[VT323] min-h-screen w-full bg-black relative overflow-hidden">
      <h1 className="text-5xl mb-8 flicker tracking-widest text-white">Event Timeline</h1>
      <div className="absolute inset-0 bg-[linear-gradient(transparent_95%,rgba(0,255,0,0.1)_100%)] bg-[length:100%_2px] pointer-events-none" />
      <div className="relative border-l-2 border-[#33ff33]/40 neon-border">
        {events.map((event, index) => (
          <div key={index} className={`mb-6 flex ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"} items-center`}>
            <div className="relative flex-1 px-6">
              <div className="absolute w-4 h-4 bg-[#33ff33] rounded-full top-1/2 -translate-y-1/2 shadow-[0_0_15px_#00ff00] animate-pulse -left-2" />
              <p className="text-xl mb-1 flicker">{event.time}</p>
              <p className="text-2xl text-white">{event.activity}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TimeLine;
