

export function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-primary">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-title">Sobre Mim</h2>
        <p className="section-subtitle mb-8">Um pouco da minha história</p>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-4 text-gray-300">
            <p className="text-lg leading-relaxed">
              Sou Ana Paula, Analista de Sistemas de 22 anos, formada em Análise e Desenvolvimento de Sistemas.
              Com um forte background em gestão de IA e automação, combino lógica e técnica para criar soluções
              que otimizam processos reais.
            </p>

            <p className="text-lg leading-relaxed">
              Minha expertise técnica inclui <span className="text-accent font-semibold">PHP, Python SQL e React Native</span>,
              com destaque para automações complexas via <span className="text-accent font-semibold">n8n</span>.
            </p>

            <p className="text-lg leading-relaxed">
              Quando não estou codificando, estou estudando segurança, contribuindo em projetos
              open source ou compartilhando conhecimento com a comunidade tech.
            </p>
          </div>

          <div className="bg-secondary rounded-lg p-8 border border-accent/20 hover:border-accent/50 transition-colors duration-300">
            <h3 className="text-2xl font-bold gradient-text mb-6">Informações</h3>
            <div className="space-y-4">
              <div>
                <p className="text-gray-400">Nome</p>
                <p className="text-white font-semibold">Ana Paula</p>
              </div>
              <div>
                <p className="text-gray-400">Idade</p>
                <p className="text-white font-semibold">22 anos</p>
              </div>
              <div>
                <p className="text-gray-400">Especialidade</p>
                <p className="text-white font-semibold">Full Stack Developer</p>
              </div>
              <div>
                <p className="text-gray-400">Formação</p>
                <p className="text-white font-semibold text-sm">Análise e Desenvolvimento de Sistemas</p>
              </div>
              <div>
                <p className="text-gray-400">Graduando</p>
                <p className="text-white font-semibold text-sm">Segurança da Informação</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
