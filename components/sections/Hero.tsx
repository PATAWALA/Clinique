// components/sections/Hero.tsx
import { motion } from 'framer-motion';
import Button from '../ui/Button';
import StatCard from '../ui/StatCard';
import clinicConfig from '../../data/clinic-config';

export default function Hero() {
  return (
    <section className="pt-20 md:pt-32 pb-12 md:pb-20 bg-gradient-to-br from-blue-50 via-white to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Badge d'alerte */}
          <motion.div
            className="inline-block bg-red-100 text-red-700 px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-semibold mb-4 md:mb-6"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            ⚠️ Alerte : Votre clinique est invisible en ligne
          </motion.div>
          
          {/* Titre principal */}
          <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight">
            Votre clinique perd probablement des{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-500">
              patients
            </span>{" "}
            à cause de son absence en ligne
          </h1>
          
          {/* Sous-titre */}
          <p className="text-base md:text-xl lg:text-2xl text-gray-600 mb-6 md:mb-10 max-w-3xl mx-auto">
            Chaque jour, des dizaines de patients cherchent une clinique comme la vôtre sur Google. 
            Sans site web professionnel, vous leur rendez service... à vos concurrents.
          </p>
          
          {/* Boutons */}
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
            <Button 
              primary 
              href={`https://wa.me/${clinicConfig.whatsapp}`}
              target="_blank"
            >
              <span className="mr-2">💬</span>
              Parler à un expert WhatsApp
            </Button>
            <Button href="#opportunities">
              Voir les opportunités perdues
            </Button>
          </div>

          {/* Statistiques rapides */}
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 mt-10 md:mt-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <StatCard
              number="77%"
              label="des patients cherchent en ligne avant de consulter"
              icon="🔍"
            />
            <StatCard
              number="5x"
              label="plus de patients pour une clinique avec site web"
              icon="📈"
            />
            <StatCard
              number="85%"
              label="font plus confiance à une clinique avec présence digitale"
              icon="⭐"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}