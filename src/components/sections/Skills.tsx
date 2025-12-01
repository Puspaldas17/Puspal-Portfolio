import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Code, Server, Database, GitBranch, Layers, Zap } from "lucide-react";
import { useTranslation } from "react-i18next";

const Skills = () => {
  const { t } = useTranslation();
  const skillCategories = [
    {
      category: "Frontend Development",
      icon: Layers,
      skills: [
        "HTML", 
        "CSS", 
        "JavaScript",
        "TypeScript",
        "React",
        "Next.js",
        "Vue.js",
        "Angular",
        "Svelte",
        "Tailwind CSS", 
        "Bootstrap",
        "Redux",
        "Zustand",
        "Recoil",
        "Webpack",
        "Vite",
        "Turbopack"
      ],
      description: "Creating responsive and interactive user interfaces",
      color: "primary"
    },
    {
      category: "Backend Development", 
      icon: Server,
      skills: [
        "Node.js", 
        "Express.js",
        "Python",
        "Django",
        "Flask",
        "FastAPI",
        "Java",
        "Spring Boot",
        "JavaScript",
        "PHP",
        "Laravel",
        "Go",
        "Kotlin",
        "C++",
        "C#",
        "GraphQL",
        "WebSockets",
        "gRPC",
        "REST"
      ],
      description: "Building robust server-side applications",
      color: "accent"
    },
    {
      category: "Database",
      icon: Database,
      skills: [
        "MongoDB",
        "SQL"
      ],
      description: "NoSQL database management and data modeling",
      color: "primary"
    },
    {
      category: "Tools & Others",
      icon: GitBranch,
      skills: [
        "Git", 
        "GitHub", 
        "Postman", 
        "VS Code", 
        "npm",
        "Docker",
        "Kubernetes",
        "AWS",
        "Azure",
        "CI/CD"
      ],
      description: "Development tools and version control",
      color: "accent"
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
    <section id="skills" className="py-12 xs:py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32 bg-background">
      <div className="container mx-auto px-4 xs:px-6 sm:px-8 lg:px-12 xl:px-16">
        <div className="max-w-7xl mx-auto">
          
          {/* Header Section */}
          <div className="text-center mb-12 xs:mb-16 sm:mb-18 md:mb-20 lg:mb-24">
            <Badge variant="outline" className="mb-3 xs:mb-4 text-primary border-primary/20 text-xs xs:text-sm">
              {t('skills.badge')}
            </Badge>
            <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 xs:mb-5 sm:mb-6 bg-gradient-primary bg-clip-text text-transparent leading-tight font-sans">
              🚀 {t('skills.title')}
            </h2>
            <p className="text-base xs:text-lg sm:text-xl md:text-xl lg:text-2xl text-muted-foreground max-w-xl xs:max-w-2xl sm:max-w-3xl lg:max-w-4xl mx-auto leading-relaxed px-4 xs:px-0 font-sans">
              {t('skills.subtitle')}
            </p>
          </div>
          
          {/* Skills Grid */}
          <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-4 xs:gap-6 sm:gap-8 mb-16 xs:mb-20 sm:mb-24">
              {skillCategories.map((category, index) => {
                const IconComponent = category.icon;
                return (
                  <Card 
                    key={index} 
                    className="group border-0 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1 xs:hover:-translate-y-2 bg-gradient-surface hover:scale-[1.02]"
                  >
                    <CardContent className="p-4 xs:p-6 sm:p-8">
                      {/* Icon & Category */}
                      <div className="flex items-center gap-3 xs:gap-4 mb-4 xs:mb-6">
                        <div className={`p-2 xs:p-3 rounded-xl ${category.color === 'primary' ? 'bg-primary/10' : 'bg-accent/10'} flex-shrink-0`}>
                          <IconComponent className={`w-5 h-5 xs:w-6 xs:h-6 ${category.color === 'primary' ? 'text-primary' : 'text-accent'}`} />
                        </div>
                        <div className="min-w-0 flex-1">
                          <h3 className="text-base xs:text-lg font-semibold text-foreground leading-tight font-sans">
                            {category.category}
                          </h3>
                        </div>
                      </div>
                      
                      <p className="text-xs xs:text-sm text-muted-foreground mb-4 xs:mb-6 leading-relaxed font-sans">
                        {category.description}
                      </p>
                      
                      {/* Skills List */}
                      <div className="space-y-2 xs:space-y-3">
                        {category.skills.map((skill, skillIndex) => (
                          <div
                            key={skillIndex}
                            className="flex items-center gap-2 xs:gap-3 p-2 xs:p-3 bg-background/50 border border-border/50 rounded-lg hover:border-primary/30 hover:bg-primary/5 transition-all duration-300 hover:scale-[1.02]"
                          >
                            <Zap className="w-3 h-3 xs:w-4 xs:h-4 text-accent flex-shrink-0" />
                            <span className="text-xs xs:text-sm font-medium text-foreground font-mono">{skill}</span>
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
            <div className="text-center mb-12 xs:mb-14 sm:mb-16">
              <Badge variant="outline" className="mb-3 xs:mb-4 text-accent border-accent/20 text-xs xs:text-sm">
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
                    className="group border-0 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1 bg-card hover:scale-[1.02]"
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
          <div className="text-center">
            <Card className="max-w-2xl xs:max-w-3xl sm:max-w-4xl mx-auto border-0 shadow-lg bg-gradient-surface">
              <CardContent className="p-6 xs:p-8 sm:p-12">
                <div className="flex items-center justify-center mb-4 xs:mb-6">
                  <div className="p-3 xs:p-4 bg-gradient-primary rounded-full">
                    <Zap className="w-6 h-6 xs:w-8 xs:h-8 text-white" />
                  </div>
                </div>
                <h4 className="text-xl xs:text-2xl sm:text-3xl font-bold text-foreground mb-3 xs:mb-4">
                  {t('skills.excellenceTitle')}
                </h4>
                <p className="text-base xs:text-lg text-muted-foreground mb-4 xs:mb-6 leading-relaxed px-4 xs:px-0">
                  {t('skills.excellenceDesc')}
                </p>
                <Badge variant="secondary" className="px-4 xs:px-6 py-2 text-sm xs:text-base">
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