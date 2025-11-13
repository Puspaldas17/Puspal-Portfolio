import { cn } from "@/lib/utils";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { CheckCircle2, Circle } from "lucide-react";
import { ReactNode } from "react";

export interface TimelineItem {
  title: string;
  description: string;
  date: string;
  icon?: ReactNode;
  status?: "completed" | "current" | "upcoming";
}

interface TimelineProps {
  items: TimelineItem[];
  className?: string;
}

export function Timeline({ items, className }: TimelineProps) {
  const { elementRef, isVisible } = useScrollAnimation();

  return (
    <div ref={elementRef} className={cn("relative space-y-8", className)}>
      {/* Vertical line */}
      <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/50 via-primary/30 to-transparent" />

      {items.map((item, index) => (
        <TimelineItemComponent
          key={index}
          item={item}
          index={index}
          isVisible={isVisible}
        />
      ))}
    </div>
  );
}

interface TimelineItemComponentProps {
  item: TimelineItem;
  index: number;
  isVisible: boolean;
}

function TimelineItemComponent({ item, index, isVisible }: TimelineItemComponentProps) {
  const status = item.status || "completed";
  
  return (
    <div
      className={cn(
        "relative pl-12 group transition-all duration-500",
        isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
      )}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Icon/Status indicator */}
      <div
        className={cn(
          "absolute left-0 w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all duration-300",
          "group-hover:scale-110 group-hover:shadow-lg",
          status === "completed" && "bg-primary border-primary text-primary-foreground",
          status === "current" && "bg-background border-primary animate-pulse",
          status === "upcoming" && "bg-muted border-muted-foreground/30"
        )}
      >
        {item.icon || (
          status === "completed" ? (
            <CheckCircle2 className="w-4 h-4" />
          ) : (
            <Circle className="w-4 h-4" />
          )
        )}
      </div>

      {/* Content card */}
      <div
        className={cn(
          "bg-card border rounded-lg p-4 shadow-sm transition-all duration-300",
          "hover:shadow-md hover:border-primary/50 hover:-translate-y-1",
          "group-hover:bg-accent/5"
        )}
      >
        <div className="flex items-start justify-between gap-4 mb-2">
          <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
            {item.title}
          </h3>
          <time className="text-sm text-muted-foreground whitespace-nowrap">
            {item.date}
          </time>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {item.description}
        </p>
      </div>
    </div>
  );
}
