import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Code, Server, Database, GitBranch, Layers, Zap, Sparkles } from "lucide-react";
import { useTranslation } from "react-i18next";

const Skills = () => {
  const { t } = useTranslation();
  
  const skillCategories = [
    {
      category: "Frontend Development",
      icon: Layers,
      skills: [
        { name: "React", highlight: true },
        { name: "TypeScript", highlight: true },
        { name: "Next.js", highlight: true },
        { name: "Vue.js" },
        { name: "Angular" },
        { name: "Svelte" },
        { name: "Tailwind CSS", highlight: true },
        { name: "HTML/CSS" },
        { name: "JavaScript" },
        { name: "Bootstrap" },
        { name: "Redux" },
        { name: "Zustand" },
        { name: "Recoil" },
        { name: "Webpack" },
        { name: "Vite" },
        { name: "Turbopack" }
      ],
      description: "Creating responsive and interactive user interfaces",
      gradient: "from-blue-500/20 to-cyan-500/20",
      iconColor: "text-blue-500",
      borderColor: "border-blue-500/30"
    },
    {
      category: "Backend Development", 
      icon: Server,
      skills: [
        { name: "Node.js", highlight: true },
        { name: "Python", highlight: true },
        { name: "Express.js", highlight: true },
        { name: "Django" },
        { name: "Flask" },
        { name: "FastAPI" },
        { name: "Java" },
        { name: "Spring Boot" },
        { name: "PHP" },
        { name: "Laravel" },
        { name: "Go" },
        { name: "Kotlin" },
        { name: "C++" },
        { name: "C#" },
        { name: "GraphQL" },
        { name: "REST API", highlight: true },
        { name: "WebSockets" },
        { name: "gRPC" }
      ],
      description: "Building robust server-side applications",
      gradient: "from-emerald-500/20 to-teal-500/20",
      iconColor: "text-emerald-500",
      borderColor: "border-emerald-500/30"
    },
    {
      category: "Database",
      icon: Database,
      skills: [
        { name: "MongoDB", highlight: true },
        { name: "PostgreSQL", highlight: true },
        { name: "MySQL" },
        { name: "SQL" },
        { name: "Redis" },
        { name: "Firebase" }
      ],
      description: "Database management and data modeling (SQL & NoSQL)",
      gradient: "from-violet-500/20 to-purple-500/20",
      iconColor: "text-violet-500",
      borderColor: "border-violet-500/30"
    },
    {
      category: "Tools & DevOps",
      icon: GitBranch,
      skills: [
        { name: "Git", highlight: true },
        { name: "GitHub", highlight: true },
        { name: "Docker", highlight: true },
        { name: "Kubernetes" },
        { name: "AWS" },
        { name: "Azure" },
        { name: "CI/CD" },
        { name: "Postman" },
        { name: "VS Code" },
        { name: "npm" }
      ],
      description: "Development tools, cloud platforms, and DevOps",
      gradient: "from-orange-500/20 to-amber-500/20",
      iconColor: "text-orange-500",
      borderColor: "border-orange-500/30"
    }
  ];

  const experiences = [
    {
      title: "Full-Stack Web Developer",
      subtitle: "Modern Web Applications",
      description: "Developed end-to-end web applications using React, Node.js, and MongoDB. Built projects like TripGenius (travel planning app) and WeatherWiz (weather dashboard) with features including user authentication, real-time data, and responsive design.",
      icon: Code
    },
    {
      title: "API Development & Integration",
      subtitle: "Backend Architecture",
      description: "Designed and implemented RESTful APIs with Express.js, integrated third-party services, implemented JWT authentication, and optimized database queries for improved performance and scalability.",
      icon: Server
    },
    {
      title: "UI/UX Implementation", 
      subtitle: "Frontend Expertise",
      description: "Created intuitive user interfaces using React, TypeScript, and Tailwind CSS. Focused on accessibility, mobile-first design, and modern UI patterns to deliver exceptional user experiences.",
      icon: Layers
    },
    {
      title: "DevOps & Deployment",
      subtitle: "Production Workflows",
      description: "Managed Git workflows, automated deployments, configured CI/CD pipelines, and deployed applications using modern cloud platforms with Docker containerization.",
      icon: GitBranch
    }
  ];

  return (
    <section id="skills" className="py-12 xs:py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32 bg-background relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-4 xs:px-6 sm:px-8 lg:px-12 xl:px-16 relative z-10">
        <div className="max-w-7xl mx-auto">
          
          {/* Header Section */}
          <div className="text-center mb-12 xs:mb-16 sm:mb-18 md:mb-20 lg:mb-24">
            <Badge variant="outline" className="mb-3 xs:mb-4 text-primary border-primary/30 text-xs xs:text-sm backdrop-blur-sm">
              <Sparkles className="w-3 h-3 mr-1" />
              {t('skills.badge')}
            </Badge>
            <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 xs:mb-5 sm:mb-6 bg-gradient-primary bg-clip-text text-transparent leading-tight font-sans">
              {t('skills.title')}
            </h2>
            <p className="text-base xs:text-lg sm:text-xl md:text-xl lg:text-2xl text-muted-foreground max-w-xl xs:max-w-2xl sm:max-w-3xl lg:max-w-4xl mx-auto leading-relaxed px-4 xs:px-0 font-sans">
              {t('skills.subtitle')}
            </p>
          </div>
          
          {/* Skills Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 xs:gap-8 mb-16 xs:mb-20 sm:mb-24">
            {skillCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <Card 
                  key={index} 
                  className={`group border ${category.borderColor} shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 bg-card/50 backdrop-blur-sm overflow-hidden`}
                >
                  {/* Gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  
                  <CardContent className="p-5 xs:p-6 sm:p-8 relative z-10">
                    {/* Header */}
                    <div className="flex items-center gap-3 xs:gap-4 mb-5 xs:mb-6">
                      <div className={`p-3 rounded-xl bg-gradient-to-br ${category.gradient} border ${category.borderColor}`}>
                        <IconComponent className={`w-5 h-5 xs:w-6 xs:h-6 ${category.iconColor}`} />
                      </div>
                      <div>
                        <h3 className="text-lg xs:text-xl font-bold text-foreground leading-tight font-sans">
                          {category.category}
                        </h3>
                        <p className="text-xs xs:text-sm text-muted-foreground mt-1">
                          {category.description}
                        </p>
                      </div>
                    </div>
                    
                    {/* Skills Tags */}
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className={`
                            inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs xs:text-sm font-medium
                            transition-all duration-300 hover:scale-105 cursor-default
                            ${skill.highlight 
                              ? `bg-gradient-to-r ${category.gradient} ${category.borderColor} border text-foreground shadow-sm` 
                              : 'bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground border border-transparent hover:border-border'
                            }
                          `}
                        >
                          {skill.highlight && <Zap className="w-3 h-3" />}
                          {skill.name}
                        </span>
                      ))}
                    </div>
                    
                    {/* Skill count */}
                    <div className="mt-5 pt-4 border-t border-border/50 flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">
                        {category.skills.length} technologies
                      </span>
                      <span className="text-xs text-muted-foreground flex items-center gap-1">
                        <Zap className="w-3 h-3" />
                        {category.skills.filter(s => s.highlight).length} primary
                      </span>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
          
          {/* Professional Experience Section */}
          <div className="mb-12 xs:mb-16 sm:mb-20">
            <div className="text-center mb-12 xs:mb-14 sm:mb-16">
              <Badge variant="outline" className="mb-3 xs:mb-4 text-accent border-accent/30 text-xs xs:text-sm backdrop-blur-sm">
                {t('skills.experienceBadge')}
              </Badge>
              <h3 className="text-2xl xs:text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 xs:mb-5 sm:mb-6 bg-gradient-primary bg-clip-text text-transparent leading-tight">
                {t('skills.experienceTitle')}
              </h3>
              <p className="text-base xs:text-lg sm:text-lg text-muted-foreground max-w-xl xs:max-w-2xl sm:max-w-3xl mx-auto leading-relaxed px-4 xs:px-0">
                {t('skills.experienceSubtitle')}
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 xs:gap-8 max-w-6xl mx-auto">
              {experiences.map((exp, index) => {
                const IconComponent = exp.icon;
                return (
                  <Card 
                    key={index} 
                    className="group border border-border/50 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1 bg-card/50 backdrop-blur-sm hover:border-primary/30"
                  >
                    <CardContent className="p-5 xs:p-6 sm:p-8">
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-gradient-primary rounded-xl text-primary-foreground flex-shrink-0 shadow-lg">
                          <IconComponent className="w-5 h-5 xs:w-6 xs:h-6" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-lg xs:text-xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors leading-tight">
                            {exp.title}
                          </h4>
                          <p className="text-primary/80 font-semibold mb-3 text-sm xs:text-base">
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
          <div className="text-center">
            <Card className="max-w-2xl xs:max-w-3xl sm:max-w-4xl mx-auto border border-primary/20 shadow-2xl bg-gradient-to-br from-card via-card to-primary/5 backdrop-blur-sm">
              <CardContent className="p-6 xs:p-8 sm:p-12">
                <div className="flex items-center justify-center mb-4 xs:mb-6">
                  <div className="p-4 bg-gradient-primary rounded-full shadow-lg">
                    <Zap className="w-6 h-6 xs:w-8 xs:h-8 text-primary-foreground" />
                  </div>
                </div>
                <h4 className="text-xl xs:text-2xl sm:text-3xl font-bold text-foreground mb-3 xs:mb-4">
                  {t('skills.excellenceTitle')}
                </h4>
                <p className="text-base xs:text-lg text-muted-foreground mb-4 xs:mb-6 leading-relaxed px-4 xs:px-0">
                  {t('skills.excellenceDesc')}
                </p>
                <Badge className="px-4 xs:px-6 py-2 text-sm xs:text-base bg-primary/10 text-primary border border-primary/30 hover:bg-primary/20">
                  {t('skills.excellenceBadge')}
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