export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary border-t border-accent/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-bold gradient-text mb-4">Ana Paula</h3>
            <p className="text-gray-400">Developer apaixonada por criar soluções seguras e robustas.</p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Navegação</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#home" className="hover:text-accent transition-colors duration-300">Home</a></li>
              <li><a href="#about" className="hover:text-accent transition-colors duration-300">Sobre</a></li>
              <li><a href="#projects" className="hover:text-accent transition-colors duration-300">Projetos</a></li>
              <li><a href="#skills" className="hover:text-accent transition-colors duration-300">Habilidades</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Tecnologias</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-accent transition-colors duration-300">HTML5 • CSS3</a></li>
              <li><a href="#" className="hover:text-accent transition-colors duration-300">PHP • Python</a></li>
              <li><a href="#" className="hover:text-accent transition-colors duration-300">MySQL • Docker</a></li>
              <li><a href="#" className="hover:text-accent transition-colors duration-300">Segurança</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-accent/20 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} Ana Paula. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
