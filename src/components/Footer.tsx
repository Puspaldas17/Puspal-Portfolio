import { Github, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12">
            <div className="md:col-span-2">
              <div className="text-3xl font-bold bg-gradient-accent bg-clip-text text-transparent mb-6">
                Puspal Das
              </div>
              <p className="text-background/70 mb-8 max-w-md leading-relaxed">
                Backend Developer passionate about building robust, scalable applications 
                that power amazing digital experiences and drive innovation forward.
              </p>
              <div className="flex space-x-4">
                <a href="https://github.com/Puspaldas17" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-background/10 rounded-xl flex items-center justify-center hover:bg-accent hover:scale-110 transition-all duration-300">
                  <Github className="w-5 h-5" />
                </a>
                <a href="https://www.linkedin.com/in/puspal-das-995933253/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-background/10 rounded-xl flex items-center justify-center hover:bg-accent hover:scale-110 transition-all duration-300">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="https://x.com/PuspalDas17" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-background/10 rounded-xl flex items-center justify-center hover:bg-accent hover:scale-110 transition-all duration-300">
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-6 text-lg">Quick Links</h4>
              <ul className="space-y-3">
                <li><a href="#home" className="text-background/70 hover:text-accent transition-colors">Home</a></li>
                <li><a href="#about" className="text-background/70 hover:text-accent transition-colors">About</a></li>
                <li><a href="#skills" className="text-background/70 hover:text-accent transition-colors">Skills</a></li>
                <li><a href="#portfolio" className="text-background/70 hover:text-accent transition-colors">Portfolio</a></li>
                <li><a href="#contact" className="text-background/70 hover:text-accent transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-6 text-lg">Services</h4>
              <ul className="space-y-3">
                <li><span className="text-background/70">Backend Development</span></li>
                <li><span className="text-background/70">Database Design</span></li>
                <li><span className="text-background/70">MERN Stack Development</span></li>
                <li><span className="text-background/70">API Development</span></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-background/20 mt-16 pt-8 text-center">
            <p className="text-background/70">
              © 2024 Puspal Das. Crafted with code & creativity.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;