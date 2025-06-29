import React from 'react';
import ContentRow from '../components/ContentRow';
import { ContentItem } from '../data/contentData';

interface MyListPageProps {
  onNavigate: (page: string) => void;
  myList: ContentItem[];
  onToggleMyList: (item: ContentItem) => void;
}

const MyListPage: React.FC<MyListPageProps> = ({ onNavigate, myList, onToggleMyList }) => {
  const movies = myList.filter(item => item.type === 'movie');
  const tvShows = myList.filter(item => item.type === 'tv');
  const anime = myList.filter(item => item.type === 'anime');

  return (
    <div className="min-h-screen bg-slate-900 pt-20">
      {/* Hero Section */}
      <div className="relative h-96 flex items-center justify-center overflow-hidden mb-12">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900 via-slate-900 to-pink-900" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
              My List
            </h1>
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              Your personal collection of favorite movies, TV shows, and anime. 
              Keep track of what you want to watch and never lose sight of great content.
            </p>
            <div className="text-lg text-purple-300">
              {myList.length} {myList.length === 1 ? 'item' : 'items'} in your list
            </div>
          </div>
        </div>
      </div>

      {/* Content Sections */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 pb-20">
        {myList.length === 0 ? (
          <div className="text-center py-20">
            <div className="mb-8">
              <div className="w-24 h-24 bg-slate-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Your list is empty</h3>
              <p className="text-gray-400 max-w-md mx-auto mb-8">
                Start building your personal collection by adding movies, TV shows, and anime you want to watch.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => onNavigate('movies')}
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-200"
              >
                Browse Movies
              </button>
              <button
                onClick={() => onNavigate('tvshows')}
                className="bg-slate-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-slate-600 transition-all duration-200"
              >
                Browse TV Shows
              </button>
              <button
                onClick={() => onNavigate('anime')}
                className="bg-slate-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-slate-600 transition-all duration-200"
              >
                Browse Anime
              </button>
            </div>
          </div>
        ) : (
          <>
            {movies.length > 0 && (
              <ContentRow 
                title="Movies" 
                items={movies} 
                myList={myList}
                onToggleMyList={onToggleMyList}
              />
            )}
            
            {tvShows.length > 0 && (
              <ContentRow 
                title="TV Shows" 
                items={tvShows} 
                myList={myList}
                onToggleMyList={onToggleMyList}
              />
            )}
            
            {anime.length > 0 && (
              <ContentRow 
                title="Anime" 
                items={anime} 
                myList={myList}
                onToggleMyList={onToggleMyList}
              />
            )}
          </>
        )}
      </main>
    </div>
  );
};

export default MyListPage;