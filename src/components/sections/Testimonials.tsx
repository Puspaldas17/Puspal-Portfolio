import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote, MessageCircleHeart } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { useStaggerReveal } from "@/hooks";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Aditya Sharma",
      role: "Project Collaborator",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face",
      content: "Puspal's backend expertise is impressive. He built a robust API architecture for our project that handled complex data flows seamlessly. His attention to code quality and documentation is exemplary.",
      rating: 5
    },
    {
      name: "Priya Patel",
      role: "Team Lead, Academic Project",  
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
      content: "Working with Puspal on the TripGenius project was fantastic. His full-stack skills and problem-solving ability made complex features like real-time collaboration and budget tracking possible.",
      rating: 5
    },
    {
      name: "Rahul Verma",
      role: "Fellow Developer",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face", 
      content: "Puspal is one of the most dedicated developers I've worked with. His Redis server implementation from scratch demonstrated deep systems-level understanding. Always delivers quality work.",
      rating: 5
    }
  ];
  
  const { containerRef, getItemStyle } = useStaggerReveal(testimonials.length, { staggerDelay: 150 });

  return (
    <section className="py-14 xs:py-18 sm:py-22 md:py-26 lg:py-30 xl:py-34 bg-gradient-to-b from-background via-bg-subtle/20 to-background color-grade relative">
      <div className="container mx-auto px-4 xs:px-6 sm:px-8 md:px-10 lg:px-12 xl:px-16 2xl:px-20">
        <SectionHeader
          badge="Testimonials"
          badgeIcon={MessageCircleHeart}
          title="What People Say"
          subtitle="Feedback from collaborators and teammates who've experienced my work firsthand."
          gradient
        />
        
        <div ref={containerRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 xs:gap-6 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="group border border-border/50 bg-card/60 backdrop-blur-sm card-glow relative overflow-hidden"
              style={getItemStyle(index)}
            >
              <div className="absolute top-4 right-4 opacity-[0.06]">
                <Quote className="w-10 h-10 text-foreground" />
              </div>
              
              <CardContent className="p-5 xs:p-6 relative z-10">
                <div className="flex mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                <p className="text-muted-foreground mb-5 leading-relaxed text-sm italic">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center gap-3 pt-4 border-t border-border/30">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    loading="lazy"
                    className="w-10 h-10 rounded-full object-cover flex-shrink-0 ring-1 ring-border/50"
                  />
                  <div className="min-w-0">
                    <div className="font-medium text-sm">{testimonial.name}</div>
                    <div className="text-xs text-muted-foreground">{testimonial.role}</div>
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