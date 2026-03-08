import React, { useState, useEffect } from "react";
import { ExternalLink, Github, AlertCircle, FolderGit2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ProjectCardSkeleton } from "@/components/ui/loading-skeleton";
import { SectionHeader } from "@/components/SectionHeader";
import { useStaggerReveal } from "@/hooks";

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
  const { elementRef } = useStaggeredAnimation(projects.length, 200);
  const { containerRef, getItemStyle } = useStaggerReveal(projects.length, { staggerDelay: 150 });

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 300);
    return () => clearTimeout(timer);
  }, []);

  const handleImageError = (projectId: number) => {
    setImageErrors(prev => ({ ...prev, [projectId]: true }));
  };

  return (
    <section id="portfolio" className="py-14 xs:py-18 sm:py-22 md:py-26 lg:py-30 xl:py-34 px-4 xs:px-6 sm:px-8 lg:px-10 xl:px-12 bg-background relative overflow-hidden color-grade">
      <div className="max-w-6xl mx-auto relative z-10" ref={elementRef}>
        <SectionHeader
          badge="Featured Projects"
          badgeIcon={FolderGit2}
          title="Impactful Builds"
          subtitle="Turning complex ideas into scalable, real-world applications."
          gradient
        />

        {isLoading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 xs:gap-6">
            {Array.from({ length: 3 }).map((_, i) => (
              <ProjectCardSkeleton key={i} />
            ))}
          </div>
        ) : (
          <div ref={containerRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 xs:gap-6">
            {projects.map((project, index) => (
              <Card 
                key={project.id}
                className="group overflow-hidden border border-border/50 hover:border-primary/20 bg-card/60 backdrop-blur-sm card-glow"
                style={getItemStyle(index)}
              >
                <CardContent className="p-0">
                  <div className="relative overflow-hidden bg-muted">
                    {imageErrors[project.id] ? (
                      <div className="w-full h-40 xs:h-44 sm:h-48 flex items-center justify-center">
                        <AlertCircle className="w-10 h-10 text-muted-foreground/40" />
                      </div>
                    ) : (
                      <img 
                        src={project.image} 
                        alt={`${project.title} - Project showcase`}
                        loading="lazy"
                        onError={() => handleImageError(project.id)}
                        className="w-full h-40 xs:h-44 sm:h-48 object-cover group-hover:scale-105 transition-transform duration-500 img-color-grade"
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <a 
                        href={project.liveUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-2.5 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors shadow-lg"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                      <a 
                        href={project.githubUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-2.5 bg-card text-foreground rounded-full hover:bg-muted transition-colors shadow-lg"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                  
                  <div className="p-4 xs:p-5">
                    <h3 className="text-base xs:text-lg font-semibold text-foreground mb-1.5">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3 line-clamp-2 leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.technologies.map((tech) => (
                        <Badge 
                          key={tech} 
                          variant="secondary" 
                          className="text-[10px] xs:text-xs font-medium font-mono"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="flex gap-2 pt-2 border-t border-border/30">
                      <Button size="sm" className="flex-1 text-xs h-8" asChild>
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-3.5 h-3.5 mr-1.5" />
                          Live Demo
                        </a>
                      </Button>
                      <Button size="sm" variant="outline" className="flex-1 text-xs h-8" asChild>
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="w-3.5 h-3.5 mr-1.5" />
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