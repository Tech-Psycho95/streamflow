import React, { useState } from 'react';
import { Play, Plus, Star, Check, Info } from 'lucide-react';

interface ContentItem {
  id: number;
  title: string;
  image: string;
  rating: number;
  year: number;
  duration: string;
  genre: string;
  genres?: string[];
  type?: 'movie' | 'tv' | 'anime';
  description?: string;
}

interface ContentCardProps {
  item: ContentItem;
  isInMyList?: boolean;
  onToggleMyList?: (item: ContentItem) => void;
}

const ContentCard: React.FC<ContentCardProps> = ({ item, isInMyList = false, onToggleMyList }) => {
  const [showDescription, setShowDescription] = useState(false);

  const handleMyListClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (onToggleMyList) {
      onToggleMyList(item);
    }
  };

  const handleInfoClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowDescription(!showDescription);
  };

  // Generate description based on content type and genre
  const getDescription = () => {
    if (item.description) return item.description;
    
    const descriptions: { [key: string]: string } = {
      'Action': 'An adrenaline-pumping adventure filled with intense action sequences and heart-stopping moments.',
      'Comedy': 'A hilarious and entertaining story that delivers laughs and memorable characters.',
      'Drama': 'A compelling narrative that explores deep themes and complex characters.',
      'Horror': 'A spine-chilling thriller that delivers scares and supernatural elements.',
      'Sci-Fi': 'A mind-bending science fiction adventure exploring futuristic concepts.',
      'Fantasy': 'An enchanting tale filled with magic and extraordinary worlds.',
      'Crime': 'A gripping crime story featuring investigations and moral dilemmas.',
      'Romance': 'A heartwarming love story exploring relationships and emotions.',
      'Supernatural': 'A captivating story with supernatural elements and otherworldly powers.',
      'Musical': 'A spectacular experience combining memorable songs and storytelling.',
      'Adventure': 'An exciting journey filled with exploration and thrilling escapades.',
      'Biography': 'An inspiring true story chronicling remarkable achievements.',
      'Animation': 'A beautifully animated story that captivates audiences of all ages.',
      'Psychological': 'A mind-bending psychological thriller that explores the depths of human psyche.',
      'Superhero': 'An epic superhero adventure with incredible powers and heroic journeys.',
      'Martial Arts': 'An action-packed story featuring incredible martial arts and combat sequences.',
      'Family': 'A heartwarming family story that brings joy and wonder to all ages.',
      'Steampunk': 'A unique adventure set in a world of steam-powered technology and Victorian aesthetics.'
    };

    return descriptions[item.genre] || 'An engaging and entertaining story with memorable characters.';
  };

  // Display multiple genres
  const displayGenres = () => {
    if (item.genres && item.genres.length > 1) {
      return item.genres.slice(0, 2).join(' • ');
    }
    return item.genre;
  };

  return (
    <div className="relative bg-slate-800 rounded-lg overflow-hidden transition-all duration-300 cursor-pointer hover:scale-105 h-full">
      {/* Image */}
      <div className="aspect-[2/3] overflow-hidden relative">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
        />
        
        {/* Overlay on Hover */}
        <div className="absolute inset-0 bg-black/60 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="flex space-x-3">
            <button className="p-3 bg-white text-black rounded-full hover:bg-gray-200 transition-colors duration-200 transform hover:scale-110">
              <Play className="h-4 w-4 fill-current" />
            </button>
            <button 
              onClick={handleMyListClick}
              className={`p-3 rounded-full transition-colors duration-200 transform hover:scale-110 ${
                isInMyList 
                  ? 'bg-green-600 text-white hover:bg-green-700' 
                  : 'bg-gray-700 text-white hover:bg-gray-600'
              }`}
            >
              {isInMyList ? <Check className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
            </button>
            <button
              onClick={handleInfoClick}
              className="p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-200 transform hover:scale-110"
            >
              <Info className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
      
      {/* Content Info */}
      <div className="p-4">
        <h3 className="text-white font-semibold text-lg mb-2 line-clamp-2 hover:text-purple-400 transition-colors duration-200">
          {item.title}
        </h3>
        
        <div className="flex items-center justify-between text-sm text-gray-400 mb-2">
          <span>{item.year}</span>
          <span>{item.duration}</span>
        </div>
        
        <div className="flex items-center justify-between">
          <span className="text-xs text-gray-500 bg-slate-700 px-2 py-1 rounded">
            {displayGenres()}
          </span>
          
          <div className="flex items-center space-x-1">
            <Star className="h-4 w-4 text-yellow-500 fill-current" />
            <span className="text-sm text-gray-300">{item.rating}</span>
          </div>
        </div>
      </div>

      {/* Description Popup */}
      {showDescription && (
        <div className="absolute inset-0 bg-slate-900/95 backdrop-blur-sm z-20 p-4 flex flex-col justify-center animate-in fade-in duration-300">
          <button
            onClick={handleInfoClick}
            className="absolute top-2 right-2 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors duration-200"
          >
            <Info className="h-4 w-4" />
          </button>
          
          <div className="text-center">
            <h4 className="text-white font-bold text-lg mb-3">{item.title}</h4>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              {getDescription()}
            </p>
            <div className="flex items-center justify-center space-x-4 text-sm text-gray-400 mb-3">
              <span>{item.year}</span>
              <span>•</span>
              <span>{item.duration}</span>
              <span>•</span>
              <div className="flex items-center space-x-1">
                <Star className="h-3 w-3 text-yellow-500 fill-current" />
                <span>{item.rating}</span>
              </div>
            </div>
            {item.genres && item.genres.length > 1 && (
              <div className="flex flex-wrap justify-center gap-2">
                {item.genres.map((genre, index) => (
                  <span key={index} className="text-xs bg-purple-600 text-white px-2 py-1 rounded-full">
                    {genre}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
      
      {/* Premium Badge */}
      {item.rating > 8.5 && (
        <div className="absolute top-2 right-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs px-2 py-1 rounded-full font-medium">
          Premium
        </div>
      )}

      {/* My List Badge */}
      {isInMyList && (
        <div className="absolute top-2 left-2 bg-green-600 text-white text-xs px-2 py-1 rounded-full font-medium flex items-center space-x-1">
          <Check className="h-3 w-3" />
          <span>My List</span>
        </div>
      )}
    </div>
  );
};

export default ContentCard;