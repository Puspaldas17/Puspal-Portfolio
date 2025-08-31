import { Card, CardContent } from "@/components/ui/card";
import aboutImage from "@/assets/about-workspace.jpg";

const About = () => {
  return (
    <section id="about" className="py-20" style={{ backgroundColor: 'hsl(var(--section-bg))' }}>
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 animate-fade-in-up">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                Behind the Code
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Hi, I'm Puspal Das, a passionate Backend Developer and MERN stack specialist based in Bhubaneswar, India. 
                With expertise in JavaScript, Node.js, Express.js, React, and MongoDB, I transform complex ideas into 
                elegant, scalable web applications that users love and businesses rely on.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                My journey in development is driven by a deep fascination with how technology can solve real-world problems. 
                I believe in writing clean, maintainable code that not only works flawlessly but also tells a story of 
                thoughtful engineering and user-centric design.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                What sets me apart is my blend of technical precision and creative problem-solving. Whether I'm architecting 
                a robust API, optimizing database performance, or building seamless user interfaces, I approach each project 
                with dedication, curiosity, and an unwavering commitment to quality that delivers genuine impact.
              </p>
            </div>
          </div>
          
          <div className="relative animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={aboutImage} 
                alt="Professional workspace with UI/UX design mockups" 
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-8 -left-8 w-16 h-16 bg-accent rounded-lg animate-float"></div>
            <div className="absolute -bottom-6 -right-6 w-20 h-20 bg-primary/20 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;