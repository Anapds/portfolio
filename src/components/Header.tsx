import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <header className="fixed top-0 w-full bg-primary/95 backdrop-blur z-50 border-b border-accent/20">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold gradient-text">
          Ana Paula
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8">
          {['home', 'about', 'projects', 'skills', 'contact'].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className="text-gray-300 hover:text-accent capitalize transition-colors duration-300"
            >
              {item}
            </button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 bg-secondary border-b border-accent/30 md:hidden">
            <div className="flex flex-col p-4 gap-4">
              {['home', 'about', 'projects', 'skills', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="text-gray-300 hover:text-accent capitalize transition-colors duration-300 text-left"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
