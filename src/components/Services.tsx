import { Card, CardContent } from "@/components/ui/card";
import { Server, Database, Code } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Server className="w-8 h-8" />,
      title: "Backend Development",
      description: "Building robust server-side applications with Node.js, Express, and modern backend technologies for scalable solutions."
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Database Design",
      description: "Designing and optimizing databases with MongoDB, MySQL, and PostgreSQL for efficient data storage and retrieval."
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "MERN Stack Development",
      description: "Full-stack development using MongoDB, Express.js, React, and Node.js to create complete web applications."
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl font-bold mb-4">
            Expertise Service! Let's check it out
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I offer comprehensive backend development and full-stack services to help bring your digital ideas to life with robust, scalable solutions.
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