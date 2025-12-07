import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useState } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', message: '' });
    alert('Mensagem enviada com sucesso!');
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-secondary to-primary">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-title">Contato</h2>
        <p className="section-subtitle mb-12">Vamos conversar sobre seu próximo projeto</p>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-gradient-to-r from-accent to-accent-light animate-pulse">
                  <Mail className="text-white" size={24} />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">Email</h3>
                <a href="mailto:ana@example.com" className="text-gray-400 hover:text-accent transition-colors duration-300">
                  anapds004@gmail.com
                </a>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-gradient-to-r from-accent to-accent-light">
                  <Phone className="text-white" size={24} />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">Telefone</h3>
                <a href="tel:+5511999999999" className="text-gray-400 hover:text-accent transition-colors duration-300">
                  +55 (79) 999964404
                </a>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-gradient-to-r from-accent to-accent-light">
                  <MapPin className="text-white" size={24} />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">Localização</h3>
                <p className="text-gray-400">Aracaju, SE - Brasil</p>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                Nome
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-secondary border border-accent/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-accent transition-colors"
                placeholder="Seu nome"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-secondary border border-accent/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-accent transition-colors"
                placeholder="seu@email.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                Mensagem
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-4 py-2 bg-secondary border border-accent/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-accent transition-colors resize-none"
                placeholder="Sua mensagem..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full btn-primary flex items-center justify-center gap-2"
            >
              Enviar Mensagem <Send size={20} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
