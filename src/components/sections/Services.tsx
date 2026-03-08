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
      icon: <Zap className="w-8 h-8" />,
      title: t('services.performance'),
      description: t('services.performanceDesc'),
      gradient: "from-blue-500/20 to-cyan-500/20",
      iconBg: "bg-blue-500/10",
      iconColor: "text-blue-500",
      delay: "0s"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: t('services.business'),
      description: t('services.businessDesc'),
      gradient: "from-emerald-500/20 to-teal-500/20",
      iconBg: "bg-emerald-500/10",
      iconColor: "text-emerald-500",
      delay: "0.15s"
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: t('services.innovation'),
      description: t('services.innovationDesc'),
      gradient: "from-violet-500/20 to-purple-500/20",
      iconBg: "bg-violet-500/10",
      iconColor: "text-violet-500",
      delay: "0.3s"
    }
  ];

  return (
    <section id="services" className="py-20 md:py-28 bg-background relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-float-slower" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <SectionHeader
          badge={t('services.badge', 'What I Offer')}
          badgeIcon={Sparkles}
          title={t('services.title')}
          subtitle={t('services.subtitle')}
          gradient
        />
        
        <div ref={containerRef} className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 bg-card/50 backdrop-blur-sm card-hover"
              style={getItemStyle(index)}
            >
              {/* Hover gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <CardContent className="p-8 text-center relative z-10">
                <div className={`w-20 h-20 ${service.iconBg} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg`}>
                  <div className={`${service.iconColor} group-hover:animate-bounce-gentle`}>
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-4 group-hover:text-primary transition-colors duration-300">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                
                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-gradient-primary group-hover:w-1/2 transition-all duration-500 rounded-full" />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;