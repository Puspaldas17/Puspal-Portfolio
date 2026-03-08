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
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-background/80 backdrop-blur-xl shadow-md border-b border-border/40' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 xs:px-6 sm:px-8 md:px-10 lg:px-12 xl:px-16 2xl:px-20">
        <div className="flex items-center justify-between h-16 xs:h-18 sm:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#home" onClick={(e) => handleNavClick(e, '#home')} className="group">
              <div className="text-xl xs:text-2xl sm:text-3xl font-bold tracking-tight">
                <span className={`bg-gradient-primary bg-clip-text text-transparent transition-all ${
                  isScrolled ? '' : 'drop-shadow-[0_2px_10px_rgba(255,255,255,0.5)]'
                }`}>
                  Puspal Das
                </span>
              </div>
              <div className={`text-[10px] xs:text-xs font-medium tracking-wide uppercase hidden xs:block transition-colors ${
                isScrolled ? 'text-muted-foreground' : 'text-white/80'
              }`}>
                Backend Developer
              </div>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-5">
            <nav className="flex items-center space-x-1 lg:space-x-2 bg-white/5 backdrop-blur-sm rounded-full px-2 py-1.5 border border-white/10">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`relative text-xs sm:text-sm lg:text-base font-semibold transition-all duration-300 px-3 py-1.5 rounded-full ${
                    activeSection === item.id
                      ? isScrolled
                        ? 'bg-primary/10 text-primary'
                        : 'bg-white/20 text-white'
                      : isScrolled 
                        ? 'text-foreground/70 hover:text-foreground hover:bg-muted/50' 
                        : 'text-white/70 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-gradient-primary" />
                  )}
                </a>
              ))}
            </nav>
            <ThemeCustomizer />
            <ThemeToggle />
            <LanguageSwitcher />
          </div>

          {/* Mobile menu button and theme toggle */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeCustomizer />
            <ThemeToggle />
            <LanguageSwitcher />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2.5 rounded-xl transition-all duration-300 ${
                isScrolled 
                  ? 'bg-muted hover:bg-muted/80' 
                  : 'bg-white/20 hover:bg-white/30 backdrop-blur-sm'
              }`}
              aria-label="Toggle menu"
            >
              <div className="relative w-5 h-5">
                <Menu className={`absolute inset-0 w-5 h-5 transition-all duration-300 ${isOpen ? 'opacity-0 rotate-90 scale-50' : 'opacity-100 rotate-0 scale-100'} ${isScrolled ? 'text-foreground' : 'text-white'}`} />
                <X className={`absolute inset-0 w-5 h-5 transition-all duration-300 ${isOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-50'} ${isScrolled ? 'text-foreground' : 'text-white'}`} />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'}`}>
          <nav className="flex flex-col space-y-1 py-4 border-t border-border/20">
            {navItems.map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`font-medium transition-all duration-300 py-2.5 px-4 rounded-xl ${
                  activeSection === item.id
                    ? 'bg-primary/10 text-primary'
                    : 'text-foreground/80 hover:text-foreground hover:bg-muted/50'
                }`}
                style={{ transitionDelay: isOpen ? `${index * 50}ms` : '0ms' }}
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