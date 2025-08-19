import React, { useState, useEffect, useContext } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, Sun, Moon, ArrowRight, Globe } from 'lucide-react';
import { ThemeContext } from '../../context/ThemeContext';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Contact', path: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/90 dark:bg-dark-900/90 backdrop-blur-md shadow-md' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 md:py-6">
          <div className="flex items-center">
            <NavLink to="/" className="flex items-center">
              <Globe className="h-8 w-8 text-primary-600 dark:text-primary-400" />
              <span className="ml-2 text-xl font-bold text-primary-800 dark:text-white">
                Swastik
              </span>
            </NavLink>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) => `
                  relative text-base font-medium transition-colors duration-300
                  ${isActive 
                    ? 'text-primary-600 dark:text-primary-400' 
                    : 'text-black-700 dark:text-dark-200 hover:text-primary-600 dark:hover:text-primary-400'}
                `}
              >
                {({ isActive }) => (
                  <>
                    {link.name}
                    {isActive && (
                      <motion.div 
                        layoutId="nav-underline"
                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary-600 dark:bg-primary-400"
                      />
                    )}
                  </>
                )} 
              </NavLink>
            ))}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full text-dark-700 dark:text-dark-200 hover:bg-dark-100 dark:hover:bg-dark-800 transition-colors"
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </nav>
          
          {/* Mobile Navigation Toggle */}
          <div className="flex items-center space-x-4 md:hidden">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full text-dark-700 dark:text-dark-200 hover:bg-dark-100 dark:hover:bg-dark-800 transition-colors"
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-dark-700 dark:text-dark-200 hover:text-primary-600 dark:hover:text-primary-400"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={isOpen ? { height: 'calc(100vh - 64px)', opacity: 1 } : { height: 0, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="md:hidden overflow-hidden bg-white dark:bg-dark-900"
      >
        <div className="px-4 py-6 space-y-8">
          <div className="space-y-6">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) => `
                  flex items-center justify-between text-lg font-medium py-2 border-b border-dark-100 dark:border-dark-800
                  ${isActive 
                    ? 'text-primary-600 dark:text-primary-400 border-primary-600 dark:border-primary-400' 
                    : 'text-dark-700 dark:text-dark-200'}
                `}
              >
                {link.name}
                <ArrowRight size={16} />
              </NavLink>
            ))}
          </div>
          
          <div className="pt-6 mt-6 border-t border-dark-100 dark:border-dark-800">
            <NavLink
              to="/contact"
              className="flex items-center justify-center px-4 py-3 rounded-md bg-primary-600 text-white font-medium hover:bg-primary-700 transition-colors"
            >
              Get In Touch
            </NavLink>
          </div>
        </div>
      </motion.div>
    </header>
  );
};

export default Header;