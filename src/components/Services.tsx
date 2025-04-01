import { Calendar, Camera, Music, Heart, MapPin, BellRing } from 'lucide-react';
import { motion } from 'framer-motion';

const Services = () => {
  const services = [
    { 
      icon: <Calendar className="w-10 h-10 text-rose-500" />, 
      title: 'Full Wedding Planning', 
      description: 'Comprehensive planning from concept to execution, tailored to your vision and budget.',
      bg: 'bg-rose-50'
    },
    { 
      icon: <Camera className="w-10 h-10 text-rose-500" />, 
      title: 'Photography & Videography', 
      description: 'Capture every precious moment with our curated selection of talented photographers.',
      bg: 'bg-amber-50'
    },
    { 
      icon: <MapPin className="w-10 h-10 text-rose-500" />, 
      title: 'Venue Selection', 
      description: 'Find the perfect location from our extensive network of premium venues.',
      bg: 'bg-emerald-50'
    },
    { 
      icon: <Music className="w-10 h-10 text-rose-500" />, 
      title: 'Entertainment', 
      description: 'From string quartets to live bands and DJs, we have the perfect entertainment.',
      bg: 'bg-blue-50'
    },
    { 
      icon: <Heart className="w-10 h-10 text-rose-500" />, 
      title: 'Decor & Styling', 
      description: 'Transform any space into your dream wedding with our design expertise.',
      bg: 'bg-purple-50'
    },
    { 
      icon: <BellRing className="w-10 h-10 text-rose-500" />, 
      title: 'Bridal Services', 
      description: 'Complete bridal preparation including makeup, hair, and dress coordination.',
      bg: 'bg-pink-50'
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-serif text-gray-800 mb-4">
            Our <span className="text-rose-500">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We offer comprehensive wedding planning services to make your special day unforgettable.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className={`${service.bg} p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-2xl font-semibold mb-3 text-gray-800">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;