import { Mail, Phone, MapPin} from 'lucide-react';
import { useState } from 'react';

export function Contact() {
  const [ setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

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

          
        </div>
      </div>
    </section>
  );
}
