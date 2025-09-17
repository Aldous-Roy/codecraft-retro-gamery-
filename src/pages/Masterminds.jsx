import React from "react";

const Masterminds = () => {
  // Separate arrays for faculty and students
  const faculty = [
    { name: "Dr.M.Nithya", image: "nithya.png", position: "Head Of The Department" },
    { name: "Mrs.A.Shiny", image: "shiny.png", position: "Staff Coordinator" },
    { name: "Mr.G.Yuvaraj", image: "yuvaraj.png", position: "Staff Coordinator" },
  ];
  const students = [
    { name: "Aldous Roy", phone: "93449-25334", image: "Aldous.jpeg" },
    { name: "Selva Vignesh S M", phone: "90804-13155", image: "selva.jpeg" },
    { name: "Rishi Vel A", phone: "86105-56160", image: "rishi.jpeg" },
    { name: "Shreya R", phone: "91763-35274", image: "shreya.jpeg" },
    { name: "Kirithika S", phone: "93603-03848", image: "kirithika.jpeg" },
    { name: "Diviya Darshini V", phone: "86101-59124", image: "dd.jpeg" },
  ];
  return (
    <div id="masterminds" className="min-h-screen w-full flex flex-col items-center my-20 ">
      <section className="w-full max-w-4xl">
        <h2 className="text-center mb-6 text-4xl">Faculty Coordinators</h2>
        <div className="flex flex-wrap justify-center gap-14">
          {faculty.map((f) => (
            <div key={f.name}>
              <div className="bg-[#111] p-2 rounded-full">
                <img
                  src={f.image}
                  alt={f.name}
                  className="w-32 h-32 md:w-40 md:h-40 object-cover rounded-full"
                />
              </div>
              <h3 className="text-center text-lg mt-2">{f.name}</h3>
              <p className="text-center text-sm">{f.position}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="w-full max-w-4xl mt-12">
        <h2 className="text-center mb-6 text-3xl">Students Coordinators</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {students.map((s) => (
            <div key={s.name} className="text-center flex flex-col items-center gap-3">
              <img
                src={s.image}
                alt={s.name}
                className="w-32 h-32 md:w-40 md:h-40 object-cover rounded-full mx-auto"
              />
              <h3>{s.name}</h3>
              <a href={`tel:${s.phone}`} className="text-green-400 hover:underline">
                {s.phone}
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Masterminds;
