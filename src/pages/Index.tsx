import { useState, useEffect } from "react";
import { Header } from "@/components/layout";
import { Hero, Stats, About, Skills, Services, WorkProcess, Process, Portfolio, Testimonials, Contact } from "@/components/sections";
import { Footer } from "@/components/layout";
import LoadingScreen from "@/components/LoadingScreen";
import { CursorEffects } from "@/components/CursorEffects";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Prevent scroll while loading
    if (isLoading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isLoading]);

  const handleLoadingComplete = () => {
    setIsLoading(false);
    // Delay content render slightly for smoother transition
    setTimeout(() => setShowContent(true), 100);
  };

  return (
    <>
      {isLoading && <LoadingScreen onLoadingComplete={handleLoadingComplete} />}
      {showContent && (
        <>
          <CursorEffects />
          <div className="min-h-screen animate-fade-in">
            <Header />
            <Hero />
            <Stats />
            <About />
            <Skills />
            <Services />
            <WorkProcess />
            <Process />
            <Portfolio />
            <Testimonials />
            <Contact />
            <Footer />
          </div>
        </>
      )}
    </>
  );
};

export default Index;
