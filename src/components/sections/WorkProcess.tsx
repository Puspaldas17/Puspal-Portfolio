import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Lightbulb, FileText, Code, TestTube, Rocket, RefreshCw, Users, Clock } from "lucide-react";

const WorkProcess = () => {
  const processSteps = [
    {
      icon: Lightbulb,
      title: "Discovery",
      description: "Understanding requirements, goals, and user needs",
      duration: "1-2 days",
      color: "from-primary/10 to-primary/5",
      iconColor: "text-primary",
      borderColor: "border-primary/30"
    },
    {
      icon: FileText,
      title: "Planning",
      description: "Architecture design, tech stack selection, and sprint planning",
      duration: "2-3 days",
      color: "from-accent/10 to-accent/5",
      iconColor: "text-accent",
      borderColor: "border-accent/30"
    },
    {
      icon: Code,
      title: "Development",
      description: "Iterative coding with regular commits and code reviews",
      duration: "Ongoing",
      color: "from-primary-light/10 to-primary-light/5",
      iconColor: "text-primary-light",
      borderColor: "border-primary-light/30"
    },
    {
      icon: TestTube,
      title: "Testing",
      description: "Unit tests, integration tests, and quality assurance",
      duration: "Parallel",
      color: "from-accent-light/10 to-accent-light/5",
      iconColor: "text-accent-light",
      borderColor: "border-accent-light/30"
    },
    {
      icon: Rocket,
      title: "Deployment",
      description: "CI/CD pipeline setup and production release",
      duration: "1 day",
      color: "from-primary-dark/10 to-primary-dark/5",
      iconColor: "text-primary-dark",
      borderColor: "border-primary-dark/30"
    },
    {
      icon: RefreshCw,
      title: "Iteration",
      description: "Feedback collection, bug fixes, and feature enhancements",
      duration: "Ongoing",
      color: "from-accent-dark/10 to-accent-dark/5",
      iconColor: "text-accent-dark",
      borderColor: "border-accent-dark/30"
    }
  ];

  const methodology = [
    {
      icon: Users,
      title: "Agile/Scrum",
      description: "Sprint-based development with regular standups and retrospectives"
    },
    {
      icon: RefreshCw,
      title: "Iterative Approach",
      description: "Continuous improvement through feedback loops"
    },
    {
      icon: Clock,
      title: "Time-Boxed Sprints",
      description: "2-week sprints with clear deliverables and milestones"
    }
  ];

  return (
    <section id="work-process" className="py-12 xs:py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-20"></div>
      
      <div className="container mx-auto px-4 xs:px-6 sm:px-8 md:px-10 lg:px-12 xl:px-16 2xl:px-20 relative z-10">
        <div className="max-w-7xl 2xl:max-w-[1600px] mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-12 xs:mb-14 sm:mb-16 md:mb-18 lg:mb-20 animate-fade-in">
            <Badge variant="outline" className="mb-4 xs:mb-5 text-primary border-primary/30 text-xs xs:text-sm md:text-base px-3 xs:px-4 py-1 xs:py-1.5 font-semibold">
              Work Process
            </Badge>
            <h2 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 xs:mb-5 sm:mb-6 bg-gradient-primary bg-clip-text text-transparent leading-tight tracking-tight">
              My Approach
            </h2>
            <p className="text-base xs:text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl xl:max-w-4xl mx-auto leading-relaxed px-4 xs:px-0">
              A systematic workflow that ensures quality, efficiency, and timely delivery
            </p>
          </div>

          {/* Process Steps */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xs:gap-7 sm:gap-8 md:gap-10 mb-16 xs:mb-20 sm:mb-24">
            {processSteps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <Card 
                  key={index} 
                  className="group relative border-border/50 hover:border-primary/30 hover:shadow-card transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-6 xs:p-7 sm:p-8">
                    <div className="flex items-start justify-between mb-4">
                      <div className={`p-3 xs:p-4 bg-gradient-to-br ${step.color} rounded-xl xs:rounded-2xl group-hover:scale-110 transition-transform`}>
                        <IconComponent className={`w-6 h-6 xs:w-7 xs:h-7 ${step.iconColor}`} />
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        {step.duration}
                      </Badge>
                    </div>
                    <h3 className="text-lg xs:text-xl font-bold text-foreground mb-2 xs:mb-3">
                      {index + 1}. {step.title}
                    </h3>
                    <p className="text-sm xs:text-base text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                    
                    {/* Connection line for larger screens */}
                    {index < processSteps.length - 1 && (
                      <div className="hidden lg:block absolute top-1/2 -right-5 w-10 h-0.5 bg-gradient-to-r from-border to-transparent"></div>
                    )}
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Methodology Section */}
          <div className="bg-gradient-to-br from-bg-subtle to-background rounded-2xl xs:rounded-3xl p-8 xs:p-10 sm:p-12 md:p-14 lg:p-16 border border-border/50 animate-fade-in">
            <div className="text-center mb-10 xs:mb-12 sm:mb-14">
              <h3 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold mb-3 xs:mb-4 text-foreground">
                Development Methodology
              </h3>
              <p className="text-base xs:text-lg text-muted-foreground max-w-2xl mx-auto">
                Embracing Agile principles for flexible and collaborative development
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 xs:gap-8 sm:gap-10">
              {methodology.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div 
                    key={index}
                    className="text-center group"
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    <div className="inline-flex p-4 xs:p-5 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl xs:rounded-3xl mb-4 xs:mb-5 group-hover:scale-110 group-hover:shadow-card transition-all duration-300">
                      <IconComponent className="w-8 h-8 xs:w-10 xs:h-10 text-primary" />
                    </div>
                    <h4 className="text-lg xs:text-xl font-bold text-foreground mb-2 xs:mb-3">
                      {item.title}
                    </h4>
                    <p className="text-sm xs:text-base text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Timeline Overview */}
            <div className="mt-12 xs:mt-14 sm:mt-16 pt-10 xs:pt-12 border-t border-border/50">
              <div className="text-center mb-8 xs:mb-10">
                <h4 className="text-xl xs:text-2xl sm:text-3xl font-bold text-foreground mb-2 xs:mb-3">
                  Typical Project Timeline
                </h4>
                <p className="text-sm xs:text-base text-muted-foreground">
                  Average duration for full-stack web applications
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 xs:gap-6 sm:gap-8">
                <Card className="w-full sm:w-auto border-primary/30 bg-gradient-to-br from-primary/5 to-transparent">
                  <CardContent className="p-5 xs:p-6 text-center">
                    <div className="text-3xl xs:text-4xl font-bold text-primary mb-2">4-8</div>
                    <div className="text-sm xs:text-base text-muted-foreground">Weeks</div>
                    <div className="text-xs text-muted-foreground mt-1">Small to Medium Projects</div>
                  </CardContent>
                </Card>

                <div className="hidden sm:block text-muted-foreground text-2xl">→</div>

                <Card className="w-full sm:w-auto border-accent/30 bg-gradient-to-br from-accent/5 to-transparent">
                  <CardContent className="p-5 xs:p-6 text-center">
                    <div className="text-3xl xs:text-4xl font-bold text-accent mb-2">3-6</div>
                    <div className="text-sm xs:text-base text-muted-foreground">Months</div>
                    <div className="text-xs text-muted-foreground mt-1">Large Enterprise Projects</div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkProcess;
