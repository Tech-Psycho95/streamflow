import React from 'react';
import { Play, Plus, Info } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://image.tmdb.org/t/p/w500/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg)'
        }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-red-600 text-white mb-4">
            StreamFlow Original
          </div>
          
          {/* Title */}
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
            Dune: Part Two
          </h1>
          
          {/* Description */}
          <p className="text-xl text-gray-200 mb-8 leading-relaxed">
            Paul Atreides unites with Chani and the Fremen while seeking revenge against the conspirators who destroyed his family. Facing a choice between the love of his life and the fate of the universe, he must prevent a terrible future only he can foresee.
          </p>
          
          {/* Meta Info */}
          <div className="flex items-center space-x-4 text-sm text-gray-300 mb-8">
            <span className="bg-yellow-500 text-black px-2 py-1 rounded font-bold">IMDb 8.8</span>
            <span>2024</span>
            <span>2h 46m</span>
            <span className="border border-gray-500 px-2 py-1 rounded">4K</span>
            <span className="border border-gray-500 px-2 py-1 rounded">HDR</span>
          </div>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
            <button className="flex items-center justify-center space-x-2 bg-white text-black px-8 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-all duration-200 transform hover:scale-105">
              <Play className="h-5 w-5 fill-current" />
              <span>Play Now</span>
            </button>
            
            <button className="flex items-center justify-center space-x-2 bg-gray-700/80 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-600 transition-all duration-200 backdrop-blur-sm">
              <Plus className="h-5 w-5" />
              <span>My List</span>
            </button>
            
            <button className="flex items-center justify-center space-x-2 bg-transparent border border-gray-500 text-white px-8 py-3 rounded-lg font-semibold hover:border-white transition-all duration-200">
              <Info className="h-5 w-5" />
              <span>More Info</span>
            </button>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-1 h-8 bg-gradient-to-b from-white to-transparent rounded-full" />
      </div>
    </div>
  );
};

export default Hero;