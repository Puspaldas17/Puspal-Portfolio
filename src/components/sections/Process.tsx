import { Card, CardContent } from "@/components/ui/card";
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
    <section className="py-12 xs:py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32 bg-muted/30">
      <div className="container mx-auto px-4 xs:px-6 sm:px-8 lg:px-12 xl:px-16">
        <div className="text-center mb-12 xs:mb-14 sm:mb-16">
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold mb-3 xs:mb-4">Current Working Projects</h2>
          <p className="text-base xs:text-lg sm:text-xl text-muted-foreground max-w-xl xs:max-w-2xl mx-auto px-4 xs:px-0">
            Actively developing innovative solutions across different domains, 
            from AI-powered applications to enterprise management systems.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 xs:gap-8 max-w-6xl mx-auto">
          {currentProjects.map((project, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 xs:hover:-translate-y-2 bg-card">
              <CardContent className="p-4 xs:p-5 sm:p-6">
                <div className="flex items-start space-x-3 xs:space-x-4 mb-3 xs:mb-4">
                  <div className="w-10 h-10 xs:w-12 xs:h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <div className="text-primary [&>svg]:w-5 [&>svg]:h-5 xs:[&>svg]:w-6 xs:[&>svg]:h-6">
                      {project.icon}
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg xs:text-xl font-semibold mb-2 group-hover:text-primary transition-colors leading-tight">
                      {project.title}
                    </h3>
                    <div className="inline-block px-2 py-1 bg-accent/20 text-accent-foreground rounded-md text-xs font-medium mb-2 xs:mb-3">
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