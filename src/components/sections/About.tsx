import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar, Award, Target } from "lucide-react";
import aboutImage from "@/assets/about-workspace.jpg";

const About = () => {
  return (
    <section id="about" className="py-12 xs:py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32 bg-subtle">
      <div className="container mx-auto px-4 xs:px-6 sm:px-8 lg:px-12 xl:px-16">
        <div className="max-w-7xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-12 xs:mb-14 sm:mb-16 md:mb-18 lg:mb-20 xl:mb-24 animate-fade-in-up">
            <Badge variant="outline" className="mb-3 xs:mb-4 text-primary border-primary/20 text-xs xs:text-sm">
              About Me
            </Badge>
            <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 xs:mb-5 sm:mb-6 bg-gradient-primary bg-clip-text text-transparent leading-tight">
              Behind the Code
            </h2>
            <p className="text-base xs:text-lg sm:text-xl md:text-xl lg:text-2xl text-muted-foreground max-w-xl xs:max-w-2xl sm:max-w-3xl lg:max-w-4xl mx-auto leading-relaxed px-4 xs:px-0">
              Passionate about building scalable digital solutions that make a real impact
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 xs:gap-10 sm:gap-12 lg:gap-16 xl:gap-20 items-center">
            
            {/* Content Side */}
            <div className="space-y-6 xs:space-y-7 sm:space-y-8 animate-fade-in-left order-2 lg:order-1">
              
              {/* Main Description */}
              <div className="prose prose-sm xs:prose-base sm:prose-lg">
                <p className="text-sm xs:text-base sm:text-lg text-foreground leading-relaxed mb-4 xs:mb-5 sm:mb-6">
                  I'm a Backend & MERN Stack Developer who thrives on creating clean, efficient, and scalable systems. 
                  My journey in software development is driven by curiosity, problem-solving, and continuous growth.
                </p>
                
                <p className="text-sm xs:text-base sm:text-lg text-foreground leading-relaxed mb-4 xs:mb-5 sm:mb-6">
                  I approach every project with a user-first mindset, designing robust backends and modern web 
                  applications that deliver seamless and reliable digital experiences.
                </p>
                
                <p className="text-sm xs:text-base sm:text-lg text-foreground leading-relaxed">
                  Beyond coding, I explore emerging technologies, contribute to open-source projects, and collaborate 
                  with developers to share knowledge and build meaningful solutions. My focus is not only on writing 
                  code but on creating long-term value within the tech community.
                </p>
              </div>

              {/* Core Principles */}
              <div className="space-y-3 xs:space-y-4">
                <h3 className="text-lg xs:text-xl font-semibold text-foreground mb-3 xs:mb-4">Core Principles</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 xs:gap-5 sm:gap-6">
                  <div className="flex items-start gap-3 xs:gap-4 p-3 xs:p-4 bg-card rounded-xl border border-border/50 hover:shadow-md transition-all duration-300">
                    <div className="p-1.5 xs:p-2 bg-primary/10 rounded-lg flex-shrink-0">
                      <Target className="w-4 h-4 xs:w-5 xs:h-5 text-primary" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h4 className="font-semibold text-foreground mb-1 text-sm xs:text-base">🎯 Goal-Oriented</h4>
                      <p className="text-xs xs:text-sm text-muted-foreground leading-relaxed">Delivering results that go beyond expectations</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 xs:gap-4 p-3 xs:p-4 bg-card rounded-xl border border-border/50 hover:shadow-md transition-all duration-300">
                    <div className="p-1.5 xs:p-2 bg-accent/10 rounded-lg flex-shrink-0">
                      <Award className="w-4 h-4 xs:w-5 xs:h-5 text-accent" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h4 className="font-semibold text-foreground mb-1 text-sm xs:text-base">⚡ Quality First</h4>
                      <p className="text-xs xs:text-sm text-muted-foreground leading-relaxed">Writing maintainable and efficient code for long-term success</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Image Side */}
            <div className="relative animate-fade-in-right order-1 lg:order-2">
              <div className="relative">
                <div className="aspect-[4/5] xs:aspect-[3/4] sm:aspect-[4/5] rounded-2xl xs:rounded-3xl overflow-hidden shadow-xl bg-gradient-surface">
                  <img 
                    src={aboutImage} 
                    alt="Developer workspace showcasing modern development environment" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-primary/10"></div>
                </div>
                
                {/* Info Cards */}
                <Card className="absolute -top-4 xs:-top-6 -left-4 xs:-left-6 bg-card/95 backdrop-blur-sm border-0 shadow-lg animate-float">
                  <CardContent className="p-3 xs:p-4">
                    <div className="flex items-center gap-2 xs:gap-3">
                      <MapPin className="w-4 h-4 xs:w-5 xs:h-5 text-primary flex-shrink-0" />
                      <div className="min-w-0">
                        <div className="font-semibold text-xs xs:text-sm whitespace-nowrap">Based in</div>
                        <div className="text-muted-foreground text-xs whitespace-nowrap">Howrah, India</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="absolute -bottom-4 xs:-bottom-6 -right-4 xs:-right-6 bg-card/95 backdrop-blur-sm border-0 shadow-lg animate-float" style={{ animationDelay: '1s' }}>
                  <CardContent className="p-3 xs:p-4">
                    <div className="flex items-center gap-2 xs:gap-3">
                      <Calendar className="w-4 h-4 xs:w-5 xs:h-5 text-accent flex-shrink-0" />
                      <div className="min-w-0">
                        <div className="font-semibold text-xs xs:text-sm whitespace-nowrap">Experience</div>
                        <div className="text-muted-foreground text-xs whitespace-nowrap">2+ Years Learning</div>
                      </div>
                    </div>
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

export default About;