import { useEffect, useState } from "react";

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

const LoadingScreen = ({ onLoadingComplete }: LoadingScreenProps) => {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Start fade out after 2.5 seconds
    const fadeTimer = setTimeout(() => {
      setFadeOut(true);
    }, 2500);

    // Complete loading after fade animation (3 seconds total)
    const completeTimer = setTimeout(() => {
      onLoadingComplete();
    }, 3000);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(completeTimer);
    };
  }, [onLoadingComplete]);

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-background transition-opacity duration-500 ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="absolute inset-0 bg-gradient-mesh opacity-10"></div>
      
      <div className="relative flex flex-col items-center space-y-8">
        {/* Logo/Name Animation */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight animate-fade-in">
            <span className="bg-gradient-primary bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(139,92,246,0.5)]">
              Puspal Das
            </span>
          </h1>
          <p className="text-base xs:text-lg sm:text-xl md:text-2xl text-muted-foreground font-medium tracking-wide animate-fade-in uppercase" style={{ animationDelay: "0.3s" }}>
            Backend Developer
          </p>
        </div>

        {/* Animated Loading Bar */}
        <div className="w-64 xs:w-80 sm:w-96 h-1 bg-muted/30 rounded-full overflow-hidden animate-fade-in" style={{ animationDelay: "0.6s" }}>
          <div className="h-full bg-gradient-primary animate-loading-bar"></div>
        </div>

        {/* Pulsing Dots */}
        <div className="flex space-x-2 animate-fade-in" style={{ animationDelay: "0.9s" }}>
          <div className="w-2 h-2 bg-primary rounded-full animate-pulse" style={{ animationDelay: "0s" }}></div>
          <div className="w-2 h-2 bg-primary rounded-full animate-pulse" style={{ animationDelay: "0.2s" }}></div>
          <div className="w-2 h-2 bg-primary rounded-full animate-pulse" style={{ animationDelay: "0.4s" }}></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
