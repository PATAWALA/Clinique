// components/layout/Footer.tsx
import clinicConfig from '../../data/clinic-config';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-green-500 rounded-lg flex items-center justify-center">
                <span className="font-bold text-xl">C</span>
              </div>
              <span className="font-bold text-xl">{clinicConfig.name}</span>
            </div>
            <p className="text-gray-400">
              Experts en transformation digitale pour cliniques médicales.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Création de sites web</li>
              <li>Référencement Google</li>
              <li>Google Maps optimisation</li>
              <li>WhatsApp Business</li>
              <li>Réservation en ligne</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>📞 {clinicConfig.phone}</li>
              <li>📧 {clinicConfig.email}</li>
              <li>💬 WhatsApp: +{clinicConfig.whatsapp}</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
          <p>&copy; {currentYear} {clinicConfig.name}. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}