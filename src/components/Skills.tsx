const Skills = () => {
  const skillCategories = [
    {
      category: "Frontend Development",
      skills: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS", "Bootstrap"],
      description: "Creating responsive and intuitive user interfaces"
    },
    {
      category: "Backend Development", 
      skills: ["Node.js", "Express.js"],
      description: "Building robust server-side applications"
    },
    {
      category: "Database Management",
      skills: ["MongoDB"],
      description: "Designing efficient data storage solutions"
    },
    {
      category: "Development Tools",
      skills: ["Git", "GitHub", "Postman", "VS Code", "npm"],
      description: "Streamlining development workflows"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Technical Skills & Expertise
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Comprehensive technical proficiency across modern web development technologies 
              and industry-standard tools for delivering high-quality solutions.
            </p>
          </div>
          
          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((category, index) => (
              <div 
                key={index} 
                className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                {/* Category Header */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {category.category}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {category.description}
                  </p>
                </div>
                
                {/* Skills List */}
                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="bg-muted/50 border border-border/50 rounded-md px-3 py-2 text-sm font-medium 
                               hover:bg-primary/10 hover:border-primary/30 transition-colors duration-200"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          {/* Professional Statement */}
          <div className="text-center mt-16">
            <div className="max-w-3xl mx-auto">
              <p className="text-muted-foreground mb-4">
                Committed to continuous learning and staying current with emerging technologies 
                to deliver innovative and efficient solutions.
              </p>
              <div className="inline-block px-4 py-2 bg-muted/30 border border-border rounded-md">
                <span className="text-sm font-medium text-muted-foreground">
                  Always expanding expertise through hands-on experience and best practices
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;