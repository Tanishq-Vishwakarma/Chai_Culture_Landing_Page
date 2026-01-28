import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const Hero = () => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const heroImages = [
    "https://images.unsplash.com/photo-1643067077447-78239a403a18?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fEluZGlhbiUyMHRlYXxlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1619581073186-5b4ae1b0caad?w=800&auto=format&fit=crop"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const scrollToSignup = () => {
    const signupSection = document.getElementById('notify-me');
    if (signupSection) {
      signupSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-[#1a0f0a] via-[#2d1810] to-[#1a0f0a] overflow-hidden flex items-center justify-center pt-20">
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #D4AF37 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Main Content Grid */}
      <div className="relative z-10 container mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-12 items-center h-full py-20">
        
        {/* Left Side - Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-center lg:text-left space-y-8 relative z-20"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl md:text-5xl lg:text-7xl font-playfair text-cream font-bold leading-tight"
          >
            Brew the <span className="text-gold">Royal Tradition</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl text-cream/80 font-poppins max-w-xl leading-relaxed mx-auto lg:mx-0"
          >
            Experience the authentic taste of premium instant chai tea, crafted from centuries-old recipes of royal Indian households.
          </motion.p>

          {/* Add a Call to Action Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <button
              onClick={scrollToSignup}
              className="bg-gradient-to-r from-gold-dark via-gold to-gold-dark text-brown font-poppins font-bold text-lg px-8 py-3 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              Register for Launch
            </button>
          </motion.div>
        </motion.div>

        {/* Right Side - Stacked Images */}
        <div className="relative max-w-lg mx-auto w-full aspect-[4/5] md:aspect-square">
          <div className="absolute inset-0 bg-gold/20 blur-3xl rounded-full scale-90 animate-pulse -z-10"></div>
          <div className="relative w-full h-full">
            {heroImages.map((src, index) => {
              const isFront = index === activeImageIndex;
              return (
                <motion.div
                  key={src}
                  className={`absolute inset-0 w-full h-full rounded-3xl overflow-hidden border-2 border-gold/30 shadow-2xl shadow-gold/20 bg-brown-dark ${isFront ? 'z-10' : 'z-0'}`}
                  animate={{
                    rotate: isFront ? 0 : 6,
                    x: isFront ? 0 : 20,
                    y: isFront ? 0 : 20,
                    scale: isFront ? 1 : 0.95,
                    opacity: isFront ? 1 : 0.7,
                  }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                >
                  <img src={src} alt={`Royal Chai Experience ${index + 1}`} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-brown-dark/60 via-transparent to-transparent pointer-events-none"></div>
                </motion.div>
              );
            })}
          </div>
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 opacity-60 pointer-events-none z-20">
             {[1, 2, 3].map((i) => (
               <motion.div
                 key={i}
                 className="absolute bottom-0 left-1/2 w-4 h-12 bg-white blur-xl rounded-full"
                 animate={{ y: [-20, -100], x: [0, i % 2 === 0 ? 10 : -10, 0], opacity: [0, 0.4, 0], scale: [0.5, 1.5] }}
                 transition={{ duration: 3, repeat: Infinity, delay: i * 0.8, ease: "easeInOut" }}
               />
             ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;