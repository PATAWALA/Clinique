// components/sections/Mockups.tsx
import Section from '../ui/Section';
import SectionTitle from '../ui/SectionTitle';
import MockupCard from '../ui/MockupCard';

export default function Mockups() {
  return (
    <Section className="bg-gradient-to-br from-gray-100 to-blue-50">
      <SectionTitle
        title="À quoi ressemble une clinique moderne en ligne"
        subtitle="Des interfaces professionnelles qui inspirent confiance aux patients"
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <MockupCard
          title="Site Web Responsive"
          description="Design moderne qui s'adapte à tous les écrans"
        >
          <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl p-8 min-h-[300px] flex items-center justify-center">
            <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-sm">
              <div className="h-4 bg-blue-200 rounded w-3/4 mb-4"></div>
              <div className="h-3 bg-gray-200 rounded w-full mb-2"></div>
              <div className="h-3 bg-gray-200 rounded w-5/6 mb-2"></div>
              <div className="h-3 bg-gray-200 rounded w-4/6 mb-4"></div>
              <div className="h-10 bg-blue-500 rounded w-full"></div>
            </div>
          </div>
        </MockupCard>

        <MockupCard
          title="Version Mobile"
          description="Expérience parfaite sur smartphone"
        >
          <div className="bg-gradient-to-br from-green-100 to-green-200 rounded-xl p-8 min-h-[300px] flex items-center justify-center">
            <div className="bg-white rounded-2xl shadow-lg p-4 w-48">
              <div className="h-3 bg-gray-200 rounded w-1/2 mb-3"></div>
              <div className="h-2 bg-gray-200 rounded w-full mb-2"></div>
              <div className="h-2 bg-gray-200 rounded w-5/6 mb-4"></div>
              <div className="h-8 bg-green-500 rounded-full w-full"></div>
            </div>
          </div>
        </MockupCard>

        <MockupCard
          title="Google Maps Intégré"
          description="Visibilité locale optimisée"
        >
          <div className="bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-xl p-8 min-h-[300px] flex items-center justify-center">
            <div className="bg-white rounded-lg shadow-lg p-4 w-full">
              <div className="h-40 bg-gray-100 rounded mb-4 relative overflow-hidden">
                <div className="absolute top-2 left-2 bg-red-500 w-6 h-6 rounded-full"></div>
                <div className="absolute top-2 right-2 bg-white rounded p-2">
                  <div className="h-2 bg-gray-300 rounded w-16 mb-1"></div>
                  <div className="h-2 bg-gray-300 rounded w-12"></div>
                </div>
              </div>
              <div className="h-3 bg-gray-200 rounded w-3/4 mb-2"></div>
              <div className="h-3 bg-gray-200 rounded w-1/2"></div>
            </div>
          </div>
        </MockupCard>

        <MockupCard
          title="WhatsApp Business"
          description="Contact direct et instantané"
        >
          <div className="bg-gradient-to-br from-green-100 to-emerald-200 rounded-xl p-8 min-h-[300px] flex items-center justify-center">
            <div className="bg-white rounded-lg shadow-lg p-4 w-full max-w-xs">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-green-500 rounded-full"></div>
                <div>
                  <div className="h-3 bg-gray-200 rounded w-20 mb-1"></div>
                  <div className="h-2 bg-gray-200 rounded w-16"></div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="h-8 bg-green-100 rounded w-3/4 ml-auto"></div>
                <div className="h-8 bg-gray-100 rounded w-2/3"></div>
              </div>
            </div>
          </div>
        </MockupCard>
      </div>
    </Section>
  );
}