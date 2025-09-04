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
    <section id="skills" className="py-12 xs:py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32 bg-background">
      <div className="container mx-auto px-4 xs:px-6 sm:px-8 lg:px-12 xl:px-16">
        <div className="max-w-7xl mx-auto">
          
          {/* Header Section */}
          <div className="text-center mb-12 xs:mb-16 sm:mb-18 md:mb-20 lg:mb-24 animate-fade-in-up">
            <Badge variant="outline" className="mb-3 xs:mb-4 text-primary border-primary/20 text-xs xs:text-sm">
              Skills & Expertise
            </Badge>
            <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 xs:mb-5 sm:mb-6 bg-gradient-primary bg-clip-text text-transparent leading-tight">
              Technical Skills & Expertise
            </h2>
            <p className="text-base xs:text-lg sm:text-xl md:text-xl lg:text-2xl text-muted-foreground max-w-xl xs:max-w-2xl sm:max-w-3xl lg:max-w-4xl mx-auto leading-relaxed px-4 xs:px-0">
              Comprehensive technical proficiency across modern web development technologies 
              and industry-standard tools for delivering high-quality solutions.
            </p>
          </div>
          
          {/* Skills Grid */}
          <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-4 xs:gap-6 sm:gap-8 mb-16 xs:mb-20 sm:mb-24">
            {skillCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <Card 
                  key={index} 
                  className="group border-0 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1 xs:hover:-translate-y-2 bg-gradient-surface animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-4 xs:p-6 sm:p-8">
                    {/* Icon & Category */}
                    <div className="flex items-center gap-3 xs:gap-4 mb-4 xs:mb-6">
                      <div className={`p-2 xs:p-3 rounded-xl ${category.color === 'primary' ? 'bg-primary/10' : 'bg-accent/10'} flex-shrink-0`}>
                        <IconComponent className={`w-5 h-5 xs:w-6 xs:h-6 ${category.color === 'primary' ? 'text-primary' : 'text-accent'}`} />
                      </div>
                      <div className="min-w-0 flex-1">
                        <h3 className="text-base xs:text-lg font-semibold text-foreground leading-tight">
                          {category.category}
                        </h3>
                      </div>
                    </div>
                    
                    <p className="text-xs xs:text-sm text-muted-foreground mb-4 xs:mb-6 leading-relaxed">
                      {category.description}
                    </p>
                    
                    {/* Skills List */}
                    <div className="space-y-2 xs:space-y-3">
                      {category.skills.map((skill, skillIndex) => (
                        <div
                          key={skillIndex}
                          className="flex items-center gap-2 xs:gap-3 p-2 xs:p-3 bg-background/50 border border-border/50 rounded-lg hover:border-primary/30 hover:bg-primary/5 transition-all duration-300"
                        >
                          <Zap className="w-3 h-3 xs:w-4 xs:h-4 text-accent flex-shrink-0" />
                          <span className="text-xs xs:text-sm font-medium text-foreground">{skill}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
          
          {/* Professional Experience Section */}
          <div className="mb-12 xs:mb-16 sm:mb-20">
            <div className="text-center mb-12 xs:mb-14 sm:mb-16 animate-fade-in-up">
              <Badge variant="outline" className="mb-3 xs:mb-4 text-accent border-accent/20 text-xs xs:text-sm">
                Professional Experience
              </Badge>
              <h3 className="text-2xl xs:text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 xs:mb-5 sm:mb-6 bg-gradient-primary bg-clip-text text-transparent leading-tight">
                Professional Development & Experience
              </h3>
              <p className="text-base xs:text-lg sm:text-lg text-muted-foreground max-w-xl xs:max-w-2xl sm:max-w-3xl mx-auto leading-relaxed px-4 xs:px-0">
                Practical experience gained through hands-on project development and continuous learning
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 xs:gap-8 max-w-6xl mx-auto">
              {experiences.map((exp, index) => {
                const IconComponent = exp.icon;
                return (
                  <Card 
                    key={index} 
                    className="group border-0 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1 bg-card animate-fade-in-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardContent className="p-4 xs:p-6 sm:p-8">
                      <div className="flex items-start gap-3 xs:gap-4">
                        <div className="p-2 xs:p-3 bg-gradient-primary rounded-xl text-white flex-shrink-0">
                          <IconComponent className="w-5 h-5 xs:w-6 xs:h-6" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-lg xs:text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors leading-tight">
                            {exp.title}
                          </h4>
                          <p className="text-accent font-medium mb-3 xs:mb-4 text-sm xs:text-base">
                            {exp.subtitle}
                          </p>
                          <p className="text-muted-foreground leading-relaxed text-sm xs:text-base">
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
            <Card className="max-w-2xl xs:max-w-3xl sm:max-w-4xl mx-auto border-0 shadow-lg bg-gradient-surface">
              <CardContent className="p-6 xs:p-8 sm:p-12">
                <div className="flex items-center justify-center mb-4 xs:mb-6">
                  <div className="p-3 xs:p-4 bg-gradient-primary rounded-full">
                    <Zap className="w-6 h-6 xs:w-8 xs:h-8 text-white" />
                  </div>
                </div>
                <h4 className="text-xl xs:text-2xl sm:text-3xl font-bold text-foreground mb-3 xs:mb-4">
                  Committed to Excellence
                </h4>
                <p className="text-base xs:text-lg text-muted-foreground mb-4 xs:mb-6 leading-relaxed px-4 xs:px-0">
                  Committed to continuous learning and staying current with emerging technologies 
                  to deliver innovative and efficient solutions.
                </p>
                <Badge variant="secondary" className="px-4 xs:px-6 py-2 text-sm xs:text-base">
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