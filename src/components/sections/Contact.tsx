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

  const contactInfo = [
    { icon: Mail, label: "Email", value: "puspal1703@gmail.com", color: "text-primary" },
    { icon: Phone, label: "Phone", value: "+91-8051166098", color: "text-emerald-500" },
    { icon: MapPin, label: "Location", value: "Bhubaneswar, India", color: "text-orange-500" },
  ];

  return (
    <section id="contact" className="py-14 xs:py-18 sm:py-22 md:py-26 lg:py-30 xl:py-34 bg-gradient-to-b from-background via-bg-subtle/20 to-background relative overflow-hidden color-grade">
      <div className="absolute top-40 left-10 w-56 h-56 bg-primary/[0.04] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-40 right-10 w-56 h-56 bg-accent/[0.04] rounded-full blur-3xl pointer-events-none" />
      
      <div className="container mx-auto px-4 xs:px-6 sm:px-8 md:px-10 lg:px-12 xl:px-16 2xl:px-20 relative z-10">
        <SectionHeader
          badge="Get in Touch"
          badgeIcon={MessageSquare}
          title="Let's Work Together"
          subtitle="Have a project in mind? I'd love to hear from you."
          gradient
        />
        
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-8 xs:gap-10 sm:gap-12">
          <div 
            ref={leftRef}
            className={`lg:col-span-2 space-y-5 xs:space-y-6 transition-[transform,opacity] duration-500 ${
              leftRevealed ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}
          >
            <div>
              <h3 className="text-lg xs:text-xl font-semibold mb-3">Get In Touch</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                I'm always open to new projects and collaborations. 
                Whether you have a project in mind or just want to say hello, feel free to reach out.
              </p>
            </div>
            
            <div className="space-y-3">
              {contactInfo.map((info) => {
                const Icon = info.icon;
                return (
                  <div key={info.label} className="flex items-center gap-3.5 p-3.5 rounded-xl border border-border/50 bg-card/50 hover:border-primary/20 transition-[border-color] duration-200 group">
                    <div className="w-10 h-10 bg-muted/50 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className={`w-4.5 h-4.5 ${info.color}`} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="font-medium text-sm mb-0.5">{info.label}</div>
                      <div className="text-muted-foreground text-xs break-all">{info.value}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          
          <Card 
            ref={rightRef}
            className={`lg:col-span-3 shadow-lg border-border/50 bg-card/80 backdrop-blur-sm transition-[transform,opacity] duration-500 ${
              rightRevealed ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
          >
            <CardContent className="p-5 xs:p-6 sm:p-8">
              <form className="space-y-5" onSubmit={(e) => { e.preventDefault(); const formData = new FormData(e.currentTarget); const subject = formData.get('subject') || 'Portfolio Contact'; const body = formData.get('message') || ''; window.location.href = `mailto:puspal1703@gmail.com?subject=${encodeURIComponent(String(subject))}&body=${encodeURIComponent(String(body))}`; }}>
                <div className="grid grid-cols-1 xs:grid-cols-2 gap-3 xs:gap-4">
                  <div className="group/input input-glow rounded-lg transition-[box-shadow,border-color] duration-300">
                    <label className="text-xs font-medium mb-1.5 block text-muted-foreground group-focus-within/input:text-foreground transition-colors">First Name</label>
                    <Input placeholder="John" className="text-sm transition-[border-color] duration-200" />
                  </div>
                  <div className="group/input input-glow rounded-lg transition-[box-shadow,border-color] duration-300">
                    <label className="text-xs font-medium mb-1.5 block text-muted-foreground group-focus-within/input:text-foreground transition-colors">Last Name</label>
                    <Input placeholder="Doe" className="text-sm transition-[border-color] duration-200" />
                  </div>
                </div>
                
                <div className="group/input input-glow rounded-lg transition-[box-shadow,border-color] duration-300">
                  <label className="text-xs font-medium mb-1.5 block text-muted-foreground group-focus-within/input:text-foreground transition-colors">Email</label>
                  <Input type="email" placeholder="john@example.com" className="text-sm transition-[border-color] duration-200" />
                </div>
                
                <div className="group/input input-glow rounded-lg transition-[box-shadow,border-color] duration-300">
                  <label className="text-xs font-medium mb-1.5 block text-muted-foreground group-focus-within/input:text-foreground transition-colors">Subject</label>
                  <Input name="subject" placeholder="Project Inquiry" className="text-sm transition-[border-color] duration-200" />
                </div>
                
                <div className="group/input input-glow rounded-lg transition-[box-shadow,border-color] duration-300">
                  <label className="text-xs font-medium mb-1.5 block text-muted-foreground group-focus-within/input:text-foreground transition-colors">Message</label>
                  <Textarea name="message" placeholder="Tell me about your project..." rows={4} className="text-sm resize-none transition-[border-color] duration-200" />
                </div>
                
                <Button className="w-full btn-shine bg-primary text-primary-foreground hover:bg-primary/90 text-sm py-2.5 group/btn transition-colors duration-200">
                  <Send className="w-4 h-4 mr-2 group-hover/btn:translate-x-0.5 transition-transform" />
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