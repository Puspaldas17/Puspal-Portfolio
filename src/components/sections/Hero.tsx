
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
      
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-10 xs:top-20 left-4 xs:left-10 w-16 h-16 xs:w-32 xs:h-32 bg-accent/10 rounded-full blur-2xl xs:blur-3xl animate-float"></div>
      <div className="absolute bottom-20 xs:bottom-32 right-8 xs:right-16 w-24 h-24 xs:w-48 xs:h-48 bg-primary-light/10 rounded-full blur-2xl xs:blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 left-0 w-24 xs:w-48 h-0.5 xs:h-1 bg-gradient-primary opacity-20"></div>
      <div className="absolute bottom-1/3 right-0 w-16 xs:w-32 h-0.5 xs:h-1 bg-gradient-accent opacity-30"></div>
      
      <div className="container mx-auto px-4 xs:px-6 sm:px-8 lg:px-12 xl:px-16 py-12 xs:py-16 sm:py-20">
        <div className="grid lg:grid-cols-2 gap-8 xs:gap-12 sm:gap-16 xl:gap-20 items-center max-w-7xl mx-auto">
          
          {/* Content */}
          <div className="space-y-4 xs:space-y-6 sm:space-y-8 animate-fade-in-up text-white order-2 lg:order-1">
            
            {/* Badge */}
            <div className="inline-flex items-center gap-1.5 xs:gap-2 px-3 xs:px-4 py-1.5 xs:py-2 bg-white/10 rounded-full border border-white/20 backdrop-blur-sm">
              <div className="w-1.5 h-1.5 xs:w-2 xs:h-2 bg-accent rounded-full animate-pulse"></div>
              <span className="text-xs xs:text-sm font-medium">Available for opportunities</span>
            </div>
            
            {/* Main Heading */}
            <div className="space-y-2 xs:space-y-3 sm:space-y-4">
              <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-7xl 2xl:text-8xl font-bold leading-tight tracking-tight">
                👋 Hi, I'm <br className="hidden xs:block" />
                <span className="bg-gradient-accent bg-clip-text text-transparent">Puspal Das</span>
              </h1>
              <div className="flex flex-col xs:flex-row xs:items-center gap-2 xs:gap-4 text-lg xs:text-xl sm:text-2xl lg:text-xl xl:text-3xl font-semibold text-white/90">
                <Server className="w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8 text-accent flex-shrink-0" />
                <span className="leading-tight">Backend & MERN Stack Developer</span>
              </div>
            </div>
            
            {/* Description */}
            <p className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-lg xl:text-xl text-white/80 max-w-full lg:max-w-2xl leading-relaxed">
              I build scalable backends and modern MERN applications, crafting robust APIs and seamless digital experiences with <span className="font-mono text-white">Node.js</span>, <span className="font-mono text-white">Express</span>, <span className="font-mono text-white">MongoDB</span>, and <span className="font-mono text-white">React</span>.
            </p>
            
            {/* Tech Stack Icons */}
            <div className="flex items-center gap-2 xs:gap-3 sm:gap-4 py-3 xs:py-4 flex-wrap">
              <div className="flex items-center gap-1.5 xs:gap-2 px-2 xs:px-3 py-1.5 xs:py-2 bg-white/5 rounded-lg border border-white/10">
                <Code className="w-3.5 h-3.5 xs:w-4 xs:h-4 sm:w-5 sm:h-5 text-accent flex-shrink-0" />
                <span className="text-xs xs:text-sm font-mono">Node.js</span>
              </div>
              <div className="flex items-center gap-1.5 xs:gap-2 px-2 xs:px-3 py-1.5 xs:py-2 bg-white/5 rounded-lg border border-white/10">
                <Server className="w-3.5 h-3.5 xs:w-4 xs:h-4 sm:w-5 sm:h-5 text-accent flex-shrink-0" />
                <span className="text-xs xs:text-sm font-mono">Express</span>
              </div>
              <div className="flex items-center gap-1.5 xs:gap-2 px-2 xs:px-3 py-1.5 xs:py-2 bg-white/5 rounded-lg border border-white/10">
                <Database className="w-3.5 h-3.5 xs:w-4 xs:h-4 sm:w-5 sm:h-5 text-accent flex-shrink-0" />
                <span className="text-xs xs:text-sm font-mono">MongoDB</span>
              </div>
              <div className="flex items-center gap-1.5 xs:gap-2 px-2 xs:px-3 py-1.5 xs:py-2 bg-white/5 rounded-lg border border-white/10">
                <Code className="w-3.5 h-3.5 xs:w-4 xs:h-4 sm:w-5 sm:h-5 text-accent flex-shrink-0" />
                <span className="text-xs xs:text-sm font-mono">React</span>
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 xs:gap-4 pt-3 xs:pt-4">
              <Button 
                size="lg" 
                className="bg-accent text-accent-foreground hover:bg-accent-light shadow-accent text-sm xs:text-base sm:text-lg px-6 xs:px-8 py-4 xs:py-6"
                onClick={handleViewWorkClick}
              >
                View My Work
                <ChevronDown className="w-4 h-4 xs:w-5 xs:h-5 ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-white/30 text-white hover:bg-white hover:text-primary backdrop-blur-sm text-sm xs:text-base sm:text-lg px-6 xs:px-8 py-4 xs:py-6" asChild>
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
              <div className="relative w-64 h-64 xs:w-80 xs:h-80 sm:w-96 sm:h-96 lg:w-80 lg:h-80 xl:w-96 xl:h-96 2xl:w-[28rem] 2xl:h-[28rem] rounded-2xl xs:rounded-3xl overflow-hidden border-2 xs:border-4 border-white/20 shadow-xl backdrop-blur-sm">
                <div className="absolute inset-0 bg-gradient-primary opacity-20"></div>
                <img 
                  src={profileImageUrl} 
                  alt="Puspal Das - Backend Developer Portfolio" 
                  className="w-full h-full object-cover object-center scale-105 hover:scale-110 transition-transform duration-700"
                />
              </div>
              
              {/* Floating Status Card */}
              <div className="absolute -top-4 -right-4 xs:-top-6 xs:-right-6 bg-white rounded-xl xs:rounded-2xl p-2.5 xs:p-4 shadow-xl animate-float border border-gray-100" style={{ animationDelay: '1s' }}>
                <div className="flex items-center gap-2 xs:gap-3">
                  <div className="relative">
                    <div className="w-3 h-3 xs:w-4 xs:h-4 bg-accent rounded-full"></div>
                    <div className="absolute inset-0 w-3 h-3 xs:w-4 xs:h-4 bg-accent rounded-full animate-ping opacity-75"></div>
                  </div>
                  <div>
                    <div className="text-xs xs:text-sm font-semibold text-foreground whitespace-nowrap">Open to Work</div>
                    <div className="text-xs text-muted-foreground whitespace-nowrap">Backend & Full-Stack</div>
                  </div>
                </div>
              </div>
              
              {/* Tech Badge */}
              <div className="absolute -bottom-4 -left-4 xs:-bottom-6 xs:-left-6 bg-primary rounded-xl xs:rounded-2xl p-2.5 xs:p-4 shadow-xl animate-float text-white" style={{ animationDelay: '0.5s' }}>
                <div className="flex items-center gap-1.5 xs:gap-2">
                  <Code className="w-4 h-4 xs:w-5 xs:h-5 flex-shrink-0" />
                  <div>
                    <div className="text-xs xs:text-sm font-semibold whitespace-nowrap">MERN Stack</div>
                    <div className="text-xs opacity-80 whitespace-nowrap">Developer</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-4 xs:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-5 h-5 xs:w-6 xs:h-6 text-white/60" />
      </div>
    </section>
  );
};

export default Hero;
