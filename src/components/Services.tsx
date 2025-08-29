import { Card, CardContent } from "@/components/ui/card";
import { Rocket, Code2, Brain } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Learning & Growing",
      description: "Continuously expanding my skills in modern technologies like Node.js, React, and MongoDB. Always eager to take on new challenges and learn from every project."
    },
    {
      icon: <Code2 className="w-8 h-8" />,
      title: "Web Development",
      description: "Building responsive web applications using MERN stack. From creating APIs to designing user interfaces, I enjoy bringing ideas to life through code."
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Problem Solving",
      description: "Strong analytical thinking and debugging skills. I love breaking down complex problems into smaller, manageable solutions and writing clean, maintainable code."
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl font-bold mb-4">
            What I Bring to the Table
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            As a fresh developer, I bring enthusiasm, modern skills, and a strong willingness to learn. Here's what I can offer to your team.
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