import { motion } from 'framer-motion';
import { useState } from 'react';
import { FiMail, FiCheck } from 'react-icons/fi';

const EmailSignup = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!email) {
      setError('Please enter your email address');
      return;
    }

    if (!validateEmail(email)) {
      setError('Please enter a valid email address');
      return;
    }

    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(true);
      setIsLoading(false);
      setEmail('');
    }, 1500);
  };

  return (
    // FIX IS HERE: Added id="notify-me" and scroll-mt-32 (scroll margin)
    <section 
      id="notify-me" 
      className="relative py-24 md:py-32 bg-gradient-to-b from-[#1a0f0a] to-[#0a0605] overflow-hidden scroll-mt-32"
    >
      {/* Animated Background Circles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.03, 0.06, 0.03],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/4 -left-1/4 w-96 h-96 bg-gold rounded-full blur-3xl"
        ></motion.div>
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.03, 0.06, 0.03],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-gold rounded-full blur-3xl"
        ></motion.div>
      </div>

      <div className="relative z-10 container mx-auto px-6 md:px-12">
        <div className="max-w-3xl mx-auto">
          
          {!isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              {/* Title */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mb-8"
              >
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-playfair text-cream font-bold mb-4">
                  Be the First to Experience
                </h2>
                <div className="flex justify-center">
                  <div className="h-1 w-32 bg-gradient-to-r from-transparent via-gold to-transparent rounded-full"></div>
                </div>
              </motion.div>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-xl md:text-2xl text-cream/70 font-poppins mb-12 leading-relaxed"
              >
                Join our exclusive list and receive a special launch offer. 
                <br className="hidden md:block" />
                The royal tradition awaits.
              </motion.p>

              {/* Email Form */}
              <motion.form
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                onSubmit={handleSubmit}
                className="relative"
              >
                <div className="relative max-w-xl mx-auto">
                  {/* Glowing Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-gold/20 via-gold/30 to-gold/20 blur-xl opacity-50"></div>
                  
                  {/* Container for input and button */}
                  <div className="relative flex flex-col md:flex-row gap-4 bg-brown/30 backdrop-blur-md border-2 border-gold/30 rounded-3xl md:rounded-full p-3 md:p-2 shadow-2xl">
                    
                    {/* Email Input */}
                    <div className="relative flex-1 flex items-center">
                      <FiMail className="absolute left-6 text-gold/60 text-xl" />
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                          setError('');
                        }}
                        placeholder="Enter your royal email"
                        className="w-full bg-transparent pl-14 pr-6 py-4 text-cream font-poppins text-lg placeholder-cream/40 focus:outline-none rounded-2xl md:rounded-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <motion.button
                      type="submit"
                      disabled={isLoading}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="relative w-full md:w-auto bg-gradient-to-r from-gold-dark via-gold to-gold-dark text-brown font-poppins font-bold text-lg px-8 md:px-12 py-4 rounded-2xl md:rounded-full shadow-lg overflow-hidden group disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <span className="relative z-10">
                        {isLoading ? 'Joining...' : 'Notify Me'}
                      </span>
                      
                      {/* Button Shine Effect */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                        animate={{
                          x: ['-100%', '100%'],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          repeatDelay: 1,
                        }}
                      ></motion.div>
                    </motion.button>
                  </div>
                </div>

                {/* Error Message */}
                {error && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-400 font-poppins text-sm mt-4"
                  >
                    {error}
                  </motion.p>
                )}
              </motion.form>

              {/* Trust Indicators */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="flex flex-wrap items-center justify-center gap-4 md:gap-6 mt-8 text-cream/50 font-poppins text-sm"
              >
                <span className="flex items-center gap-2">
                  <FiCheck className="text-gold" />
                  No spam, ever
                </span>
                <span className="hidden md:inline text-gold/30">•</span>
                <span className="flex items-center gap-2">
                  <FiCheck className="text-gold" />
                  Exclusive offers
                </span>
                <span className="hidden md:inline text-gold/30">•</span>
                <span className="flex items-center gap-2">
                  <FiCheck className="text-gold" />
                  Unsubscribe anytime
                </span>
              </motion.div>
            </motion.div>
          ) : (
            // Success State
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="text-center py-12"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-gold to-gold-dark rounded-full mb-6 shadow-2xl shadow-gold/50"
              >
                <FiCheck className="text-brown text-4xl" />
              </motion.div>

              <h3 className="text-3xl md:text-4xl font-playfair text-cream font-bold mb-4">
                Welcome to the Royal Circle!
              </h3>
              <p className="text-xl text-cream/70 font-poppins mb-8">
                You're now on the exclusive list. Get ready for something extraordinary.
              </p>

              <motion.button
                onClick={() => setIsSubmitted(false)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-8 text-gold font-poppins underline underline-offset-4 hover:text-gold-light transition-colors"
              >
                Sign up another email
              </motion.button>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default EmailSignup;