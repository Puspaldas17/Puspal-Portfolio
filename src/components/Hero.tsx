import { Button } from "@/components/ui/button";
import { ChevronDown, Code, Database, Server } from "lucide-react";

const profileImageUrl = "/lovable-uploads/34b283d9-1d93-4bf3-a2d1-040d22502d48.png";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-hero relative overflow-hidden">
      
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-20 left-10 w-32 h-32 bg-accent/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-32 right-16 w-48 h-48 bg-primary-light/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 left-0 w-48 h-1 bg-gradient-primary opacity-20"></div>
      <div className="absolute bottom-1/3 right-0 w-32 h-1 bg-gradient-accent opacity-30"></div>
      
      <div className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          
          {/* Content */}
          <div className="space-y-8 animate-fade-in-up text-white">
            
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full border border-white/20 backdrop-blur-sm">
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
              <span className="text-sm font-medium">Available for opportunities</span>
            </div>
            
            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight tracking-tight">
                👋 Hi, I'm <br />
                <span className="bg-gradient-accent bg-clip-text text-transparent">Puspal Das</span>
              </h1>
              <div className="flex items-center gap-4 text-2xl lg:text-3xl font-semibold text-white/90">
                <Server className="w-8 h-8 text-accent" />
                <span>Backend & MERN Stack Developer</span>
              </div>
            </div>
            
            {/* Description */}
            <p className="text-xl text-white/80 max-w-2xl leading-relaxed">
              I build scalable backends and modern MERN applications, crafting robust APIs and seamless digital experiences with <span className="font-mono text-white">Node.js</span>, <span className="font-mono text-white">Express</span>, <span className="font-mono text-white">MongoDB</span>, and <span className="font-mono text-white">React</span>.
            </p>
            
            {/* Tech Stack Icons */}
            <div className="flex items-center gap-4 py-4 flex-wrap">
              <div className="flex items-center gap-2 px-3 py-2 bg-white/5 rounded-lg border border-white/10">
                <Code className="w-5 h-5 text-accent" />
                <span className="text-sm font-mono">Node.js</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-2 bg-white/5 rounded-lg border border-white/10">
                <Server className="w-5 h-5 text-accent" />
                <span className="text-sm font-mono">Express</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-2 bg-white/5 rounded-lg border border-white/10">
                <Database className="w-5 h-5 text-accent" />
                <span className="text-sm font-mono">MongoDB</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-2 bg-white/5 rounded-lg border border-white/10">
                <Code className="w-5 h-5 text-accent" />
                <span className="text-sm font-mono">React</span>
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent-light shadow-accent text-lg px-8 py-6">
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
          <div className="relative flex justify-center lg:justify-end animate-fade-in-right">
            <div className="relative">
              
              {/* Main Image */}
              <div className="relative w-96 h-96 rounded-3xl overflow-hidden border-4 border-white/20 shadow-xl backdrop-blur-sm">
                <div className="absolute inset-0 bg-gradient-primary opacity-20"></div>
                <img 
                  src={profileImageUrl} 
                  alt="Puspal Das - Backend Developer Portfolio" 
                  className="w-full h-full object-cover object-center scale-105 hover:scale-110 transition-transform duration-700"
                />
              </div>
              
              {/* Floating Status Card */}
              <div className="absolute -top-6 -right-6 bg-white rounded-2xl p-4 shadow-xl animate-float border border-gray-100" style={{ animationDelay: '1s' }}>
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="w-4 h-4 bg-accent rounded-full"></div>
                    <div className="absolute inset-0 w-4 h-4 bg-accent rounded-full animate-ping opacity-75"></div>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-foreground">Open to Work</div>
                    <div className="text-xs text-muted-foreground">Backend & Full-Stack</div>
                  </div>
                </div>
              </div>
              
              {/* Tech Badge */}
              <div className="absolute -bottom-6 -left-6 bg-primary rounded-2xl p-4 shadow-xl animate-float text-white" style={{ animationDelay: '0.5s' }}>
                <div className="flex items-center gap-2">
                  <Code className="w-5 h-5" />
                  <div>
                    <div className="text-sm font-semibold">MERN Stack</div>
                    <div className="text-xs opacity-80">Developer</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-white/60" />
      </div>
    </section>
  );
};

export default Hero;