import { useState, useEffect } from "react";
import { Header } from "@/components/layout";
import { Hero, Stats, About, Skills, Services, WorkProcess, Portfolio, GitHubActivity, Testimonials, Contact } from "@/components/sections";
import { Footer } from "@/components/layout";
import LoadingScreen from "@/components/LoadingScreen";
import { BackgroundEffects } from "@/components/BackgroundEffects";
import { ChatWidget } from "@/components/ChatWidget";

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
          <BackgroundEffects />
          <div className="min-h-screen animate-fade-in relative z-10">
            <Header />
            <Hero />
            <Stats />
            <div className="section-divider" />
            <About />
            <div className="section-divider" />
            <Skills />
            <div className="section-divider" />
            <Services />
            <div className="section-divider" />
            <WorkProcess />
            <div className="section-divider" />
            <Portfolio />
            <div className="section-divider" />
            <GitHubActivity />
            <div className="section-divider" />
            <Testimonials />
            <div className="section-divider" />
            <Contact />
            <Footer />
          </div>
          <ChatWidget />
        </>
      )}
    </>
  );
};

export default Index;
