// components/sections/Comparison.tsx
import { motion } from 'framer-motion';
import Section from '../ui/Section';
import SectionTitle from '../ui/SectionTitle';

export default function Comparison() {
  const withoutSite: string[] = [
    "Patients qui ne vous trouvent pas en ligne",
    "Aucune crédibilité numérique",
    "Pas de prise de rendez-vous en ligne",
    "Aucune présence sur Google Maps",
    "Image dépassée et peu professionnelle",
    "Perte de patients au profit des concurrents",
    "Communication limitée avec les patients"
  ];

  const withSite: string[] = [
    "Visible sur Google 24h/24 et 7j/7",
    "Crédibilité instantanée et professionnalisme",
    "Réservation en ligne simple et rapide",
    "Présence optimisée sur Google Maps",
    "Image moderne et rassurante",
    "Plus de patients que vos concurrents",
    "Communication WhatsApp intégrée"
  ];

  return (
    <Section className="bg-gradient-to-br from-gray-100 to-blue-50">
      <SectionTitle
        title="La différence est frappante"
        subtitle="Voyez ce que votre clinique gagne avec une présence digitale professionnelle"
      />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Sans site web */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-xl overflow-hidden"
        >
          <div className="bg-red-500 text-white text-center py-4 font-bold text-lg">
            ❌ Sans site web
          </div>
          <div className="p-8">
            <ul className="space-y-4">
              {withoutSite.map((item, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <span className="text-red-500 font-bold">✕</span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Avec site web */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-xl overflow-hidden"
        >
          <div className="bg-gradient-to-r from-blue-600 to-green-500 text-white text-center py-4 font-bold text-lg">
            ✅ Avec un site professionnel
          </div>
          <div className="p-8">
            <ul className="space-y-4">
              {withSite.map((item, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <span className="text-green-500 font-bold">✓</span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}