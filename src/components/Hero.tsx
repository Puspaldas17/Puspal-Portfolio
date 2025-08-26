import { Button } from "@/components/ui/button";
import profileImage from "@/assets/profile-hero.jpg";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-hero-gradient relative overflow-hidden pt-20">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-16 h-16 bg-accent/20 rounded-full animate-float"></div>
      <div className="absolute bottom-32 right-16 w-24 h-24 bg-white/10 rounded-lg rotate-45 animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 left-0 w-32 h-1 bg-accent/30"></div>
      
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div className="text-white space-y-6 animate-fade-in-up">
          <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
            Hello, I'm <br />
            <span className="text-accent">Puspal Das</span> <br />
            Backend Developer
          </h1>
          
          <p className="text-lg text-white/90 max-w-lg">
            I'm a developer who loves turning ideas into interactive digital experiences. 
            From sleek web apps to system-level solutions, I combine code, creativity, and curiosity to build projects that are both functional and fun.
          </p>
          
          <div className="flex gap-4">
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-accent">
              View My Work
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
              Download CV
            </Button>
          </div>
        </div>
        
        <div className="relative flex justify-center lg:justify-end">
          <div className="relative">
            <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl animate-float">
              <img 
                src={profileImage} 
                alt="Puspal Das - Backend Developer" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Floating card */}
            <div className="absolute -top-4 -right-4 bg-white rounded-lg p-4 shadow-lg animate-float" style={{ animationDelay: '1s' }}>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-foreground">Available for work</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;