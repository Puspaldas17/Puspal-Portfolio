import { useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Calendar, Award, Target, User, Code, Briefcase } from "lucide-react";
import aboutImage from "@/assets/about-workspace.jpg";
import { useParallaxTransform } from "@/hooks/use-parallax";
import { useTranslation } from "react-i18next";
import { SectionHeader } from "@/components/SectionHeader";
import { useScrollReveal } from "@/hooks";

const About = () => {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLElement>(null);
  const bgTransform = useParallaxTransform(sectionRef, { speed: 0.4 });
  const { ref: contentRef, isRevealed: contentRevealed } = useScrollReveal<HTMLDivElement>();
  const { ref: imageRef, isRevealed: imageRevealed } = useScrollReveal<HTMLDivElement>();

  return (
    <section ref={sectionRef} id="about" className="py-12 xs:py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32 bg-gradient-to-b from-bg-subtle to-background relative overflow-hidden">
      {/* Subtle background decoration with parallax */}
      <div 
        className="absolute inset-0 bg-gradient-mesh opacity-20 will-change-transform"
        style={{ transform: bgTransform }}
      ></div>

      {/* Decorative background blobs */}
      <div className="absolute top-20 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float-slow pointer-events-none" />
      <div className="absolute bottom-20 left-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl animate-float-slower pointer-events-none" />

      <div className="container mx-auto px-4 xs:px-6 sm:px-8 md:px-10 lg:px-12 xl:px-16 2xl:px-20 relative z-10">
        <div className="max-w-7xl 2xl:max-w-[1600px] mx-auto">
          
          <SectionHeader
            badge={t('about.badge')}
            badgeIcon={User}
            title={t('about.title')}
            subtitle={t('about.subtitle')}
            gradient
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 xs:gap-10 sm:gap-12 md:gap-14 lg:gap-16 xl:gap-20 items-center">
            
            {/* Content Side */}
            <div 
              ref={contentRef}
              className={`space-y-5 xs:space-y-6 sm:space-y-7 md:space-y-8 order-2 lg:order-1 transition-all duration-700 ${
                contentRevealed ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
              }`}
            >
              
              {/* Main Description */}
              <div className="prose prose-sm xs:prose-base sm:prose-lg">
                <p className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl text-foreground leading-relaxed mb-3 xs:mb-4 sm:mb-5 md:mb-6">
                  {t('about.description1')}
                </p>
                
                <p className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl text-foreground leading-relaxed mb-3 xs:mb-4 sm:mb-5 md:mb-6">
                  {t('about.description2')}
                </p>
                
                <p className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl text-foreground leading-relaxed">
                  {t('about.description3')}
                </p>
              </div>

              {/* Core Principles */}
              <div className="space-y-3 xs:space-y-4">
                <h3 className="text-base xs:text-lg sm:text-xl md:text-2xl font-semibold text-foreground mb-3 xs:mb-4">{t('about.corePrinciples')}</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 xs:gap-4 sm:gap-5 md:gap-6">
                  <div className="flex items-start gap-3 xs:gap-4 p-4 xs:p-5 glass-card rounded-xl xs:rounded-2xl hover:border-primary/30 hover:shadow-card transition-all duration-300 group card-hover">
                    <div className="p-2 xs:p-2.5 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg xs:rounded-xl flex-shrink-0 group-hover:scale-110 transition-transform">
                      <Target className="w-4 h-4 xs:w-5 xs:h-5 text-primary" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h4 className="font-bold text-foreground mb-1 xs:mb-1.5 text-sm xs:text-base">🎯 {t('about.goalOriented')}</h4>
                      <p className="text-xs xs:text-sm text-muted-foreground leading-relaxed">{t('about.goalOrientedDesc')}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 xs:gap-4 p-4 xs:p-5 glass-card rounded-xl xs:rounded-2xl hover:border-accent/30 hover:shadow-accent transition-all duration-300 group card-hover">
                    <div className="p-2 xs:p-2.5 bg-gradient-to-br from-accent/10 to-accent/5 rounded-lg xs:rounded-xl flex-shrink-0 group-hover:scale-110 transition-transform">
                      <Award className="w-4 h-4 xs:w-5 xs:h-5 text-accent" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h4 className="font-bold text-foreground mb-1 xs:mb-1.5 text-sm xs:text-base">⚡ {t('about.qualityFirst')}</h4>
                      <p className="text-xs xs:text-sm text-muted-foreground leading-relaxed">{t('about.qualityFirstDesc')}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Image Side - Fixed Professional Layout */}
            <div 
              ref={imageRef}
              className={`relative order-1 lg:order-2 transition-all duration-700 delay-200 ${
                imageRevealed ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 translate-x-12 scale-95'
              }`}
            >
              {/* Outer frame with padding to contain floating cards */}
              <div className="relative p-4 xs:p-5 sm:p-6 md:p-8">
                
                {/* Decorative geometric shapes behind the image */}
                <div className="absolute top-0 right-0 w-24 h-24 xs:w-28 xs:h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 bg-gradient-to-br from-primary/15 to-primary/5 rounded-2xl xs:rounded-3xl -rotate-6 z-0" />
                <div className="absolute bottom-0 left-0 w-20 h-20 xs:w-24 xs:h-24 sm:w-28 sm:h-28 md:w-36 md:h-36 bg-gradient-to-br from-accent/15 to-accent/5 rounded-2xl xs:rounded-3xl rotate-6 z-0" />
                
                {/* Dot pattern accent */}
                <div className="absolute top-6 left-6 xs:top-8 xs:left-8 w-16 h-16 xs:w-20 xs:h-20 grid grid-cols-4 gap-1.5 opacity-30 z-0">
                  {Array.from({ length: 16 }).map((_, i) => (
                    <div key={i} className="w-1.5 h-1.5 rounded-full bg-primary" />
                  ))}
                </div>

                {/* Main image container */}
                <div className="relative z-10">
                  <div className="relative group">
                    {/* Gradient border glow effect */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-primary via-accent to-primary rounded-xl xs:rounded-2xl sm:rounded-3xl opacity-30 group-hover:opacity-60 blur-sm transition-opacity duration-500" />
                    
                    <div className="relative aspect-[4/5] rounded-xl xs:rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl ring-1 ring-white/10">
                      <img 
                        src={aboutImage} 
                        alt="Developer workspace showcasing modern development environment" 
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      {/* Cinematic gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10 opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 mix-blend-overlay" />
                    </div>
                  </div>
                </div>

                {/* Floating Info Cards - positioned within the padded frame */}
                <Card className="absolute top-0 left-0 z-20 glass border-0 shadow-xl animate-float hover-glow backdrop-blur-xl">
                  <CardContent className="p-2 xs:p-2.5 sm:p-3 md:p-4">
                    <div className="flex items-center gap-2 xs:gap-2.5 sm:gap-3">
                      <div className="p-1.5 xs:p-2 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg flex-shrink-0">
                        <MapPin className="w-3 h-3 xs:w-3.5 xs:h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 text-primary" />
                      </div>
                      <div className="min-w-0">
                        <div className="font-bold text-[10px] xs:text-xs sm:text-sm whitespace-nowrap">{t('about.basedIn')}</div>
                        <div className="text-muted-foreground text-[9px] xs:text-[10px] sm:text-xs whitespace-nowrap">{t('about.location')}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="absolute bottom-0 right-0 z-20 glass border-0 shadow-xl animate-float hover-glow backdrop-blur-xl" style={{ animationDelay: '1s' }}>
                  <CardContent className="p-2 xs:p-2.5 sm:p-3 md:p-4">
                    <div className="flex items-center gap-2 xs:gap-2.5 sm:gap-3">
                      <div className="p-1.5 xs:p-2 bg-gradient-to-br from-accent/20 to-accent/5 rounded-lg flex-shrink-0">
                        <Calendar className="w-3 h-3 xs:w-3.5 xs:h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 text-accent" />
                      </div>
                      <div className="min-w-0">
                        <div className="font-bold text-[10px] xs:text-xs sm:text-sm whitespace-nowrap">{t('about.experience')}</div>
                        <div className="text-muted-foreground text-[9px] xs:text-[10px] sm:text-xs whitespace-nowrap">{t('about.experienceYears')}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Additional professional badge - top right */}
                <Card className="absolute top-0 right-0 z-20 glass border-0 shadow-xl animate-float hover-glow backdrop-blur-xl" style={{ animationDelay: '2s' }}>
                  <CardContent className="p-2 xs:p-2.5 sm:p-3 md:p-4">
                    <div className="flex items-center gap-2 xs:gap-2.5 sm:gap-3">
                      <div className="p-1.5 xs:p-2 bg-gradient-to-br from-emerald-500/20 to-emerald-500/5 rounded-lg flex-shrink-0">
                        <Code className="w-3 h-3 xs:w-3.5 xs:h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 text-emerald-500" />
                      </div>
                      <div className="min-w-0">
                        <div className="font-bold text-[10px] xs:text-xs sm:text-sm whitespace-nowrap">15+ Projects</div>
                        <div className="text-muted-foreground text-[9px] xs:text-[10px] sm:text-xs whitespace-nowrap">Delivered</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Bottom left badge */}
                <Card className="absolute bottom-0 left-0 z-20 glass border-0 shadow-xl animate-float hover-glow backdrop-blur-xl" style={{ animationDelay: '1.5s' }}>
                  <CardContent className="p-2 xs:p-2.5 sm:p-3 md:p-4">
                    <div className="flex items-center gap-2 xs:gap-2.5 sm:gap-3">
                      <div className="p-1.5 xs:p-2 bg-gradient-to-br from-violet-500/20 to-violet-500/5 rounded-lg flex-shrink-0">
                        <Briefcase className="w-3 h-3 xs:w-3.5 xs:h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 text-violet-500" />
                      </div>
                      <div className="min-w-0">
                        <div className="font-bold text-[10px] xs:text-xs sm:text-sm whitespace-nowrap">MERN Stack</div>
                        <div className="text-muted-foreground text-[9px] xs:text-[10px] sm:text-xs whitespace-nowrap">Specialist</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;