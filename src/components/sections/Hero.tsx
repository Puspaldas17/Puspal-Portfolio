import { useRef, useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, Code, Database, Server, Download, ArrowRight, Terminal } from "lucide-react";
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
      {/* Layered gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a] via-primary to-accent" />
      <div className="absolute inset-0 morphing-bg opacity-40" />
      
      {/* Dot pattern with parallax */}
      <div 
        className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItaDJ2LTJoLTJ6bTAtNGgydjJoLTJ2LTJ6bS0yIDJ2LTJoLTJ2Mmgyem0wIDBoLTJ2Mmgydi0yem0yIDJoLTJ2Mmgydi0yem0wIDBodjJoMnYtMmgtMnptMi0yaDJ2LTJoLTJ2MnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30 will-change-transform"
        style={{ transform: bgPatternTransform }}
      />
      <div 
        className="absolute inset-0 bg-gradient-mesh opacity-20 will-change-transform"
        style={{ transform: bgMeshTransform }}
      />

      {/* Refined blob shapes */}
      <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-white/[0.03] rounded-full blur-3xl animate-morph-blob" />
      <div className="absolute -bottom-20 right-0 w-[600px] h-[600px] bg-accent/[0.06] rounded-full blur-3xl animate-morph-blob" style={{ animationDelay: '-4s' }} />
      
      {/* Cinematic color grading */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-purple-900/15 mix-blend-overlay" />
      {/* Vignette overlay for depth */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.35)_100%)]" />
      
      <div className="container mx-auto px-4 xs:px-6 sm:px-8 md:px-10 lg:px-12 xl:px-16 2xl:px-20 py-20 xs:py-24 sm:py-28 md:py-32 lg:py-28 xl:py-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 xs:gap-12 sm:gap-14 md:gap-16 lg:gap-16 xl:gap-20 2xl:gap-24 items-center max-w-7xl 2xl:max-w-[1600px] mx-auto">
          
          {/* Content */}
          <div className="space-y-6 xs:space-y-7 sm:space-y-8 text-white order-2 lg:order-1">
            
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 xs:gap-2.5 px-4 xs:px-5 py-2 xs:py-2.5 bg-white/[0.08] rounded-full border border-white/[0.12] backdrop-blur-md hover:bg-white/[0.12] transition-colors duration-200 group opacity-0 animate-slide-up-fade" style={{ animationDelay: '0.2s' }}>
              <div className="relative flex items-center justify-center">
                <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                <div className="absolute w-2 h-2 bg-emerald-400 rounded-full animate-pulse opacity-75"></div>
              </div>
              <span className="text-xs xs:text-sm font-medium tracking-wide">{t('hero.badge')}</span>
            </div>
            
            {/* Main Heading */}
            <div className="space-y-4 xs:space-y-5 opacity-0 animate-slide-up-fade" style={{ animationDelay: '0.4s' }}>
              <p className="text-sm xs:text-base sm:text-lg text-white/70 font-medium tracking-wide">
                {t('hero.greeting')}
              </p>
              <h1 className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-bold leading-[1.05] tracking-tight">
                <span className="text-white">I'm </span>
                <span className="bg-gradient-to-r from-white via-blue-200 to-white/80 bg-clip-text text-transparent bg-[length:200%_auto] animate-[text-flow_4s_ease-in-out_infinite] will-change-[background-position]">
                  {t('hero.name')}
                </span>
              </h1>
              <div className="flex items-center gap-2.5 xs:gap-3">
                <div className="flex items-center gap-2 text-base xs:text-lg sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl font-medium text-white/90">
                  <Terminal className="w-5 h-5 xs:w-6 xs:h-6 sm:w-7 sm:h-7 text-emerald-400 flex-shrink-0" />
                  <span className="font-mono text-emerald-300">
                    {typedRole}
                    <span className="inline-block w-[2px] h-[1em] bg-emerald-400 ml-0.5 animate-pulse" />
                  </span>
                </div>
              </div>
            </div>
            
            {/* Description */}
            <p className="text-sm xs:text-base sm:text-lg md:text-lg lg:text-lg xl:text-xl text-white/70 max-w-xl xl:max-w-2xl leading-relaxed opacity-0 animate-slide-up-fade" style={{ animationDelay: '0.6s' }}>
              {t('hero.description', { 
                node: 'Node.js', 
                express: 'Express', 
                mongo: 'MongoDB', 
                react: 'React' 
              })}
            </p>
            
            {/* Tech Stack Chips */}
            <div className="flex items-center gap-2 xs:gap-2.5 sm:gap-3 flex-wrap opacity-0 animate-slide-up-fade" style={{ animationDelay: '0.8s' }}>
              {[
                { icon: Server, label: "Node.js" },
                { icon: Code, label: "Express" },
                { icon: Database, label: "MongoDB" },
                { icon: Code, label: "React" },
              ].map((tech) => (
                <div 
                  key={tech.label}
                  className="flex items-center gap-1.5 xs:gap-2 px-3 xs:px-3.5 py-1.5 xs:py-2 bg-white/[0.06] rounded-lg border border-white/[0.08] hover:bg-white/[0.12] hover:border-white/[0.15] transition-[background-color,border-color] duration-200"
                >
                  <tech.icon className="w-3.5 h-3.5 xs:w-4 xs:h-4 text-emerald-400 flex-shrink-0" />
                  <span className="text-xs xs:text-sm font-mono text-white/80">{tech.label}</span>
                </div>
              ))}
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 xs:gap-4 pt-2 xs:pt-4 opacity-0 animate-slide-up-fade" style={{ animationDelay: '1s' }}>
              <Button 
                size="lg" 
                className="btn-shine bg-white text-gray-900 hover:bg-white/90 font-semibold text-sm xs:text-base px-6 xs:px-8 py-5 xs:py-6 shadow-xl hover:-translate-y-0.5 transition-[transform,background-color] duration-200 group/btn rounded-xl"
                onClick={handleViewWorkClick}
              >
                {t('hero.viewWork')}
                <ArrowRight className="w-4 h-4 xs:w-5 xs:h-5 ml-2 group-hover/btn:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg" 
                className="btn-shine bg-gradient-to-r from-emerald-500 to-teal-500 text-white hover:from-emerald-400 hover:to-teal-400 font-semibold text-sm xs:text-base px-6 xs:px-8 py-5 xs:py-6 shadow-xl hover:-translate-y-0.5 transition-transform duration-200 group/btn rounded-xl" 
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
                className="border border-white/20 text-white hover:bg-white/10 backdrop-blur-sm font-semibold text-sm xs:text-base px-6 xs:px-8 py-5 xs:py-6 hover:-translate-y-0.5 transition-[transform,background-color] duration-200 rounded-xl" 
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
              {/* Soft ambient glow */}
              <div className="absolute -inset-6 bg-gradient-to-r from-primary/30 via-accent/20 to-primary/10 rounded-[2rem] blur-2xl opacity-60" />
              
              {/* Main Image */}
              <div className="relative w-64 h-64 xs:w-72 xs:h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[24rem] lg:h-[24rem] xl:w-[28rem] xl:h-[28rem] 2xl:w-[32rem] 2xl:h-[32rem] rounded-2xl xs:rounded-3xl overflow-hidden shadow-2xl ring-1 ring-white/10">
                <img 
                  src={profileImageUrl} 
                  alt="Puspal Das - Backend Developer Portfolio" 
                  loading="eager"
                  className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </div>
              
              {/* Floating Status Card */}
              <div className="absolute -top-3 -right-3 xs:-top-4 xs:-right-4 bg-white/95 backdrop-blur-sm rounded-xl xs:rounded-2xl p-2.5 xs:p-3 sm:p-3.5 shadow-2xl animate-float" style={{ animationDelay: '1s' }}>
                <div className="flex items-center gap-2 xs:gap-2.5">
                  <div className="relative">
                    <div className="w-2.5 h-2.5 xs:w-3 xs:h-3 bg-emerald-500 rounded-full" />
                    <div className="absolute inset-0 w-2.5 h-2.5 xs:w-3 xs:h-3 bg-emerald-500 rounded-full animate-pulse opacity-75" />
                  </div>
                  <div>
                    <div className="text-[10px] xs:text-xs sm:text-sm font-semibold text-gray-900 whitespace-nowrap">{t('hero.openToWork')}</div>
                    <div className="text-[9px] xs:text-[10px] sm:text-xs text-gray-500 whitespace-nowrap">{t('hero.openToWorkSub')}</div>
                  </div>
                </div>
              </div>
              
              {/* Tech Badge */}
              <div className="absolute -bottom-3 -left-3 xs:-bottom-4 xs:-left-4 bg-gradient-to-br from-primary to-accent rounded-xl xs:rounded-2xl p-2.5 xs:p-3 sm:p-3.5 shadow-2xl animate-float text-white" style={{ animationDelay: '0.5s' }}>
                <div className="flex items-center gap-1.5 xs:gap-2">
                  <Code className="w-4 h-4 xs:w-5 xs:h-5 flex-shrink-0" />
                  <div>
                    <div className="text-[10px] xs:text-xs sm:text-sm font-semibold whitespace-nowrap">{t('hero.mernStack')}</div>
                    <div className="text-[9px] xs:text-[10px] sm:text-xs opacity-80 whitespace-nowrap">{t('hero.developer')}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in" style={{ animationDelay: '2s' }}>
        <div className="flex flex-col items-center gap-2 text-white/40 hover:text-white/60 transition-colors cursor-pointer" onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}>
          <span className="text-[10px] font-medium tracking-[0.2em] uppercase">Scroll</span>
          <ChevronDown className="w-4 h-4 animate-bounce-gentle" />
        </div>
      </div>
    </section>
  );
};

export default Hero;