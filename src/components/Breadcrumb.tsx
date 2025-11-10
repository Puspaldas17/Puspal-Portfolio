import { useEffect, useState } from "react";
import { ChevronRight, Home } from "lucide-react";

export const Breadcrumb = () => {
  const [activeSection, setActiveSection] = useState("Home");

  useEffect(() => {
    const sections = [
      { id: "hero", name: "Home" },
      { id: "stats", name: "Stats" },
      { id: "about", name: "About" },
      { id: "skills", name: "Skills" },
      { id: "services", name: "Services" },
      { id: "process", name: "Process" },
      { id: "portfolio", name: "Portfolio" },
      { id: "testimonials", name: "Testimonials" },
      { id: "contact", name: "Contact" },
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const section = sections.find((s) => entry.target.id === s.id);
            if (section) {
              setActiveSection(section.name);
            }
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: "-80px 0px -80px 0px",
      }
    );

    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="fixed top-20 left-0 right-0 z-40 backdrop-blur-md bg-background/80 border-b border-border/40">
      <div className="container mx-auto px-4 py-2">
        <nav className="flex items-center gap-2 text-sm">
          <Home className="h-4 w-4 text-muted-foreground" />
          <ChevronRight className="h-4 w-4 text-muted-foreground" />
          <span className="text-foreground font-medium">{activeSection}</span>
        </nav>
      </div>
    </div>
  );
};
