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
    // Handle message submission
    console.log({ name, email, message });
    // Reset form
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <>
      {/* Chat Button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full shadow-lg hover:scale-110 transition-transform"
        size="icon"
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </Button>

      {/* Chat Window */}
      {isOpen && (
        <Card className="fixed bottom-24 right-6 z-50 w-[350px] shadow-xl animate-in slide-in-from-bottom-5 duration-300">
          <div className="bg-primary text-primary-foreground p-4 rounded-t-lg">
            <h3 className="font-semibold text-lg">Let's Chat!</h3>
            <p className="text-sm opacity-90">We typically reply within minutes</p>
          </div>

          <form onSubmit={handleSubmit} className="p-4 space-y-4">
            <div>
              <Input
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div>
              <Input
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div>
              <Textarea
                placeholder="How can we help you?"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                rows={4}
                className="resize-none"
              />
            </div>

            <Button type="submit" className="w-full">
              <Send className="h-4 w-4 mr-2" />
              Send Message
            </Button>
          </form>

          <div className="px-4 pb-4 text-xs text-muted-foreground text-center">
            We'll get back to you as soon as possible
          </div>
        </Card>
      )}
    </>
  );
};
