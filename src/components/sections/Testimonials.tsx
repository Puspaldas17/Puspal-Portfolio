import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      content: "Alex delivered an outstanding design that perfectly captured our brand vision. The user experience improvements led to a 40% increase in conversions.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Product Manager, InnovateCorp",  
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      content: "Professional, creative, and always on time. Alex's attention to detail and user-centered approach made our app a huge success.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "Marketing Director, GrowthCo",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face", 
      content: "Working with Alex was fantastic. The design exceeded our expectations and the collaborative process was smooth from start to finish.",
      rating: 5
    }
  ];

  return (
    <section className="py-12 xs:py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32 bg-background">
      <div className="container mx-auto px-4 xs:px-6 sm:px-8 md:px-10 lg:px-12 xl:px-16 2xl:px-20">
        <div className="text-center mb-12 xs:mb-14 sm:mb-16 md:mb-18 lg:mb-20 animate-fade-in-up">
          <h2 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 xs:mb-5 sm:mb-6">What People Say About Us</h2>
          <p className="text-base xs:text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-2xl xl:max-w-3xl mx-auto px-4 xs:px-0">
            Don't just take our word for it - hear what our satisfied clients have to say about their experience working with us.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 xs:gap-6 sm:gap-7 md:gap-8 max-w-7xl 2xl:max-w-[1600px] mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="group hover:shadow-card transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardContent className="p-5 xs:p-6 sm:p-7 md:p-8">
                <div className="flex mb-3 xs:mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 xs:w-5 xs:h-5 fill-accent text-accent" />
                  ))}
                </div>
                
                <p className="text-muted-foreground mb-5 xs:mb-6 leading-relaxed italic text-sm xs:text-base md:text-lg">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center gap-3 xs:gap-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-10 h-10 xs:w-12 xs:h-12 md:w-14 md:h-14 rounded-full object-cover flex-shrink-0"
                  />
                  <div className="min-w-0">
                    <div className="font-semibold text-sm xs:text-base md:text-lg">{testimonial.name}</div>
                    <div className="text-xs xs:text-sm md:text-base text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;