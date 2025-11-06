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
      icon: <Code className="w-6 h-6 xs:w-7 xs:h-7 md:w-8 md:h-8" />,
      value: 3,
      suffix: "+",
      label: "Years Experience",
      color: "from-primary/20 to-primary/5"
    },
    {
      icon: <Award className="w-6 h-6 xs:w-7 xs:h-7 md:w-8 md:h-8" />,
      value: 15,
      suffix: "+",
      label: "Projects Completed",
      color: "from-accent/20 to-accent/5"
    },
    {
      icon: <Zap className="w-6 h-6 xs:w-7 xs:h-7 md:w-8 md:h-8" />,
      value: 20,
      suffix: "+",
      label: "Technologies",
      color: "from-primary/20 to-primary/5"
    },
    {
      icon: <Users className="w-6 h-6 xs:w-7 xs:h-7 md:w-8 md:h-8" />,
      value: 98,
      suffix: "%",
      label: "Client Satisfaction",
      color: "from-accent/20 to-accent/5"
    }
  ];

  const Counter = ({ end, suffix }: { end: number; suffix: string }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!hasAnimated) return;

      let startTime: number;
      const duration = 2000;

      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);

        setCount(Math.floor(progress * end));

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    }, [hasAnimated, end]);

    return (
      <span className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-primary bg-clip-text text-transparent">
        {count}
        {suffix}
      </span>
    );
  };

  return (
    <section 
      ref={elementRef}
      className="py-12 xs:py-14 sm:py-16 md:py-20 bg-gradient-to-b from-background to-muted/20 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-mesh opacity-5"></div>
      <div className="container mx-auto px-4 xs:px-6 sm:px-8 md:px-10 lg:px-12 xl:px-16 2xl:px-20 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 xs:gap-8 sm:gap-10 md:gap-12 max-w-7xl 2xl:max-w-[1600px] mx-auto">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`text-center transform transition-all duration-700 ${
                hasAnimated
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="flex flex-col items-center space-y-3 xs:space-y-4 md:space-y-5">
                <div className={`w-14 h-14 xs:w-16 xs:h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center text-primary hover:scale-110 transition-transform duration-300`}>
                  {stat.icon}
                </div>
                <Counter end={stat.value} suffix={stat.suffix} />
                <p className="text-sm xs:text-base md:text-lg lg:text-xl text-muted-foreground font-medium">
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
