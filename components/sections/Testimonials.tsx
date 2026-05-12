// components/sections/Testimonials.tsx
import { motion } from 'framer-motion';
import Section from '../ui/Section';
import SectionTitle from '../ui/SectionTitle';
import clinicConfig from '../../data/clinic-config';

export default function Testimonials() {
  return (
    <Section className="bg-gradient-to-br from-gray-100 to-blue-50">
      <SectionTitle
        title="Ce que disent les cliniques comme la vôtre"
        subtitle="Des résultats concrets après leur transformation digitale"
      />
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {clinicConfig.testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            className="bg-white rounded-2xl p-8 shadow-lg"
          >
            <div className="flex items-center space-x-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-yellow-400">⭐</span>
              ))}
            </div>
            <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
            <div className="border-t pt-4">
              <div className="font-semibold text-gray-900">{testimonial.name}</div>
              <div className="text-gray-600">{testimonial.clinic}</div>
              <div className="text-sm text-blue-600">{testimonial.city}</div>
            </div>
            <div className="mt-4 bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm font-semibold inline-block">
              {testimonial.result}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}