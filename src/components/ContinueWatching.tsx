import React from 'react';
import { Play, Clock } from 'lucide-react';

interface WatchingItem {
  id: number;
  title: string;
  image: string;
  progress: number;
  timeLeft: string;
  episode?: string;
}

const continueWatchingData: WatchingItem[] = [
  {
    id: 1,
    title: "Stranger Things",
    image: "https://image.tmdb.org/t/p/w500/49WJfeN0moxb9IPfGn8AIqMGskD.jpg",
    progress: 65,
    timeLeft: "25 min left",
    episode: "S4 E3"
  },
  {
    id: 2,
    title: "The Crown",
    image: "https://image.tmdb.org/t/p/w500/1M876KPjulVwppEpldhdc8V4o68.jpg",
    progress: 40,
    timeLeft: "35 min left",
    episode: "S6 E2"
  },
  {
    id: 3,
    title: "Dune: Part Two",
    image: "https://image.tmdb.org/t/p/w500/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg",
    progress: 80,
    timeLeft: "30 min left"
  },
  {
    id: 4,
    title: "The Last of Us",
    image: "https://image.tmdb.org/t/p/w500/uKvVjHNqB5VmOrdxqAt2F7J78ED.jpg",
    progress: 20,
    timeLeft: "45 min left",
    episode: "S1 E4"
  }
];

const ContinueWatching: React.FC = () => {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold text-white mb-6">Continue Watching</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {continueWatchingData.map((item) => (
          <div key={item.id} className="group relative bg-slate-800 rounded-lg overflow-hidden hover:scale-105 transition-all duration-300 cursor-pointer">
            {/* Image with Progress Overlay */}
            <div className="relative aspect-[2/3] overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              
              {/* Progress Bar */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-600">
                <div 
                  className="h-full bg-red-500 transition-all duration-300"
                  style={{ width: `${item.progress}%` }}
                />
              </div>
              
              {/* Play Button Overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <button className="p-4 bg-white text-black rounded-full hover:bg-gray-200 transition-colors duration-200">
                  <Play className="h-6 w-6 fill-current" />
                </button>
              </div>
            </div>
            
            {/* Content Info */}
            <div className="p-4">
              <h3 className="text-white font-semibold text-lg mb-2 group-hover:text-purple-400 transition-colors duration-200">
                {item.title}
              </h3>
              
              <div className="flex items-center justify-between text-sm text-gray-400">
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4" />
                  <span>{item.timeLeft}</span>
                </div>
                {item.episode && (
                  <span className="text-purple-400 font-medium">{item.episode}</span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ContinueWatching;