import { useState, useEffect } from "react";
import { Header } from "@/components/layout";
import { Hero, Stats, About, Skills, Services, WorkProcess, Process, Portfolio, Testimonials, Contact } from "@/components/sections";
import { Footer } from "@/components/layout";
import LoadingScreen from "@/components/LoadingScreen";
import { BackgroundEffects } from "@/components/BackgroundEffects";
import { ChatWidget } from "@/components/ChatWidget";
import { Breadcrumb } from "@/components/Breadcrumb";

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
            <Breadcrumb />
            <div id="hero"><Hero /></div>
            <div id="stats"><Stats /></div>
            <div id="about"><About /></div>
            <div id="skills"><Skills /></div>
            <div id="services"><Services /></div>
            <div id="process">
              <WorkProcess />
              <Process />
            </div>
            <div id="portfolio"><Portfolio /></div>
            <div id="testimonials"><Testimonials /></div>
            <div id="contact"><Contact /></div>
            <Footer />
          </div>
          <ChatWidget />
        </>
      )}
    </>
  );
};

export default Index;
