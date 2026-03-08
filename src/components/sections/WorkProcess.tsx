import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Lightbulb, FileText, Code, TestTube, Rocket, RefreshCw, Users, Clock, Workflow } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { useStaggerReveal, useScrollReveal } from "@/hooks";

const WorkProcess = () => {
  const { containerRef, getItemStyle } = useStaggerReveal(6, { staggerDelay: 100 });
  const { ref: methodRef, isRevealed: methodRevealed } = useScrollReveal<HTMLDivElement>();
  const processSteps = [
    {
      icon: Lightbulb,
      title: "Discovery",
      description: "Understanding requirements, goals, and user needs",
      duration: "1-2 days",
      iconColor: "text-primary",
      accentBg: "bg-primary/10"
    },
    {
      icon: FileText,
      title: "Planning",
      description: "Architecture design, tech stack selection, and sprint planning",
      duration: "2-3 days",
      iconColor: "text-accent",
      accentBg: "bg-accent/10"
    },
    {
      icon: Code,
      title: "Development",
      description: "Iterative coding with regular commits and code reviews",
      duration: "Ongoing",
      iconColor: "text-emerald-500",
      accentBg: "bg-emerald-500/10"
    },
    {
      icon: TestTube,
      title: "Testing",
      description: "Unit tests, integration tests, and quality assurance",
      duration: "Parallel",
      iconColor: "text-orange-500",
      accentBg: "bg-orange-500/10"
    },
    {
      icon: Rocket,
      title: "Deployment",
      description: "CI/CD pipeline setup and production release",
      duration: "1 day",
      iconColor: "text-blue-500",
      accentBg: "bg-blue-500/10"
    },
    {
      icon: RefreshCw,
      title: "Iteration",
      description: "Feedback collection, bug fixes, and feature enhancements",
      duration: "Ongoing",
      iconColor: "text-violet-500",
      accentBg: "bg-violet-500/10"
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
    <section id="work-process" className="py-14 xs:py-18 sm:py-22 md:py-26 lg:py-30 xl:py-34 bg-background relative overflow-hidden color-grade">
      <div className="container mx-auto px-4 xs:px-6 sm:px-8 md:px-10 lg:px-12 xl:px-16 2xl:px-20 relative z-10">
        <div className="max-w-6xl mx-auto">
          
          <SectionHeader
            badge="Work Process"
            badgeIcon={Workflow}
            title="My Approach"
            subtitle="A systematic workflow that ensures quality, efficiency, and timely delivery"
            gradient
          />

          {/* Process Steps */}
          <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 xs:gap-6 mb-16 xs:mb-20 sm:mb-24">
            {processSteps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <Card 
                  key={index} 
                  className="group border border-border/50 hover:border-primary/20 bg-card/60 backdrop-blur-sm card-glow"
                  style={getItemStyle(index)}
                >
                  <CardContent className="p-5 xs:p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div className={`p-2.5 ${step.accentBg} rounded-lg icon-lift`}>
                        <IconComponent className={`w-5 h-5 ${step.iconColor}`} />
                      </div>
                      <Badge variant="secondary" className="text-[10px] font-medium">
                        {step.duration}
                      </Badge>
                    </div>
                    <h3 className="text-base xs:text-lg font-semibold text-foreground mb-1.5">
                      {index + 1}. {step.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Methodology Section */}
          <div 
            ref={methodRef}
            className={`bg-card/50 backdrop-blur-sm rounded-2xl p-8 xs:p-10 sm:p-12 border border-border/50 transition-[transform,opacity] duration-500 ${
              methodRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          >
            <div className="text-center mb-8 xs:mb-10">
              <h3 className="text-xl xs:text-2xl sm:text-3xl font-semibold mb-2 text-foreground">
                Development Methodology
              </h3>
              <p className="text-sm xs:text-base text-muted-foreground max-w-xl mx-auto">
                Embracing Agile principles for flexible and collaborative development
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 xs:gap-8">
              {methodology.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="inline-flex p-3 bg-primary/10 rounded-xl mb-3">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    <h4 className="text-base xs:text-lg font-semibold text-foreground mb-1.5">
                      {item.title}
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Timeline Overview */}
            <div className="mt-10 pt-8 border-t border-border/40">
              <div className="text-center mb-6">
                <h4 className="text-lg xs:text-xl font-semibold text-foreground mb-1.5">
                  Typical Project Timeline
                </h4>
                <p className="text-sm text-muted-foreground">
                  Average duration for full-stack web applications
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 xs:gap-6">
                <Card className="w-full sm:w-auto border-border/50">
                  <CardContent className="p-5 text-center">
                    <div className="text-2xl xs:text-3xl font-bold text-primary mb-1">4-8</div>
                    <div className="text-sm text-muted-foreground">Weeks</div>
                    <div className="text-[11px] text-muted-foreground/70 mt-0.5">Small to Medium</div>
                  </CardContent>
                </Card>

                <div className="hidden sm:block text-muted-foreground/40 text-lg">&rarr;</div>

                <Card className="w-full sm:w-auto border-border/50">
                  <CardContent className="p-5 text-center">
                    <div className="text-2xl xs:text-3xl font-bold text-accent mb-1">3-6</div>
                    <div className="text-sm text-muted-foreground">Months</div>
                    <div className="text-[11px] text-muted-foreground/70 mt-0.5">Large Enterprise</div>
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
