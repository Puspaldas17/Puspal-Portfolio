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
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Current Working Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Actively developing innovative solutions across different domains, 
            from AI-powered applications to enterprise management systems.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {currentProjects.map((project, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2 bg-card">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <div className="text-primary">
                      {project.icon}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <div className="inline-block px-2 py-1 bg-accent/20 text-accent-foreground rounded-md text-xs font-medium mb-3">
                      {project.status}
                    </div>
                  </div>
                </div>
                
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {project.description}
                </p>
                
                <div className="pt-4 border-t border-border/50">
                  <div className="text-sm">
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