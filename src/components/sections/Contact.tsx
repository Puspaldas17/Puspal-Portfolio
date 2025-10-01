import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 md:py-28 lg:py-32 bg-gradient-to-b from-background to-bg-subtle relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-mesh opacity-10"></div>
      <div className="container mx-auto px-4 xs:px-6 sm:px-8 lg:px-12 xl:px-16 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <Badge variant="outline" className="mb-5 text-primary border-primary/30 text-sm px-4 py-1.5 font-semibold">
            Get in Touch
          </Badge>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent tracking-tight">
            Let's Work Together
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to bring your ideas to life? Get in touch and let's create something amazing together.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 xs:gap-10 sm:gap-12">
          <div className="space-y-6 xs:space-y-8 animate-fade-in-up">
            <div>
              <h3 className="text-xl xs:text-2xl font-semibold mb-4 xs:mb-6">Get In Touch</h3>
              <p className="text-muted-foreground mb-6 xs:mb-8 leading-relaxed text-sm xs:text-base">
                I'm always excited to work on new projects and collaborate with talented people. 
                Whether you have a project in mind or just want to say hello, I'd love to hear from you.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4 p-4 bg-card rounded-2xl border border-border/50 hover:border-primary/30 hover:shadow-card transition-all duration-300 group">
                <div className="w-14 h-14 bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="font-bold text-base mb-1">Email</div>
                  <div className="text-muted-foreground text-sm break-all">puspal1703@gmail.com</div>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-4 bg-card rounded-2xl border border-border/50 hover:border-primary/30 hover:shadow-card transition-all duration-300 group">
                <div className="w-14 h-14 bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="font-bold text-base mb-1">Phone</div>
                  <div className="text-muted-foreground text-sm">+91-8051166098</div>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-4 bg-card rounded-2xl border border-border/50 hover:border-primary/30 hover:shadow-card transition-all duration-300 group">
                <div className="w-14 h-14 bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="font-bold text-base mb-1">Location</div>
                  <div className="text-muted-foreground text-sm">Bhubaneswar, India</div>
                </div>
              </div>
            </div>
          </div>
          
          <Card className="shadow-xl border-border/50 animate-fade-in-up hover:shadow-2xl transition-shadow duration-500" style={{ animationDelay: '0.2s' }}>
            <CardContent className="p-8">
              <form className="space-y-6">
                <div className="grid grid-cols-1 xs:grid-cols-2 gap-3 xs:gap-4">
                  <div>
                    <label className="text-xs xs:text-sm font-medium mb-1.5 xs:mb-2 block">First Name</label>
                    <Input placeholder="John" className="text-sm xs:text-base" />
                  </div>
                  <div>
                    <label className="text-xs xs:text-sm font-medium mb-1.5 xs:mb-2 block">Last Name</label>
                    <Input placeholder="Doe" className="text-sm xs:text-base" />
                  </div>
                </div>
                
                <div>
                  <label className="text-xs xs:text-sm font-medium mb-1.5 xs:mb-2 block">Email</label>
                  <Input type="email" placeholder="john@example.com" className="text-sm xs:text-base" />
                </div>
                
                <div>
                  <label className="text-xs xs:text-sm font-medium mb-1.5 xs:mb-2 block">Subject</label>
                  <Input placeholder="Project Inquiry" className="text-sm xs:text-base" />
                </div>
                
                <div>
                  <label className="text-xs xs:text-sm font-medium mb-1.5 xs:mb-2 block">Message</label>
                  <Textarea placeholder="Tell me about your project..." rows={4} className="text-sm xs:text-base resize-none" />
                </div>
                
                <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90 shadow-accent text-sm xs:text-base py-2.5 xs:py-3">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;