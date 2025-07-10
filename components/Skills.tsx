import React from 'react';

const Skills = () => {
  const skillCategories = [
  {
    title: 'Frontend',
    skills: [
      'React',
      'Next.js',
      'TypeScript',
      'JavaScript',
      'Tailwind CSS',
      'HTML5',
      'CSS3',
      'Bootstrap',           // → You’ve used Bootstrap in projects
      'Flutter',             // → From Music App and Smart Bike System                 // → For Flutter projects
    ]
  },
  {
    title: 'Backend',
    skills: [
      'Node.js',
      'Express',
      'PostgreSQL',
      'MongoDB',
      'Firebase',            // → Good to keep
      'Prisma',
      'Sanity',
      'MySQL'                // → From your résumé tech stack
    ]
  },
  {
    title: 'Tools & DevOps',
    skills: [
      'Git',
      'GitHub',              // → Explicitly mention it
      'Vercel',
      'Render',
      'Figma',
      'Jest',                // → Used in multiple projects
      'Cypress'              // → Used in multiple projects
    ]
  },
  {
    title: 'Programming Languages',
    skills: [
      'JavaScript',
      'TypeScript',
      'C++',
      'Python',
      'Java',
      'Dart'
    ]
  }
];

  return (
    <section id="skills" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Skills & Expertise</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Technologies and tools I use to bring ideas to life
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillCategories.map((category, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-xl font-semibold text-slate-800 mb-6 text-center">{category.title}</h3>
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="bg-slate-100 text-slate-700 px-4 py-2 rounded-lg text-sm font-medium text-center hover:bg-blue-100 hover:text-blue-700 transition-colors duration-200"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-slate-600 mb-8">
              Always learning and exploring new technologies to stay current with industry trends
            </p>
            {/* <div className="flex justify-center space-x-4">
              <div className="bg-white px-6 py-3 rounded-lg shadow-md">
                <span className="text-2xl font-bold text-blue-600">5+</span>
                <span className="text-slate-600 ml-2">Years Experience</span>
              </div>
              <div className="bg-white px-6 py-3 rounded-lg shadow-md">
                <span className="text-2xl font-bold text-green-600">50+</span>
                <span className="text-slate-600 ml-2">Projects Completed</span>
              </div>
              <div className="bg-white px-6 py-3 rounded-lg shadow-md">
                <span className="text-2xl font-bold text-purple-600">20+</span>
                <span className="text-slate-600 ml-2">Happy Clients</span>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;