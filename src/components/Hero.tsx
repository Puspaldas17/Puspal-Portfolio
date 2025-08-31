import { Button } from "@/components/ui/button";
const profileImageUrl = "/lovable-uploads/34b283d9-1d93-4bf3-a2d1-040d22502d48.png";

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
            Hi, I'm <br />
            <span className="text-accent">Puspal Das</span> <br />
            Backend Developer
          </h1>
          
          <p className="text-lg text-white/90 max-w-lg">
            I build scalable backend systems and modern web applications using Node.js, Express, and MongoDB. 
            Passionate about creating robust APIs and seamless user experiences that drive business growth.
          </p>
          
          <div className="flex gap-4">
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-accent">
              View My Work
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary" asChild>
              <a href="/lovable-uploads/2330946a-5345-4afb-8564-eb40af5f3ed8.png" download="Puspal_Das_CV.pdf">
                Download CV
              </a>
            </Button>
          </div>
        </div>
        
        <div className="relative flex justify-center lg:justify-end">
          <div className="relative">
            <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl animate-float">
              <img 
                src={profileImageUrl} 
                alt="Puspal Das - Backend Developer" 
                className="w-full h-full object-cover object-center"
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