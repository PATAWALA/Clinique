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
            className="inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-full text-lg font-semibold mb-8 border border-white/30"
          >
            🎯 Ne laissez pas vos concurrents prendre vos patients
          </motion.div>

          {/* Titre principal */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white">
            Parlez directement avec un expert
            <br />
            <span className="text-yellow-300">qui comprend votre métier</span>
          </h2>
          
          {/* Sous-titre */}
          <p className="text-xl md:text-2xl mb-4 text-white/95 font-medium">
            Obtenez des explications claires sur la création de votre site web professionnel
          </p>
          
          <p className="text-lg md:text-xl mb-10 text-white/85 max-w-3xl mx-auto leading-relaxed">
            Un expert digital spécialisé dans les cliniques vous expliquera tout :
            comment attirer plus de patients, combien ça coûte, combien de temps ça prend,
            et surtout comment ça va transformer votre activité.
          </p>

          {/* Points clés */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-3xl mx-auto"
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
              <div key={index} className="bg-white/15 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="text-white font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-white/80 text-sm">{item.description}</p>
              </div>
            ))}
          </motion.div>
          
          {/* Boutons d'action */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              primary 
              href={`https://wa.me/${clinicConfig.whatsapp}`}
              target="_blank"
              className="!bg-white !text-blue-600 hover:!bg-yellow-300 !text-lg !px-10 !py-5 !font-bold shadow-2xl"
            >
              <span className="mr-2 text-2xl">💬</span>
              Parler à un expert sur WhatsApp
            </Button>
          </div>

          <p className="text-white/75 text-sm mb-8">
            👆 C'est gratuit et vous aurez des réponses concrètes immédiatement
          </p>

          {/* Séparateur */}
          <div className="flex items-center justify-center mb-10">
            <div className="border-t border-white/30 flex-grow max-w-[100px]"></div>
            <span className="mx-4 text-white/70 text-sm font-medium">OU</span>
            <div className="border-t border-white/30 flex-grow max-w-[100px]"></div>
          </div>

          {/* Formulaire de contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/15 backdrop-blur-lg rounded-2xl p-8 md:p-10 max-w-2xl mx-auto border border-white/20"
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-3 text-white">
              Laissez vos coordonnées
            </h3>
            <p className="text-white/80 mb-8">
              Un expert vous rappelle dans l'heure pour discuter de votre projet
            </p>
            
            <form className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-white/90 text-sm font-medium mb-2 text-left">
                    Nom de la clinique *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ex: Clinique Saint-Louis"
                    className="w-full px-5 py-4 rounded-xl bg-white/20 border-2 border-white/30 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:border-transparent transition-all text-lg"
                  />
                </div>
                <div>
                  <label className="block text-white/90 text-sm font-medium mb-2 text-left">
                    Ville *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ex: Paris, Lyon, Marseille"
                    className="w-full px-5 py-4 rounded-xl bg-white/20 border-2 border-white/30 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:border-transparent transition-all text-lg"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-white/90 text-sm font-medium mb-2 text-left">
                  Votre numéro de téléphone *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="Ex: 06 12 34 56 78"
                  className="w-full px-5 py-4 rounded-xl bg-white/20 border-2 border-white/30 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:border-transparent transition-all text-lg"
                />
              </div>
              
              <div>
                <label className="block text-white/90 text-sm font-medium mb-2 text-left">
                  Quel est votre besoin principal ?
                </label>
                <select className="w-full px-5 py-4 rounded-xl bg-white/20 border-2 border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:border-transparent transition-all text-lg">
                  <option value="" className="text-gray-800">Sélectionnez une option</option>
                  <option value="site" className="text-gray-800">Créer un site web professionnel</option>
                  <option value="visible" className="text-gray-800">Être visible sur Google</option>
                  <option value="rdv" className="text-gray-800">Avoir la réservation en ligne</option>
                  <option value="info" className="text-gray-800">Juste des informations</option>
                </select>
              </div>
              
              <button
                type="submit"
                className="w-full bg-yellow-400 hover:bg-yellow-300 text-blue-900 font-bold py-5 rounded-xl transition-all transform hover:scale-[1.02] text-xl mt-4 shadow-xl"
              >
                📞 Je veux être rappelé gratuitement
              </button>
            </form>
            
            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4 text-white/80 text-sm">
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