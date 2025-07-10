"use client";
import React, { useState } from "react";
import { ExternalLink, Github, Zap, Shield, Smartphone } from "lucide-react";

const Projects = () => {
  const projects = [
     {
      title: "Employee Management System",
      description:
        "A web platform for managing employee records and roles, with secure authentication, role-based access, content management via Sanity, and notification features.",
      image:
        "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Next.js", "Sanity", "NextAuth", "Tailwind CSS"],
      features: [
        "Role-Based Access Control",
        "Sanity CMS Integration",
        "Secure Authentication with NextAuth",
        "Notification System",
      ],
      liveUrl: "https://employee-management-system-peach-six.vercel.app/login",
      githubUrl: "https://github.com/Emnet-tes/Employee-Management-System",
      category: "Full Stack",
    },
    {
      title: "Expense Tracker",
      description:
        "A full-stack expense tracking application built with React, Node.js, Express, and MongoDB. Allows users to manage and categorize expenses with a user-friendly interface.",
      image:
        "https://images.pexels.com/photos/4386370/pexels-photo-4386370.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
      features: [
        "CRUD Operations",
        "Data Visualization",
        "Responsive Design",
        "Secure API Integration",
      ],
      liveUrl: "https://expense-tracker-mepk.onrender.com/",
      githubUrl: "https://github.com/MihretDe/Expense-Tracker",
      category: "Full Stack",
    },
     {
      title: "Music Player App",
      description:
        "A feature-rich music player allowing users to search for songs, create playlists, and enjoy an immersive audio experience.",
      image:
        "https://images.pexels.com/photos/3394652/pexels-photo-3394652.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Flutter", "Dart"],
      features: [
        "Audio Playback",
        "Search by Artist or Title",
        "Custom Playlists",
        "Responsive Mobile UI",
      ],
      githubUrl: "https://github.com/MihretDe/Music-Player-app",
      category: "Mobile App",
    },
    {
      title: "Job Listing App",
      description:
        "A web application for browsing and searching job listings, with secure user authentication and optimized performance through code splitting and lazy loading.",
      image:
        "https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: [
        "React",
        "Next.js",
        "Tailwind CSS",
        "NextAuth",
        "Jest",
        "Cypress",
      ],
      features: [
        "Secure User Authentication",
        "Lazy Loading & Code Splitting",
        "Responsive Design",
        "Testing with Jest & Cypress",
      ],
      githubUrl: "https://github.com/MihretDe/a2sv-web/tree/main/task-9",
      category: "Full Stack",
    },
   
    {
      title: "Smart Bike Sharing System",
      description:
        "A smart bike-sharing system to improve urban mobility, featuring secure bike locks, GPS tracking, and real-time bike availability.",
      image:
        "https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Flutter", "Firebase"],
      features: [
        "Real-time Bike Availability",
        "GPS Tracking",
        "Secure Bike Locks",
        "Authentication with Firebase",
      ],
      githubUrl: "https://github.com/Afomia01/Smart_Bike_System",
      category: "Mobile App",
    },
    {
      title: "Task Management System",
      description:
        "A task management app built with React and Firebase, featuring authentication, real-time updates, and intuitive user experience for organizing and tracking tasks.",
      image:
        "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React", "Firebase", "Tailwind CSS"],
      features: [
        "Firebase Authentication",
        "Real-time Task Updates",
        "Intuitive UI",
        "Responsive Design",
      ],
      liveUrl: "https://task-management-f38b4.web.app/",
      githubUrl: "https://github.com/Emnet-tes/task-management-system",
      category: "Web App",
    },
   
    
    {
      title: "Currency Converter",
      description:
        "A modern currency converter web app built with Next.js and Prisma, fetching real-time exchange rates and offering a clean, responsive user interface.",
      image:
        "https://images.pexels.com/photos/4386374/pexels-photo-4386374.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Next.js", "Prisma", "Tailwind CSS"],
      features: [
        "Real-time Exchange Rates",
        "Clean, Responsive UI",
        "Fast Performance",
        "Data Persistence with Prisma",
      ],
      liveUrl: "https://currencyconverter-nu-sooty.vercel.app/",
      githubUrl: "https://github.com/MihretDe/currencyconverter",
      category: "Frontend",
    },
  ];

  const [showAll, setShowAll] = useState(false);
  const displayedProjects = showAll ? projects : projects.slice(0, 3);

  const getIcon = (feature: string) => {
    if (feature.includes("Real-time") || feature.includes("Fast"))
      return <Zap size={16} />;
    if (feature.includes("Authentication") || feature.includes("SEO"))
      return <Shield size={16} />;
    if (feature.includes("Mobile") || feature.includes("Responsive"))
      return <Smartphone size={16} />;
    return <Zap size={16} />;
  };

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">
              Featured Projects
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              A showcase of my recent work and technical achievements
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {displayedProjects.map((project, index) => (
              <div
                key={index}
                className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-slate-800 mb-3">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-slate-800 mb-2">
                      Key Features:
                    </h4>
                    <div className="grid grid-cols-2 gap-2">
                      {project.features.map((feature, featureIndex) => (
                        <div
                          key={featureIndex}
                          className="flex items-center text-sm text-slate-600"
                        >
                          <span className="text-blue-600 mr-2">
                            {getIcon(feature)}
                          </span>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex space-x-4">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 flex-1 justify-center"
                      >
                        <ExternalLink size={16} />
                        <span>Live Demo</span>
                      </a>
                    )}
                    <a
                      href={project.githubUrl}
                      className="flex items-center space-x-2 border border-slate-300 text-slate-700 px-4 py-2 rounded-lg hover:bg-slate-50 transition-colors duration-200 flex-1 justify-center"
                    >
                      <Github size={16} />
                      <span>Code</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            {!showAll && projects.length > 3 && (
              <button
                className="bg-slate-800 text-white px-8 py-3 rounded-lg hover:bg-slate-700 transition-colors duration-200 font-semibold"
                onClick={() => setShowAll(true)}
              >
                View All Projects
              </button>
            )}
            {showAll && projects.length > 3 && (
              <button
                className="bg-slate-800 text-white px-8 py-3 rounded-lg hover:bg-slate-700 transition-colors duration-200 font-semibold"
                onClick={() => setShowAll(false)}
              >
                Show Less
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
