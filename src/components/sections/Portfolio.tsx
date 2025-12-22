import React, { useState, useEffect } from "react";
import { ExternalLink, Github, AlertCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ProjectCardSkeleton } from "@/components/ui/loading-skeleton";

import { useStaggeredAnimation } from "@/hooks/use-scroll-animation";

const projects: Array<{
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
}> = [
  {
    id: 1,
    title: "TripGenius",
    description: "AI-powered trip planner with weather forecasts, interactive maps, drag-and-drop calendar, budget tracking, group collaboration, transport & hotel search, and currency conversion.",
    image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=600&fit=crop",
    technologies: ["React", "TypeScript", "Node.js", "Express", "Tailwind CSS", "Vite"],
    liveUrl: "https://trip-genius-liard.vercel.app",
    githubUrl: "https://github.com/Puspaldas17/TripGenius"
  },
  {
    id: 2,
    title: "Redis Server",
    description: "Custom Redis server implementation built from scratch with in-memory key-value storage, support for core data structures (Strings, Lists, Sets, Hashes), TCP server, and RESP protocol.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop",
    technologies: ["C++", "CMake", "TCP/IP", "RESP Protocol"],
    liveUrl: "https://redis-server.vercel.app",
    githubUrl: "https://github.com/Puspaldas17/Redis-Server"
  },
  {
    id: 3,
    title: "Buy & Sell",
    description: "Secure open marketplace for second-hand goods with item listings, seller contact, search functionality, transaction history, buyer notifications, and request management.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
    technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "NextAuth", "Recoil"],
    liveUrl: "https://github.com/Puspaldas17/Buy-and-Sell-project",
    githubUrl: "https://github.com/Puspaldas17/Buy-and-Sell-project"
  }
];

const Portfolio = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({});
  const { elementRef, isItemVisible } = useStaggeredAnimation(projects.length, 200);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 300);
    return () => clearTimeout(timer);
  }, []);

  const handleImageError = (projectId: number) => {
    setImageErrors(prev => ({ ...prev, [projectId]: true }));
  };

  return (
    <section id="portfolio" className="py-12 xs:py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32 px-4 xs:px-6 sm:px-8 lg:px-10 xl:px-12 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-float-slower" />
      </div>
      
      <div className="max-w-7xl 2xl:max-w-[1600px] mx-auto relative z-10" ref={elementRef}>
        <div className="text-center mb-12 xs:mb-14 sm:mb-16 md:mb-18 lg:mb-20 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          <h2 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4 xs:mb-5 sm:mb-6 font-sans bg-gradient-primary bg-clip-text text-transparent">
            Impactful Builds
          </h2>
          <p className="text-base xs:text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl xl:max-w-4xl mx-auto font-sans px-4 xs:px-0">
            Turning complex ideas into scalable, real-world applications.
          </p>
        </div>

        {isLoading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 xs:gap-5 sm:gap-6 lg:gap-7 xl:gap-8">
            {Array.from({ length: 3 }).map((_, i) => (
              <ProjectCardSkeleton key={i} />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 xs:gap-5 sm:gap-6 lg:gap-7 xl:gap-8">
            {projects.map((project, index) => (
              <Card 
                key={project.id}
                className={`group overflow-hidden border hover:shadow-2xl transition-all duration-500 bg-card/50 backdrop-blur-sm hover:-translate-y-3 hover:scale-[1.02] opacity-0 animate-fade-in-up`}
                style={{ animationDelay: `${0.2 + index * 0.15}s` }}
              >
                <CardContent className="p-0">
                  <div className="relative overflow-hidden bg-muted">
                    {imageErrors[project.id] ? (
                      <div className="w-full h-40 xs:h-44 sm:h-48 md:h-52 lg:h-56 xl:h-60 flex items-center justify-center">
                        <AlertCircle className="w-12 h-12 text-muted-foreground/50" />
                      </div>
                    ) : (
                      <img 
                        src={project.image} 
                        alt={`${project.title} - Project showcase`}
                        loading="lazy"
                        onError={() => handleImageError(project.id)}
                        className="w-full h-40 xs:h-44 sm:h-48 md:h-52 lg:h-56 xl:h-60 object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                    
                    {/* Floating action buttons on hover */}
                    <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                      <a 
                        href={project.liveUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-3 bg-primary text-primary-foreground rounded-full hover:scale-110 transition-transform shadow-lg"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                      <a 
                        href={project.githubUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-3 bg-card text-foreground rounded-full hover:scale-110 transition-transform shadow-lg"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                  
                  <div className="p-4 xs:p-5 sm:p-6">
                    <h3 className="text-lg xs:text-xl md:text-2xl font-bold text-foreground mb-2 xs:mb-3 group-hover:text-primary transition-colors duration-300 font-sans">
                      {project.title}
                    </h3>
                    <p className="text-sm xs:text-base text-muted-foreground mb-3 xs:mb-4 line-clamp-2 font-sans">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-1.5 xs:gap-2 mb-3 xs:mb-4">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge 
                          key={tech} 
                          variant="secondary" 
                          className="text-[10px] xs:text-xs font-medium font-mono hover:bg-primary/10 hover:scale-105 transition-all duration-300"
                          style={{ transitionDelay: `${techIndex * 30}ms` }}
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="flex gap-2 xs:gap-3 pt-2">
                      <Button size="sm" className="flex-1 text-xs xs:text-sm font-sans group/btn hover:scale-105 transition-all duration-300" asChild>
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-3 h-3 xs:w-4 xs:h-4 mr-1 xs:mr-2 group-hover/btn:rotate-12 transition-transform" />
                          Live Demo
                        </a>
                      </Button>
                      <Button size="sm" variant="outline" className="flex-1 text-xs xs:text-sm font-sans group/btn hover:scale-105 transition-all duration-300" asChild>
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="w-3 h-3 xs:w-4 xs:h-4 mr-1 xs:mr-2 group-hover/btn:rotate-12 transition-transform" />
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