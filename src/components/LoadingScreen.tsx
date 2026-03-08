import { useEffect, useState } from "react";

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

const LoadingScreen = ({ onLoadingComplete }: LoadingScreenProps) => {
  const [fadeOut, setFadeOut] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Animate progress bar
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        // Ease-out curve: fast start, slow end
        const remaining = 100 - prev;
        return prev + Math.max(remaining * 0.06, 0.5);
      });
    }, 30);

    const fadeTimer = setTimeout(() => {
      setFadeOut(true);
    }, 2500);

    const completeTimer = setTimeout(() => {
      onLoadingComplete();
    }, 3000);

    return () => {
      clearInterval(progressInterval);
      clearTimeout(fadeTimer);
      clearTimeout(completeTimer);
    };
  }, [onLoadingComplete]);

  const name = "Puspal Das";

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-background transition-opacity duration-500 ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="absolute inset-0 bg-gradient-mesh opacity-10" />
      
      {/* Morphing blob backgrounds */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 morphing-bg opacity-20 animate-morph-blob" />
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 morphing-bg opacity-15 animate-morph-blob" style={{ animationDelay: '-3s' }} />
      
      {/* Rotating ring */}
      <div className="absolute w-48 h-48 xs:w-56 xs:h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 rounded-full border border-primary/10 animate-[spin_8s_linear_infinite]" />
      <div className="absolute w-56 h-56 xs:w-64 xs:h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full border border-accent/[0.06] animate-[spin_12s_linear_infinite_reverse]" />
      
      <div className="relative flex flex-col items-center space-y-8">
        {/* Letter-by-letter Name Reveal */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight">
            <span className="inline-flex" aria-label={name}>
              {name.split("").map((letter, i) => (
                <span
                  key={i}
                  className="inline-block gradient-text-animated drop-shadow-[0_0_30px_rgba(139,92,246,0.5)] animate-[fade-in-up_0.4s_ease-out_both]"
                  style={{ animationDelay: `${i * 60}ms` }}
                >
                  {letter === " " ? "\u00A0" : letter}
                </span>
              ))}
            </span>
          </h1>
          <p className="text-base xs:text-lg sm:text-xl md:text-2xl text-muted-foreground font-medium tracking-wide animate-fade-in uppercase" style={{ animationDelay: "0.7s" }}>
            Backend Developer
          </p>
        </div>

        {/* Smooth Progress Bar */}
        <div className="w-64 xs:w-80 sm:w-96 animate-fade-in" style={{ animationDelay: "0.9s" }}>
          <div className="h-0.5 bg-muted/30 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_100%] animate-gradient-shift rounded-full transition-[width] duration-100 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-center text-[11px] text-muted-foreground/60 mt-2 tabular-nums font-mono">
            {Math.round(progress)}%
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
