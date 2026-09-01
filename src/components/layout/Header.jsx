import React, { useEffect, useState } from 'react';
import { navLinks, personalInfo } from '../../utils/constants';
import { scrollToElement } from '../../utils/helpers';
import useScrollspy from '../../hooks/useScrollspy';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const activeSection = useScrollspy([
  'hero',
  'about',
  'education',
  'experience',
  'projects',
  'skills',
  'recognition',
  'contact'
]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 12);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleNavClick = url => {
    scrollToElement(url.replace('#', ''));
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 border-b transition-all duration-300 ${
        isScrolled
          ? 'bg-nb-white/95 border-nb-gray-mid shadow-brutal-sm backdrop-blur-md'
          : 'bg-nb-white border-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Personal brand */}
        <a
          href="#hero"
          aria-label="Adina Shaikh — return to homepage"
          onClick={event => {
            event.preventDefault();
            scrollToElement('hero');
          }}
          className="flex items-center gap-3 text-nb-black"
        >
          <span className="w-10 h-10 rounded-full bg-nb-black text-nb-white flex items-center justify-center font-display font-bold text-sm tracking-wide">
            AS
          </span>

          <span className="hidden sm:block">
            <span className="block font-display font-bold leading-tight">
              Adina Shaikh
            </span>
            <span className="block text-xs text-nb-muted leading-tight">
              Mechanical Engineer · EMSHIP+ Scholar
            </span>
          </span>
        </a>

        {/* Desktop navigation */}
        <div className="hidden lg:flex items-center gap-7">
          {navLinks.map(link => (
            <a
              key={link.name}
              href={link.url}
              onClick={event => {
                event.preventDefault();
                handleNavClick(link.url);
              }}
              className={`relative py-2 text-sm font-medium transition-colors duration-200 ${
                activeSection === link.url.replace('#', '')
                  ? 'text-marine-700'
                  : 'text-nb-muted hover:text-nb-black'
              }`}
            >
              {link.name}

              {activeSection === link.url.replace('#', '') && (
                <span className="absolute left-0 right-0 -bottom-0.5 h-0.5 bg-marine-600 rounded-full" />
              )}
            </a>
          ))}

          
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="lg:hidden w-10 h-10 rounded-md border border-nb-gray-mid flex flex-col justify-center items-center gap-1.5 text-nb-black"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
        >
          <span
            className={`block h-0.5 w-5 bg-current transition-all duration-200 ${
              isMenuOpen ? 'rotate-45 translate-y-2' : ''
            }`}
          />
          <span
            className={`block h-0.5 w-5 bg-current transition-all duration-200 ${
              isMenuOpen ? 'opacity-0' : 'opacity-100'
            }`}
          />
          <span
            className={`block h-0.5 w-5 bg-current transition-all duration-200 ${
              isMenuOpen ? '-rotate-45 -translate-y-2' : ''
            }`}
          />
        </button>
      </nav>

      {/* Mobile navigation */}
      <div
        className={`lg:hidden absolute top-20 left-0 right-0 bg-nb-white border-b border-nb-gray-mid shadow-brutal-lg transition-all duration-300 ${
          isMenuOpen
            ? 'opacity-100 visible translate-y-0'
            : 'opacity-0 invisible -translate-y-3'
        }`}
      >
        <div className="px-6 py-6 flex flex-col gap-1">
          {navLinks.map(link => (
            <a
              key={link.name}
              href={link.url}
              onClick={event => {
                event.preventDefault();
                handleNavClick(link.url);
              }}
              className={`px-3 py-3 rounded-md text-base font-medium transition-colors ${
                activeSection === link.url.replace('#', '')
                  ? 'bg-marine-100 text-marine-800'
                  : 'text-nb-muted hover:bg-nb-gray hover:text-nb-black'
              }`}
            >
              {link.name}
            </a>
          ))}

          
        </div>
      </div>
    </header>
  );
};

export default Header;