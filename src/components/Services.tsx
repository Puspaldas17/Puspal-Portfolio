import { Card, CardContent } from "@/components/ui/card";
import { Zap, Target, Lightbulb } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Performance Optimization",
      description: "Delivering 40% faster load times by implementing efficient algorithms and database optimization techniques. I focus on writing code that scales and performs under pressure."
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Business-Driven Solutions",
      description: "Transforming business requirements into technical solutions that drive revenue. I understand that every line of code should serve a business purpose and create measurable value."
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Innovation & Automation",
      description: "Building smart automation tools that reduce manual work by 60%. I identify repetitive processes and create efficient solutions that save time and reduce human error."
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl font-bold mb-4">
            Delivering Impact Through Technology
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I don't just write code - I create solutions that drive business results. Here's how I add value to every project I work on.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-card transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                  <div className="text-primary group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;