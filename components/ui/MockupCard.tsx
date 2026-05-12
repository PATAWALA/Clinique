// components/ui/MockupCard.tsx
import { motion } from 'framer-motion';
import { MockupCardProps } from '../../types';

export default function MockupCard({ title, description, children }: MockupCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 shadow-xl"
    >
      <div className="mb-4">
        <h3 className="font-semibold text-xl text-gray-900">{title}</h3>
        <p className="text-gray-600 mt-2">{description}</p>
      </div>
      {children}
    </motion.div>
  );
}