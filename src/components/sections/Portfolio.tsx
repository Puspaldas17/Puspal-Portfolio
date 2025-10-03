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
    title: "HospEase",
    description: "A streamlined Hospital Administration Management System designed to simplify patient record management, staff scheduling, and medical resource tracking — all within one intuitive platform.",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&h=400&fit=crop",
    technologies: ["Node.js", "Express", "MongoDB", "React"],
    liveUrl: "https://github.com/Puspaldas17/HospEase",
    githubUrl: "https://github.com/Puspaldas17/HospEase"
  },
  {
    id: 2,
    title: "LibraSync",
    description: "An online library management system built with Handlebars for templating and SQL for database management. It integrates the Google Books API to enable dynamic book search and seamless information retrieval.",
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600&h=400&fit=crop",
    technologies: ["Node.js", "Express", "Handlebars", "SQL", "Google Books API"],
    liveUrl: "https://github.com/Puspaldas17/LibraSync",
    githubUrl: "https://github.com/Puspaldas17/LibraSync"
  },
  {
    id: 3,
    title: "MediVault",
    description: "A secure and user-friendly health portal enabling patients to manage medical records, book appointments, and access vital health information online.",
    image: medivaultCover,
    technologies: ["HTML", "JavaScript", "MySQL"],
    liveUrl: "https://github.com/Puspaldas17/MediVault",
    githubUrl: "https://github.com/Puspaldas17/MediVault"
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
            titleVisible ? 'animate-fade-in-up' : ''
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
            {Array.from({ length: 3 }).map((_, i) => (
              <ProjectCardSkeleton key={i} />
            ))}
          </div>
        ) : (
          <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 xs:gap-5 sm:gap-6 lg:gap-7 xl:gap-8">
            {projects.map((project, index) => (
              <Card 
                key={project.id}
                className={`group overflow-hidden border hover:shadow-xl transition-all duration-500 bg-card/50 backdrop-blur-sm hover:scale-[1.02] hover:-translate-y-1 ${
                  isItemVisible(index) ? 'animate-zoom-in' : ''
                }`}
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