// components/ui/BenefitCard.tsx
import { motion } from 'framer-motion';
import { BenefitCardProps } from '../../types';

export default function BenefitCard({ icon, title, description }: BenefitCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
    >
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="font-semibold text-xl text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
}