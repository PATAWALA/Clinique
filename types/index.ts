// types/index.ts - Tous les types pour le projet

export interface ClinicConfig {
  name: string;
  subtitle: string;
  city: string;
  address: string;
  phone: string;
  whatsapp: string;
  email: string;
  primaryColor: string;
  secondaryColor: string;
  hours: string;
  services: string[];
  stats: ClinicStats;
  testimonials: Testimonial[];
  social: SocialLinks;
}

export interface ClinicStats {
  patientsLost: number;
  callsLost: number;
  revenueLost: number;
  annualLoss: number;
}

export interface Testimonial {
  name: string;
  clinic: string;
  city: string;
  text: string;
  result: string;
}

export interface SocialLinks {
  facebook: string;
  instagram: string;
  linkedin: string;
}

export interface ButtonProps {
  children: React.ReactNode;
  primary?: boolean;
  href?: string;
  className?: string;
  target?: string;
  onClick?: () => void;
  type?: 'link' | 'button';
}

export interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  bgWhite?: boolean;
}

export interface SectionTitleProps {
  title: string;
  subtitle?: string;
  center?: boolean;
}

export interface StatCardProps {
  number: string;
  label: string;
  icon: string;
}

export interface ProblemCardProps {
  icon: string;
  title: string;
  description: string;
}

export interface BenefitCardProps {
  icon: string;
  title: string;
  description: string;
}

export interface MockupCardProps {
  title: string;
  description: string;
  children: React.ReactNode;
}