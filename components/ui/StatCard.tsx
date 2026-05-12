// components/ui/StatCard.tsx
import { motion } from 'framer-motion';
import { StatCardProps } from '../../types';

export default function StatCard({ number, label, icon }: StatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300"
    >
      <div className="text-4xl mb-4">{icon}</div>
      <div className="text-4xl font-bold text-blue-600 mb-2">{number}</div>
      <div className="text-gray-600 text-lg">{label}</div>
    </motion.div>
  );
}