// components/sections/FinalCTA.tsx
import { motion } from 'framer-motion';
import Button from '../ui/Button';
import clinicConfig from '../../data/clinic-config';

export default function FinalCTA() {
  return (
    <section id="contact" className="py-20 md:py-28 bg-gradient-to-br from-blue-600 via-blue-700 to-green-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-white max-w-4xl mx-auto"
        >
          {/* Badge urgent */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block bg-white/20 backdrop-blur-sm text-white px-4 md:px-6 py-2 md:py-3 rounded-full text-sm md:text-lg font-semibold mb-6 md:mb-8 border border-white/30"
          >
            🎯 Ne laissez pas vos concurrents prendre vos patients
          </motion.div>

          {/* Titre principal */}
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight text-white">
            Parlez directement avec un expert
            <br />
            <span className="text-yellow-300">qui comprend votre métier</span>
          </h2>
          
          {/* Sous-titre */}
          <p className="text-lg md:text-2xl mb-3 md:mb-4 text-white/95 font-medium">
            Obtenez des explications claires sur la création de votre site web professionnel
          </p>
          
          <p className="text-base md:text-xl mb-8 md:mb-10 text-white/85 max-w-3xl mx-auto leading-relaxed">
            Un expert digital spécialisé dans les cliniques vous expliquera tout :
            comment attirer plus de patients, combien ça coûte, combien de temps ça prend,
            et surtout comment ça va transformer votre activité.
          </p>

          {/* Points clés */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 mb-10 md:mb-12 max-w-3xl mx-auto"
          >
            {[
              {
                icon: "💡",
                title: "Conseils personnalisés",
                description: "Pour votre spécialité et votre ville"
              },
              {
                icon: "⏱️",
                title: "Réponse en 5 minutes",
                description: "Un expert disponible maintenant"
              },
              {
                icon: "🔒",
                title: "Sans engagement",
                description: "Juste une discussion ouverte"
              }
            ].map((item, index) => (
              <div key={index} className="bg-white/15 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-white/20">
                <div className="text-2xl md:text-3xl mb-2 md:mb-3">{item.icon}</div>
                <h3 className="text-white font-semibold text-base md:text-lg mb-1 md:mb-2">{item.title}</h3>
                <p className="text-white/80 text-xs md:text-sm">{item.description}</p>
              </div>
            ))}
          </motion.div>
          
          {/* Bouton WhatsApp - BIEN VISIBLE */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8 md:mb-12">
            <a
              href={`https://wa.me/${clinicConfig.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 md:px-12 py-4 md:py-5 rounded-full font-bold text-base md:text-xl transition-all duration-300 transform hover:scale-105 bg-yellow-400 hover:bg-yellow-300 text-blue-900 shadow-2xl hover:shadow-3xl"
            >
              <span className="mr-2 md:mr-3 text-xl md:text-2xl">💬</span>
              Parler à un expert sur WhatsApp
            </a>
          </div>

          <p className="text-white/75 text-xs md:text-sm mb-6 md:mb-8">
            👆 C'est gratuit et vous aurez des réponses concrètes immédiatement
          </p>

          {/* Séparateur */}
          <div className="flex items-center justify-center mb-8 md:mb-10">
            <div className="border-t border-white/30 flex-grow max-w-[80px] md:max-w-[100px]"></div>
            <span className="mx-4 text-white/70 text-xs md:text-sm font-medium">OU</span>
            <div className="border-t border-white/30 flex-grow max-w-[80px] md:max-w-[100px]"></div>
          </div>

          {/* Formulaire de contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/15 backdrop-blur-lg rounded-2xl p-6 md:p-10 max-w-2xl mx-auto border border-white/20"
          >
            <h3 className="text-xl md:text-3xl font-bold mb-2 md:mb-3 text-white">
              Laissez vos coordonnées
            </h3>
            <p className="text-white/80 text-sm md:text-base mb-6 md:mb-8">
              Un expert vous rappelle dans l'heure pour discuter de votre projet
            </p>
            
            <form className="space-y-4 md:space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
                <div>
                  <label className="block text-white/90 text-xs md:text-sm font-medium mb-1.5 md:mb-2 text-left">
                    Nom de la clinique *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ex: Clinique Saint-Louis"
                    className="w-full px-4 md:px-5 py-3 md:py-4 rounded-xl bg-white/20 border-2 border-white/30 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:border-transparent transition-all text-sm md:text-lg"
                  />
                </div>
                <div>
                  <label className="block text-white/90 text-xs md:text-sm font-medium mb-1.5 md:mb-2 text-left">
                    Ville *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ex: Paris, Lyon, Marseille"
                    className="w-full px-4 md:px-5 py-3 md:py-4 rounded-xl bg-white/20 border-2 border-white/30 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:border-transparent transition-all text-sm md:text-lg"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-white/90 text-xs md:text-sm font-medium mb-1.5 md:mb-2 text-left">
                  Votre numéro de téléphone *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="Ex: 06 12 34 56 78"
                  className="w-full px-4 md:px-5 py-3 md:py-4 rounded-xl bg-white/20 border-2 border-white/30 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:border-transparent transition-all text-sm md:text-lg"
                />
              </div>
              
              <div>
                <label className="block text-white/90 text-xs md:text-sm font-medium mb-1.5 md:mb-2 text-left">
                  Quel est votre besoin principal ?
                </label>
                <select className="w-full px-4 md:px-5 py-3 md:py-4 rounded-xl bg-white/20 border-2 border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:border-transparent transition-all text-sm md:text-lg">
                  <option value="" className="text-gray-800">Sélectionnez une option</option>
                  <option value="site" className="text-gray-800">Créer un site web professionnel</option>
                  <option value="visible" className="text-gray-800">Être visible sur Google</option>
                  <option value="rdv" className="text-gray-800">Avoir la réservation en ligne</option>
                  <option value="info" className="text-gray-800">Juste des informations</option>
                </select>
              </div>
              
              <button
                type="submit"
                className="w-full bg-yellow-400 hover:bg-yellow-300 text-blue-900 font-bold py-4 md:py-5 rounded-xl transition-all transform hover:scale-[1.02] text-base md:text-xl mt-4 shadow-xl"
              >
                📞 Je veux être rappelé gratuitement
              </button>
            </form>
            
            <div className="mt-4 md:mt-6 flex flex-col sm:flex-row items-center justify-center gap-2 md:gap-4 text-white/80 text-xs md:text-sm">
              <span>✓ Sans engagement</span>
              <span className="hidden sm:block">•</span>
              <span>✓ Conseil gratuit</span>
              <span className="hidden sm:block">•</span>
              <span>✓ Confidentialité garantie</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}