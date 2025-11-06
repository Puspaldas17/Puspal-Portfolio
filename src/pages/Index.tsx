import { Header } from "@/components/layout";
import { Hero, About, Skills, Services, WorkProcess, Process, Portfolio, Testimonials, Contact } from "@/components/sections";
import { Footer } from "@/components/layout";

const Index = () => {
  return (
    <div className="min-h-screen animate-fade-in">
      <Header />
      <Hero />
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
  );
};

export default Index;
