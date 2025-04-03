
import { motion } from 'framer-motion';
const Gallery = () => {
    const galleryImages = [
      { src: '../../public/img/wedding_ceremony_gallery.jpg', alt: 'Wedding ceremony' },
      { src: '../../public/img/wedding_couple_gallery.jpg', alt: 'Wedding couple' },
      { src: '../../public/img/wedding_reception_gallery.jpg', alt: 'Wedding reception' },
      { src: '../../public/img/wedding_planning_gallery.jpg', alt: 'Wedding planning' },
      { src: '../../public/img/wedding_details_gallery.jpg', alt: 'Wedding details' },
      { src: '../../public/img/wedding_venue_gallery.jpg', alt: 'Wedding venue' },
    ];
  
    return (
      <section id="gallery" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-serif text-gray-800 mb-4">
              Our <span className="text-rose-500">Gallery</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A glimpse into the magical weddings we've had the honor of creating.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                className="relative group overflow-hidden rounded-xl shadow-md"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03 }}
              >
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <p className="text-white text-lg font-medium">{image.alt}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    );
  };

  export default Gallery;