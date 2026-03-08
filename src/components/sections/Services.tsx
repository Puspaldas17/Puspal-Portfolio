import { Card, CardContent } from "@/components/ui/card";
import { Zap, Target, Lightbulb, Sparkles } from "lucide-react";
import { useTranslation } from "react-i18next";
import { SectionHeader } from "@/components/SectionHeader";
import { useStaggerReveal } from "@/hooks";

const Services = () => {
  const { t } = useTranslation();
  const { containerRef, getItemStyle } = useStaggerReveal(3, { staggerDelay: 150 });
  const services = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: t('services.performance'),
      description: t('services.performanceDesc'),
      iconColor: "text-blue-500",
      accentBg: "bg-blue-500/10"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: t('services.business'),
      description: t('services.businessDesc'),
      iconColor: "text-emerald-500",
      accentBg: "bg-emerald-500/10"
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: t('services.innovation'),
      description: t('services.innovationDesc'),
      iconColor: "text-violet-500",
      accentBg: "bg-violet-500/10"
    }
  ];

  return (
    <section id="services" className="py-14 xs:py-18 sm:py-22 md:py-26 lg:py-30 xl:py-34 bg-gradient-to-b from-background via-bg-subtle/20 to-background relative overflow-hidden color-grade">
      <div className="container mx-auto px-4 xs:px-6 sm:px-8 md:px-10 lg:px-12 xl:px-16 2xl:px-20 relative z-10">
        <SectionHeader
          badge={t('services.badge', 'What I Offer')}
          badgeIcon={Sparkles}
          title={t('services.title')}
          subtitle={t('services.subtitle')}
          gradient
        />
        
        <div ref={containerRef} className="grid grid-cols-1 sm:grid-cols-3 gap-5 xs:gap-6 max-w-4xl mx-auto">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group border border-border/50 hover:border-primary/20 bg-card/60 backdrop-blur-sm card-glow"
              style={getItemStyle(index)}
            >
              <CardContent className="p-5 xs:p-6 sm:p-7 text-center">
                <div className={`w-12 h-12 ${service.accentBg} rounded-xl flex items-center justify-center mx-auto mb-4 icon-lift`}>
                  <div className={service.iconColor}>
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-base xs:text-lg font-semibold mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;