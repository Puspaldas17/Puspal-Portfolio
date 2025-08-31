import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Database, Code, Globe, Users } from "lucide-react";

const Portfolio = () => {
  const projects = [
    {
      title: "MediVault",
      category: "Health Portal",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=500&h=300&fit=crop",
      description: "Secure health portal for managing medical records, booking appointments, and accessing health information with real-time data synchronization.",
      technologies: ["HTML5", "JavaScript ES6", "MySQL", "REST API"],
      features: ["Secure Authentication", "Real-time Updates", "Mobile Responsive"],
      icon: Database
    },
    {
      title: "Google Maps Integration",
      category: "Web Application", 
      image: "https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?w=500&h=300&fit=crop",
      description: "Interactive web application with Google Maps API integration for location services, markers, and detailed geographical information.",
      technologies: ["HTML5", "CSS3", "JavaScript", "Google Maps API"],
      features: ["Interactive Maps", "Location Services", "Custom Markers"],
      icon: Globe
    },
    {
      title: "Class Manager",
      category: "Educational Platform",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=500&h=300&fit=crop", 
      description: "Comprehensive student-teacher portal with assignment management, notice board, messaging system, and academic progress tracking.",
      technologies: ["Django", "HTML5", "CSS3", "SQLite"],
      features: ["Assignment Upload", "Progress Tracking", "Messaging System"],
      icon: Users
    },
    {
      title: "Authentication System",
      category: "Security Module",
      image: "https://images.unsplash.com/photo-1555421689-491a97ff2040?w=500&h=300&fit=crop",
      description: "Robust user authentication module with login, registration, email verification, password recovery, and session management.",
      technologies: ["PHP", "MySQL", "jQuery", "Bootstrap"],
      features: ["Email Verification", "Password Recovery", "Session Management"],
      icon: Code
    }
  ];

  return (
    <section id="portfolio" className="py-24 bg-subtle">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          
          {/* Header Section */}
          <div className="text-center mb-20 animate-fade-in-up">
            <Badge variant="outline" className="mb-4 text-primary border-primary/20">
              Portfolio
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              Digital Product Showcases
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Explore a selection of my recent projects that demonstrate creativity, functionality, 
              and user-centered design principles across various technologies.
            </p>
          </div>
          
          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-10 mb-16">
            {projects.map((project, index) => {
              const IconComponent = project.icon;
              return (
                <Card 
                  key={index} 
                  className="group overflow-hidden hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border-0 shadow-lg bg-card animate-fade-in-up" 
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Project Image */}
                  <div className="relative overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={`${project.title} - ${project.category}`}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="flex gap-3">
                        <Button size="sm" className="bg-white text-primary hover:bg-white/90 shadow-lg">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          View Project
                        </Button>
                        <Button size="sm" variant="outline" className="border-white text-white hover:bg-white hover:text-primary backdrop-blur-sm">
                          <Github className="w-4 h-4 mr-2" />
                          Code
                        </Button>
                      </div>
                    </div>
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-accent text-accent-foreground shadow-lg">
                        {project.category}
                      </Badge>
                    </div>
                  </div>
                  
                  <CardContent className="p-8">
                    {/* Project Header */}
                    <div className="flex items-start gap-4 mb-4">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <IconComponent className="w-5 h-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                          {project.title}
                        </h3>
                      </div>
                    </div>
                    
                    {/* Description */}
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {project.description}
                    </p>
                    
                    {/* Features */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-foreground mb-3">Key Features:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.features.map((feature, featureIndex) => (
                          <Badge key={featureIndex} variant="secondary" className="text-xs">
                            {feature}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    {/* Tech Stack */}
                    <div className="pt-4 border-t border-border/50">
                      <div className="flex items-center gap-2 mb-2">
                        <Code className="w-4 h-4 text-accent" />
                        <span className="text-sm font-medium text-foreground">Tech Stack:</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <span 
                            key={techIndex}
                            className="px-2 py-1 bg-muted/50 text-muted-foreground text-xs rounded-md font-mono"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
          
          {/* CTA Section */}
          <div className="text-center animate-fade-in-up">
            <Card className="max-w-2xl mx-auto border-0 shadow-lg bg-gradient-surface">
              <CardContent className="p-8">
                <div className="flex items-center justify-center mb-4">
                  <div className="p-3 bg-gradient-primary rounded-full">
                    <Github className="w-6 h-6 text-white" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Explore More Projects
                </h3>
                <p className="text-muted-foreground mb-6">
                  Check out my complete collection of projects and contributions on GitHub
                </p>
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary-dark shadow-card" asChild>
                  <a href="https://github.com/Puspaldas17?tab=repositories" target="_blank" rel="noopener noreferrer">
                    <Github className="w-5 h-5 mr-2" />
                    View All Projects
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;