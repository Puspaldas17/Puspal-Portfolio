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
              Passionate about crafting digital solutions that make a real difference
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Content Side */}
            <div className="space-y-8 animate-fade-in-left">
              
              {/* Main Description */}
              <div className="prose prose-lg">
                <p className="text-lg text-foreground leading-relaxed mb-6">
                  I'm a dedicated backend developer who believes in the power of clean, scalable code. 
                  My journey in software development is driven by curiosity and a commitment to continuous learning.
                </p>
                
                <p className="text-lg text-foreground leading-relaxed mb-6">
                  Every project is an opportunity to push boundaries and create solutions that not only work 
                  but excel. I approach development with a user-first mindset, ensuring that the technical 
                  architecture serves the ultimate goal of exceptional user experiences.
                </p>
                
                <p className="text-lg text-foreground leading-relaxed">
                  When I'm not coding, you'll find me exploring new technologies, contributing to open-source 
                  projects, or mentoring fellow developers. I believe in building not just applications, 
                  but lasting relationships within the tech community.
                </p>
              </div>

              {/* Key Points */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start gap-4 p-4 bg-card rounded-xl border border-border/50 hover:shadow-md transition-all duration-300">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Target className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Goal-Oriented</h4>
                    <p className="text-sm text-muted-foreground">Focused on delivering results that exceed expectations</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-4 bg-card rounded-xl border border-border/50 hover:shadow-md transition-all duration-300">
                  <div className="p-2 bg-accent/10 rounded-lg">
                    <Award className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Quality First</h4>
                    <p className="text-sm text-muted-foreground">Committed to writing maintainable, efficient code</p>
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