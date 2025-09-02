import { Header } from "@/components/layout";
import { Hero, About, Skills, Process, Portfolio, Contact } from "@/components/sections";
import { Footer } from "@/components/layout";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Process />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
