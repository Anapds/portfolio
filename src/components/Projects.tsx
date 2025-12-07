import { ExternalLink, Github } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
}

function ProjectCard({ title, description, image, technologies, liveUrl, githubUrl }: ProjectCardProps) {
  return (
    <div className="bg-secondary rounded-lg overflow-hidden border border-accent/20 hover:border-accent/50 transition-all duration-300 group hover:shadow-lg hover:shadow-accent/20">
      <div className="h-48 bg-gradient-to-br from-accent/10 to-accent-light/10 flex items-center justify-center overflow-hidden">
        <div className="text-6xl opacity-20 group-hover:opacity-40 transition-opacity animate-float">
          {image}
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-300 mb-4">{description}</p>

        <div className="mb-6 flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span key={tech} className="px-3 py-1 bg-accent/10 text-accent-light text-sm rounded-full border border-accent/30 hover:bg-accent/20 transition-colors">
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-4">
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-accent hover:text-accent-light transition-colors duration-300"
            >
              <ExternalLink size={18} /> Live
            </a>
          )}
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-accent hover:text-accent-light transition-colors duration-300"
            >
              <Github size={18} /> Código
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export function Projects() {
  const projects = [
    {
      title: 'Caderno de Questões',
      description: 'Aplicativo do Portal Concursos, na qual os usuários podem criar, compartilhar e resolver cadernos de questões personalizadas para concursos públicos.',
      image: '📱',
      technologies: ['React Native', 'API'],
    },
    {
      title: 'Portal de Ideias - SIGED ',
      description: 'O intuit do Portal de Ideias é coletar sugestões dos colaboradores para melhorar processos internos e o ambiente de trabalho.',
      image: '✓',
      technologies: ['PHP', 'JavaScript', 'Jquery', 'Ajax', 'MySQL', 'Bootstrap'],
    },
    {
      title: 'Dashboard de Aniversariantes - SIGED',
      description: 'Dashboard interno que exibe os aniversariantes do mês, semana e dia promovendo um ambiente de trabalho mais acolhedor e integrado.',
      image: '📚',
      technologies: ['PHP', 'HTML5', 'CSS3', 'MySQL', 'Bootstrap'],
    },
    {
      title: 'Gerador de relatorios dinamicos - SIGED',
      description: 'CRUD que permite a criação de relatórios personalizados com base em diversos filtros e critérios através de uma query.',
      image: '📊',
      technologies: ['PHP', 'JavaScript', 'Jquery', 'Ajax', 'MySQL', 'Bootstrap'],
    },
    {
      title: 'Portalzinho',
      description: 'Rotina de Daily Scrum: Automação de lembretes recorrentes enviados ao time para o início das reuniões diárias.',
      image: '🤖',
      technologies: ['N8N', 'APIs', 'Automação'],
    },
    {
      title: 'Processamento de Dados de Alunos',
      description: 'Fluxo de automação para processos empresariais utilizando N8N. Extração automática de dados a partir de arquivos .xlsx (enviados via form node) para o Google Sheets, acionando o disparo de e-mails personalizados para a lista de alunos.',
      image: '⚙️',
      technologies: ['N8N', 'API', 'DevOps'],
    },
    {
      title: 'Triagem e Gestão no ClickUp',
      description: 'Criação automática de tarefas no ClickUp a partir de formulários. Inclui lógica condicional para notificar a equipe imediatamente em casos de alta urgência/prioridade.',
      image: '💻',
      technologies: ['N8N', 'API', 'DevOps'],
    },
    {
      title: 'Feedback de Conclusão (Loop Fechado)',
      description: 'Notificação automática enviada ao solicitante original assim que o status da demanda é alterado para "Concluído"',
      image: '📨',
      technologies: ['N8N', 'API', 'DevOps'],
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary to-secondary">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title">Projetos</h2>
        <p className="section-subtitle mb-12">Alguns dos meus trabalhos mais interessantes</p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              image={project.image}
              technologies={project.technologies}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
