import { motion } from 'framer-motion';

const About = () => {
return (
<section id="about" className="py-20 bg-white relative">
<div className="container mx-auto px-6">
<div className="flex flex-col lg:flex-row items-center gap-12">
<motion.div 
  className="lg:w-1/2"
  initial={{ opacity: 0, x: -50 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
>``
  <div className="relative rounded-2xl overflow-hidden shadow-xl">
    <img 
      src="/img/about.jpg" 
      alt="Wedding planners working"
      className="w-full h-auto object-cover"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
    <div className="absolute bottom-0 left-0 p-6 text-white">
      <h3 className="text-2xl font-serif mb-2">Sarah & James</h3>
      <p className="text-rose-200">"Our dream wedding came true!"</p>
    </div>
  </div>
</motion.div>

<motion.div 
  className="lg:w-1/2"
  initial={{ opacity: 0, x: 50 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
>
  <h2 className="text-4xl font-serif text-gray-800 mb-6">
    <span className="text-rose-500">About</span> Eternal Bliss
  </h2>
  <p className="text-lg text-gray-600 mb-6">
    At Eternal Bliss, we believe every love story deserves a perfect celebration. With over a decade of experience, our team of passionate wedding planners specializes in creating bespoke weddings that reflect your unique style and personality.
  </p>
  <p className="text-lg text-gray-600 mb-8">
    From intimate elopements to grand celebrations, we handle every detail with precision and care, ensuring your wedding day is as stress-free as it is magical.
  </p>
  <div className="grid grid-cols-2 gap-4 mb-8">
    {[
      { number: '200+', text: 'Weddings Planned' },
      { number: '10+', text: 'Years Experience' },
      { number: '50+', text: 'Destinations' },
      { number: '100%', text: 'Happy Couples' }
    ].map((item, index) => (
      <motion.div 
        key={index}
        className="bg-rose-50 p-4 rounded-lg text-center"
        whileHover={{ y: -5 }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        viewport={{ once: true }}
      >
        <p className="text-3xl font-bold text-rose-600">{item.number}</p>
        <p className="text-gray-600">{item.text}</p>
      </motion.div>
    ))}
  </div>
  <motion.a
    href="#contact"
    className="inline-block bg-rose-500 text-white px-6 py-3 rounded-full hover:bg-rose-600 transition-colors"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    Get to Know Us
  </motion.a>
</motion.div>
</div>
</div>
</section>
);
};


export default About;
