// components/sections/Opportunities.tsx
import { motion } from 'framer-motion';
import Section from '../ui/Section';
import SectionTitle from '../ui/SectionTitle';
import clinicConfig from '../../data/clinic-config';

export default function Opportunities() {
  return (
    <Section id="opportunities" bgWhite>
      <SectionTitle
        title="Ce que vous perdez chaque mois"
        subtitle="Le coût réel de l'invisibilité digitale pour votre clinique"
      />
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-red-50 to-red-100 rounded-2xl p-8 text-center"
        >
          <div className="text-5xl mb-4">👥</div>
          <div className="text-5xl font-bold text-red-600 mb-4">{clinicConfig.stats.patientsLost}+</div>
          <div className="text-xl font-semibold text-gray-900 mb-2">Patients perdus</div>
          <p className="text-gray-600">
            Chaque mois, ce nombre de patients potentiels choisissent une autre clinique
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-8 text-center"
        >
          <div className="text-5xl mb-4">📞</div>
          <div className="text-5xl font-bold text-orange-600 mb-4">{clinicConfig.stats.callsLost}+</div>
          <div className="text-xl font-semibold text-gray-900 mb-2">Appels manqués</div>
          <p className="text-gray-600">
            Des patients qui auraient pu prendre rendez-vous mais n'ont pas trouvé votre contact
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8 text-center"
        >
          <div className="text-5xl mb-4">💶</div>
          <div className="text-5xl font-bold text-purple-600 mb-4">{clinicConfig.stats.revenueLost} FCFA+</div>
          <div className="text-xl font-semibold text-gray-900 mb-2">Revenus perdus</div>
          <p className="text-gray-600">
            Estimation des revenus perdus chaque mois à cause de l'absence de visibilité en ligne
          </p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-12 p-8 bg-gradient-to-r from-blue-600 to-green-500 rounded-2xl text-white text-center"
      >
        <h3 className="text-2xl md:text-3xl font-bold mb-4">
          En un an, c'est plus de {clinicConfig.stats.annualLoss.toLocaleString()}€ de revenus potentiels qui vous échappent
        </h3>
        <p className="text-xl opacity-90">
          Un site web professionnel coûte moins d'un mois de pertes
        </p>
      </motion.div>
    </Section>
  );
}