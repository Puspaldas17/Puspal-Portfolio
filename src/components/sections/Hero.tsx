import { useRef, useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, Code, Database, Server, Download, ArrowRight } from "lucide-react";
import { useParallaxTransform } from "@/hooks/use-parallax";
import { useTranslation } from "react-i18next";

const profileImageUrl = "/lovable-uploads/34b283d9-1d93-4bf3-a2d1-040d22502d48.png";

const roles = [
  "Backend Developer",
  "MERN Stack Developer",
  "Full-Stack Engineer",
  "API Architect",
];

const useTypingEffect = (words: string[], typingSpeed = 80, deletingSpeed = 50, pauseDuration = 2000) => {
  const [displayText, setDisplayText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentWord.slice(0, displayText.length + 1));
        if (displayText.length + 1 === currentWord.length) {
          setTimeout(() => setIsDeleting(true), pauseDuration);
        }
      } else {
        setDisplayText(currentWord.slice(0, displayText.length - 1));
        if (displayText.length === 0) {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, wordIndex, isDeleting, words, typingSpeed, deletingSpeed, pauseDuration]);

  return displayText;
};

const Hero = () => {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLElement>(null);
  const bgPatternTransform = useParallaxTransform(sectionRef, { speed: 0.3 });
  const bgMeshTransform = useParallaxTransform(sectionRef, { speed: 0.5 });
  const typedRole = useTypingEffect(roles);

  const handleViewWorkClick = useCallback(() => {
    const portfolioSection = document.getElementById('portfolio');
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  return (
    <section ref={sectionRef} id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-accent" />
      <div className="absolute inset-0 morphing-bg opacity-50" />
      
      {/* Dot pattern with parallax */}
      <div 
        className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItaDJ2LTJoLTJ6bTAtNGgydjJoLTJ2LTJ6bS0yIDJ2LTJoLTJ2Mmgyem0wIDBoLTJ2Mmgydi0yem0yIDJoLTJ2Mmgydi0yem0wIDBodjJoMnYtMmgtMnptMi0yaDJ2LTJoLTJ2MnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-40 will-change-transform"
        style={{ transform: bgPatternTransform }}
      />
      <div 
        className="absolute inset-0 bg-gradient-mesh opacity-30 will-change-transform"
        style={{ transform: bgMeshTransform }}
      />

      {/* Blob shapes */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-white/5 rounded-full blur-3xl animate-morph-blob" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-morph-blob" style={{ animationDelay: '-4s' }} />
      
      <div className="container mx-auto px-4 xs:px-6 sm:px-8 md:px-10 lg:px-12 xl:px-16 2xl:px-20 py-12 xs:py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 xs:gap-10 sm:gap-12 md:gap-14 lg:gap-16 xl:gap-20 2xl:gap-24 items-center max-w-7xl 2xl:max-w-[1600px] mx-auto">
          
          {/* Content */}
          <div className="space-y-5 xs:space-y-6 sm:space-y-7 md:space-y-8 text-white order-2 lg:order-1">
            
            {/* Badge */}
            <div className="inline-flex items-center gap-2 xs:gap-2.5 px-4 xs:px-5 py-2 xs:py-2.5 bg-white/10 rounded-full border border-white/20 backdrop-blur-md hover:bg-white/15 transition-all duration-300 group opacity-0 animate-slide-up-fade" style={{ animationDelay: '0.2s' }}>
              <div className="relative flex items-center justify-center">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <div className="absolute w-2 h-2 bg-green-400 rounded-full animate-ping opacity-75"></div>
              </div>
              <span className="text-xs xs:text-sm md:text-base font-semibold">{t('hero.badge')}</span>
            </div>
            
            {/* Main Heading */}
            <div className="space-y-3 xs:space-y-4 opacity-0 animate-slide-up-fade" style={{ animationDelay: '0.4s' }}>
              <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-bold leading-tight">
                👋 {t('hero.greeting')} <br />
                <span className="bg-gradient-to-r from-yellow-300 via-orange-300 to-yellow-400 bg-clip-text text-transparent drop-shadow-[0_2px_20px_rgba(250,204,21,0.4)]">
                  {t('hero.name')}
                </span>
              </h1>
              <div className="flex items-center gap-2 xs:gap-3 text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold">
                <Server className="w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 text-yellow-300 flex-shrink-0" />
                <span className="font-mono">
                  {typedRole}
                  <span className="inline-block w-[3px] h-[1em] bg-yellow-300 ml-1 animate-pulse" />
                </span>
              </div>
            </div>
            
            {/* Description */}
            <p className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-xl xl:text-2xl text-white/90 max-w-2xl xl:max-w-3xl leading-relaxed opacity-0 animate-slide-up-fade" style={{ animationDelay: '0.6s' }}>
              {t('hero.description', { 
                node: 'Node.js', 
                express: 'Express', 
                mongo: 'MongoDB', 
                react: 'React' 
              })}
            </p>
            
            {/* Tech Stack Icons */}
            <div className="flex items-center gap-2 xs:gap-3 sm:gap-4 flex-wrap opacity-0 animate-slide-up-fade" style={{ animationDelay: '0.8s' }}>
              {[
                { icon: Code, label: "Node.js" },
                { icon: Server, label: "Express" },
                { icon: Database, label: "MongoDB" },
                { icon: Code, label: "React" },
              ].map((tech, i) => (
                <div 
                  key={tech.label}
                  className="flex items-center gap-1.5 xs:gap-2 px-2.5 xs:px-3 py-1.5 xs:py-2 glass rounded-lg hover:bg-white/15 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <tech.icon className="w-4 h-4 xs:w-5 xs:h-5 text-yellow-300 flex-shrink-0" />
                  <span className="text-xs xs:text-sm md:text-base font-mono">{tech.label}</span>
                </div>
              ))}
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 xs:gap-4 pt-4 xs:pt-6 opacity-0 animate-slide-up-fade" style={{ animationDelay: '1s' }}>
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90 font-bold text-sm xs:text-base md:text-lg px-6 xs:px-8 md:px-10 py-5 xs:py-6 md:py-7 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group/btn"
                onClick={handleViewWorkClick}
              >
                {t('hero.viewWork')}
                <ArrowRight className="w-4 h-4 xs:w-5 xs:h-5 ml-2 group-hover/btn:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-yellow-400 to-orange-400 text-gray-900 hover:from-yellow-300 hover:to-orange-300 font-bold text-sm xs:text-base md:text-lg px-6 xs:px-8 md:px-10 py-5 xs:py-6 md:py-7 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group/btn" 
                asChild
              >
                <a href="/resume.pdf" download="Puspal_Das_Resume.pdf">
                  <Download className="w-4 h-4 xs:w-5 xs:h-5 mr-2 group-hover/btn:animate-bounce" />
                  {t('hero.downloadCV')}
                </a>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-white/40 text-white hover:bg-white hover:text-primary backdrop-blur-md font-bold text-sm xs:text-base md:text-lg px-6 xs:px-8 md:px-10 py-5 xs:py-6 md:py-7 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300" 
                asChild
              >
                <a href="/resume" target="_blank">
                  {t('hero.viewResume')}
                </a>
              </Button>
            </div>
          </div>
          
          {/* Profile Image */}
          <div className="relative flex justify-center lg:justify-end order-1 lg:order-2 opacity-0 animate-slide-up-fade" style={{ animationDelay: '0.5s' }}>
            <div className="relative">
              {/* Decorative glow ring */}
              <div className="absolute -inset-4 bg-gradient-to-r from-yellow-400/20 via-white/10 to-accent/20 rounded-3xl blur-xl animate-pulse-glow" />
              
              {/* Main Image */}
              <div className="relative w-64 h-64 xs:w-72 xs:h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[26rem] lg:h-[26rem] xl:w-[30rem] xl:h-[30rem] 2xl:w-[34rem] 2xl:h-[34rem] rounded-2xl xs:rounded-3xl overflow-hidden shadow-2xl ring-4 ring-white/20 gradient-border">
                <img 
                  src={profileImageUrl} 
                  alt="Puspal Das - Backend Developer Portfolio" 
                  loading="eager"
                  className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent" />
              </div>
              
              {/* Floating Status Card */}
              <div className="absolute -top-3 -right-3 xs:-top-4 xs:-right-4 bg-white rounded-xl xs:rounded-2xl p-2.5 xs:p-3 sm:p-4 shadow-xl animate-float hover-glow" style={{ animationDelay: '1s' }}>
                <div className="flex items-center gap-2 xs:gap-3">
                  <div className="relative">
                    <div className="w-3 h-3 xs:w-4 xs:h-4 bg-green-500 rounded-full" />
                    <div className="absolute inset-0 w-3 h-3 xs:w-4 xs:h-4 bg-green-500 rounded-full animate-ping opacity-75" />
                  </div>
                  <div>
                    <div className="text-xs xs:text-sm md:text-base font-semibold text-gray-900 whitespace-nowrap">{t('hero.openToWork')}</div>
                    <div className="text-[10px] xs:text-xs md:text-sm text-gray-600 whitespace-nowrap">{t('hero.openToWorkSub')}</div>
                  </div>
                </div>
              </div>
              
              {/* Tech Badge */}
              <div className="absolute -bottom-3 -left-3 xs:-bottom-4 xs:-left-4 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl xs:rounded-2xl p-2.5 xs:p-3 sm:p-4 shadow-xl animate-float text-white hover-glow" style={{ animationDelay: '0.5s' }}>
                <div className="flex items-center gap-1.5 xs:gap-2">
                  <Code className="w-4 h-4 xs:w-5 xs:h-5 md:w-6 md:h-6 flex-shrink-0" />
                  <div>
                    <div className="text-xs xs:text-sm md:text-base font-semibold whitespace-nowrap">{t('hero.mernStack')}</div>
                    <div className="text-[10px] xs:text-xs md:text-sm opacity-90 whitespace-nowrap">{t('hero.developer')}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in" style={{ animationDelay: '2s' }}>
        <div className="flex flex-col items-center gap-2 text-white/60">
          <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
          <ChevronDown className="w-5 h-5 animate-bounce-gentle" />
        </div>
      </div>
    </section>
  );
};

export default Hero;