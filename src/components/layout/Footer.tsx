import { Github, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12 xs:py-14 sm:py-16">
      <div className="container mx-auto px-4 xs:px-6 sm:px-8 lg:px-12 xl:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 xs:gap-10 sm:gap-12">
            <div className="sm:col-span-2">
              <div className="text-2xl xs:text-3xl font-bold bg-gradient-accent bg-clip-text text-transparent mb-4 xs:mb-6">
                Puspal Das
              </div>
              <p className="text-background/70 mb-6 xs:mb-8 max-w-md leading-relaxed text-sm xs:text-base">
                Backend Developer passionate about building robust, scalable applications 
                that power amazing digital experiences and drive innovation forward.
              </p>
              <div className="flex space-x-3 xs:space-x-4">
                <a href="https://github.com/Puspaldas17" target="_blank" rel="noopener noreferrer" className="w-10 h-10 xs:w-12 xs:h-12 bg-background/10 rounded-xl flex items-center justify-center hover:bg-accent hover:scale-110 transition-all duration-300">
                  <Github className="w-4 h-4 xs:w-5 xs:h-5" />
                </a>
                <a href="https://www.linkedin.com/in/puspal-das-995933253/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 xs:w-12 xs:h-12 bg-background/10 rounded-xl flex items-center justify-center hover:bg-accent hover:scale-110 transition-all duration-300">
                  <Linkedin className="w-4 h-4 xs:w-5 xs:h-5" />
                </a>
                <a href="https://x.com/PuspalDas17" target="_blank" rel="noopener noreferrer" className="w-10 h-10 xs:w-12 xs:h-12 bg-background/10 rounded-xl flex items-center justify-center hover:bg-accent hover:scale-110 transition-all duration-300">
                  <Twitter className="w-4 h-4 xs:w-5 xs:h-5" />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 xs:mb-6 text-base xs:text-lg">Quick Links</h4>
              <ul className="space-y-2 xs:space-y-3">
                <li><a href="#home" className="text-background/70 hover:text-accent transition-colors text-sm xs:text-base">Home</a></li>
                <li><a href="#about" className="text-background/70 hover:text-accent transition-colors text-sm xs:text-base">About</a></li>
                <li><a href="#skills" className="text-background/70 hover:text-accent transition-colors text-sm xs:text-base">Skills</a></li>
                <li><a href="#portfolio" className="text-background/70 hover:text-accent transition-colors text-sm xs:text-base">Portfolio</a></li>
                <li><a href="#contact" className="text-background/70 hover:text-accent transition-colors text-sm xs:text-base">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 xs:mb-6 text-base xs:text-lg">Services</h4>
              <ul className="space-y-2 xs:space-y-3">
                <li><span className="text-background/70 text-sm xs:text-base">Backend Development</span></li>
                <li><span className="text-background/70 text-sm xs:text-base">Database Design</span></li>
                <li><span className="text-background/70 text-sm xs:text-base">MERN Stack Development</span></li>
                <li><span className="text-background/70 text-sm xs:text-base">API Development</span></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-background/20 mt-12 xs:mt-14 sm:mt-16 pt-6 xs:pt-8 text-center">
            <p className="text-background/70 text-sm xs:text-base">
              © 2024 Puspal Das. Crafted with code & creativity.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;