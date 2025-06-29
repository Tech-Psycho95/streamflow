import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ContentCard from './ContentCard';

interface ContentItem {
  id: number;
  title: string;
  image: string;
  rating: number;
  year: number;
  duration: string;
  genre: string;
  type?: 'movie' | 'tv' | 'anime';
}

interface ContentRowProps {
  title: string;
  items: ContentItem[];
  myList?: ContentItem[];
  onToggleMyList?: (item: ContentItem) => void;
}

const ContentRow: React.FC<ContentRowProps> = ({ title, items, myList = [], onToggleMyList }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 400;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const isInMyList = (item: ContentItem) => {
    return myList.some(listItem => listItem.id === item.id);
  };

  return (
    <section className="mb-12">
      {/* Section Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-white">{title}</h2>
        <a href="#" className="text-purple-400 hover:text-purple-300 text-sm font-medium transition-colors duration-200">
          View All
        </a>
      </div>
      
      {/* Content Carousel */}
      <div className="relative group">
        {/* Left Arrow */}
        <button
          onClick={() => scroll('left')}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-20 p-2 bg-black/50 text-white rounded-full opacity-0 group-hover:opacity-100 hover:bg-black/70 transition-all duration-200 -translate-x-4 group-hover:-translate-x-2"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        
        {/* Right Arrow */}
        <button
          onClick={() => scroll('right')}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-20 p-2 bg-black/50 text-white rounded-full opacity-0 group-hover:opacity-100 hover:bg-black/70 transition-all duration-200 translate-x-4 group-hover:-translate-x-2"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
        
        {/* Content Grid */}
        <div
          ref={scrollRef}
          className="flex space-x-4 overflow-x-scroll scrollbar-hide pb-4"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {items.map((item) => (
            <div key={item.id} className="flex-none w-80">
              <ContentCard 
                item={item} 
                isInMyList={isInMyList(item)}
                onToggleMyList={onToggleMyList}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContentRow;