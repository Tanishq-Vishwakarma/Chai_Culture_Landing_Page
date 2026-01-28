import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaMugHot } from 'react-icons/fa6';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Add a background color when the user scrolls down
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSignup = () => {
    const signupSection = document.getElementById('notify-me');
    if (signupSection) {
      signupSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-brown-dark/80 backdrop-blur-md border-b border-gold/20 py-4'
          : 'bg-transparent py-6'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <motion.div
            whileHover={{ rotate: [0, -10, 10, 0] }}
            transition={{ duration: 0.5 }}
            className="text-gold text-3xl"
          >
            <FaMugHot />
          </motion.div>
          <div>
            <h1 className="font-playfair font-bold text-xl md:text-2xl text-gold tracking-wider group-hover:text-gold-light transition-colors">
              CHAI CULTURE
            </h1>
          </div>
        </a>

        {/* CTA Button */}
        <AnimatePresence>
          {isScrolled && (
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              onClick={scrollToSignup}
              className="hidden md:block bg-gradient-to-r from-gold-dark via-gold to-gold-dark text-brown font-poppins font-bold text-sm px-6 py-2 rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              Register for Launch
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;