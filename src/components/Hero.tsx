import { ArrowRight, Github, Linkedin } from 'lucide-react';

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary via-primary to-secondary">
      <div className="max-w-4xl text-center animate-fade-in">
        <div className="mb-6">
          <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-accent to-accent-light p-1 mb-6 animate-pulse-glow">
            {/* AQUI EMBAIXO: Troquei 'gradient-text' por 'text-white' */}
            <div className="w-full h-full rounded-full bg-primary flex items-center justify-center text-5xl font-bold text-white">
              AP
            </div>
          </div>
        </div>

        <h1 className="text-5xl sm:text-7xl font-bold mb-6 gradient-text">
          Ana Paula
        </h1>

        <p className="text-xl sm:text-2xl text-gray-300 mb-4">
          Developer Full Stack | 22 anos
        </p>

        <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
          Formada em Análise e Desenvolvimento de Sistemas.
          Graduando Segurança da Informação. Apaixonada por criar soluções robustas e seguras!
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-primary flex items-center justify-center gap-2"
          >
            Ver Projetos <ArrowRight size={20} />
          </button>
          <button className="btn-secondary">
            Baixar CV
          </button>
        </div>

        <div className="flex gap-6 justify-center">
          <a
            href="https://github.com/Anapds"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-accent transition-colors duration-300"
          >
            <Github size={28} />
          </a>
          <a href="https://www.linkedin.com/in/anapds1/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-accent transition-colors duration-300">

            <Linkedin size={28} />
          </a>
        </div>
      </div>
    </section>
  );
}
