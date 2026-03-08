import { useState, useEffect, useCallback } from "react";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { ThemeCustomizer } from "@/components/ui/theme-customizer";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Track active section via IntersectionObserver
  useEffect(() => {
    const sectionIds = ["home", "about", "skills", "portfolio", "contact"];
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        { rootMargin: "-30% 0px -60% 0px", threshold: 0 }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const navItems = [
    { href: "#home", label: "Home", id: "home" },
    { href: "#about", label: "About", id: "about" },
    { href: "#skills", label: "Skills", id: "skills" },
    { href: "#portfolio", label: "Portfolio", id: "portfolio" },
    { href: "#contact", label: "Contact", id: "contact" },
  ];

  const handleNavClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsOpen(false);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-[background-color,box-shadow,border-color] duration-300 will-change-[background-color] ${
      isScrolled 
        ? 'bg-background/90 backdrop-blur-xl shadow-sm border-b border-border/30' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 xs:px-6 sm:px-8 md:px-10 lg:px-12 xl:px-16 2xl:px-20">
        <div className="flex items-center justify-between h-16 xs:h-18 sm:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#home" onClick={(e) => handleNavClick(e, '#home')} className="group">
              <div className="text-lg xs:text-xl sm:text-2xl font-bold tracking-tight">
                <span className={`transition-colors duration-200 ${
                  isScrolled ? 'text-foreground' : 'text-white'
                }`}>
                  Puspal
                </span>
                <span className="gradient-text-animated ml-1">Das</span>
              </div>
              <div className={`text-[9px] xs:text-[10px] font-medium tracking-[0.15em] uppercase hidden xs:block transition-colors ${
                isScrolled ? 'text-muted-foreground' : 'text-white/60'
              }`}>
                Backend Developer
              </div>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-3 lg:space-x-4">
            <nav className={`flex items-center space-x-0.5 lg:space-x-1 rounded-full px-1.5 py-1 border transition-colors duration-200 ${
              isScrolled 
                ? 'bg-muted/50 border-border/30' 
                : 'bg-white/[0.06] border-white/[0.08] backdrop-blur-md'
            }`}>
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`relative text-xs sm:text-sm font-medium transition-colors duration-200 px-3 lg:px-4 py-1.5 rounded-full ${
                    activeSection === item.id
                      ? isScrolled
                        ? 'bg-primary text-primary-foreground shadow-sm'
                        : 'bg-white/20 text-white'
                      : isScrolled 
                        ? 'text-muted-foreground hover:text-foreground hover:bg-muted' 
                        : 'text-white/60 hover:text-white hover:bg-white/[0.08]'
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <div className="flex items-center space-x-1.5">
              <ThemeCustomizer />
              <ThemeToggle />
              <LanguageSwitcher />
            </div>
          </div>

          {/* Mobile menu button and theme toggle */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeCustomizer />
            <ThemeToggle />
            <LanguageSwitcher />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2.5 rounded-xl transition-colors duration-200 ${
                isScrolled 
                  ? 'bg-muted hover:bg-muted/80' 
                  : 'bg-white/20 hover:bg-white/30 backdrop-blur-sm'
              }`}
              aria-label="Toggle menu"
            >
              <div className="relative w-5 h-5">
                <Menu className={`absolute inset-0 w-5 h-5 transition-[transform,opacity] duration-200 ${isOpen ? 'opacity-0 rotate-90 scale-50' : 'opacity-100 rotate-0 scale-100'} ${isScrolled ? 'text-foreground' : 'text-white'}`} />
                <X className={`absolute inset-0 w-5 h-5 transition-[transform,opacity] duration-200 ${isOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-50'} ${isScrolled ? 'text-foreground' : 'text-white'}`} />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-300 ease-in-out ${isOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'}`}>
          <nav className="flex flex-col space-y-0.5 py-3 border-t border-border/20">
            {navItems.map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`text-sm font-medium transition-colors duration-200 py-2.5 px-4 rounded-lg ${
                  activeSection === item.id
                    ? 'bg-primary text-primary-foreground'
                    : 'text-foreground/70 hover:text-foreground hover:bg-muted/50'
                }`}
                style={{ transitionDelay: isOpen ? `${index * 40}ms` : '0ms' }}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;