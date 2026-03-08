import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Server, Database, GitBranch, Layers, Sparkles } from "lucide-react";
import { useTranslation } from "react-i18next";
import { SectionHeader } from "@/components/SectionHeader";
import { useScrollReveal, useStaggerReveal } from "@/hooks";

const Skills = () => {
  const { t } = useTranslation();
  const { containerRef, getItemStyle } = useStaggerReveal(4, { staggerDelay: 150 });
  const { ref: expRef, isRevealed: expRevealed } = useScrollReveal<HTMLDivElement>();
  
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
      iconColor: "text-blue-500",
      accentColor: "bg-blue-500/10",
      borderAccent: "hover:border-blue-500/20"
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
      iconColor: "text-emerald-500",
      accentColor: "bg-emerald-500/10",
      borderAccent: "hover:border-emerald-500/20"
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
      iconColor: "text-violet-500",
      accentColor: "bg-violet-500/10",
      borderAccent: "hover:border-violet-500/20"
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
      iconColor: "text-orange-500",
      accentColor: "bg-orange-500/10",
      borderAccent: "hover:border-orange-500/20"
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
    <section id="skills" className="py-14 xs:py-18 sm:py-22 md:py-26 lg:py-30 xl:py-34 bg-background relative overflow-hidden color-grade">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/[0.03] via-transparent to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-4 xs:px-6 sm:px-8 lg:px-12 xl:px-16 relative z-10">
        <div className="max-w-6xl mx-auto">
          
          <SectionHeader
            badge={t('skills.badge')}
            badgeIcon={Sparkles}
            title={t('skills.title')}
            subtitle={t('skills.subtitle')}
            gradient
          />
          
          {/* Skills Grid */}
          <div ref={containerRef} className="grid grid-cols-1 lg:grid-cols-2 gap-5 xs:gap-6 mb-16 xs:mb-20 sm:mb-24">
            {skillCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <Card 
                  key={index} 
                  className={`group border border-border/50 ${category.borderAccent} bg-card/60 backdrop-blur-sm overflow-hidden card-glow`}
                  style={getItemStyle(index)}
                >
                  <CardContent className="p-5 xs:p-6 sm:p-7">
                    <div className="flex items-center gap-3 mb-4 xs:mb-5">
                      <div className={`p-2.5 rounded-lg ${category.accentColor} icon-lift`}>
                        <IconComponent className={`w-5 h-5 ${category.iconColor}`} />
                      </div>
                      <div>
                        <h3 className="text-base xs:text-lg font-semibold text-foreground leading-tight">
                          {category.category}
                        </h3>
                        <p className="text-xs text-muted-foreground mt-0.5">
                          {category.description}
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-1.5">
                      {category.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className={`
                            inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium cursor-default
                            transition-[transform,background-color,color] duration-200 ease-out
                            group-hover:translate-y-[-1px]
                            ${skill.highlight 
                              ? `${category.accentColor} text-foreground` 
                              : 'bg-muted/40 text-muted-foreground hover:bg-muted/70 hover:text-foreground'
                            }
                          `}
                          style={{ transitionDelay: `${skillIndex * 20}ms` }}
                        >
                          {skill.name}
                        </span>
                      ))}
                    </div>
                    
                    <div className="mt-4 pt-3 border-t border-border/40 flex items-center justify-between">
                      <span className="text-[11px] text-muted-foreground">
                        {category.skills.length} technologies
                      </span>
                      <span className="text-[11px] text-muted-foreground">
                        {category.skills.filter(s => s.highlight).length} primary
                      </span>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
          
          {/* Professional Experience Section */}
          <div ref={expRef} className={`mb-14 xs:mb-18 sm:mb-22 transition-[transform,opacity] duration-500 ${expRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <SectionHeader
              badge={t('skills.experienceBadge')}
              title={t('skills.experienceTitle')}
              subtitle={t('skills.experienceSubtitle')}
              gradient
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 xs:gap-6 max-w-5xl mx-auto">
              {experiences.map((exp, index) => {
                const IconComponent = exp.icon;
                return (
                  <Card 
                    key={index} 
                    className="group border border-border/50 bg-card/60 backdrop-blur-sm card-glow"
                  >
                    <CardContent className="p-5 xs:p-6">
                      <div className="flex items-start gap-3.5">
                        <div className="p-2.5 bg-primary/10 rounded-lg text-primary flex-shrink-0">
                          <IconComponent className="w-4.5 h-4.5 xs:w-5 xs:h-5" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-base xs:text-lg font-semibold text-foreground mb-0.5 leading-tight">
                            {exp.title}
                          </h4>
                          <p className="text-primary/70 font-medium mb-2 text-xs xs:text-sm">
                            {exp.subtitle}
                          </p>
                          <p className="text-muted-foreground leading-relaxed text-sm">
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
            <Card className="max-w-2xl mx-auto border border-border/50 bg-card/80 backdrop-blur-sm">
              <CardContent className="p-6 xs:p-8 sm:p-10">
                <h4 className="text-lg xs:text-xl sm:text-2xl font-semibold text-foreground mb-3">
                  {t('skills.excellenceTitle')}
                </h4>
                <p className="text-sm xs:text-base text-muted-foreground mb-5 leading-relaxed">
                  {t('skills.excellenceDesc')}
                </p>
                <Badge className="px-4 py-1.5 text-xs bg-primary/10 text-primary border border-primary/20">
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