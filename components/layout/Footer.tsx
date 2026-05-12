// components/layout/Footer.tsx
import clinicConfig from '../../data/clinic-config';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Colonne 1 - À propos */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-green-500 rounded-xl flex items-center justify-center shadow-lg">
                <span className="font-bold text-2xl">C</span>
              </div>
              <div>
                <span className="font-bold text-xl text-white">Votre Clinique en ligne</span>
                <p className="text-gray-400 text-sm">Par {clinicConfig.name}</p>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed mb-4">
              Nous aidons les cliniques médicales à développer leur présence digitale 
              pour attirer plus de patients et renforcer leur crédibilité en ligne.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href={clinicConfig.social.facebook} className="text-gray-400 hover:text-blue-400 transition-colors">
                <span className="text-2xl">📘</span>
              </a>
              <a href={clinicConfig.social.instagram} className="text-gray-400 hover:text-pink-400 transition-colors">
                <span className="text-2xl">📷</span>
              </a>
              <a href={clinicConfig.social.linkedin} className="text-gray-400 hover:text-blue-600 transition-colors">
                <span className="text-2xl">💼</span>
              </a>
            </div>
          </div>

          {/* Colonne 2 - Services */}
          <div>
            <h4 className="font-semibold text-lg mb-6 text-white">🚀 Nos Services</h4>
            <ul className="space-y-3">
              {[
                { icon: "🌐", text: "Création de sites web médicaux" },
                { icon: "🔍", text: "Référencement sur Google" },
                { icon: "🗺️", text: "Optimisation Google Maps" },
                { icon: "💬", text: "WhatsApp Business intégré" },
                { icon: "📅", text: "Système de réservation en ligne" },
                { icon: "📊", text: "Suivi et analytics patients" }
              ].map((service, index) => (
                <li key={index} className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors">
                  <span>{service.icon}</span>
                  <span>{service.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Colonne 3 - Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-6 text-white">📞 Contactez-nous</h4>
            <ul className="space-y-4">
              <li>
                <a href={`tel:${clinicConfig.phone}`} className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors group">
                  <span className="text-2xl group-hover:scale-110 transition-transform">📞</span>
                  <div>
                    <p className="text-sm text-gray-500">Téléphone</p>
                    <p className="font-medium">{clinicConfig.phone}</p>
                  </div>
                </a>
              </li>
              <li>
                <a href={`mailto:${clinicConfig.email}`} className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors group">
                  <span className="text-2xl group-hover:scale-110 transition-transform">📧</span>
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <p className="font-medium">{clinicConfig.email}</p>
                  </div>
                </a>
              </li>
              <li>
                <a href={`https://wa.me/${clinicConfig.whatsapp}`} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 text-gray-400 hover:text-green-400 transition-colors group">
                  <span className="text-2xl group-hover:scale-110 transition-transform">💬</span>
                  <div>
                    <p className="text-sm text-gray-500">WhatsApp</p>
                    <p className="font-medium">+{clinicConfig.whatsapp}</p>
                  </div>
                </a>
              </li>
              <li className="flex items-start space-x-3 text-gray-400 pt-4 border-t border-gray-800">
                <span className="text-2xl">📍</span>
                <div>
                  <p className="text-sm text-gray-500">Adresse</p>
                  <p className="font-medium">{clinicConfig.address}</p>
                  <p className="text-sm text-gray-500 mt-1">{clinicConfig.hours}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Barre inférieure */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              &copy; {currentYear} Votre Clinique en ligne. Tous droits réservés.
            </p>
            <div className="flex gap-6 text-sm text-gray-500">
              <a href="#" className="hover:text-white transition-colors">Mentions légales</a>
              <a href="#" className="hover:text-white transition-colors">Politique de confidentialité</a>
              <a href="#" className="hover:text-white transition-colors">CGV</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}