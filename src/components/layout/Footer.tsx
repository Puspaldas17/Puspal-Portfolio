import { Github, Linkedin, Twitter, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-14 xs:py-16 sm:py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />
      {/* Top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <div className="absolute top-0 left-0 right-0 section-divider-animated" />
      
      <div className="container mx-auto px-4 xs:px-6 sm:px-8 lg:px-12 xl:px-16 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 xs:gap-12">
            <div className="sm:col-span-2">
              <div className="text-xl xs:text-2xl font-bold mb-2">
                <span className="text-background">Puspal </span>
                <span className="gradient-text-animated">Das</span>
              </div>
              <p className="text-background/50 mb-6 xs:mb-8 max-w-sm leading-relaxed text-sm xs:text-base">
                Backend Developer passionate about building robust, scalable applications 
                that power amazing digital experiences.
              </p>
              <div className="flex space-x-3">
                <a href="https://github.com/Puspaldas17" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-background/[0.06] rounded-xl flex items-center justify-center hover:bg-primary transition-colors duration-200 border border-background/10 hover:border-primary group social-glow">
                  <Github className="w-4 h-4 text-background/60 group-hover:text-white" />
                </a>
                <a href="https://www.linkedin.com/in/puspal-das-995933253/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-background/[0.06] rounded-xl flex items-center justify-center hover:bg-primary transition-colors duration-200 border border-background/10 hover:border-primary group social-glow">
                  <Linkedin className="w-4 h-4 text-background/60 group-hover:text-white" />
                </a>
                <a href="https://x.com/PuspalDas17" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-background/[0.06] rounded-xl flex items-center justify-center hover:bg-primary transition-colors duration-200 border border-background/10 hover:border-primary group social-glow">
                  <Twitter className="w-4 h-4 text-background/60 group-hover:text-white" />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-5 text-sm xs:text-base tracking-wide uppercase text-background/80">Quick Links</h4>
              <ul className="space-y-3">
                <li><a href="#home" className="text-background/50 hover:text-background transition-colors text-sm footer-link">Home</a></li>
                <li><a href="#about" className="text-background/50 hover:text-background transition-colors text-sm footer-link">About</a></li>
                <li><a href="#skills" className="text-background/50 hover:text-background transition-colors text-sm footer-link">Skills</a></li>
                <li><a href="#portfolio" className="text-background/50 hover:text-background transition-colors text-sm footer-link">Portfolio</a></li>
                <li><a href="#contact" className="text-background/50 hover:text-background transition-colors text-sm footer-link">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-5 text-sm xs:text-base tracking-wide uppercase text-background/80">Services</h4>
              <ul className="space-y-3">
                <li><span className="text-background/50 text-sm">Backend Development</span></li>
                <li><span className="text-background/50 text-sm">Database Design</span></li>
                <li><span className="text-background/50 text-sm">MERN Stack</span></li>
                <li><span className="text-background/50 text-sm">API Development</span></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-background/10 mt-14 xs:mt-16 sm:mt-20 pt-6 xs:pt-8 text-center">
            <p className="text-background/40 text-xs xs:text-sm flex items-center justify-center gap-1.5">
              &copy; {new Date().getFullYear()} Puspal Das. Built with <Heart className="w-3.5 h-3.5 text-red-400 fill-red-400 inline" /> & code.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;