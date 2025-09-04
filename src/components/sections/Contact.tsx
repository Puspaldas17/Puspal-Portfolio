import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-12 xs:py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32" style={{ backgroundColor: 'hsl(var(--section-bg))' }}>
      <div className="container mx-auto px-4 xs:px-6 sm:px-8 lg:px-12 xl:px-16">
        <div className="text-center mb-12 xs:mb-14 sm:mb-16 animate-fade-in-up">
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 xs:mb-4">Let's Work Together</h2>
          <p className="text-base xs:text-lg sm:text-xl text-muted-foreground max-w-xl xs:max-w-2xl mx-auto px-4 xs:px-0">
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
            
            <div className="space-y-4 xs:space-y-6">
              <div className="flex items-center gap-3 xs:gap-4">
                <div className="w-10 h-10 xs:w-12 xs:h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 xs:w-6 xs:h-6 text-primary" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="font-medium text-sm xs:text-base">Email</div>
                  <div className="text-muted-foreground text-sm xs:text-base break-all">puspal1703@gmail.com</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3 xs:gap-4">
                <div className="w-10 h-10 xs:w-12 xs:h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 xs:w-6 xs:h-6 text-primary" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="font-medium text-sm xs:text-base">Phone</div>
                  <div className="text-muted-foreground text-sm xs:text-base">+91-8051166098</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3 xs:gap-4">
                <div className="w-10 h-10 xs:w-12 xs:h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 xs:w-6 xs:h-6 text-primary" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="font-medium text-sm xs:text-base">Location</div>
                  <div className="text-muted-foreground text-sm xs:text-base">Bhubaneswar, India</div>
                </div>
              </div>
            </div>
          </div>
          
          <Card className="shadow-card border-0 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <CardContent className="p-4 xs:p-6 sm:p-8">
              <form className="space-y-4 xs:space-y-6">
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