import { useState } from 'react';
import { Menu, X, Waves } from 'lucide-react';

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export default function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'features', label: 'Features' },
    { id: 'how-it-works', label: 'How It Works' },
    { id: 'testimonials', label: 'Testimonials' },
    { id: 'get-started', label: 'Get Started' },
  ];

  const handleNavigate = (page: string) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div
              className="flex items-center gap-2 cursor-pointer group"
              onClick={() => handleNavigate('home')}
            >
              <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                <Waves className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-semibold text-black">
                Flowly
              </span>
            </div>

            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavigate(item.id)}
                  className={`text-sm font-medium transition-colors ${
                    currentPage === item.id
                      ? 'text-black'
                      : 'text-gray-600 hover:text-black'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => handleNavigate('get-started')}
                className="px-6 py-2.5 bg-black text-white rounded-lg text-sm font-medium hover:bg-gray-800 transition-all"
              >
                Try Flowly
              </button>
            </div>

            <button
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-black" />
              ) : (
                <Menu className="w-6 h-6 text-black" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div
            className="absolute inset-0 bg-black/10"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="absolute top-20 right-4 left-4 bg-white rounded-xl shadow-lg p-6 animate-slide-in border border-gray-200">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavigate(item.id)}
                  className={`text-left px-4 py-3 rounded-lg transition-colors ${
                    currentPage === item.id
                      ? 'bg-gray-100 text-black font-medium'
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => handleNavigate('get-started')}
                className="px-6 py-3 bg-black text-white rounded-lg font-medium hover:bg-gray-800 transition-all mt-2"
              >
                Try Flowly
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
