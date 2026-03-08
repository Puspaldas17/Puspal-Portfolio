import { useEffect, useState } from "react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Code, Award, Users, Zap } from "lucide-react";

const Stats = () => {
  const { elementRef, isVisible } = useScrollAnimation();
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isVisible && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isVisible, hasAnimated]);

  const stats = [
    {
      icon: <Code className="w-5 h-5 xs:w-6 xs:h-6 md:w-7 md:h-7" />,
      value: 3,
      suffix: "+",
      label: "Years Experience",
      color: "text-primary",
      bg: "bg-primary/10"
    },
    {
      icon: <Award className="w-5 h-5 xs:w-6 xs:h-6 md:w-7 md:h-7" />,
      value: 15,
      suffix: "+",
      label: "Projects Completed",
      color: "text-accent",
      bg: "bg-accent/10"
    },
    {
      icon: <Zap className="w-5 h-5 xs:w-6 xs:h-6 md:w-7 md:h-7" />,
      value: 20,
      suffix: "+",
      label: "Technologies",
      color: "text-emerald-500",
      bg: "bg-emerald-500/10"
    },
    {
      icon: <Users className="w-5 h-5 xs:w-6 xs:h-6 md:w-7 md:h-7" />,
      value: 98,
      suffix: "%",
      label: "Client Satisfaction",
      color: "text-orange-500",
      bg: "bg-orange-500/10"
    }
  ];

  const Counter = ({ end, suffix }: { end: number; suffix: string }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!hasAnimated) return;

      let startTime: number;
      const duration = 2000;
      // easeOutExpo for polished deceleration
      const easeOutExpo = (t: number) => t === 1 ? 1 : 1 - Math.pow(2, -10 * t);

      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);

        setCount(Math.floor(easeOutExpo(progress) * end));

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    }, [hasAnimated, end]);

    return (
      <span className="text-3xl xs:text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-tight counter-glow">
        {count}
        <span className="text-primary">{suffix}</span>
      </span>
    );
  };

  return (
    <section 
      ref={elementRef}
      className="py-14 xs:py-16 sm:py-20 md:py-24 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-background via-bg-subtle/50 to-background" />
      <div className="container mx-auto px-4 xs:px-6 sm:px-8 md:px-10 lg:px-12 xl:px-16 2xl:px-20 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 xs:gap-8 sm:gap-10 md:gap-12 max-w-6xl 2xl:max-w-[1400px] mx-auto">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`text-center transform transition-[transform,opacity] duration-500 ${
                hasAnimated
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="flex flex-col items-center space-y-3 xs:space-y-4">
                <div className={`w-12 h-12 xs:w-14 xs:h-14 md:w-16 md:h-16 rounded-2xl ${stat.bg} flex items-center justify-center ${stat.color} transition-transform duration-500 ${hasAnimated ? 'scale-100' : 'scale-75'}`}
                style={{ transitionDelay: `${index * 150 + 200}ms` }}
              >
                  {stat.icon}
                </div>
                <Counter end={stat.value} suffix={stat.suffix} />
                <p className="text-xs xs:text-sm md:text-base text-muted-foreground font-medium">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
