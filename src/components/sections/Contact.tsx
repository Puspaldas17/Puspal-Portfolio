import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, MessageSquare, Send } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { useScrollReveal } from "@/hooks";

const Contact = () => {
  const { ref: leftRef, isRevealed: leftRevealed } = useScrollReveal<HTMLDivElement>();
  const { ref: rightRef, isRevealed: rightRevealed } = useScrollReveal<HTMLDivElement>({ delay: 200 });

  return (
    <section id="contact" className="py-12 xs:py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32 bg-gradient-to-b from-background to-bg-subtle relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-10"></div>
      <div className="absolute top-20 left-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float-slow pointer-events-none" />
      <div className="absolute bottom-20 right-20 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-float-slower pointer-events-none" />
      
      <div className="container mx-auto px-4 xs:px-6 sm:px-8 md:px-10 lg:px-12 xl:px-16 2xl:px-20 relative z-10">
        <SectionHeader
          badge="Get in Touch"
          badgeIcon={MessageSquare}
          title="Let's Work Together"
          subtitle="Ready to bring your ideas to life? Get in touch and let's create something amazing together."
          gradient
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 xs:gap-8 sm:gap-10 md:gap-12">
          <div 
            ref={leftRef}
            className={`space-y-6 xs:space-y-8 transition-all duration-700 ${
              leftRevealed ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}
          >
            <div>
              <h3 className="text-xl xs:text-2xl font-semibold mb-4 xs:mb-6">Get In Touch</h3>
              <p className="text-muted-foreground mb-6 xs:mb-8 leading-relaxed text-sm xs:text-base">
                I'm always excited to work on new projects and collaborate with talented people. 
                Whether you have a project in mind or just want to say hello, I'd love to hear from you.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4 p-4 glass-card rounded-2xl hover:border-primary/30 hover:shadow-card transition-all duration-500 group hover:-translate-x-2 card-hover">
                <div className="w-14 h-14 bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="font-bold text-base mb-1">Email</div>
                  <div className="text-muted-foreground text-sm break-all">puspal1703@gmail.com</div>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-4 glass-card rounded-2xl hover:border-primary/30 hover:shadow-card transition-all duration-500 group hover:-translate-x-2 card-hover">
                <div className="w-14 h-14 bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="font-bold text-base mb-1">Phone</div>
                  <div className="text-muted-foreground text-sm">+91-8051166098</div>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-4 glass-card rounded-2xl hover:border-primary/30 hover:shadow-card transition-all duration-500 group hover:-translate-x-2 card-hover">
                <div className="w-14 h-14 bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="font-bold text-base mb-1">Location</div>
                  <div className="text-muted-foreground text-sm">Bhubaneswar, India</div>
                </div>
              </div>
            </div>
          </div>
          
          <Card 
            ref={rightRef}
            className={`shadow-xl border-border/50 hover:shadow-2xl transition-all duration-700 group gradient-border ${
              rightRevealed ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
          >
            <CardContent className="p-5 xs:p-6 sm:p-8">
              <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); const formData = new FormData(e.currentTarget); const subject = formData.get('subject') || 'Portfolio Contact'; const body = formData.get('message') || ''; window.location.href = `mailto:puspal1703@gmail.com?subject=${encodeURIComponent(String(subject))}&body=${encodeURIComponent(String(body))}`; }}>
                <div className="grid grid-cols-1 xs:grid-cols-2 gap-3 xs:gap-4">
                  <div className="group/input">
                    <label className="text-xs xs:text-sm font-medium mb-1.5 xs:mb-2 block group-focus-within/input:text-primary transition-colors">First Name</label>
                    <Input placeholder="John" className="text-sm xs:text-base transition-all duration-300 focus:scale-[1.02] focus:shadow-md" />
                  </div>
                  <div className="group/input">
                    <label className="text-xs xs:text-sm font-medium mb-1.5 xs:mb-2 block group-focus-within/input:text-primary transition-colors">Last Name</label>
                    <Input placeholder="Doe" className="text-sm xs:text-base transition-all duration-300 focus:scale-[1.02] focus:shadow-md" />
                  </div>
                </div>
                
                <div className="group/input">
                  <label className="text-xs xs:text-sm font-medium mb-1.5 xs:mb-2 block group-focus-within/input:text-primary transition-colors">Email</label>
                  <Input type="email" placeholder="john@example.com" className="text-sm xs:text-base transition-all duration-300 focus:scale-[1.02] focus:shadow-md" />
                </div>
                
                <div className="group/input">
                  <label className="text-xs xs:text-sm font-medium mb-1.5 xs:mb-2 block group-focus-within/input:text-primary transition-colors">Subject</label>
                    <Input name="subject" placeholder="Project Inquiry" className="text-sm xs:text-base transition-all duration-300 focus:scale-[1.02] focus:shadow-md" />
                </div>
                
                <div className="group/input">
                  <label className="text-xs xs:text-sm font-medium mb-1.5 xs:mb-2 block group-focus-within/input:text-primary transition-colors">Message</label>
                  <Textarea name="message" placeholder="Tell me about your project..." rows={4} className="text-sm xs:text-base resize-none transition-all duration-300 focus:scale-[1.01] focus:shadow-md" />
                </div>
                
                <Button className="w-full bg-gradient-to-r from-primary to-accent text-primary-foreground hover:opacity-90 shadow-lg text-sm xs:text-base py-2.5 xs:py-3 group/btn hover:scale-[1.02] hover:shadow-xl transition-all duration-300">
                  <Send className="w-4 h-4 mr-2 group-hover/btn:translate-x-1 transition-transform" />
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