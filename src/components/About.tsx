import { Card, CardContent } from "@/components/ui/card";
import aboutImage from "@/assets/about-workspace.jpg";

const About = () => {
  return (
    <section id="about" className="py-20" style={{ backgroundColor: 'hsl(var(--section-bg))' }}>
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 animate-fade-in-up">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                Designing Solutions, Not Just Visuals
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                With over 5 years of experience in UI/UX design and frontend development, 
                I specialize in creating digital experiences that not only look stunning but 
                also solve real problems for users and businesses.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                My approach combines user research, creative design thinking, and technical 
                expertise to deliver solutions that drive engagement and achieve business goals.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">150+</div>
                  <div className="text-sm text-muted-foreground">Projects Completed</div>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-accent mb-2">98%</div>
                  <div className="text-sm text-muted-foreground">Client Satisfaction</div>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <div className="relative animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={aboutImage} 
                alt="Professional workspace with UI/UX design mockups" 
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-8 -left-8 w-16 h-16 bg-accent rounded-lg animate-float"></div>
            <div className="absolute -bottom-6 -right-6 w-20 h-20 bg-primary/20 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;