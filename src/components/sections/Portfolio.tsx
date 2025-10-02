import React, { useState, useEffect } from "react";
import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useScrollAnimation, useStaggeredAnimation } from "@/hooks/use-scroll-animation";
import { ProjectCardSkeleton } from "@/components/ui/loading-skeleton";
import medivaultCover from "@/assets/medivault-cover.jpg";

const projects = [
  {
    id: 1,
    title: "MediVault",
    description: "A comprehensive healthcare management platform built with modern web technologies, featuring secure patient data management and appointment scheduling.",
    image: medivaultCover,
    technologies: ["Node.js", "Express", "MongoDB", "React", "JWT"],
    liveUrl: "https://medivault-demo.netlify.app",
    githubUrl: "https://github.com/Puspaldas17/MediVault"
  },
  {
    id: 2,
    title: "E-Commerce API",
    description: "RESTful API for e-commerce platform with advanced features like payment integration, inventory management, and real-time notifications.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop",
    technologies: ["Node.js", "Express", "PostgreSQL", "Redis", "Stripe"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    id: 3,
    title: "Task Management System",
    description: "Full-stack task management application with real-time collaboration features, built using the MERN stack.",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Socket.io"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    id: 4,
    title: "Authentication Microservice",
    description: "Scalable authentication and authorization service with JWT tokens, role-based access control, and OAuth integration.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop",
    technologies: ["Node.js", "Express", "PostgreSQL", "JWT", "OAuth"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    id: 5,
    title: "Real-time Chat Application",
    description: "Modern chat application with real-time messaging, file sharing, and group chat functionality.",
    image: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=600&h=400&fit=crop",
    technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Cloudinary"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    id: 6,
    title: "Blog CMS",
    description: "Content Management System for blogging platform with rich text editor, SEO optimization, and analytics dashboard.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop",
    technologies: ["Next.js", "Node.js", "MongoDB", "TailwindCSS", "MDX"],
    liveUrl: "#",
    githubUrl: "#"
  }
];

const Portfolio = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { elementRef: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { elementRef: gridRef, isItemVisible } = useStaggeredAnimation(projects.length, 200);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="portfolio" className="py-12 xs:py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32 px-4 xs:px-6 sm:px-8 lg:px-10 xl:px-12">
      <div className="max-w-7xl 2xl:max-w-[1600px] mx-auto">
        <div 
          ref={titleRef}
          className={`text-center mb-12 xs:mb-14 sm:mb-16 md:mb-18 lg:mb-20 transition-all duration-1000 ${
            titleVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4 xs:mb-5 sm:mb-6 font-sans">
            Impactful Builds
          </h2>
          <p className="text-base xs:text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl xl:max-w-4xl mx-auto font-sans px-4 xs:px-0">
            Turning complex ideas into scalable, real-world applications.
          </p>
        </div>

        {isLoading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 xs:gap-5 sm:gap-6 lg:gap-7 xl:gap-8">
            {Array.from({ length: 6 }).map((_, i) => (
              <ProjectCardSkeleton key={i} />
            ))}
          </div>
        ) : (
          <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 xs:gap-5 sm:gap-6 lg:gap-7 xl:gap-8">
            {projects.map((project, index) => (
              <Card 
                key={project.id}
                className={`group overflow-hidden border hover:shadow-xl transition-all duration-500 bg-card/50 backdrop-blur-sm hover:scale-[1.02] hover:-translate-y-1 ${
                  isItemVisible(index) ? 'animate-zoom-in' : 'opacity-0 scale-90'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-40 xs:h-44 sm:h-48 md:h-52 lg:h-56 xl:h-60 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  
                  <div className="p-4 xs:p-5 sm:p-6">
                    <h3 className="text-lg xs:text-xl md:text-2xl font-bold text-foreground mb-2 xs:mb-3 group-hover:text-primary transition-colors font-sans">
                      {project.title}
                    </h3>
                    <p className="text-sm xs:text-base text-muted-foreground mb-3 xs:mb-4 line-clamp-2 font-sans">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-1.5 xs:gap-2 mb-3 xs:mb-4">
                      {project.technologies.map((tech) => (
                        <Badge 
                          key={tech} 
                          variant="secondary" 
                          className="text-[10px] xs:text-xs font-medium font-mono hover:bg-primary/10 transition-colors"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="flex gap-2 xs:gap-3 pt-2">
                      <Button size="sm" className="flex-1 text-xs xs:text-sm font-sans" asChild>
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-3 h-3 xs:w-4 xs:h-4 mr-1 xs:mr-2" />
                          Live Demo
                        </a>
                      </Button>
                      <Button size="sm" variant="outline" className="flex-1 text-xs xs:text-sm font-sans" asChild>
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="w-3 h-3 xs:w-4 xs:h-4 mr-1 xs:mr-2" />
                          Code
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;