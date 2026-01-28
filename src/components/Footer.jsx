import { motion } from 'framer-motion';
import { FaInstagram, FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  const socialLinks = [
    { icon: FaInstagram, url: '#', name: 'Instagram', color: 'hover:text-pink-400' },
    { icon: FaFacebookF, url: '#', name: 'Facebook', color: 'hover:text-blue-400' },
    { icon: FaTwitter, url: '#', name: 'Twitter', color: 'hover:text-blue-300' },
    { icon: FaLinkedinIn, url: '#', name: 'LinkedIn', color: 'hover:text-blue-500' },
    { icon: FaYoutube, url: '#', name: 'YouTube', color: 'hover:text-red-500' },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-b from-[#0a0605] to-[#050302] py-16 overflow-hidden">
      {/* Decorative Top Border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent"></div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #D4AF37 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        ></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            {/* Logo/Brand Name */}
            <h3 className="text-3xl md:text-4xl font-playfair font-bold text-gold mb-3 tracking-wider">
              CHAI CULTURE
            </h3>
            
            {/* Tagline */}
            <p className="text-cream/60 font-poppins text-sm md:text-base italic">
              "Brew the Royal Tradition"
            </p>

            {/* Decorative Divider */}
            <div className="flex justify-center mt-6">
              <div className="flex items-center gap-2">
                <div className="w-12 h-px bg-gradient-to-r from-transparent to-gold/50"></div>
                <div className="w-2 h-2 rounded-full bg-gold"></div>
                <div className="w-12 h-px bg-gradient-to-l from-transparent to-gold/50"></div>
              </div>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-12"
          >
            <p className="text-center text-cream/50 font-poppins text-sm mb-6 uppercase tracking-widest">
              Follow Our Journey
            </p>
            
            <div className="flex justify-center items-center gap-4 md:gap-6">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className={`relative group`}
                  aria-label={social.name}
                >
                  {/* Glowing Background */}
                  <div className="absolute inset-0 bg-gold/20 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Icon Container */}
                  <div className={`relative flex items-center justify-center w-12 h-12 bg-brown/30 backdrop-blur-sm border-2 border-gold/30 rounded-full text-cream/70 transition-all duration-300 group-hover:border-gold group-hover:bg-brown/50 ${social.color}`}>
                    <social.icon className="text-xl" />
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent mb-8"
          ></motion.div>

          {/* Bottom Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center space-y-4"
          >
            {/* Copyright */}
            <p className="text-cream/40 font-poppins text-sm">
              © {currentYear} Chai Culture. All rights reserved.
            </p>

            {/* Additional Links */}
            <div className="flex flex-wrap justify-center items-center gap-4 text-cream/40 font-poppins text-xs">
              <a href="#" className="hover:text-gold transition-colors duration-300">
                Privacy Policy
              </a>
              <span className="text-gold/30">•</span>
              <a href="#" className="hover:text-gold transition-colors duration-300">
                Terms of Service
              </a>
              <span className="text-gold/30">•</span>
              <a href="#" className="hover:text-gold transition-colors duration-300">
                Contact Us
              </a>
            </div>

            {/* Made with Love */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.8 }}
              className="text-cream/30 font-poppins text-xs italic pt-4"
            >
              Crafted with ❤️ and a cup of chai
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* Decorative Corner Elements */}
      <div className="absolute bottom-0 left-0 w-24 h-24 border-b-2 border-l-2 border-gold/10"></div>
      <div className="absolute bottom-0 right-0 w-24 h-24 border-b-2 border-r-2 border-gold/10"></div>

      {/* Subtle Glow Effects */}
      <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-gold/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-gold/5 rounded-full blur-3xl"></div>
    </footer>
  );
};

export default Footer;