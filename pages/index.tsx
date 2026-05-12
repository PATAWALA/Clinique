// pages/index.tsx
import Head from 'next/head';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Hero from '../components/sections/Hero';
import Problems from '../components/sections/Problems';
import Comparison from '../components/sections/Comparison';
import Benefits from '../components/sections/Benefits';
import Mockups from '../components/sections/Mockups';
import Opportunities from '../components/sections/Opportunities';
import Testimonials from '../components/sections/Testimonials';
import FinalCTA from '../components/sections/FinalCTA';
import clinicConfig from '../data/clinic-config';

export default function Home() {
  return (
    <div className="bg-gray-50">
      <Head>
        <title>Audit Digital pour {clinicConfig.name} | Boostez votre visibilité en ligne</title>
        <meta name="description" content={`Découvrez comment ${clinicConfig.name} peut attirer plus de patients grâce à une présence digitale professionnelle`} />
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
        <FinalCTA />
      </main>

      <Footer />
    </div>
  );
}