// data/clinic-config.ts
import { ClinicConfig } from '../types';

const clinicConfig: ClinicConfig = {
  // REMPLACEZ CES INFORMATIONS POUR CHAQUE CLINIQUE
  
  // Nom et infos de base
  name: "Clinique Santé Plus",
  subtitle: "Centre Médical Pluridisciplinaire",
  city: "Paris",
  address: "123 Avenue des Champs-Élysées, 75008 Paris",
  
  // Contact
  phone: "+33 1 23 45 67 89",
  whatsapp: "33612345678", // Format international sans le +
  email: "contact@cliniquesanteplus.fr",
  
  // Couleurs du site
  primaryColor: "blue",
  secondaryColor: "green",
  
  // Heures d'ouverture
  hours: "Lun-Ven: 8h-20h | Sam: 9h-13h",
  
  // Services de la clinique
  services: [
    "Médecine Générale",
    "Cardiologie",
    "Dermatologie",
    "Pédiatrie",
    "Kinésithérapie"
  ],
  
  // Statistiques personnalisées
  stats: {
    patientsLost: 50,
    callsLost: 30,
    revenueLost: 5000,
    annualLoss: 60000,
  },
  
  // Témoignages (mettez vos vrais témoignages ici)
  testimonials: [
    {
      name: "Dr. Sophie Martin",
      clinic: "Clinique Santé Plus",
      city: "Paris",
      text: "Depuis que nous avons un site professionnel, nous recevons 3 fois plus d'appels de nouveaux patients. Notre visibilité sur Google a tout changé.",
      result: "+200% de nouveaux patients"
    },
    {
      name: "Dr. Pierre Dubois",
      clinic: "Centre Médical Moderne",
      city: "Lyon",
      text: "La réservation en ligne nous fait gagner un temps incroyable. Les patients adorent pouvoir prendre rendez-vous directement sur leur téléphone.",
      result: "90% de rendez-vous en ligne"
    },
    {
      name: "Dr. Marie Laurent",
      clinic: "Clinique Familiale",
      city: "Marseille",
      text: "Notre crédibilité a complètement changé. Les patients nous disent qu'ils nous ont choisis grâce à notre site moderne et nos avis en ligne.",
      result: "Note Google de 4.8/5"
    }
  ],
  
  // Réseaux sociaux
  social: {
    facebook: "https://facebook.com/",
    instagram: "https://instagram.com/",
    linkedin: "https://linkedin.com/"
  }
};

export default clinicConfig;
export type { ClinicConfig };