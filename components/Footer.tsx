import React from 'react';
import { Terminal } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
        
        <div className="flex items-center space-x-2 mb-4 md:mb-0">
          <Terminal className="h-6 w-6 text-gray-600" />
          <span className="text-lg font-bold text-gray-500">
            GHL<span className="text-gray-700">withJoe</span>
          </span>
        </div>

        <div className="text-sm text-gray-600 text-center md:text-right">
          <p>© {new Date().getFullYear()} GHLwithJoe. Not affiliated with GoHighLevel™.</p>
          <p className="mt-1">Designed for Agency Owners.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;