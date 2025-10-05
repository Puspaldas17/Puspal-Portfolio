import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Globe, Shield, BookOpen } from "lucide-react";
import { hospeaseCover, librasyncCover } from "@/assets/images";

const Process = () => {
  const currentProjects = [
    {
      icon: <Globe className="w-6 h-6" />,
      title: "TripGenius-AI",
      description: "AI-powered travel planner with real-time weather, flight & hotel search, budget tracking, and group collaboration.",
      technologies: "React, Node.js, MongoDB",
      status: "In Development",
      image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=600&fit=crop"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "HospEase",
      description: "Hospital management system for patient records, staff scheduling, and resource tracking.",
      technologies: "Full-stack app",
      status: "In Development",
      image: hospeaseCover
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "LibraSync", 
      description: "Online library management system with Google Books API integration for dynamic book search.",
      technologies: "Handlebars, SQL",
      status: "In Development",
      image: librasyncCover
    }
  ];

  return (
    <section className="py-12 xs:py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32 bg-muted/20 relative">
      <div className="absolute inset-0 bg-gradient-mesh opacity-10"></div>
      <div className="container mx-auto px-4 xs:px-6 sm:px-8 md:px-10 lg:px-12 xl:px-16 2xl:px-20 relative z-10">
        <div className="text-center mb-12 xs:mb-14 sm:mb-16 md:mb-18 lg:mb-20">
          <Badge variant="outline" className="mb-4 xs:mb-5 text-primary border-primary/30 text-xs xs:text-sm md:text-base px-3 xs:px-4 py-1 xs:py-1.5 font-semibold">
            Current Projects
          </Badge>
          <h2 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 xs:mb-5 sm:mb-6 bg-gradient-primary bg-clip-text text-transparent tracking-tight">
            Working On
          </h2>
          <p className="text-base xs:text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl xl:max-w-4xl mx-auto leading-relaxed px-4 xs:px-0">
            Actively developing innovative solutions across different domains, 
            from AI-powered applications to enterprise management systems.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 xs:gap-6 sm:gap-7 md:gap-8 max-w-7xl 2xl:max-w-[1600px] mx-auto">
          {currentProjects.map((project, index) => (
            <Card key={index} className="group hover:shadow-xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-2 bg-card border-border/50 hover:border-primary/30 overflow-hidden">
              <CardContent className="p-0">
                <div className="relative overflow-hidden bg-muted h-40 xs:h-44 sm:h-48">
                  <img 
                    src={project.image} 
                    alt={`${project.title} - Project preview`}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-3 xs:top-4 right-3 xs:right-4">
                    <div className="px-2 xs:px-3 py-1 xs:py-1.5 bg-accent/90 backdrop-blur-sm text-accent-foreground rounded-lg text-[10px] xs:text-xs font-bold">
                      {project.status}
                    </div>
                  </div>
                </div>
                
                <div className="p-4 xs:p-5 sm:p-6 md:p-7">
                  <div className="flex items-start space-x-3 xs:space-x-4 mb-3 xs:mb-4">
                    <div className="w-10 h-10 xs:w-12 xs:h-12 bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-all duration-300">
                      <div className="text-primary [&>svg]:w-4 [&>svg]:h-4 xs:[&>svg]:w-5 xs:[&>svg]:h-5">
                        {project.icon}
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-base xs:text-lg sm:text-xl md:text-2xl font-bold group-hover:text-primary transition-colors leading-tight">
                        {project.title}
                      </h3>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed mb-3 xs:mb-4 text-xs xs:text-sm md:text-base">
                    {project.description}
                  </p>
                  
                  <div className="pt-2 xs:pt-3 border-t border-border/50">
                    <div className="text-[10px] xs:text-xs md:text-sm">
                      <span className="font-medium text-foreground">Tech Stack: </span>
                      <span className="text-muted-foreground">{project.technologies}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;