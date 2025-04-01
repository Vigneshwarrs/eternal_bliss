import { motion } from 'framer-motion';
import { BellRing } from 'lucide-react';

const Hero = () => {
  return (
    <section
      id="home"
      className="pt-32 pb-24 min-h-screen flex items-center justify-center bg-gradient-to-b from-rose-50 to-white relative overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-10"></div>
      </div>
      
      <motion.div 
        className="container mx-auto px-6 text-center relative z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div 
          className="w-32 h-32 mx-auto mb-8 flex items-center justify-center"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <BellRing className="w-full h-full text-rose-400" />
        </motion.div>
        
        <motion.h1 
          className="text-5xl md:text-6xl lg:text-7xl font-serif text-gray-800 mb-6 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <span className="block">Creating Your</span>
          <span className="text-rose-500 font-light">Perfect Wedding</span>
        </motion.h1>
        
        <motion.p 
          className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Let us transform your wedding dreams into reality with our personalized planning services and attention to detail.
        </motion.p>
        
        <motion.div
          className="flex flex-col sm:flex-row justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <motion.a
            href="#contact"
            className="inline-block bg-rose-500 text-white px-8 py-4 rounded-full hover:bg-rose-600 transition-colors text-lg font-medium"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Planning
          </motion.a>
          <motion.a
            href="#services"
            className="inline-block border-2 border-rose-500 text-rose-500 px-8 py-4 rounded-full hover:bg-rose-50 transition-colors text-lg font-medium"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Our Services
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;