const Skills = () => {
  const skillCategories = [
    {
      category: "Frontend",
      skills: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS", "Bootstrap"]
    },
    {
      category: "Backend", 
      skills: ["Node.js", "Express.js"]
    },
    {
      category: "Database",
      skills: ["MongoDB"]
    },
    {
      category: "Tools & Others",
      skills: ["Git", "GitHub", "Postman", "VS Code", "npm"]
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12">Skills</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillCategories.map((category, index) => (
              <div key={index} className="space-y-4">
                <h3 className="text-xl font-semibold text-primary mb-4">
                  {category.category}
                </h3>
                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="bg-background/60 backdrop-blur-sm border border-border/50 rounded-lg px-4 py-2 text-sm font-medium hover:bg-primary/10 transition-colors"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;