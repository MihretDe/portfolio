import React from "react";
import { Code, Palette, Zap, Users } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: <Code size={24} />,
      title: "Clean Code",
      description:
        "Writing maintainable, scalable code that stands the test of time.",
    },
    {
      icon: <Palette size={24} />,
      title: "Design First",
      description:
        "Creating beautiful interfaces that enhance user experience.",
    },
    {
      icon: <Zap size={24} />,
      title: "Performance",
      description: "Optimizing for speed and efficiency in every project.",
    },
    {
      icon: <Users size={24} />,
      title: "Collaboration",
      description: "Working closely with teams to deliver exceptional results.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">About Me</h2>
            {/* <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Full Stack Developer and Software Engineering student, passionate
              about building modern web applications and solving complex
              problems through code.
            </p> */}
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <div className="w-80 h-80 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl mx-auto mb-8 flex items-center justify-center">
                <div className="text-white text-6xl font-bold">MD</div>
              </div>
            </div>
            <div>
              {/* <h3 className="text-2xl font-semibold text-slate-800 mb-6">
                My Story
              </h3> */}
              <p className="text-slate-600 leading-relaxed mb-6">
                I’m currently pursuing my Bachelor’s degree in Software
                Engineering at Addis Ababa Science and Technology University. My
                journey into software development began with a love for
                problem-solving and has grown into a passion for creating
                digital solutions that make a real impact.
              </p>
              <p className="text-slate-600 leading-relaxed mb-6">
                I’ve worked as a Software Engineer Intern at Eskalate and Pixel
                Addis Solution, where I enhanced user interfaces, implemented
                secure authentication with NextAuth, and improved application
                performance. My projects include building responsive web
                applications such as a Job Listing App and an E-commerce
                platform using technologies like React, Next.js, Tailwind CSS,
                and TypeScript.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Beyond coding, I’m actively involved in mentoring aspiring
                developers through She Code AASTU. I’m driven by continuous
                learning, collaboration, and the belief that technology should
                improve people’s lives.
              </p>
            </div>
          </div>

          {/* <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center p-6 bg-slate-50 rounded-xl hover:shadow-lg transition-shadow duration-300">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-full mb-4">
                  {value.icon}
                </div>
                <h4 className="text-xl font-semibold text-slate-800 mb-2">{value.title}</h4>
                <p className="text-slate-600">{value.description}</p>
              </div>
            ))}
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default About;
