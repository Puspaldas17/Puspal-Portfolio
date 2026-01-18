import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { ThemeCustomizer } from "@/components/ui/theme-customizer";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#portfolio", label: "Portfolio" },
    { href: "#contact", label: "Contact" },
  ];

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
            <a href="#home" className="group">
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
            <nav className="flex items-center space-x-5 lg:space-x-6 xl:space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className={`relative text-xs sm:text-sm lg:text-base font-semibold transition-all duration-300 group ${
                    isScrolled 
                      ? 'text-foreground/70 hover:text-foreground' 
                      : 'text-white/90 hover:text-white'
                  }`}
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-primary group-hover:w-full transition-all duration-300 rounded-full"></span>
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
              {isOpen ? (
                <X className={`w-5 h-5 ${isScrolled ? 'text-foreground' : 'text-white'}`} />
              ) : (
                <Menu className={`w-5 h-5 ${isScrolled ? 'text-foreground' : 'text-white'}`} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-6">
            <nav className="flex flex-col space-y-4 pt-4 border-t border-border/20">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-foreground/80 hover:text-foreground font-medium transition-colors duration-200 py-2"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;