import React, { useState, useMemo } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ContentRow from './components/ContentRow';
import ContinueWatching from './components/ContinueWatching';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import MoviesPage from './pages/MoviesPage';
import TVShowsPage from './pages/TVShowsPage';
import AnimePage from './pages/AnimePage';
import MyListPage from './pages/MyListPage';
import { trendingMovies, popularTvShows, animeShows, newReleases, ContentItem } from './data/contentData';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState('home');
  const [myList, setMyList] = useState<ContentItem[]>([]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const handleNavigation = (page: string) => {
    setCurrentPage(page);
    setSearchQuery(''); // Clear search when navigating
  };

  const handleToggleMyList = (item: ContentItem) => {
    setMyList(prevList => {
      const isInList = prevList.some(listItem => listItem.id === item.id);
      if (isInList) {
        return prevList.filter(listItem => listItem.id !== item.id);
      } else {
        return [...prevList, item];
      }
    });
  };

  // Filter content based on search query
  const filteredContent = useMemo(() => {
    if (!searchQuery) {
      return {
        trending: trendingMovies,
        tvShows: popularTvShows,
        anime: animeShows,
        newReleases: newReleases
      };
    }

    const query = searchQuery.toLowerCase();
    const allContent = [...trendingMovies, ...popularTvShows, ...animeShows, ...newReleases];
    const filtered = allContent.filter(item => 
      item.title.toLowerCase().includes(query) ||
      item.genre.toLowerCase().includes(query)
    );

    return {
      trending: filtered.slice(0, 8),
      tvShows: filtered.slice(8, 16),
      anime: filtered.slice(16, 24),
      newReleases: filtered.slice(24)
    };
  }, [searchQuery]);

  // Render different pages based on current page
  const renderPage = () => {
    switch (currentPage) {
      case 'movies':
        return <MoviesPage onNavigate={handleNavigation} myList={myList} onToggleMyList={handleToggleMyList} />;
      case 'tvshows':
        return <TVShowsPage onNavigate={handleNavigation} myList={myList} onToggleMyList={handleToggleMyList} />;
      case 'anime':
        return <AnimePage onNavigate={handleNavigation} myList={myList} onToggleMyList={handleToggleMyList} />;
      case 'mylist':
        return <MyListPage onNavigate={handleNavigation} myList={myList} onToggleMyList={handleToggleMyList} />;
      default:
        return (
          <>
            {!searchQuery && <Hero />}
            
            <main className={`${!searchQuery ? 'relative -mt-32' : 'pt-20'} z-20 bg-gradient-to-t from-slate-900 to-transparent`}>
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 pb-20">
                {searchQuery && (
                  <div className="pt-8">
                    <h2 className="text-2xl font-bold text-white mb-6">
                      Search results for "{searchQuery}"
                    </h2>
                  </div>
                )}
                
                {!searchQuery && <ContinueWatching />}
                
                {(filteredContent.trending.length > 0) && (
                  <ContentRow 
                    title={searchQuery ? "Movies" : "Trending Now"} 
                    items={filteredContent.trending}
                    myList={myList}
                    onToggleMyList={handleToggleMyList}
                  />
                )}
                
                {(filteredContent.tvShows.length > 0) && (
                  <ContentRow 
                    title="Popular TV Shows" 
                    items={filteredContent.tvShows}
                    myList={myList}
                    onToggleMyList={handleToggleMyList}
                  />
                )}
                
                {(filteredContent.anime.length > 0) && (
                  <ContentRow 
                    title="Popular Anime" 
                    items={filteredContent.anime}
                    myList={myList}
                    onToggleMyList={handleToggleMyList}
                  />
                )}
                
                {(filteredContent.newReleases.length > 0) && (
                  <ContentRow 
                    title="New Releases" 
                    items={filteredContent.newReleases}
                    myList={myList}
                    onToggleMyList={handleToggleMyList}
                  />
                )}
                
                {searchQuery && Object.values(filteredContent).every(arr => arr.length === 0) && (
                  <div className="text-center py-20">
                    <h3 className="text-xl text-white mb-4">No results found</h3>
                    <p className="text-gray-400">
                      Try searching for something else or browse our featured content
                    </p>
                  </div>
                )}
              </div>
            </main>
            
            {!searchQuery && <FAQ />}
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-slate-900">
      <Header onSearch={handleSearch} onNavigate={handleNavigation} currentPage={currentPage} />
      
      {renderPage()}
      
      <Footer />
    </div>
  );
}

export default App;