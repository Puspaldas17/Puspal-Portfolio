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
    <section ref={sectionRef} id="about" className="py-16 xs:py-20 sm:py-24 md:py-28 lg:py-32 xl:py-36 bg-gradient-to-b from-background via-bg-subtle/30 to-background relative overflow-hidden color-grade">
      {/* Subtle background */}
      <div 
        className="absolute inset-0 bg-gradient-mesh opacity-10 will-change-transform"
        style={{ transform: bgTransform }}
      />
      <div className="absolute top-40 right-0 w-[500px] h-[500px] bg-primary/[0.03] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-40 left-0 w-[400px] h-[400px] bg-accent/[0.03] rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 xs:px-6 sm:px-8 md:px-10 lg:px-12 xl:px-16 2xl:px-20 relative z-10">
        <div className="max-w-7xl 2xl:max-w-[1600px] mx-auto">
          
          <SectionHeader
            badge={t('about.badge')}
            badgeIcon={User}
            title={t('about.title')}
            subtitle={t('about.subtitle')}
            gradient
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 xs:gap-12 sm:gap-14 md:gap-16 lg:gap-20 xl:gap-24 items-center">
            
            {/* Content Side */}
            <div 
              ref={contentRef}
              className={`space-y-6 xs:space-y-7 sm:space-y-8 order-2 lg:order-1 transition-[transform,opacity] duration-700 ${
                contentRevealed ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
              }`}
            >
              
              {/* Main Description */}
              <div className="space-y-4 xs:space-y-5">
                <p className="text-sm xs:text-base sm:text-lg md:text-lg text-foreground/90 leading-[1.8]">
                  {t('about.description1')}
                </p>
                <p className="text-sm xs:text-base sm:text-lg md:text-lg text-foreground/80 leading-[1.8]">
                  {t('about.description2')}
                </p>
                <p className="text-sm xs:text-base sm:text-lg md:text-lg text-foreground/80 leading-[1.8]">
                  {t('about.description3')}
                </p>
              </div>

              {/* Core Principles */}
              <div className="space-y-4">
                <h3 className="text-base xs:text-lg sm:text-xl font-semibold text-foreground">{t('about.corePrinciples')}</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 xs:gap-4">
                  <div className="flex items-start gap-3 xs:gap-4 p-4 xs:p-5 rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/30 transition-[border-color,transform] duration-300 group hover:-translate-y-0.5">
                    <div className="p-2 xs:p-2.5 bg-primary/10 rounded-xl flex-shrink-0 icon-lift">
                      <Target className="w-4 h-4 xs:w-5 xs:h-5 text-primary" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h4 className="font-semibold text-foreground mb-1 text-sm xs:text-base">{t('about.goalOriented')}</h4>
                      <p className="text-xs xs:text-sm text-muted-foreground leading-relaxed">{t('about.goalOrientedDesc')}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 xs:gap-4 p-4 xs:p-5 rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm hover:border-accent/30 transition-[border-color,transform] duration-300 group hover:-translate-y-0.5">
                    <div className="p-2 xs:p-2.5 bg-accent/10 rounded-xl flex-shrink-0 icon-lift">
                      <Award className="w-4 h-4 xs:w-5 xs:h-5 text-accent" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h4 className="font-semibold text-foreground mb-1 text-sm xs:text-base">{t('about.qualityFirst')}</h4>
                      <p className="text-xs xs:text-sm text-muted-foreground leading-relaxed">{t('about.qualityFirstDesc')}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Image Side */}
            <div 
              ref={imageRef}
              className={`relative order-1 lg:order-2 transition-[transform,opacity] duration-700 delay-200 ${
                imageRevealed ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 translate-x-12 scale-95'
              }`}
            >
              <div className="relative p-6 xs:p-8 sm:p-10">
                
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-20 h-20 xs:w-24 xs:h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-2xl -rotate-6 z-0" />
                <div className="absolute bottom-0 left-0 w-16 h-16 xs:w-20 xs:h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 bg-gradient-to-br from-accent/10 to-transparent rounded-2xl rotate-6 z-0" />

                {/* Main image */}
                <div className="relative z-10">
                  <div className="relative group">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-primary via-accent to-primary rounded-2xl xs:rounded-3xl opacity-20 group-hover:opacity-40 blur-sm transition-opacity duration-500" />
                    
                    <div className="relative aspect-[4/5] rounded-2xl xs:rounded-3xl overflow-hidden shadow-2xl ring-1 ring-border/20">
                      <img 
                        src={aboutImage} 
                        alt="Developer workspace showcasing modern development environment" 
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700 img-color-grade"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                    </div>
                  </div>
                </div>

                {/* Floating Cards */}
                <Card className="absolute top-2 left-2 z-20 border-0 shadow-xl animate-float bg-card/90 backdrop-blur-md" style={{ animationDelay: '0s' }}>
                  <CardContent className="p-2.5 xs:p-3 sm:p-3.5">
                    <div className="flex items-center gap-2 xs:gap-2.5">
                      <div className="p-1.5 bg-primary/10 rounded-lg flex-shrink-0">
                        <MapPin className="w-3.5 h-3.5 xs:w-4 xs:h-4 text-primary" />
                      </div>
                      <div>
                        <div className="font-semibold text-[10px] xs:text-xs sm:text-sm whitespace-nowrap">{t('about.basedIn')}</div>
                        <div className="text-muted-foreground text-[9px] xs:text-[10px] sm:text-xs whitespace-nowrap">{t('about.location')}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="absolute bottom-2 right-2 z-20 border-0 shadow-xl animate-float bg-card/90 backdrop-blur-md" style={{ animationDelay: '1s' }}>
                  <CardContent className="p-2.5 xs:p-3 sm:p-3.5">
                    <div className="flex items-center gap-2 xs:gap-2.5">
                      <div className="p-1.5 bg-accent/10 rounded-lg flex-shrink-0">
                        <Calendar className="w-3.5 h-3.5 xs:w-4 xs:h-4 text-accent" />
                      </div>
                      <div>
                        <div className="font-semibold text-[10px] xs:text-xs sm:text-sm whitespace-nowrap">{t('about.experience')}</div>
                        <div className="text-muted-foreground text-[9px] xs:text-[10px] sm:text-xs whitespace-nowrap">{t('about.experienceYears')}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="absolute top-2 right-2 z-20 border-0 shadow-xl animate-float bg-card/90 backdrop-blur-md" style={{ animationDelay: '2s' }}>
                  <CardContent className="p-2.5 xs:p-3 sm:p-3.5">
                    <div className="flex items-center gap-2 xs:gap-2.5">
                      <div className="p-1.5 bg-emerald-500/10 rounded-lg flex-shrink-0">
                        <Code className="w-3.5 h-3.5 xs:w-4 xs:h-4 text-emerald-500" />
                      </div>
                      <div>
                        <div className="font-semibold text-[10px] xs:text-xs sm:text-sm whitespace-nowrap">15+ Projects</div>
                        <div className="text-muted-foreground text-[9px] xs:text-[10px] sm:text-xs whitespace-nowrap">Delivered</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="absolute bottom-2 left-2 z-20 border-0 shadow-xl animate-float bg-card/90 backdrop-blur-md" style={{ animationDelay: '1.5s' }}>
                  <CardContent className="p-2.5 xs:p-3 sm:p-3.5">
                    <div className="flex items-center gap-2 xs:gap-2.5">
                      <div className="p-1.5 bg-violet-500/10 rounded-lg flex-shrink-0">
                        <Briefcase className="w-3.5 h-3.5 xs:w-4 xs:h-4 text-violet-500" />
                      </div>
                      <div>
                        <div className="font-semibold text-[10px] xs:text-xs sm:text-sm whitespace-nowrap">MERN Stack</div>
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