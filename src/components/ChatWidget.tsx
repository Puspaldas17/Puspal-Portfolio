import { useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";

export const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `Portfolio Contact from ${name}`;
    const body = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
    window.location.href = `mailto:puspal1703@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setName("");
    setEmail("");
    setMessage("");
    setIsOpen(false);
  };

  return (
    <>
      {/* Chat Button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-4 right-4 xs:bottom-6 xs:right-6 z-50 h-12 w-12 xs:h-14 xs:w-14 rounded-full shadow-lg hover:scale-110 transition-all duration-300 bg-gradient-to-r from-primary to-accent hover:shadow-xl"
        size="icon"
      >
        <div className="relative w-5 h-5 xs:w-6 xs:h-6">
          <MessageCircle className={`absolute inset-0 h-5 w-5 xs:h-6 xs:w-6 transition-all duration-300 ${isOpen ? 'opacity-0 rotate-90 scale-50' : 'opacity-100 rotate-0 scale-100'}`} />
          <X className={`absolute inset-0 h-5 w-5 xs:h-6 xs:w-6 transition-all duration-300 ${isOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-50'}`} />
        </div>
      </Button>

      {/* Chat Window */}
      <div className={`fixed bottom-20 right-4 xs:bottom-24 xs:right-6 z-50 w-[calc(100vw-2rem)] xs:w-[320px] sm:w-[350px] max-w-[350px] transition-all duration-300 ${isOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-4 pointer-events-none'}`}>
        <Card className="shadow-2xl glass overflow-hidden">
          <div className="bg-gradient-to-r from-primary to-accent text-primary-foreground p-3 xs:p-4 rounded-t-lg">
            <h3 className="font-semibold text-base xs:text-lg">Quick Message</h3>
            <p className="text-xs xs:text-sm opacity-90">Send me a message via email</p>
          </div>

          <form onSubmit={handleSubmit} className="p-3 xs:p-4 space-y-3 xs:space-y-4">
            <Input
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="text-sm xs:text-base transition-all duration-300 focus:scale-[1.02]"
            />
            <Input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="text-sm xs:text-base transition-all duration-300 focus:scale-[1.02]"
            />
            <Textarea
              placeholder="How can I help you?"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              rows={3}
              className="text-sm xs:text-base resize-none transition-all duration-300 focus:scale-[1.01]"
            />
            <Button type="submit" className="w-full text-sm xs:text-base bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-all duration-300 hover:scale-[1.02]">
              <Send className="h-3.5 w-3.5 xs:h-4 xs:w-4 mr-1.5 xs:mr-2" />
              Send Message
            </Button>
          </form>

          <div className="px-3 xs:px-4 pb-3 xs:pb-4 text-[10px] xs:text-xs text-muted-foreground text-center">
            Opens your email client to send the message
          </div>
        </Card>
      </div>
    </>
  );
};
