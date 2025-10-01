import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Globe, Shield, BookOpen } from "lucide-react";

const Process = () => {
  const currentProjects = [
    {
      icon: <Globe className="w-6 h-6" />,
      title: "TripGenius-AI",
      description: "AI-powered travel planner with real-time weather, flight & hotel search, budget tracking, and group collaboration.",
      technologies: "React, Node.js, MongoDB",
      status: "In Development"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "HospEase",
      description: "Hospital management system for patient records, staff scheduling, and resource tracking.",
      technologies: "Full-stack app",
      status: "In Development"
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "LibraSync", 
      description: "Online library management system with Google Books API integration for dynamic book search.",
      technologies: "Handlebars, SQL",
      status: "In Development"
    }
  ];

  return (
    <section className="py-20 md:py-28 lg:py-32 bg-muted/20 relative">
      <div className="absolute inset-0 bg-gradient-mesh opacity-10"></div>
      <div className="container mx-auto px-4 xs:px-6 sm:px-8 lg:px-12 xl:px-16 relative z-10">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-5 text-primary border-primary/30 text-sm px-4 py-1.5 font-semibold">
            Current Projects
          </Badge>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent tracking-tight">
            Working On
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Actively developing innovative solutions across different domains, 
            from AI-powered applications to enterprise management systems.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {currentProjects.map((project, index) => (
            <Card key={index} className="group hover:shadow-xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-2 bg-card border-border/50 hover:border-primary/30">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4 mb-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:shadow-lg transition-all duration-300">
                    <div className="text-primary [&>svg]:w-7 [&>svg]:h-7">
                      {project.icon}
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors leading-tight">
                      {project.title}
                    </h3>
                    <div className="inline-block px-3 py-1 bg-accent/10 text-accent rounded-lg text-xs font-bold mb-3">
                      {project.status}
                    </div>
                  </div>
                </div>
                
                <p className="text-muted-foreground leading-relaxed mb-3 xs:mb-4 text-sm xs:text-base">
                  {project.description}
                </p>
                
                <div className="pt-3 xs:pt-4 border-t border-border/50">
                  <div className="text-xs xs:text-sm">
                    <span className="font-medium text-foreground">Tech Stack: </span>
                    <span className="text-muted-foreground">{project.technologies}</span>
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