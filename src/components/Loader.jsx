import React from 'react';
import { Scissors, Sparkles } from 'lucide-react';

const Loader = () => {
  return (
    <div className="fixed inset-0 bg-white z-50 flex flex-col items-center justify-center font-[Poppins]">
      <div className="relative flex flex-col items-center">

        {/* Loader Icon */}
        <div className="w-24 h-24 bg-teal-500 rounded-full flex items-center justify-center animate-pulse">
          <Scissors className="w-12 h-12 text-white animate-spin" />
        </div>

        {/* Brand Text */}
        <div className="mt-6 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-2 font-[Playfair Display]">
            Kigali <span className="text-teal-500">Clipper</span> Zone
          </h2>
          <p className="text-gray-600">
            Loading premium experience...
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mt-8 w-64 h-2 bg-gray-200 rounded-full overflow-hidden">
          <div className="h-full bg-teal-500text-teal-500 animate-shimmer"></div>
        </div>

      </div>
    </div>
  );
};

export default Loader;
