import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const Testimonials = () => {
    const testimonials = [
      { 
        name: 'Sarah & James', 
        content: 'Our wedding day was absolutely perfect! The team went above and beyond our expectations. Every detail was meticulously planned and executed flawlessly.', 
        image: '/img/couple-1.jpg',
        date: 'June 2023'
      },
      { 
        name: 'Emily & Michael', 
        content: 'Professional, creative, and attentive to every detail. We couldn\'t be happier with how our wedding turned out. They made the entire process stress-free!', 
        image: '/img/couple-2.jpg',
        date: 'September 2023'
      },
      { 
        name: 'Jessica & David', 
        content: 'They made our dream wedding come true. Everything was simply magical. The team understood our vision perfectly and brought it to life beyond our expectations.', 
        image: '/img/couple-3.jpg',
        date: 'April 2024'
      },
    ];
  
    return (
      <section id="testimonials" className="py-20 bg-rose-50">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-serif text-gray-800 mb-4">
              Happy <span className="text-rose-500">Couples</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it - hear from our couples.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold">{testimonial.name}</h3>
                    <p className="text-gray-500">{testimonial.date}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic mb-6">"{testimonial.content}"</p>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    );
  };

export default Testimonials;