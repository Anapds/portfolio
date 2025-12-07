import { CheckCircle } from 'lucide-react';

interface SkillProps {
  name: string;
  level: number;
}

function SkillBar({ name, level }: SkillProps) {
  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <span className="text-gray-300 font-semibold">{name}</span>
        <span className="text-accent">{level}%</span>
      </div>
      <div className="w-full bg-gray-700 rounded-full h-2">
        <div
          className="bg-gradient-to-r from-accent to-accent-light h-2 rounded-full transition-all duration-500"
          style={{ width: `${level}%` }}
        ></div>
      </div>
    </div>
  );
}

export function Skills() {
  const skills = {
    Frontend: [
      { name: 'HTML5', level: 95 },
      { name: 'CSS3', level: 95 },
      { name: 'UX/UI', level: 85 },
      { name: 'GitHub', level: 90 },
    ],
    Backend: [
      { name: 'PHP', level: 90 },
      { name: 'Python', level: 88 },
      { name: 'MySQL', level: 70 },
      { name: 'API REST', level: 60 },
    ],
    DevOps: [
      { name: 'Docker', level: 75 },
      { name: 'Git', level: 92 },
      { name: 'DevOps', level: 85 },
      { name: 'N8N', level: 80 },
    ],
  };

  const technologies = [
    'HTML5', 'CSS3', 'PHP', 'Python', 'Git', 'GitHub', 'GitLab',
    'MySQL', 'Docker', 'Metodologias Ágeis', 'UX/UI', 'DevOps', 'N8N', 'Infosec'
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-primary">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title">Habilidades</h2>
        <p className="section-subtitle mb-12">Tecnologias que domino</p>

        <div className="grid md:grid-cols-3 gap-12 mb-16">
          {Object.entries(skills).map(([category, categorySkills]) => (
            <div key={category}>
              <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-2">
                <CheckCircle className="text-accent" size={24} />
                {category}
              </h3>
              <div>
                {categorySkills.map((skill) => (
                  <SkillBar key={skill.name} name={skill.name} level={skill.level} />
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-secondary rounded-lg p-8 border border-accent/20 hover:border-accent/40 transition-all duration-300 hover:shadow-lg hover:shadow-accent/20">
          <h3 className="text-2xl font-bold gradient-text mb-6">Stack Principal</h3>
          <div className="flex flex-wrap gap-4">
            {technologies.map((tech) => (
              <div
                key={tech}
                className="px-4 py-2 bg-accent/10 text-accent-light border border-accent/30 rounded-lg font-semibold hover:bg-accent/20 hover:border-accent/60 transition-all duration-300 cursor-default"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
