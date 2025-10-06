import { Header } from "@/components/layout";
import { Hero, About, Skills, WorkProcess, Process, Portfolio, Contact } from "@/components/sections";
import { Footer } from "@/components/layout";

const Index = () => {
  return (
    <div className="min-h-screen animate-fade-in">
      <Header />
      <Hero />
      <About />
      <Skills />
      <WorkProcess />
      <Process />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
