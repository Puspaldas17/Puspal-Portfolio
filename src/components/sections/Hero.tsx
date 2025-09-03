
import { Button } from "@/components/ui/button";
import { ChevronDown, Code, Database, Server } from "lucide-react";

const profileImageUrl = "/lovable-uploads/34b283d9-1d93-4bf3-a2d1-040d22502d48.png";

const Hero = () => {
  const handleViewWorkClick = () => {
    console.log("View My Work button clicked");
    const portfolioSection = document.getElementById('portfolio');
    console.log("Portfolio section found:", portfolioSection);
    
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    } else {
      console.error("Portfolio section not found!");
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary to-accent relative overflow-hidden">
      
      <div className="container mx-auto px-4 xs:px-6 sm:px-8 lg:px-12 xl:px-16 py-12 xs:py-16 sm:py-20">
        <div className="grid lg:grid-cols-2 gap-8 xs:gap-12 sm:gap-16 xl:gap-20 items-center max-w-7xl mx-auto">
          
          {/* Content */}
          <div className="space-y-6 xs:space-y-8 animate-fade-in-up text-white order-2 lg:order-1">
            
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full border border-white/20 backdrop-blur-sm">
              <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
              <span className="text-sm font-medium">Available for opportunities</span>
            </div>
            
            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl xs:text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
                👋 Hi, I'm <br />
                <span className="text-yellow-400">Puspal Das</span>
              </h1>
              <div className="flex items-center gap-3 text-xl xs:text-2xl lg:text-3xl font-semibold">
                <Server className="w-8 h-8 text-yellow-400 flex-shrink-0" />
                <span>Backend & MERN Stack Developer</span>
              </div>
            </div>
            
            {/* Description */}
            <p className="text-lg text-white/90 max-w-2xl leading-relaxed">
              I build scalable backends and modern MERN applications, crafting robust APIs and seamless digital experiences with <span className="font-mono text-white">Node.js</span>, <span className="font-mono text-white">Express</span>, <span className="font-mono text-white">MongoDB</span>, and <span className="font-mono text-white">React</span>.
            </p>
            
            {/* Tech Stack Icons */}
            <div className="flex items-center gap-4 flex-wrap">
              <div className="flex items-center gap-2 px-3 py-2 bg-white/10 rounded-lg border border-white/20">
                <Code className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                <span className="text-sm font-mono">Node.js</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-2 bg-white/10 rounded-lg border border-white/20">
                <Server className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                <span className="text-sm font-mono">Express</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-2 bg-white/10 rounded-lg border border-white/20">
                <Database className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                <span className="text-sm font-mono">MongoDB</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-2 bg-white/10 rounded-lg border border-white/20">
                <Code className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                <span className="text-sm font-mono">React</span>
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                size="lg" 
                className="bg-yellow-400 text-black hover:bg-yellow-500 font-semibold text-lg px-8 py-6"
                onClick={handleViewWorkClick}
              >
                View My Work
                <ChevronDown className="w-5 h-5 ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-white/30 text-white hover:bg-white hover:text-primary backdrop-blur-sm text-lg px-8 py-6" asChild>
                <a href="/lovable-uploads/2330946a-5345-4afb-8564-eb40af5f3ed8.png" download="Puspal_Das_CV.pdf">
                  Download CV
                </a>
              </Button>
            </div>
          </div>
          
          {/* Profile Image */}
          <div className="relative flex justify-center lg:justify-end animate-fade-in-right order-1 lg:order-2">
            <div className="relative">
              
              {/* Main Image */}
              <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src={profileImageUrl} 
                  alt="Puspal Das - Backend Developer Portfolio" 
                  className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
                />
              </div>
              
              {/* Floating Status Card */}
              <div className="absolute -top-4 -right-4 bg-white rounded-2xl p-4 shadow-xl animate-float" style={{ animationDelay: '1s' }}>
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="w-4 h-4 bg-yellow-400 rounded-full"></div>
                    <div className="absolute inset-0 w-4 h-4 bg-yellow-400 rounded-full animate-ping opacity-75"></div>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-gray-900 whitespace-nowrap">Open to Work</div>
                    <div className="text-xs text-gray-600 whitespace-nowrap">Backend & Full-Stack</div>
                  </div>
                </div>
              </div>
              
              {/* Tech Badge */}
              <div className="absolute -bottom-4 -left-4 bg-blue-600 rounded-2xl p-4 shadow-xl animate-float text-white" style={{ animationDelay: '0.5s' }}>
                <div className="flex items-center gap-2">
                  <Code className="w-5 h-5 flex-shrink-0" />
                  <div>
                    <div className="text-sm font-semibold whitespace-nowrap">MERN Stack</div>
                    <div className="text-xs opacity-90 whitespace-nowrap">Developer</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
