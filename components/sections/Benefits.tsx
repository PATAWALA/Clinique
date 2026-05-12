// components/sections/Benefits.tsx
import Section from '../ui/Section';
import SectionTitle from '../ui/SectionTitle';
import BenefitCard from '../ui/BenefitCard';
import { BenefitCardProps } from '../../types';

export default function Benefits() {
  const benefits: BenefitCardProps[] = [
    {
      icon: "👁️",
      title: "Visibilité Maximale",
      description: "Apparaissez en première page Google quand les patients cherchent une clinique dans votre ville."
    },
    {
      icon: "📅",
      title: "Plus de Rendez-vous",
      description: "Système de réservation en ligne qui convertit les visiteurs en patients 24h/24."
    },
    {
      icon: "⭐",
      title: "Crédibilité Renforcée",
      description: "Avis patients, certifications et présentation professionnelle qui inspirent confiance."
    },
    {
      icon: "📱",
      title: "100% Mobile",
      description: "Site optimisé pour smartphones, car 70% des patients cherchent sur leur téléphone."
    },
    {
      icon: "🗺️",
      title: "Google Maps",
      description: "Apparaissez sur Google Maps avec vos horaires, avis et possibilité de vous contacter directement."
    },
    {
      icon: "💬",
      title: "WhatsApp Intégré",
      description: "Les patients peuvent vous contacter instantanément via WhatsApp pour prendre rendez-vous."
    },
    {
      icon: "🎯",
      title: "Avantage Concurrentiel",
      description: "Distinguez-vous des cliniques qui n'ont pas encore compris l'importance du digital."
    },
    {
      icon: "📊",
      title: "Résultats Mesurables",
      description: "Suivez le nombre de visiteurs, d'appels et de rendez-vous générés par votre site."
    }
  ];

  return (
    <Section id="benefits" bgWhite>
      <SectionTitle
        title="Ce que vous allez gagner"
        subtitle="Les bénéfices concrets d'une présence digitale professionnelle"
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {benefits.map((benefit, index) => (
          <BenefitCard key={index} {...benefit} />
        ))}
      </div>
    </Section>
  );
}