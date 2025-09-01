import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar, Award, Target } from "lucide-react";
import aboutImage from "@/assets/about-workspace.jpg";

const About = () => {
  return (
    <section id="about" className="py-24 bg-subtle">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <Badge variant="outline" className="mb-4 text-primary border-primary/20">
              About Me
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              Behind the Code
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Passionate about building scalable digital solutions that make a real impact
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Content Side */}
            <div className="space-y-8 animate-fade-in-left">
              
              {/* Main Description */}
              <div className="prose prose-lg">
                <p className="text-lg text-foreground leading-relaxed mb-6">
                  I'm a Backend & MERN Stack Developer who thrives on creating clean, efficient, and scalable systems. 
                  My journey in software development is driven by curiosity, problem-solving, and continuous growth.
                </p>
                
                <p className="text-lg text-foreground leading-relaxed mb-6">
                  I approach every project with a user-first mindset, designing robust backends and modern web 
                  applications that deliver seamless and reliable digital experiences.
                </p>
                
                <p className="text-lg text-foreground leading-relaxed">
                  Beyond coding, I explore emerging technologies, contribute to open-source projects, and collaborate 
                  with developers to share knowledge and build meaningful solutions. My focus is not only on writing 
                  code but on creating long-term value within the tech community.
                </p>
              </div>

              {/* Core Principles */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground mb-4">Core Principles</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-start gap-4 p-4 bg-card rounded-xl border border-border/50 hover:shadow-md transition-all duration-300">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Target className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">🎯 Goal-Oriented</h4>
                      <p className="text-sm text-muted-foreground">Delivering results that go beyond expectations</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 p-4 bg-card rounded-xl border border-border/50 hover:shadow-md transition-all duration-300">
                    <div className="p-2 bg-accent/10 rounded-lg">
                      <Award className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">⚡ Quality First</h4>
                      <p className="text-sm text-muted-foreground">Writing maintainable and efficient code for long-term success</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Image Side */}
            <div className="relative animate-fade-in-right">
              <div className="relative">
                <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-xl bg-gradient-surface">
                  <img 
                    src={aboutImage} 
                    alt="Developer workspace showcasing modern development environment" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-primary/10"></div>
                </div>
                
                {/* Info Cards */}
                <Card className="absolute -top-6 -left-6 bg-card/95 backdrop-blur-sm border-0 shadow-lg animate-float">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3">
                      <MapPin className="w-5 h-5 text-primary" />
                      <div>
                        <div className="font-semibold text-sm">Based in</div>
                        <div className="text-muted-foreground text-xs">Howrah, India</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="absolute -bottom-6 -right-6 bg-card/95 backdrop-blur-sm border-0 shadow-lg animate-float" style={{ animationDelay: '1s' }}>
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3">
                      <Calendar className="w-5 h-5 text-accent" />
                      <div>
                        <div className="font-semibold text-sm">Experience</div>
                        <div className="text-muted-foreground text-xs">2+ Years Learning</div>
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