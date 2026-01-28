import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FaMugHot } from 'react-icons/fa6'; // Import Icon

const LaunchCounter = () => {
  // Set launch date to March 1, 2026
  const launchDate = new Date('2026-03-01T00:00:00').getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = launchDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [launchDate]);

  const timeBlocks = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds },
  ];

  return (
    <section className="relative py-24 md:py-32 bg-gradient-to-b from-[#0a0605] via-[#1a0f0a] to-[#0a0605] overflow-hidden">
      {/* Radial Gradient Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-gold/5 via-transparent to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
              className="flex items-center justify-center gap-4 mb-8"
            >
              <div className="h-px w-20 bg-gradient-to-r from-transparent to-gold"></div>
              <span className="text-gold uppercase tracking-[0.4em] text-xs md:text-sm font-poppins font-semibold">
                Coming Soon
              </span>
              <div className="h-px w-20 bg-gradient-to-l from-transparent to-gold"></div>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-4xl md:text-6xl lg:text-7xl font-playfair text-cream font-bold mb-6"
            >
              Launching Soon
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-lg md:text-xl text-cream/60 font-poppins max-w-2xl mx-auto"
            >
              The wait is almost over. A royal experience is brewing.
            </motion.p>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-16"
          >
            {timeBlocks.map((block, index) => (
              <motion.div
                key={block.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-gold/10 to-transparent blur-xl rounded-2xl group-hover:from-gold/20 transition-all duration-300"></div>
                <div className="relative bg-gradient-to-br from-brown/40 to-brown/20 backdrop-blur-md border-2 border-gold/30 rounded-2xl p-6 md:p-8 group-hover:border-gold/50 transition-all duration-300">
                  <motion.div
                    className="text-5xl md:text-6xl lg:text-7xl font-playfair font-bold text-gold mb-2 tabular-nums"
                  >
                    {String(block.value).padStart(2, '0')}
                  </motion.div>
                  <div className="text-cream/60 font-poppins text-sm md:text-base uppercase tracking-widest">
                    {block.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-3 bg-brown/30 backdrop-blur-sm border border-gold/20 rounded-full px-8 py-4">
              <span className="w-2 h-2 rounded-full bg-gold animate-pulse"></span>
              <p className="text-cream/80 font-poppins text-sm md:text-base">
                Expected Launch: <span className="text-gold font-semibold">March 1, 2026</span>
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1.3 }}
            className="flex justify-center items-center gap-4 mt-12"
          >
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-gold/30"></div>
            {/* Replaced Emoji with Icon */}
            <div className="text-gold text-2xl">
                <FaMugHot />
            </div>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-gold/30"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LaunchCounter;