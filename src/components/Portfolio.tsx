import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Database, Code, Globe, Users } from "lucide-react";
import medivaultImage from "@/assets/medivault-cover.jpg";

const Portfolio = () => {
  const projects = [
    {
      title: "MediVault",
      category: "Health Portal",
      image: medivaultImage,
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
    <section id="portfolio" className="py-12 xs:py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32 bg-subtle">
      <div className="container mx-auto px-4 xs:px-6 sm:px-8 lg:px-12 xl:px-16">
        <div className="max-w-7xl mx-auto">
          
          {/* Header Section */}
          <div className="text-center mb-12 xs:mb-16 sm:mb-18 md:mb-20 lg:mb-24 animate-fade-in-up">
            <Badge variant="outline" className="mb-3 xs:mb-4 text-primary border-primary/20 text-xs xs:text-sm">
              Portfolio
            </Badge>
            <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 xs:mb-5 sm:mb-6 bg-gradient-primary bg-clip-text text-transparent leading-tight">
              Digital Product Showcases
            </h2>
            <p className="text-base xs:text-lg sm:text-xl md:text-xl lg:text-2xl text-muted-foreground max-w-xl xs:max-w-2xl sm:max-w-3xl lg:max-w-4xl mx-auto leading-relaxed px-4 xs:px-0">
              Explore a selection of my recent projects that demonstrate creativity, functionality, 
              and user-centered design principles across various technologies.
            </p>
          </div>
          
          {/* Projects Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 xs:gap-8 sm:gap-10 lg:gap-12 xl:gap-16 mb-12 xs:mb-14 sm:mb-16">
            {projects.map((project, index) => {
              const IconComponent = project.icon;
              return (
                <Card 
                  key={index} 
                  className="group overflow-hidden hover:shadow-xl transition-all duration-500 hover:-translate-y-1 xs:hover:-translate-y-2 border-0 shadow-lg bg-card animate-fade-in-up" 
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Project Image */}
                  <div className="relative overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={`${project.title} - ${project.category}`}
                      className="w-full h-48 xs:h-56 sm:h-64 md:h-72 lg:h-64 xl:h-80 object-cover group-hover:scale-105 xs:group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="flex gap-2 xs:gap-3">
                        <Button size="sm" className="bg-white text-primary hover:bg-white/90 shadow-lg text-xs xs:text-sm px-3 xs:px-4" asChild>
                          <a 
                            href={
                              project.title === "MediVault" ? "https://github.com/Puspaldas17/MediVault" :
                              project.title === "Google Maps Integration" ? "https://github.com/Puspaldas17/Google-Maps-Integration" :
                              project.title === "Class Manager" ? "https://github.com/Puspaldas17/Google-Maps-Integration" :
                              project.title === "Authentication System" ? "https://github.com/Puspaldas17/Login-Sign-up-System" :
                              "#"
                            }
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLink className="w-4 h-4 mr-2" />
                            View Project
                          </a>
                        </Button>
                      </div>
                    </div>
                    
                    {/* Category Badge */}
                    <div className="absolute top-3 xs:top-4 left-3 xs:left-4">
                      <Badge className="bg-accent text-accent-foreground shadow-lg text-xs xs:text-sm px-2 xs:px-3 py-1">
                        {project.category}
                      </Badge>
                    </div>
                  </div>
                  
                  <CardContent className="p-4 xs:p-6 sm:p-8">
                    {/* Project Header */}
                    <div className="flex items-start gap-3 xs:gap-4 mb-3 xs:mb-4">
                      <div className="p-1.5 xs:p-2 bg-primary/10 rounded-lg flex-shrink-0">
                        <IconComponent className="w-4 h-4 xs:w-5 xs:h-5 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg xs:text-xl sm:text-2xl font-semibold text-foreground group-hover:text-primary transition-colors leading-tight">
                          {project.title}
                        </h3>
                      </div>
                    </div>
                    
                    {/* Description */}
                    <p className="text-sm xs:text-base text-muted-foreground leading-relaxed mb-4 xs:mb-6">
                      {project.description}
                    </p>
                    
                    {/* Features */}
                    <div className="mb-4 xs:mb-6">
                      <h4 className="text-xs xs:text-sm font-semibold text-foreground mb-2 xs:mb-3">Key Features:</h4>
                      <div className="flex flex-wrap gap-1.5 xs:gap-2">
                        {project.features.map((feature, featureIndex) => (
                          <Badge key={featureIndex} variant="secondary" className="text-xs px-2 py-1">
                            {feature}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    {/* Tech Stack */}
                    <div className="pt-3 xs:pt-4 border-t border-border/50">
                      <div className="flex items-center gap-2 mb-2">
                        <Code className="w-3.5 h-3.5 xs:w-4 xs:h-4 text-accent flex-shrink-0" />
                        <span className="text-xs xs:text-sm font-medium text-foreground">Tech Stack:</span>
                      </div>
                      <div className="flex flex-wrap gap-1.5 xs:gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <span 
                            key={techIndex}
                            className="px-2 py-1 bg-muted/50 text-muted-foreground text-xs rounded-md font-mono whitespace-nowrap"
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
            <Card className="max-w-xl xs:max-w-2xl mx-auto border-0 shadow-lg bg-gradient-surface">
              <CardContent className="p-6 xs:p-8">
                <div className="flex items-center justify-center mb-3 xs:mb-4">
                  <div className="p-2.5 xs:p-3 bg-gradient-primary rounded-full">
                    <Github className="w-5 h-5 xs:w-6 xs:h-6 text-white" />
                  </div>
                </div>
                <h3 className="text-xl xs:text-2xl sm:text-3xl font-bold text-foreground mb-3 xs:mb-4">
                  Explore More Projects
                </h3>
                <p className="text-sm xs:text-base text-muted-foreground mb-5 xs:mb-6 leading-relaxed">
                  Check out my complete collection of projects and contributions on GitHub
                </p>
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary-dark shadow-card text-sm xs:text-base px-6 xs:px-8 py-3 xs:py-4" asChild>
                  <a href="https://github.com/Puspaldas17?tab=repositories" target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4 xs:w-5 xs:h-5 mr-2" />
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