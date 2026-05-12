// data/clinic-config.ts
import { ClinicConfig } from '../types';

const clinicConfig: ClinicConfig = {
  // CHANGEZ CES INFORMATIONS POUR CHAQUE CLINIQUE
  
  name: "Votre Clinique en ligne",  // ✅ Changé ici
  subtitle: "Votre partenaire digital médical",
  city: "Cotonou",
  
  phone: "+229 62 29 80 90",
  whatsapp: "22962298090",
  email: "patawalaabdoulaye2003@gmail.com",  // ✅ Changé ici
  
  primaryColor: "blue",
  secondaryColor: "green",
  
  hours: "Lun-Ven: 9h-19h | Sam: 10h-16h",
  
  services: [
    "Médecine Générale",
    "Cardiologie",
    "Dermatologie",
    "Pédiatrie",
    "Kinésithérapie"
  ],
  
  stats: {
    patientsLost: 50,
    callsLost: 30,
    revenueLost: 1080000,
    annualLoss: 350000,
  },
  
  testimonials: [
    {
      name: "Dr. Sophie Martin",
      clinic: "Clinique Saint-Louis",
      city: "Paris",
      text: "Grâce à Votre Clinique en ligne, nous avons multiplié par 3 nos nouveaux patients en seulement 2 mois. Le site est magnifique et professionnel.",
      result: "+200% de nouveaux patients"
    },
    {
      name: "Dr. Pierre Dubois",
      clinic: "Centre Médical Moderne",
      city: "Lyon",
      text: "L'équipe de Votre Clinique en ligne a parfaitement compris nos besoins. La réservation en ligne nous fait gagner un temps précieux chaque jour.",
      result: "90% de rendez-vous en ligne"
    },
    {
      name: "Dr. Marie Laurent",
      clinic: "Clinique Familiale",
      city: "Marseille",
      text: "Notre crédibilité a complètement changé. Les patients nous font confiance dès le premier regard grâce à notre site professionnel.",
      result: "Note Google de 4.8/5"
    }
  ],
  
  social: {
    facebook: "https://web.facebook.com/Patawala",
    instagram: "https://www.instagram.com/patawalaabdoulaye1900/",
    linkedin: "https://www.linkedin.com/in/abdoulaye-patawala-84b138381"
  }
};

export default clinicConfig;
export type { ClinicConfig };