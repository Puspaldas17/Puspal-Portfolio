import { Card, CardContent } from "@/components/ui/card";
import { Search, Palette, Rocket } from "lucide-react";

const Process = () => {
  const steps = [
    {
      number: "01",
      icon: <Search className="w-6 h-6" />,
      title: "Research & Planning",
      description: "Understanding your business needs and user requirements through comprehensive research and analysis."
    },
    {
      number: "02", 
      icon: <Palette className="w-6 h-6" />,
      title: "Design & Prototype",
      description: "Creating intuitive designs and interactive prototypes that bring your vision to life."
    },
    {
      number: "03",
      icon: <Rocket className="w-6 h-6" />,
      title: "Develop & Launch",
      description: "Building responsive applications and launching them with ongoing support and optimization."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl font-bold mb-4">My Working Process</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A structured approach to delivering exceptional results through careful planning, creative design, and meticulous execution.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <Card className="group hover:shadow-card transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-8 text-center">
                  <div className="relative mb-8">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/90 transition-colors">
                      <div className="text-primary-foreground group-hover:scale-110 transition-transform">
                        {step.icon}
                      </div>
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent rounded-full flex items-center justify-center text-xs font-bold text-accent-foreground">
                      {step.number}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </CardContent>
              </Card>
              
              {/* Connecting line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-primary/20 z-10"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;