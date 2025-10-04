
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
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary via-primary to-accent relative overflow-hidden">
      {/* Modern background effects */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItaDJ2LTJoLTJ6bTAtNGgydjJoLTJ2LTJ6bS0yIDJ2LTJoLTJ2Mmgyem0wIDBoLTJ2Mmgydi0yem0yIDJoLTJ2Mmgydi0yem0wIDBodjJoMnYtMmgtMnptMi0yaDJ2LTJoLTJ2MnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-40"></div>
      <div className="absolute inset-0 bg-gradient-mesh opacity-30"></div>
      
      <div className="container mx-auto px-4 xs:px-6 sm:px-8 md:px-10 lg:px-12 xl:px-16 2xl:px-20 py-12 xs:py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 xs:gap-10 sm:gap-12 md:gap-14 lg:gap-16 xl:gap-20 2xl:gap-24 items-center max-w-7xl 2xl:max-w-[1600px] mx-auto">
          
          {/* Content */}
          <div className="space-y-5 xs:space-y-6 sm:space-y-7 md:space-y-8 animate-fade-in-up text-white order-2 lg:order-1">
            
            {/* Badge */}
            <div className="inline-flex items-center gap-2 xs:gap-2.5 px-4 xs:px-5 py-2 xs:py-2.5 bg-white/10 rounded-full border border-white/20 backdrop-blur-md hover:bg-white/15 transition-all duration-300 group">
              <div className="relative flex items-center justify-center">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <div className="absolute w-2 h-2 bg-green-400 rounded-full animate-ping opacity-75"></div>
              </div>
              <span className="text-xs xs:text-sm md:text-base font-semibold">Available for opportunities</span>
            </div>
            
            {/* Main Heading */}
            <div className="space-y-3 xs:space-y-4">
              <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-bold leading-tight">
                👋 Hi, I'm <br />
                <span className="text-yellow-400">Puspal Das</span>
              </h1>
              <div className="flex items-center gap-2 xs:gap-3 text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold">
                <Server className="w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 text-yellow-400 flex-shrink-0" />
                <span>Backend & MERN Stack Developer</span>
              </div>
            </div>
            
            {/* Description */}
            <p className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-xl xl:text-2xl text-white/90 max-w-2xl xl:max-w-3xl leading-relaxed">
              I build scalable backends and modern MERN applications, crafting robust APIs and seamless digital experiences with <span className="font-mono text-white">Node.js</span>, <span className="font-mono text-white">Express</span>, <span className="font-mono text-white">MongoDB</span>, and <span className="font-mono text-white">React</span>.
            </p>
            
            {/* Tech Stack Icons */}
            <div className="flex items-center gap-2 xs:gap-3 sm:gap-4 flex-wrap">
              <div className="flex items-center gap-1.5 xs:gap-2 px-2.5 xs:px-3 py-1.5 xs:py-2 bg-white/10 rounded-lg border border-white/20">
                <Code className="w-4 h-4 xs:w-5 xs:h-5 text-yellow-400 flex-shrink-0" />
                <span className="text-xs xs:text-sm md:text-base font-mono">Node.js</span>
              </div>
              <div className="flex items-center gap-1.5 xs:gap-2 px-2.5 xs:px-3 py-1.5 xs:py-2 bg-white/10 rounded-lg border border-white/20">
                <Server className="w-4 h-4 xs:w-5 xs:h-5 text-yellow-400 flex-shrink-0" />
                <span className="text-xs xs:text-sm md:text-base font-mono">Express</span>
              </div>
              <div className="flex items-center gap-1.5 xs:gap-2 px-2.5 xs:px-3 py-1.5 xs:py-2 bg-white/10 rounded-lg border border-white/20">
                <Database className="w-4 h-4 xs:w-5 xs:h-5 text-yellow-400 flex-shrink-0" />
                <span className="text-xs xs:text-sm md:text-base font-mono">MongoDB</span>
              </div>
              <div className="flex items-center gap-1.5 xs:gap-2 px-2.5 xs:px-3 py-1.5 xs:py-2 bg-white/10 rounded-lg border border-white/20">
                <Code className="w-4 h-4 xs:w-5 xs:h-5 text-yellow-400 flex-shrink-0" />
                <span className="text-xs xs:text-sm md:text-base font-mono">React</span>
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 xs:gap-4 pt-4 xs:pt-6">
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90 font-bold text-sm xs:text-base md:text-lg px-6 xs:px-8 md:px-10 py-5 xs:py-6 md:py-7 shadow-xl hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-300"
                onClick={handleViewWorkClick}
              >
                View My Work
                <ChevronDown className="w-4 h-4 xs:w-5 xs:h-5 ml-2" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-white text-white hover:bg-white hover:text-primary backdrop-blur-md font-bold text-sm xs:text-base md:text-lg px-6 xs:px-8 md:px-10 py-5 xs:py-6 md:py-7 shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300" 
                asChild
              >
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
              <div className="relative w-64 h-64 xs:w-72 xs:h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[26rem] lg:h-[26rem] xl:w-[30rem] xl:h-[30rem] 2xl:w-[34rem] 2xl:h-[34rem] rounded-2xl xs:rounded-3xl overflow-hidden shadow-2xl ring-4 ring-white/10">
                <img 
                  src={profileImageUrl} 
                  alt="Puspal Das - Backend Developer Portfolio" 
                  loading="eager"
                  fetchPriority="high"
                  className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
              </div>
              
              {/* Floating Status Card */}
              <div className="absolute -top-3 -right-3 xs:-top-4 xs:-right-4 bg-white rounded-xl xs:rounded-2xl p-2.5 xs:p-3 sm:p-4 shadow-xl animate-float" style={{ animationDelay: '1s' }}>
                <div className="flex items-center gap-2 xs:gap-3">
                  <div className="relative">
                    <div className="w-3 h-3 xs:w-4 xs:h-4 bg-yellow-400 rounded-full"></div>
                    <div className="absolute inset-0 w-3 h-3 xs:w-4 xs:h-4 bg-yellow-400 rounded-full animate-ping opacity-75"></div>
                  </div>
                  <div>
                    <div className="text-xs xs:text-sm md:text-base font-semibold text-gray-900 whitespace-nowrap">Open to Work</div>
                    <div className="text-[10px] xs:text-xs md:text-sm text-gray-600 whitespace-nowrap">Backend & Full-Stack</div>
                  </div>
                </div>
              </div>
              
              {/* Tech Badge */}
              <div className="absolute -bottom-3 -left-3 xs:-bottom-4 xs:-left-4 bg-blue-600 rounded-xl xs:rounded-2xl p-2.5 xs:p-3 sm:p-4 shadow-xl animate-float text-white" style={{ animationDelay: '0.5s' }}>
                <div className="flex items-center gap-1.5 xs:gap-2">
                  <Code className="w-4 h-4 xs:w-5 xs:h-5 md:w-6 md:h-6 flex-shrink-0" />
                  <div>
                    <div className="text-xs xs:text-sm md:text-base font-semibold whitespace-nowrap">MERN Stack</div>
                    <div className="text-[10px] xs:text-xs md:text-sm opacity-90 whitespace-nowrap">Developer</div>
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
