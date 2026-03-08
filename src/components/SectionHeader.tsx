import { Badge } from "@/components/ui/badge";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { type ElementType } from "react";

interface SectionHeaderProps {
  badge?: string;
  badgeIcon?: ElementType;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  gradient?: boolean;
}

const SectionHeader = ({ 
  badge, 
  badgeIcon: BadgeIcon, 
  title, 
  subtitle, 
  align = 'center',
  gradient = true 
}: SectionHeaderProps) => {
  const { ref, isRevealed } = useScrollReveal();

  return (
    <div 
      ref={ref}
      className={`${align === 'center' ? 'text-center' : 'text-left'} mb-12 xs:mb-14 sm:mb-16 md:mb-18 lg:mb-20`}
    >
      {badge && (
        <Badge 
          variant="outline" 
          className={`mb-4 xs:mb-5 text-primary border-primary/20 bg-primary/5 text-xs xs:text-sm px-3 xs:px-4 py-1 xs:py-1.5 font-medium transition-[transform,opacity] duration-500 ${
            isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          {BadgeIcon && <BadgeIcon className="w-3 h-3 xs:w-3.5 xs:h-3.5 mr-1.5 inline" />}
          {badge}
        </Badge>
      )}
      <h2 
        className={`text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-bold mb-4 xs:mb-5 sm:mb-6 leading-tight tracking-tight transition-[transform,opacity] duration-500 delay-100 ${
          isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        } ${gradient ? 'gradient-text-flow' : 'text-foreground'}`}
      >
        {title}
      </h2>
      {subtitle && (
        <p 
          className={`text-base xs:text-lg sm:text-xl text-muted-foreground max-w-2xl xl:max-w-3xl ${
            align === 'center' ? 'mx-auto' : ''
          } leading-relaxed px-4 xs:px-0 transition-[transform,opacity] duration-500 delay-200 ${
            isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          {subtitle}
        </p>
      )}
      {/* Animated accent line */}
      <div 
        className={`${align === 'center' ? 'mx-auto' : ''} mt-5 xs:mt-6 h-0.5 rounded-full overflow-hidden transition-[width,opacity] duration-700 delay-300 ${
          isRevealed ? 'w-20 xs:w-24 opacity-100' : 'w-0 opacity-0'
        }`}
      >
        <div className="w-full h-full bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_100%] animate-gradient-shift rounded-full" />
      </div>
    </div>
  );
};

export { SectionHeader };
export default SectionHeader;
