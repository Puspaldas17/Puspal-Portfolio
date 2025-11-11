import { useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar, Award, Target } from "lucide-react";
import aboutImage from "@/assets/about-workspace.jpg";
import { useParallaxTransform } from "@/hooks/use-parallax";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLElement>(null);
  const imageTransform = useParallaxTransform(sectionRef, { speed: 0.2 });
  const bgTransform = useParallaxTransform(sectionRef, { speed: 0.4 });

  return (
    <section ref={sectionRef} id="about" className="py-12 xs:py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32 bg-gradient-to-b from-bg-subtle to-background relative overflow-hidden">
      {/* Subtle background decoration with parallax */}
      <div 
        className="absolute inset-0 bg-gradient-mesh opacity-20 will-change-transform"
        style={{ transform: bgTransform }}
      ></div>
      <div className="container mx-auto px-4 xs:px-6 sm:px-8 md:px-10 lg:px-12 xl:px-16 2xl:px-20 relative z-10">
        <div className="max-w-7xl 2xl:max-w-[1600px] mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-12 xs:mb-14 sm:mb-16 md:mb-18 lg:mb-20 animate-fade-in-up">
            <Badge variant="outline" className="mb-4 xs:mb-5 text-primary border-primary/30 text-xs xs:text-sm md:text-base px-3 xs:px-4 py-1 xs:py-1.5 font-semibold">
              {t('about.badge')}
            </Badge>
            <h2 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 xs:mb-5 sm:mb-6 bg-gradient-primary bg-clip-text text-transparent leading-tight tracking-tight">
              {t('about.title')}
            </h2>
            <p className="text-base xs:text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl xl:max-w-4xl mx-auto leading-relaxed px-4 xs:px-0">
              {t('about.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 xs:gap-10 sm:gap-12 md:gap-14 lg:gap-16 xl:gap-20 items-center">
            
            {/* Content Side */}
            <div className="space-y-5 xs:space-y-6 sm:space-y-7 md:space-y-8 animate-fade-in-left order-2 lg:order-1">
              
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
                  <div className="flex items-start gap-3 xs:gap-4 p-4 xs:p-5 bg-card rounded-xl xs:rounded-2xl border border-border/50 hover:border-primary/30 hover:shadow-card transition-all duration-300 group">
                    <div className="p-2 xs:p-2.5 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg xs:rounded-xl flex-shrink-0 group-hover:scale-110 transition-transform">
                      <Target className="w-4 h-4 xs:w-5 xs:h-5 text-primary" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h4 className="font-bold text-foreground mb-1 xs:mb-1.5 text-sm xs:text-base">🎯 {t('about.goalOriented')}</h4>
                      <p className="text-xs xs:text-sm text-muted-foreground leading-relaxed">{t('about.goalOrientedDesc')}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 xs:gap-4 p-4 xs:p-5 bg-card rounded-xl xs:rounded-2xl border border-border/50 hover:border-accent/30 hover:shadow-accent transition-all duration-300 group">
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
            
            {/* Image Side */}
            <div className="relative animate-fade-in-right order-1 lg:order-2">
              <div className="relative will-change-transform" style={{ transform: imageTransform }}>
                <div className="aspect-[4/5] xs:aspect-[3/4] sm:aspect-[4/5] rounded-xl xs:rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl bg-gradient-surface">
                  <img 
                    src={aboutImage} 
                    alt="Developer workspace showcasing modern development environment" 
                    loading="lazy"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-primary/10"></div>
                </div>
                
                {/* Info Cards */}
                <Card className="absolute -top-3 -left-3 xs:-top-4 xs:-left-4 sm:-top-6 sm:-left-6 bg-card/95 backdrop-blur-sm border-0 shadow-lg animate-float">
                  <CardContent className="p-2.5 xs:p-3 sm:p-4">
                    <div className="flex items-center gap-2 xs:gap-3">
                      <MapPin className="w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" />
                      <div className="min-w-0">
                        <div className="font-semibold text-[10px] xs:text-xs sm:text-sm whitespace-nowrap">{t('about.basedIn')}</div>
                        <div className="text-muted-foreground text-[10px] xs:text-xs whitespace-nowrap">{t('about.location')}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="absolute -bottom-3 -right-3 xs:-bottom-4 xs:-right-4 sm:-bottom-6 sm:-right-6 bg-card/95 backdrop-blur-sm border-0 shadow-lg animate-float" style={{ animationDelay: '1s' }}>
                  <CardContent className="p-2.5 xs:p-3 sm:p-4">
                    <div className="flex items-center gap-2 xs:gap-3">
                      <Calendar className="w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5 text-accent flex-shrink-0" />
                      <div className="min-w-0">
                        <div className="font-semibold text-[10px] xs:text-xs sm:text-sm whitespace-nowrap">{t('about.experience')}</div>
                        <div className="text-muted-foreground text-[10px] xs:text-xs whitespace-nowrap">{t('about.experienceYears')}</div>
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