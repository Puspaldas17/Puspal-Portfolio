import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Code, Server, Database, GitBranch, Layers, Zap } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      category: "Frontend Development",
      icon: Layers,
      skills: ["HTML5", "CSS3", "JavaScript ES6+", "React", "Tailwind CSS", "Bootstrap"],
      description: "Creating responsive and intuitive user interfaces",
      color: "primary"
    },
    {
      category: "Backend Development", 
      icon: Server,
      skills: ["Node.js", "Express.js", "RESTful APIs"],
      description: "Building robust server-side applications",
      color: "accent"
    },
    {
      category: "Database Management",
      icon: Database,
      skills: ["MongoDB", "Database Design", "Data Modeling"],
      description: "Designing efficient data storage solutions",
      color: "primary"
    },
    {
      category: "Development Tools",
      icon: GitBranch,
      skills: ["Git", "GitHub", "Postman", "VS Code", "npm"],
      description: "Streamlining development workflows",
      color: "accent"
    }
  ];

  const experiences = [
    {
      title: "Full-Stack Developer",
      subtitle: "Projects & Self-Learning",
      description: "Built multiple web applications including TripGenius and WeatherWiz, applying modern full-stack development practices and industry standards.",
      icon: Code
    },
    {
      title: "Backend Development",
      subtitle: "Node.js + Express",
      description: "Designed RESTful APIs, implemented authentication systems, and managed databases with MongoDB for scalable backend solutions.",
      icon: Server
    },
    {
      title: "Frontend Development", 
      subtitle: "React + Tailwind",
      description: "Developed interactive user interfaces and responsive designs using React and Tailwind CSS to enhance user experience and accessibility.",
      icon: Layers
    },
    {
      title: "Version Control & Collaboration",
      subtitle: "Git & GitHub",
      description: "Utilized Git and GitHub for version control, project management, code collaboration, and deployment workflows.",
      icon: GitBranch
    }
  ];

  return (
    <section id="skills" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          
          {/* Header Section */}
          <div className="text-center mb-20 animate-fade-in-up">
            <Badge variant="outline" className="mb-4 text-primary border-primary/20">
              Skills & Expertise
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              Technical Skills & Expertise
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Comprehensive technical proficiency across modern web development technologies 
              and industry-standard tools for delivering high-quality solutions.
            </p>
          </div>
          
          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
            {skillCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <Card 
                  key={index} 
                  className="group border-0 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 bg-gradient-surface animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-8">
                    {/* Icon & Category */}
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`p-3 rounded-xl ${category.color === 'primary' ? 'bg-primary/10' : 'bg-accent/10'}`}>
                        <IconComponent className={`w-6 h-6 ${category.color === 'primary' ? 'text-primary' : 'text-accent'}`} />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-foreground">
                          {category.category}
                        </h3>
                      </div>
                    </div>
                    
                    <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                      {category.description}
                    </p>
                    
                    {/* Skills List */}
                    <div className="space-y-3">
                      {category.skills.map((skill, skillIndex) => (
                        <div
                          key={skillIndex}
                          className="flex items-center gap-3 p-3 bg-background/50 border border-border/50 rounded-lg hover:border-primary/30 hover:bg-primary/5 transition-all duration-300"
                        >
                          <Zap className="w-4 h-4 text-accent" />
                          <span className="text-sm font-medium text-foreground">{skill}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
          
          {/* Professional Experience Section */}
          <div className="mb-20">
            <div className="text-center mb-16 animate-fade-in-up">
              <Badge variant="outline" className="mb-4 text-accent border-accent/20">
                Professional Experience
              </Badge>
              <h3 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
                Professional Development & Experience
              </h3>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Practical experience gained through hands-on project development and continuous learning
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {experiences.map((exp, index) => {
                const IconComponent = exp.icon;
                return (
                  <Card 
                    key={index} 
                    className="group border-0 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1 bg-card animate-fade-in-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardContent className="p-8">
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-gradient-primary rounded-xl text-white flex-shrink-0">
                          <IconComponent className="w-6 h-6" />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                            {exp.title}
                          </h4>
                          <p className="text-accent font-medium mb-4">
                            {exp.subtitle}
                          </p>
                          <p className="text-muted-foreground leading-relaxed">
                            {exp.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
          
          {/* Professional Statement */}
          <div className="text-center animate-fade-in-up">
            <Card className="max-w-4xl mx-auto border-0 shadow-lg bg-gradient-surface">
              <CardContent className="p-12">
                <div className="flex items-center justify-center mb-6">
                  <div className="p-4 bg-gradient-primary rounded-full">
                    <Zap className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h4 className="text-2xl font-bold text-foreground mb-4">
                  Committed to Excellence
                </h4>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Committed to continuous learning and staying current with emerging technologies 
                  to deliver innovative and efficient solutions.
                </p>
                <Badge variant="secondary" className="px-6 py-2 text-base">
                  Always expanding expertise through hands-on experience and best practices
                </Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;