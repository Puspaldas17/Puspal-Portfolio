import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const Portfolio = () => {
  const projects = [
    {
      title: "MediVault",
      category: "Health Portal",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=500&h=300&fit=crop",
      description: "Secure health portal for managing medical records, booking appointments, and accessing health info.",
      technologies: "HTML, JS, MySQL"
    },
    {
      title: "Google Maps Integration",
      category: "Web Application", 
      image: "https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?w=500&h=300&fit=crop",
      description: "Web app with Google Maps API for interactive maps, markers, and location details.",
      technologies: "HTML, CSS, JS"
    },
    {
      title: "Class Manager",
      category: "Educational Platform",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=500&h=300&fit=crop", 
      description: "Student-teacher portal with assignment upload, notice board, messaging, and marks tracking.",
      technologies: "Django, HTML, CSS"
    },
    {
      title: "Login & Sign-Up System",
      category: "Authentication System",
      image: "https://images.unsplash.com/photo-1555421689-491a97ff2040?w=500&h=300&fit=crop",
      description: "User authentication module with login, registration, email verification, and password reset.",
      technologies: "PHP, MySQL, jQuery"
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl font-bold mb-4">Digital Product Showcases</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore a selection of my recent projects that demonstrate creativity, functionality, and user-centered design principles.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {projects.map((project, index) => (
            <Card key={index} className="group overflow-hidden hover:shadow-card transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button size="sm" className="bg-white text-primary hover:bg-white/90">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Project
                  </Button>
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-accent font-medium">{project.category}</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-3">{project.description}</p>
                <div className="pt-3 border-t border-border/50">
                  <div className="text-sm">
                    <span className="font-medium text-foreground">Tech Stack: </span>
                    <span className="text-muted-foreground">{project.technologies}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-card" asChild>
            <a href="https://github.com/Puspaldas17?tab=repositories" target="_blank" rel="noopener noreferrer">
              View All Projects
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;