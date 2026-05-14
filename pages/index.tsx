// pages/index.tsx
import { useState } from 'react';
import { motion } from 'framer-motion';
import Head from 'next/head';
import config from '../data/clinic-config';

// ==================== NAVBAR ====================
function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-green-500 rounded-lg flex items-center justify-center shadow-md">
              <span className="text-white font-bold text-xl">C</span>
            </div>
            <span className="font-bold text-lg md:text-xl text-gray-900">{config.name}</span>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#problems" className="text-gray-600 hover:text-blue-600 transition-colors text-sm font-medium">Problèmes</a>
            <a href="#benefits" className="text-gray-600 hover:text-blue-600 transition-colors text-sm font-medium">Avantages</a>
            <a href="#opportunities" className="text-gray-600 hover:text-blue-600 transition-colors text-sm font-medium">Pertes</a>
            <a href="#contact" className="bg-gradient-to-r from-blue-600 to-green-500 text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:shadow-lg transition-all">
              💬 Parler à un expert
            </a>
          </div>

          {/* Mobile burger */}
          <button onClick={() => setOpen(!open)} className="md:hidden p-2 text-gray-700">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden border-t border-gray-100 bg-white py-4 space-y-1">
            <a href="#problems" onClick={() => setOpen(false)} className="block px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg">🔍 Problèmes</a>
            <a href="#benefits" onClick={() => setOpen(false)} className="block px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg">⭐ Avantages</a>
            <a href="#opportunities" onClick={() => setOpen(false)} className="block px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg">💰 Pertes</a>
            <div className="px-4 pt-2">
              <a href="#contact" onClick={() => setOpen(false)} className="block text-center bg-gradient-to-r from-blue-600 to-green-500 text-white py-3 rounded-full font-semibold">
                💬 Parler à un expert
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

// ==================== HERO ====================
function Hero() {
  return (
        <section className="relative w-full pt-20 md:pt-24 pb-16 md:pb-20 bg-gradient-to-br from-blue-50 via-white to-green-50">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="w-full max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-block bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm font-semibold mb-6"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            ⚠️ Alerte : Votre clinique est invisible en ligne. 
          </motion.div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Votre clinique perd probablement des{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-500">patients</span>
            {" "}à cause de son absence en ligne
          </h1>
          
          <p className="text-lg md:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
            Chaque jour, des dizaines de patients cherchent une clinique comme la vôtre sur Google. 
            Sans site web professionnel, vous leur rendez service... à vos concurrents.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={`https://wa.me/${config.whatsapp}`} target="_blank" className="inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-green-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:scale-105 transition-transform shadow-lg">
              <span className="mr-2 text-xl">💬</span> Parler à un expert
            </a>
            <a href="#problems" className="inline-flex items-center justify-center bg-white text-blue-600 border-2 border-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-50 transition-all">
              Voir les opportunités perdues
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            {[
              { number: "77%", label: "des patients cherchent en ligne avant de consulter", icon: "🔍" },
              { number: "5x", label: "plus de patients pour une clinique avec site web", icon: "📈" },
              { number: "85%", label: "font plus confiance à une clinique avec présence digitale", icon: "⭐" }
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 + i * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-shadow"
              >
                <div className="text-4xl mb-4">{stat.icon}</div>
                <div className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-gray-600 text-lg">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ==================== PROBLEMS ====================
function Problems() {
  const problems = [
    { icon: "🔍", title: "Invisible sur Google", desc: "Les patients ne vous trouvent pas quand ils cherchent une clinique dans votre zone. Ils cliquent sur vos concurrents." },
    { icon: "😟", title: "Manque de crédibilité", desc: "Sans site web, les patients doutent de votre professionnalisme et de la qualité de vos services." },
    { icon: "📉", title: "Perte de patients", desc: "Chaque mois, vous perdez des dizaines de patients potentiels qui choisissent des cliniques visibles en ligne." },
    { icon: "🏃", title: "Concurrence qui gagne", desc: "Vos concurrents avec des sites modernes captent les patients que vous méritez." },
    { icon: "📞", title: "Contact difficile", desc: "Les patients peinent à vous joindre, prendre rendez-vous ou trouver vos informations pratiques." },
    { icon: "📱", title: "Image dépassée", desc: "Dans un monde digital, une clinique sans site web paraît déconnectée et peu moderne." }
  ];

  return (
    <section id="problems" className="relative w-full py-16 sm:py-24 bg-white">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="w-full text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">Les conséquences d'une absence digitale</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Ce qui arrive quand votre clinique n'est pas visible en ligne</p>
        </motion.div>

        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {problems.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-start space-x-4 p-6 bg-red-50 rounded-xl hover:shadow-lg transition-shadow"
            >
              <span className="text-3xl flex-shrink-0">{p.icon}</span>
              <div>
                <h3 className="font-semibold text-lg text-gray-900 mb-2">{p.title}</h3>
                <p className="text-gray-600">{p.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ==================== COMPARISON ====================
function Comparison() {
  return (
    <section className="relative w-full py-16 sm:py-24 bg-gradient-to-br from-gray-100 to-blue-50">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="w-full text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-gray-900 mb-4">La différence est frappante</h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">Voyez ce que votre clinique gagne avec une présence digitale professionnelle</p>
        </motion.div>

        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Colonne SANS - CORRIGÉE */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            className="w-full bg-white rounded-2xl shadow-xl overflow-hidden h-full"
          >
            <div className="bg-red-500 text-white text-center py-4 font-bold text-lg">❌ Sans site web</div>
            <div className="p-6 sm:p-8 space-y-3 sm:space-y-4">
              {["Patients qui ne vous trouvent pas en ligne", "Aucune crédibilité numérique", "Pas de prise de rendez-vous en ligne", "Aucune présence sur Google Maps", "Image dépassée et peu professionnelle", "Perte de patients au profit des concurrents", "Communication limitée avec les patients"].map((item, i) => (
                <div key={i} className="flex items-start space-x-3">
                  <span className="text-red-500 font-bold flex-shrink-0">✕</span>
                  <span className="text-sm sm:text-base text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Colonne AVEC - CORRIGÉE */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            className="w-full bg-white rounded-2xl shadow-xl overflow-hidden h-full"
          >
            <div className="bg-gradient-to-r from-blue-600 to-green-500 text-white text-center py-4 font-bold text-lg">✅ Avec un site professionnel</div>
            <div className="p-6 sm:p-8 space-y-3 sm:space-y-4">
              {["Visible sur Google 24h/24 et 7j/7", "Crédibilité instantanée et professionnalisme", "Réservation en ligne simple et rapide", "Présence optimisée sur Google Maps", "Image moderne et rassurante", "Plus de patients que vos concurrents", "Communication WhatsApp intégrée"].map((item, i) => (
                <div key={i} className="flex items-start space-x-3">
                  <span className="text-green-500 font-bold flex-shrink-0">✓</span>
                  <span className="text-sm sm:text-base text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
// ==================== BENEFITS ====================
function Benefits() {
  const benefits = [
    { icon: "👁️", title: "Visibilité Maximale", desc: "Apparaissez en première page Google quand les patients cherchent une clinique dans votre ville." },
    { icon: "📅", title: "Plus de Rendez-vous", desc: "Système de réservation en ligne qui convertit les visiteurs en patients 24h/24." },
    { icon: "⭐", title: "Crédibilité Renforcée", desc: "Avis patients, certifications et présentation professionnelle qui inspirent confiance." },
    { icon: "📱", title: "100% Mobile", desc: "Site optimisé pour smartphones, car 70% des patients cherchent sur leur téléphone." },
    { icon: "🗺️", title: "Google Maps", desc: "Apparaissez sur Google Maps avec vos horaires, avis et possibilité de vous contacter directement." },
    { icon: "💬", title: "WhatsApp Intégré", desc: "Les patients peuvent vous contacter instantanément via WhatsApp pour prendre rendez-vous." },
    { icon: "🎯", title: "Avantage Concurrentiel", desc: "Distinguez-vous des cliniques qui n'ont pas encore compris l'importance du digital." },
    { icon: "📊", title: "Résultats Mesurables", desc: "Suivez le nombre de visiteurs, d'appels et de rendez-vous générés par votre site." }
  ];

  return (
    <section id="benefits" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">Ce que vous allez gagner</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Les bénéfices concrets d'une présence digitale professionnelle</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((b, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border border-gray-100"
            >
              <span className="text-4xl mb-4 block">{b.icon}</span>
              <h3 className="font-semibold text-xl text-gray-900 mb-3">{b.title}</h3>
              <p className="text-gray-600">{b.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
// ==================== OPPORTUNITIES ====================
function Opportunities() {
  return (
    <section id="opportunities" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">Ce que vous perdez chaque mois</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Le coût réel de l'invisibilité digitale pour votre clinique</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-red-50 to-red-100 rounded-2xl p-8 text-center"
          >
            <span className="text-5xl mb-4 block">👥</span>
            <div className="text-5xl font-bold text-red-600 mb-4">{config.stats.patientsLost}+</div>
            <div className="text-xl font-semibold text-gray-900 mb-2">Patients perdus</div>
            <p className="text-gray-600">Chaque mois, ce nombre de patients potentiels choisissent une autre clinique</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-8 text-center"
          >
            <span className="text-5xl mb-4 block">📞</span>
            <div className="text-5xl font-bold text-orange-600 mb-4">{config.stats.callsLost}+</div>
            <div className="text-xl font-semibold text-gray-900 mb-2">Appels manqués</div>
            <p className="text-gray-600">Des patients qui auraient pu prendre rendez-vous mais n'ont pas trouvé votre contact</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8 text-center"
          >
            <span className="text-5xl mb-4 block">💶</span>
            <div className="text-5xl font-bold text-purple-600 mb-4">{config.stats.revenueLost} FCFA+</div>
            <div className="text-xl font-semibold text-gray-900 mb-2">Revenus perdus</div>
            <p className="text-gray-600">Estimation des revenus perdus chaque mois à cause de l'absence de visibilité en ligne</p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 p-8 bg-gradient-to-r from-blue-600 to-green-500 rounded-2xl text-white text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            En un an, c'est plus de {config.stats.annualLoss.toLocaleString()} FCFA de revenus potentiels qui vous échappent
          </h3>
          <p className="text-xl opacity-90">Un site web professionnel coûte moins d'un mois de pertes</p>
        </motion.div>
      </div>
    </section>
  );
}

// ==================== TESTIMONIALS ====================
function Testimonials() {
  const testimonials = [
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
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-gray-100 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">Ce que disent les cliniques comme la vôtre</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Des résultats concrets après leur transformation digitale</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <div className="flex space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-lg">⭐</span>
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">"{t.text}"</p>
              <div className="border-t pt-4">
                <div className="font-semibold text-gray-900">{t.name}</div>
                <div className="text-gray-600">{t.clinic}</div>
                <div className="text-sm text-blue-600">{t.city}</div>
              </div>
              <div className="mt-4 bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm font-semibold inline-block">
                {t.result}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ==================== EXEMPLES DE CLINIQUES EN LIGNE ====================
function OnlineClinicsExamples() {
  const clinics = [
    {
      name: "Centre Médical LA RETINE",
      url: "https://cmlaretine.com",
      description: "Plateforme digitale complète pour attirer et rassurer les nouveaux patients",
      features: ["WhatsApp intégré", "Témoignages vidéo", "Visite virtuelle", "FAQ patients"],
      icon: "👁️",
      color: "from-green-400 to-teal-400"
    },
    {
      name: "Clinique Sainte Famille",
      url: "https://www.cliniquesaintefamille.com/",
      description: "Site complet avec toutes les informations que les patients recherchent",
      features: ["Services détaillés", "Équipe médicale", "Urgences 24/7", "Blog santé"],
      icon: "🩺",
      color: "from-red-400 to-orange-500"
    },
    {
      name: "Clinique Sainte-Hèlène",
      url: "https://www.cliniquesaintehelene.com",
      description: "Design professionnel qui inspire confiance aux patients dès la première visite",
      features: ["Design moderne", "Prise de RDV en ligne", "Avis patients", "Plan d'accès Google Maps"],
      icon: "🏨",
      color: "from-purple-500 to-blue-500"
    },
    {
      name: "Polyclinelle Wossinu Gbogbo",
      url: "https://polyclinelle-wossinu-gbogbo.com",
      description: "Site moderne avec présentation des médecins, horaires et galerie photos",
      features: ["Présentation des spécialistes", "Horaires visibles", "Galerie photos", "Contact facile"],
      icon: "🏥",
      color: "from-blue-500 to-green-500"
    }
  ];

  const stats = [
    { value: "7/10", label: "patients cherchent leur clinique sur internet avant de se déplacer", icon: "🔍" },
    { value: "68%", label: "des cliniques ont déjà un site web professionnel", icon: "🏥" },
    { value: "1ère page", label: "Google : là où vos concurrents apparaissent déjà", icon: "📊" },
    { value: "24h/24", label: "votre clinique peut être trouvée même la nuit", icon: "🕐" }
  ];

  return (
    <section className="relative w-full py-16 sm:py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* En-tête */}
        <motion.div 
          className="w-full text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div
            className="inline-block bg-blue-100 text-blue-700 px-6 py-3 rounded-full text-lg font-semibold mb-6 border-2 border-blue-200"
            animate={{ scale: [1, 1.03, 1] }}
            transition={{ repeat: Infinity, duration: 3 }}
          >
            👀 Regardez ce que font les autres cliniques...
          </motion.div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Elles ont déjà leur site web...<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-500">
              Pourquoi pas la vôtre ?
            </span>
          </h2>
          
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            De plus en plus de cliniques comprennent l'importance d'être visibles en ligne.
            <span className="font-semibold text-blue-600"> Et si c'était votre tour ?</span>
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          {stats.map((stat, i) => (
            <div key={i} className="bg-white rounded-2xl p-4 sm:p-6 shadow-lg text-center border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="text-3xl sm:text-4xl mb-3">{stat.icon}</div>
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600 mb-2">{stat.value}</div>
              <p className="text-xs sm:text-sm text-gray-600">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        {/* ===== TEXTE D'INTRODUCTION AVANT LES EXEMPLES ===== */}
        <motion.div
          className="w-full max-w-4xl mx-auto text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-100">
            <div className="text-4xl mb-4">🏥</div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
              Voici des exemples concrets de cliniques qui ont déjà leur site web professionnel
            </h3>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
              Ces cliniques existent vraiment. Elles ont compris qu'un site web n'est pas un luxe, 
              mais un outil indispensable pour attirer des patients et inspirer confiance. 
              <span className="font-semibold text-blue-600"> Cliquez sur chaque exemple pour visiter leur site.</span>
            </p>
            <div className="flex items-center justify-center space-x-2 mt-4 text-sm text-gray-500">
              <span>👆</span>
              <span>Ce sont de vrais sites de cliniques, visibles et accessibles à tous</span>
            </div>
          </div>
        </motion.div>

        {/* Grille des cliniques exemples */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12">
          {clinics.map((clinic, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.15 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 group"
            >
              {/* Barre du navigateur simulée */}
              <div className="bg-gray-100 px-4 py-2.5 flex items-center space-x-2 border-b border-gray-200">
                <div className="flex space-x-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                </div>
                <div className="flex-1 mx-3">
                  <div className="bg-white rounded-full px-3 py-1 text-xs text-gray-500 flex items-center space-x-1.5">
                    <span>🔒</span>
                    <span className="truncate">{clinic.url.replace('https://', '').replace('www.', '')}</span>
                  </div>
                </div>
                <div className="flex space-x-1">
                  <div className="w-4 h-4 rounded-full bg-gray-300"></div>
                  <div className="w-4 h-4 rounded-full bg-gray-300"></div>
                </div>
              </div>

              {/* Contenu de la carte */}
              <div className="p-6 sm:p-8">
                {/* En-tête de la clinique */}
                <div className="flex items-start space-x-4 mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${clinic.color} rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0 text-3xl`}>
                    {clinic.icon}
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-bold text-xl sm:text-2xl text-gray-900 mb-1">{clinic.name}</h3>
                    <p className="text-gray-500 text-sm mb-2">{clinic.description}</p>
                    <a 
                      href={clinic.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold text-sm group/link"
                    >
                      <span>🔗 Visiter le site</span>
                      <svg className="w-4 h-4 ml-1 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </a>
                  </div>
                </div>

                {/* Fonctionnalités */}
                <div className="space-y-2">
                  <div className="text-sm font-semibold text-gray-700 mb-3">✅ Ce que leur site propose :</div>
                  <div className="grid grid-cols-2 gap-2">
                    {clinic.features.map((feature, j) => (
                      <div key={j} className="flex items-center space-x-2 bg-green-50 rounded-lg px-3 py-2">
                        <span className="text-green-500 text-xs flex-shrink-0">✓</span>
                        <span className="text-xs text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Barre de résultat */}
              <div className="bg-gradient-to-r from-blue-600 to-green-500 px-6 py-3 flex items-center justify-between">
                <div className="flex items-center space-x-2 text-white text-sm">
                  <span className="w-2 h-2 bg-green-300 rounded-full animate-pulse"></span>
                  <span className="font-semibold">En ligne et visible</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-white/90 text-xs">📱</span>
                  <span className="text-white/90 text-xs">🔍</span>
                  <span className="text-white/90 text-xs">24/7</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Message de transition */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-blue-600 to-green-500 rounded-3xl p-8 sm:p-12 text-white max-w-4xl mx-auto shadow-2xl">
            <div className="text-5xl mb-4">💡</div>
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">
              Ces cliniques l'ont compris
            </h3>
            <p className="text-xl sm:text-2xl font-bold mb-8 text-blue-100">
              Un site web professionnel, c'est maintenant la norme
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              <div className="bg-white/15 backdrop-blur-sm rounded-xl p-5">
                <div className="text-3xl mb-2">🔍</div>
                <div className="font-bold text-lg mb-1">Trouvables facilement</div>
                <div className="text-sm opacity-90">Les patients les cherchent et les trouvent sur Google</div>
              </div>
              <div className="bg-white/15 backdrop-blur-sm rounded-xl p-5">
                <div className="text-3xl mb-2">📱</div>
                <div className="font-bold text-lg mb-1">Accessibles partout</div>
                <div className="text-sm opacity-90">Sur téléphone, tablette et ordinateur, jour et nuit</div>
              </div>
              <div className="bg-white/15 backdrop-blur-sm rounded-xl p-5">
                <div className="text-3xl mb-2">⭐</div>
                <div className="font-bold text-lg mb-1">Crédibles et modernes</div>
                <div className="text-sm opacity-90">Les patients font plus confiance, ils appellent plus</div>
              </div>
            </div>

            <p className="text-lg mb-8 text-white/90">
              La seule différence entre ces cliniques et la vôtre ? 
              <br className="hidden sm:block" />
              <span className="font-bold text-white">Elles ont fait le choix d'être visibles en ligne.</span>
            </p>

            <a
              href={`https://wa.me/${config.whatsapp}`}
              target="_blank"
              className="inline-flex items-center bg-yellow-400 hover:bg-yellow-300 text-blue-900 font-bold px-8 sm:px-12 py-4 sm:py-5 rounded-full text-lg sm:text-xl transition-all shadow-xl hover:scale-105"
            >
              <span className="mr-3 text-2xl">💬</span> Je veux un site comme le leur - Parlons-en sur WhatsApp
            </a>
            
            <p className="mt-4 text-white/70 text-sm">
              👋 Un expert vous explique tout gratuitement, sans engagement
            </p>
          </div>
        </motion.div>

        {/* Note subtile en bas */}
        <motion.p 
          className="text-center text-gray-400 text-sm mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Ces cliniques ont déjà franchi le pas. Et si vous preniez 5 minutes pour voir comment faire de même ?
        </motion.p>
      </div>
    </section>
  );
}

// ==================== FINAL CTA ====================
function FinalCTA() {
  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-blue-600 via-blue-700 to-green-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-white max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-full text-lg font-semibold mb-8 border border-white/30"
          >
            🎯 Ne laissez pas vos concurrents prendre vos patients
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Parlez directement avec un expert<br />
            <span className="text-yellow-300">qui comprend votre métier</span>
          </h2>
          
          <p className="text-xl md:text-2xl mb-4 text-white/95 font-medium">
            Obtenez des explications claires sur la création de votre site web professionnel
          </p>
          
          <p className="text-lg md:text-xl mb-10 text-white/85 max-w-3xl mx-auto leading-relaxed">
            Un expert digital spécialisé dans les cliniques vous expliquera tout : comment attirer plus de patients, 
            combien ça coûte, combien de temps ça prend, et surtout comment ça va transformer votre activité.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12 max-w-3xl mx-auto">
            {[
              { icon: "💡", title: "Conseils personnalisés", desc: "Pour votre spécialité et votre ville" },
              { icon: "⏱️", title: "Réponse en 5 minutes", desc: "Un expert disponible maintenant" },
              { icon: "🔒", title: "Sans engagement", desc: "Juste une discussion ouverte" }
            ].map((item, i) => (
              <div key={i} className="bg-white/15 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <span className="text-3xl mb-3 block">{item.icon}</span>
                <h3 className="text-white font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-white/80 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
          
          <a
            href={`https://wa.me/${config.whatsapp}`}
            target="_blank"
            className="inline-flex items-center bg-yellow-400 hover:bg-yellow-300 text-blue-900 font-bold px-12 py-5 rounded-full text-xl transition-all shadow-2xl hover:scale-105"
          >
            <span className="mr-3 text-2xl">💬</span> Parler à un expert sur WhatsApp
          </a>
          
          <p className="mt-6 text-white/75 text-sm">👆 C'est gratuit et vous aurez des réponses concrètes immédiatement</p>
        </motion.div>
      </div>
    </section>
  );
}

// ==================== FOOTER ====================
function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-green-500 rounded-xl flex items-center justify-center shadow-lg">
                <span className="font-bold text-2xl">C</span>
              </div>
              <div>
                <span className="font-bold text-xl text-white">Votre Clinique en ligne</span>
                <p className="text-gray-400 text-sm">Par {config.name}</p>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Nous aidons les cliniques médicales à développer leur présence digitale pour attirer plus de patients et renforcer leur crédibilité en ligne.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-6 text-white">🚀 Nos Services</h4>
            <ul className="space-y-3 text-gray-400">
              <li>🌐 Création de sites web médicaux</li>
              <li>🔍 Référencement sur Google</li>
              <li>🗺️ Optimisation Google Maps</li>
              <li>💬 WhatsApp Business intégré</li>
              <li>📅 Système de réservation en ligne</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-6 text-white">📞 Contactez-nous</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-center space-x-3">
                <span>📞</span>
                <span>{config.phone}</span>
              </li>
              <li className="flex items-center space-x-3">
                <span>📧</span>
                <span>{config.email}</span>
              </li>
              <li className="flex items-center space-x-3">
                <span>💬</span>
                <span>WhatsApp: +{config.whatsapp}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} Votre Clinique en ligne. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}

// ==================== PAGE PRINCIPALE ====================
export default function Home() {
  return (
    <div className="bg-gray-50">
      <Head>
        <title>Votre Clinique en ligne | Site web professionnel pour cliniques médicales</title>
        <meta name="description" content="Votre Clinique en ligne crée des sites web professionnels pour les cliniques. Attirez plus de patients, gagnez en crédibilité et développez votre activité médicale." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      
      <main>
        <Hero />
        <Problems />
        <Comparison />
        <Benefits />
        <Opportunities />
        <Testimonials />
        <OnlineClinicsExamples />
        <FinalCTA />
      </main>

      <Footer />
    </div>
  );
}