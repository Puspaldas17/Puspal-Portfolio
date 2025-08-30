const Skills = () => {
  const skillCategories = [
    {
      category: "Frontend",
      skills: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS", "Bootstrap"],
      icon: "🎨",
      gradient: "from-blue-500 via-purple-500 to-pink-500"
    },
    {
      category: "Backend", 
      skills: ["Node.js", "Express.js"],
      icon: "⚡",
      gradient: "from-green-500 via-emerald-500 to-teal-500"
    },
    {
      category: "Database",
      skills: ["MongoDB"],
      icon: "🗄️",
      gradient: "from-orange-500 via-red-500 to-pink-500"
    },
    {
      category: "Tools & Others",
      skills: ["Git", "GitHub", "Postman", "VS Code", "npm"],
      icon: "🛠️",
      gradient: "from-purple-500 via-indigo-500 to-blue-500"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-background via-muted/20 to-background relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-pulse">
              My Arsenal
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Passionate about crafting exceptional digital experiences with cutting-edge technologies. 
              Every line of code is written with dedication and precision.
            </p>
          </div>
          
          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillCategories.map((category, index) => (
              <div 
                key={index} 
                className="group relative bg-card/60 backdrop-blur-xl border border-border/50 rounded-2xl p-6 hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 hover:-translate-y-2 animate-fade-in"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                {/* Animated gradient border */}
                <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-sm`}></div>
                
                {/* Category Header */}
                <div className="text-center mb-6">
                  <div className="text-4xl mb-3 group-hover:animate-bounce">{category.icon}</div>
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                    {category.category}
                  </h3>
                </div>
                
                {/* Skills List */}
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="bg-background/80 backdrop-blur-sm border border-border/30 rounded-xl px-4 py-3 text-sm font-medium 
                               hover:bg-primary/10 hover:border-primary/30 hover:scale-105 transition-all duration-300 
                               cursor-default group-hover:animate-pulse"
                      style={{animationDelay: `${skillIndex * 0.05}s`}}
                    >
                      <span className="relative">
                        {skill}
                        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/20 to-transparent 
                                       translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></span>
                      </span>
                    </div>
                  ))}
                </div>
                
                {/* Hover effect overlay */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 via-transparent to-accent/5 
                               opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </div>
            ))}
          </div>
          
          {/* Bottom CTA */}
          <div className="text-center mt-16 animate-fade-in" style={{animationDelay: '0.6s'}}>
            <p className="text-lg text-muted-foreground mb-4">
              Always learning, always growing, always passionate about technology! 
            </p>
            <div className="inline-block px-6 py-2 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full border border-primary/30">
              <span className="text-sm font-medium bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                ✨ Crafting the future, one commit at a time
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;