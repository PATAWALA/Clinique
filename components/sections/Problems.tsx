// components/sections/Problems.tsx
import Section from '../ui/Section';
import SectionTitle from '../ui/SectionTitle';
import ProblemCard from '../ui/ProblemCard';
import { ProblemCardProps } from '../../types';

export default function Problems() {
  const problems: ProblemCardProps[] = [
    {
      icon: "🔍",
      title: "Invisible sur Google",
      description: "Les patients ne vous trouvent pas quand ils cherchent une clinique dans votre zone. Ils cliquent sur vos concurrents."
    },
    {
      icon: "😟",
      title: "Manque de crédibilité",
      description: "Sans site web, les patients doutent de votre professionnalisme et de la qualité de vos services."
    },
    {
      icon: "📉",
      title: "Perte de patients",
      description: "Chaque mois, vous perdez des dizaines de patients potentiels qui choisissent des cliniques visibles en ligne."
    },
    {
      icon: "🏃",
      title: "Concurrence qui gagne",
      description: "Vos concurrents avec des sites modernes captent les patients que vous méritez."
    },
    {
      icon: "📞",
      title: "Contact difficile",
      description: "Les patients peinent à vous joindre, prendre rendez-vous ou trouver vos informations pratiques."
    },
    {
      icon: "📱",
      title: "Image dépassée",
      description: "Dans un monde digital, une clinique sans site web paraît déconnectée et peu moderne."
    }
  ];

  return (
    <Section id="problems" bgWhite>
      <SectionTitle
        title="Les conséquences d'une absence digitale"
        subtitle="Ce qui arrive quand votre clinique n'est pas visible en ligne"
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {problems.map((problem, index) => (
          <ProblemCard key={index} {...problem} />
        ))}
      </div>
    </Section>
  );
}