import { Github, Linkedin, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="text-2xl font-bold bg-accent-gradient bg-clip-text text-transparent mb-4">
              Puspal Das
            </div>
            <p className="text-background/70 mb-6 max-w-md">
              Backend Developer passionate about building robust, scalable applications 
              that power amazing digital experiences.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-background/10 rounded-lg flex items-center justify-center hover:bg-accent transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-background/10 rounded-lg flex items-center justify-center hover:bg-accent transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-background/10 rounded-lg flex items-center justify-center hover:bg-accent transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-background/10 rounded-lg flex items-center justify-center hover:bg-accent transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-background/70 hover:text-accent transition-colors">Home</a></li>
              <li><a href="#about" className="text-background/70 hover:text-accent transition-colors">About</a></li>
              <li><a href="#services" className="text-background/70 hover:text-accent transition-colors">Services</a></li>
              <li><a href="#portfolio" className="text-background/70 hover:text-accent transition-colors">Portfolio</a></li>
              <li><a href="#contact" className="text-background/70 hover:text-accent transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><span className="text-background/70">UI/UX Design</span></li>
              <li><span className="text-background/70">Frontend Development</span></li>
              <li><span className="text-background/70">Mobile App Design</span></li>
              <li><span className="text-background/70">Prototyping</span></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-background/20 mt-12 pt-8 text-center">
          <p className="text-background/70">
            © 2024 Puspal Das. All rights reserved. Designed with ❤️ for amazing experiences.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;