import { BellRing, Facebook, Instagram } from 'lucide-react';
import { motion } from 'framer-motion';
import axios from 'axios';
import { API_URL } from '../main';
const Footer = () => {

  const handleSubmit = async(e: any) =>{
    await axios.post(`${API_URL}/api/v1/user-subscribed`, {
      email: e.target[0].value
    });
  }

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Info */}
          <div>
            <div className="flex items-center mb-4">
              <BellRing className="h-8 w-8 text-rose-500" />
              <span className="ml-2 text-2xl font-serif font-medium">Eternal Bliss</span>
            </div>
            <p className="text-gray-400 mb-6">
              Creating unforgettable wedding experiences with passion and precision.
            </p>
            <div className="flex space-x-4">
              {['Facebook', 'Instagram', 'Pinterest'].map((social) => (
                <motion.a 
                  key={social} 
                  href="#" 
                  className="text-gray-400 hover:text-rose-500 transition-colors"
                  aria-label={social}
                  whileHover={{ y: -3 }}
                >
                  {social === 'Facebook' && <Facebook className="w-5 h-5" />}
                  {social === 'Instagram' && <Instagram className="w-5 h-5" />}
                </motion.a>
              ))}
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {['Home', 'About', 'Services', 'Gallery', 'Testimonials', 'Contact'].map((item) => (
                <motion.li 
                  key={item}
                  whileHover={{ x: 5 }}
                >
                  <a 
                    href={`#${item.toLowerCase()}`} 
                    className="text-gray-400 hover:text-rose-500 transition-colors"
                  >
                    {item}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Our Services</h3>
            <ul className="space-y-3">
              {[
                'Full Wedding Planning',
                'Venue Selection',
                'Vendor Coordination',
                'Wedding Design',
                'Day-of Coordination',
                'Destination Weddings'
              ].map((service) => (
                <motion.li 
                  key={service}
                  whileHover={{ x: 5 }}
                >
                  <a href="#" className="text-gray-400 hover:text-rose-500 transition-colors">
                    {service}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Wedding Tips</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to receive wedding planning tips and special offers.
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col space-y-3">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 text-white"
              />
              <motion.button
                type="submit"
                className="bg-rose-500 text-white px-6 py-3 rounded-lg hover:bg-rose-600 transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Subscribe
              </motion.button>
            </form>
          </div>
        </div>
        
        {/* Divider */}
        <div className="border-t border-gray-800 my-8"></div>
        
        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Eternal Bliss Wedding Planners. All rights reserved.
          </p>
          
          <div className="flex space-x-6">
            <a href="#" className="text-gray-500 hover:text-rose-500 transition-colors text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-500 hover:text-rose-500 transition-colors text-sm">
              Terms of Service
            </a>
            <a href="#" className="text-gray-500 hover:text-rose-500 transition-colors text-sm">
              FAQ
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;