import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Github, Linkedin, Globe } from "lucide-react";

export const Resume = () => {
  const contactInfo = {
    name: "Puspal Das",
    title: "Backend & MERN Stack Developer",
    email: "puspaldas17@gmail.com",
    location: "Howrah, India",
    github: "github.com/Puspaldas17",
    linkedin: "linkedin.com/in/puspal-das"
  };

  const skills = {
    frontend: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS", "Bootstrap"],
    backend: ["Node.js", "Express.js"],
    database: ["MongoDB"],
    tools: ["Git", "GitHub", "Postman", "VS Code", "npm"]
  };

  const projects = [
    {
      title: "HospEase",
      description: "Hospital Administration Management System for patient records, staff scheduling, and medical resource tracking",
      technologies: ["Node.js", "Express", "MongoDB", "React"],
      url: "github.com/Puspaldas17/HospEase"
    },
    {
      title: "LibraSync",
      description: "Online library management system with Handlebars templating and Google Books API integration",
      technologies: ["Node.js", "Express", "Handlebars", "SQL", "Google Books API"],
      url: "github.com/Puspaldas17/LibraSync"
    },
    {
      title: "MediVault",
      description: "Secure health portal for managing medical records, booking appointments, and accessing health information",
      technologies: ["HTML", "JavaScript", "MySQL"],
      url: "github.com/Puspaldas17/MediVault"
    }
  ];

  const experience = [
    {
      title: "Full-Stack Web Developer",
      period: "2022 - Present",
      description: "Developed end-to-end web applications using React, Node.js, and MongoDB with features including user authentication, real-time data, and responsive design"
    },
    {
      title: "API Development & Integration",
      period: "2022 - Present",
      description: "Designed RESTful APIs with Express.js, integrated third-party services, implemented JWT authentication, and optimized database queries"
    }
  ];

  return (
    <div className="resume-container max-w-4xl mx-auto bg-white text-gray-900 print:text-black">
      {/* Header */}
      <div className="resume-header bg-gradient-to-r from-blue-600 to-blue-800 text-white p-8 print:bg-gray-900">
        <h1 className="text-4xl font-bold mb-2">{contactInfo.name}</h1>
        <h2 className="text-xl mb-4 opacity-90">{contactInfo.title}</h2>
        
        <div className="flex flex-wrap gap-4 text-sm">
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4" />
            <span>{contactInfo.email}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            <span>{contactInfo.location}</span>
          </div>
          <div className="flex items-center gap-2">
            <Github className="w-4 h-4" />
            <span>{contactInfo.github}</span>
          </div>
        </div>
      </div>

      <div className="p-8 space-y-8">
        {/* Summary */}
        <section className="resume-section">
          <h3 className="text-2xl font-bold mb-3 text-gray-900 border-b-2 border-gray-300 pb-2">Professional Summary</h3>
          <p className="text-gray-700 leading-relaxed">
            Backend & MERN Stack Developer with 2+ years of learning experience. Passionate about building scalable backends 
            and modern web applications. Strong expertise in Node.js, Express, MongoDB, and React with a focus on creating 
            robust APIs and seamless digital experiences.
          </p>
        </section>

        {/* Skills */}
        <section className="resume-section">
          <h3 className="text-2xl font-bold mb-3 text-gray-900 border-b-2 border-gray-300 pb-2">Technical Skills</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold mb-2 text-gray-800">Frontend Development</h4>
              <p className="text-gray-700">{skills.frontend.join(", ")}</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2 text-gray-800">Backend Development</h4>
              <p className="text-gray-700">{skills.backend.join(", ")}</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2 text-gray-800">Database</h4>
              <p className="text-gray-700">{skills.database.join(", ")}</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2 text-gray-800">Tools & Others</h4>
              <p className="text-gray-700">{skills.tools.join(", ")}</p>
            </div>
          </div>
        </section>

        {/* Experience */}
        <section className="resume-section">
          <h3 className="text-2xl font-bold mb-3 text-gray-900 border-b-2 border-gray-300 pb-2">Experience</h3>
          <div className="space-y-4">
            {experience.map((exp, index) => (
              <div key={index} className="print:break-inside-avoid">
                <div className="flex justify-between items-start mb-1">
                  <h4 className="font-semibold text-gray-900">{exp.title}</h4>
                  <span className="text-sm text-gray-600">{exp.period}</span>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">{exp.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section className="resume-section">
          <h3 className="text-2xl font-bold mb-3 text-gray-900 border-b-2 border-gray-300 pb-2">Key Projects</h3>
          <div className="space-y-4">
            {projects.map((project, index) => (
              <div key={index} className="print:break-inside-avoid">
                <h4 className="font-semibold text-gray-900 mb-1">{project.title}</h4>
                <p className="text-gray-700 text-sm mb-2">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-1">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="text-xs bg-gray-200 text-gray-800 px-2 py-1 rounded print:border print:border-gray-400">
                      {tech}
                    </span>
                  ))}
                </div>
                <p className="text-xs text-gray-600">{project.url}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="resume-section">
          <h3 className="text-2xl font-bold mb-3 text-gray-900 border-b-2 border-gray-300 pb-2">Education</h3>
          <div className="print:break-inside-avoid">
            <h4 className="font-semibold text-gray-900">B.Tech in Computer Science</h4>
            <p className="text-gray-700 text-sm">Pursuing • Focus on Software Development & Backend Systems</p>
          </div>
        </section>
      </div>
    </div>
  );
};
