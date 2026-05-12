// components/layout/Navbar.tsx
import Button from '../ui/Button';
import clinicConfig from '../../data/clinic-config';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-green-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">C</span>
            </div>
            <span className="font-bold text-xl text-gray-900">{clinicConfig.name}</span>
          </div>
          <Button primary href="#contact">
            <span className="mr-2">💬</span>
            Parler à un expert
          </Button>
        </div>
      </div>
    </nav>
  );
}