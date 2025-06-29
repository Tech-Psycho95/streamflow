import React, { useState } from 'react';
import { Search, Bell, User, Menu, X, LogIn, Settings, LogOut, Heart, Clock, HelpCircle } from 'lucide-react';

interface HeaderProps {
  onSearch: (query: string) => void;
  onNavigate: (page: string) => void;
  currentPage: string;
}

const Header: React.FC<HeaderProps> = ({ onSearch, onNavigate, currentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    onSearch(query);
  };

  const handleNavClick = (page: string) => {
    onNavigate(page);
    setIsMenuOpen(false);
  };

  const navItems = [
    { name: 'Home', page: 'home' },
    { name: 'Movies', page: 'movies' },
    { name: 'TV Shows', page: 'tvshows' },
    { name: 'Anime', page: 'anime' },
    { name: 'My List', page: 'mylist' }
  ];

  const notifications = [
    {
      id: 1,
      title: "New Episode Available",
      message: "Stranger Things S4 E4 is now streaming",
      time: "2 hours ago",
      type: "new_episode"
    },
    {
      id: 2,
      title: "Added to Your List",
      message: "The Last of Us has been added to your watchlist",
      time: "1 day ago",
      type: "list_update"
    },
    {
      id: 3,
      title: "Recommendation",
      message: "Based on your viewing history, you might like House of the Dragon",
      time: "2 days ago",
      type: "recommendation"
    }
  ];

  const AuthModal = () => (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-slate-800 rounded-lg p-8 w-full max-w-md">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-white">
            {isSignUp ? 'Sign Up' : 'Sign In'}
          </h2>
          <button
            onClick={() => setShowAuthModal(false)}
            className="text-gray-400 hover:text-white"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Email
            </label>
            <input
              type="email"
              className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Enter your email"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Password
            </label>
            <input
              type="password"
              className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Enter your password"
            />
          </div>
          
          {isSignUp && (
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Confirm Password
              </label>
              <input
                type="password"
                className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Confirm your password"
              />
            </div>
          )}
          
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-2 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-200"
          >
            {isSignUp ? 'Create Account' : 'Sign In'}
          </button>
        </form>
        
        <div className="mt-6 text-center">
          <p className="text-gray-400">
            {isSignUp ? 'Already have an account?' : "Don't have an account?"}
            <button
              onClick={() => setIsSignUp(!isSignUp)}
              className="text-purple-400 hover:text-purple-300 ml-1 font-medium"
            >
              {isSignUp ? 'Sign In' : 'Sign Up'}
            </button>
          </p>
        </div>
      </div>
    </div>
  );

  const ProfileMenu = () => (
    <div className="absolute right-0 top-full mt-2 w-64 bg-slate-800 rounded-lg shadow-xl border border-slate-700 z-50">
      <div className="p-4 border-b border-slate-700">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
            <User className="h-5 w-5 text-white" />
          </div>
          <div>
            <p className="text-white font-semibold">John Doe</p>
            <p className="text-gray-400 text-sm">john.doe@email.com</p>
          </div>
        </div>
      </div>
      
      <div className="py-2">
        <button 
          onClick={() => handleNavClick('mylist')}
          className="w-full flex items-center space-x-3 px-4 py-2 text-gray-300 hover:text-white hover:bg-slate-700 transition-colors duration-200"
        >
          <Heart className="h-4 w-4" />
          <span>My List</span>
        </button>
        <button className="w-full flex items-center space-x-3 px-4 py-2 text-gray-300 hover:text-white hover:bg-slate-700 transition-colors duration-200">
          <Clock className="h-4 w-4" />
          <span>Watch History</span>
        </button>
        <button className="w-full flex items-center space-x-3 px-4 py-2 text-gray-300 hover:text-white hover:bg-slate-700 transition-colors duration-200">
          <Settings className="h-4 w-4" />
          <span>Account Settings</span>
        </button>
        <button className="w-full flex items-center space-x-3 px-4 py-2 text-gray-300 hover:text-white hover:bg-slate-700 transition-colors duration-200">
          <HelpCircle className="h-4 w-4" />
          <span>Help & Support</span>
        </button>
      </div>
      
      <div className="border-t border-slate-700 py-2">
        <button className="w-full flex items-center space-x-3 px-4 py-2 text-red-400 hover:text-red-300 hover:bg-slate-700 transition-colors duration-200">
          <LogOut className="h-4 w-4" />
          <span>Sign Out</span>
        </button>
      </div>
    </div>
  );

  const NotificationPanel = () => (
    <div className="absolute right-0 top-full mt-2 w-80 bg-slate-800 rounded-lg shadow-xl border border-slate-700 z-50">
      <div className="p-4 border-b border-slate-700">
        <h3 className="text-white font-semibold text-lg">Notifications</h3>
      </div>
      
      <div className="max-h-96 overflow-y-auto">
        {notifications.map((notification) => (
          <div key={notification.id} className="p-4 border-b border-slate-700 hover:bg-slate-700 transition-colors duration-200">
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
              <div className="flex-1">
                <h4 className="text-white font-medium text-sm">{notification.title}</h4>
                <p className="text-gray-400 text-sm mt-1">{notification.message}</p>
                <p className="text-gray-500 text-xs mt-2">{notification.time}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="p-4 border-t border-slate-700">
        <button className="w-full text-center text-purple-400 hover:text-purple-300 text-sm font-medium">
          View All Notifications
        </button>
      </div>
    </div>
  );

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <button
                  onClick={() => handleNavClick('home')}
                  className="text-2xl font-bold bg-gradient-to-r from-red-500 to-purple-600 bg-clip-text text-transparent"
                >
                  StreamFlow
                </button>
              </div>
              
              {/* Desktop Navigation */}
              <nav className="hidden md:block ml-10">
                <div className="flex items-baseline space-x-8">
                  {navItems.map((item) => (
                    <button
                      key={item.name}
                      onClick={() => handleNavClick(item.page)}
                      className={`px-3 py-2 text-sm font-medium transition-colors duration-200 hover:text-white ${
                        currentPage === item.page ? 'text-white' : 'text-gray-300'
                      }`}
                    >
                      {item.name}
                    </button>
                  ))}
                </div>
              </nav>
            </div>

            {/* Search and User Actions */}
            <div className="flex items-center space-x-4">
              {/* Search */}
              <div className="hidden sm:block relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-4 w-4 text-gray-400" />
                </div>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={handleSearchChange}
                  placeholder="Search movies, shows..."
                  className="block w-64 pl-10 pr-3 py-2 border border-gray-600 rounded-lg bg-slate-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                />
              </div>

              {/* Sign In/Up Button */}
              <button
                onClick={() => setShowAuthModal(true)}
                className="flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-200"
              >
                <LogIn className="h-4 w-4" />
                <span className="hidden sm:inline">Sign In</span>
              </button>

              {/* Notifications */}
              <div className="relative">
                <button 
                  onClick={() => {
                    setShowNotifications(!showNotifications);
                    setShowProfileMenu(false);
                  }}
                  className="p-2 text-gray-400 hover:text-white transition-colors duration-200 relative"
                >
                  <Bell className="h-5 w-5" />
                  <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
                </button>
                {showNotifications && <NotificationPanel />}
              </div>

              {/* Profile */}
              <div className="relative">
                <button 
                  onClick={() => {
                    setShowProfileMenu(!showProfileMenu);
                    setShowNotifications(false);
                  }}
                  className="flex items-center space-x-2 p-2 text-gray-400 hover:text-white transition-colors duration-200"
                >
                  <User className="h-5 w-5" />
                  <span className="hidden md:inline text-sm">Profile</span>
                </button>
                {showProfileMenu && <ProfileMenu />}
              </div>

              {/* Mobile menu button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 text-gray-400 hover:text-white transition-colors duration-200"
              >
                {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 bg-slate-800 rounded-lg mt-2">
                {/* Mobile Search */}
                <div className="relative mb-3">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Search className="h-4 w-4 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={handleSearchChange}
                    placeholder="Search..."
                    className="block w-full pl-10 pr-3 py-2 border border-gray-600 rounded-lg bg-slate-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
                
                {navItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => handleNavClick(item.page)}
                    className={`block w-full text-left px-3 py-2 text-base font-medium transition-colors duration-200 rounded-md ${
                      currentPage === item.page ? 'text-white bg-slate-700' : 'text-gray-300 hover:text-white hover:bg-slate-700'
                    }`}
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Auth Modal */}
      {showAuthModal && <AuthModal />}

      {/* Click outside to close dropdowns */}
      {(showProfileMenu || showNotifications) && (
        <div 
          className="fixed inset-0 z-40" 
          onClick={() => {
            setShowProfileMenu(false);
            setShowNotifications(false);
          }}
        />
      )}
    </>
  );
};

export default Header;