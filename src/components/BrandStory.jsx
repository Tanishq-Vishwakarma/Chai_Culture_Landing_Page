import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaCrown, FaLeaf } from 'react-icons/fa6';
import { GiTeapotLeaves } from 'react-icons/gi'; // More specific tea icon

const BrandStory = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      ref={ref}
      className="relative py-24 md:py-32 bg-gradient-to-b from-[#1a0f0a] via-[#251510] to-[#1a0f0a] overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D4AF37' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px',
          }}
        ></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          
          {/* Section Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-block mb-6"
            >
              <div className="flex items-center gap-4">
                <div className="h-px w-12 bg-gradient-to-r from-transparent to-gold"></div>
                <span className="text-gold uppercase tracking-[0.3em] text-sm font-poppins font-medium">Our Story</span>
                <div className="h-px w-12 bg-gradient-to-l from-transparent to-gold"></div>
              </div>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-4xl md:text-6xl font-playfair text-cream font-bold mb-6"
            >
              A Legacy Steeped in Tradition
            </motion.h2>

            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex justify-center"
            >
              <div className="w-24 h-1 bg-gradient-to-r from-gold-dark via-gold to-gold-dark rounded-full"></div>
            </motion.div>
          </motion.div>

          {/* Story Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="space-y-8 text-center"
          >
            <p className="text-xl md:text-2xl text-cream/90 font-poppins leading-relaxed max-w-4xl mx-auto">
              For centuries, the royal households of India have perfected the art of brewing chai — 
              a sacred ritual passed down through generations.
            </p>

            <p className="text-lg md:text-xl text-cream/70 font-poppins leading-relaxed max-w-3xl mx-auto">
              Today, we bring this majestic heritage to your cup. Our premium instant chai premix 
              captures the authentic essence of royal Indian chai.
            </p>

            {/* Quote Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 1, delay: 0.9 }}
              className="pt-8 flex justify-center"
            >
              <div className="relative inline-block">
                <div className="absolute inset-0 bg-gold/10 blur-xl"></div>
                <div className="relative bg-gradient-to-r from-brown via-brown-light to-brown px-10 py-6 rounded-lg border border-gold/30">
                  <p className="text-gold font-playfair text-2xl md:text-3xl italic">
                    "Every cup, a taste of royalty"
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Heritage Cards with Proper Icons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1.1 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 max-w-4xl mx-auto"
            >
              {[
                {
                  icon: <FaCrown className="w-10 h-10" />,
                  title: 'Royal Heritage',
                  desc: 'Recipes from Indian palaces',
                },
                {
                  icon: <FaLeaf className="w-10 h-10" />,
                  title: 'Pure Ingredients',
                  desc: 'Handpicked spices & tea leaves',
                },
                {
                  icon: <GiTeapotLeaves className="w-10 h-10" />,
                  title: 'Authentic Taste',
                  desc: 'Traditional brewing methods',
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                  className="group"
                >
                  <div className="relative h-full bg-brown/30 backdrop-blur-sm border border-gold/20 rounded-xl p-8 hover:border-gold/50 transition-all duration-300 hover:transform hover:-translate-y-2 hover:bg-brown/40">
                    <div className="text-gold mb-6 flex justify-center group-hover:scale-110 transition-transform duration-300 drop-shadow-lg">
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-playfair text-gold-light font-semibold mb-3">
                      {item.title}
                    </h3>
                    <p className="text-cream/60 font-poppins text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;