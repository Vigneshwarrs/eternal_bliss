import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Check, Send } from 'lucide-react';
import {useForm, SubmitHandler} from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

type FormValues = {
  name: string;
  email: string;
  phone: string;
  weddingDate: Date;
  guestCount: string;
  service: string;
  message: string;
};




const ContactForm = () => {
  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    phone: Yup.string()
    .matches(/^[0-9]{10}$/, "Phone number must be exactly 10 digits")
    .required("Phone number is required"),
    weddingDate: Yup.date().required('Wedding date is required'),
    guestCount: Yup.string().required('Guest count is required'),
    service: Yup.string().required('Service is required'),
    message: Yup.string().required('Message is required'),
  });

  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>({resolver: yupResolver(validationSchema)});

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    setIsSubmitting(true);
    console.log(data);
  }

  // const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const services = [
    'Full Wedding Planning',
    'Partial Planning',
    'Day-of Coordination',
    'Venue Selection',
    'Design & Styling',
    'Other Inquiry'
  ];

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   if (validateForm()) {
  //     setIsSubmitting(true);
  //     // Simulate form submission
  //     setTimeout(() => {
  //       console.log('Form submitted:', formData);
  //       setIsSubmitting(false);
  //       setSubmitSuccess(true);
  //       setFormData({ 
  //         name: '', 
  //         email: '', 
  //         phone: '', 
  //         weddingDate: '',
  //         guestCount: '',
  //         service: '',
  //         message: '' 
  //       });
  //     }, 1500);
  //   }
  // };

  return (
    <section id="contact" className="py-20 bg-rose-50">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-serif text-gray-800 mb-4">
            Contact <span className="text-rose-500">Us</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Let's create your dream wedding together. Reach out to schedule a consultation.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 bg-white rounded-2xl shadow-lg overflow-hidden">
          {/* Contact Information */}
          <motion.div 
            className="lg:w-1/3 bg-rose-500 text-white p-12"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-serif mb-8">Our Contact Details</h3>
            
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="bg-white/20 p-3 rounded-full mr-4 flex-shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-1">Email Address</h4>
                  <a href="mailto:hello@eternalbliss.com" className="text-rose-100 hover:text-white transition-colors">
                    hello@eternalbliss.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-white/20 p-3 rounded-full mr-4 flex-shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-1">Phone Number</h4>
                  <a href="tel:+18005551234" className="text-rose-100 hover:text-white transition-colors">
                    +1 (800) 555-1234
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-white/20 p-3 rounded-full mr-4 flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-1">Office Location</h4>
                  <p className="text-rose-100">
                    123 Wedding Lane<br />
                    Beverly Hills, CA 90210
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-white/20">
              <h4 className="text-lg font-medium mb-4">Business Hours</h4>
              <p className="text-rose-100">
                Monday - Friday: 9am - 6pm<br />
                Saturday: 10am - 4pm<br />
                Sunday: Closed
              </p>
            </div>
          </motion.div>
          
          {/* Form */}
          <motion.div 
            className="lg:w-2/3 p-12"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {submitSuccess ? (
              <motion.div 
                className="text-center py-12"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Check className="w-10 h-10 text-green-500" />
                </div>
                <h3 className="text-2xl font-serif text-gray-800 mb-3">Thank You!</h3>
                <p className="text-gray-600 mb-8 max-w-md mx-auto">
                  Your message has been sent successfully. We'll get back to you within 24 hours.
                </p>
                <motion.button
                  onClick={() => setSubmitSuccess(false)}
                  className="bg-rose-500 text-white px-8 py-3 rounded-full hover:bg-rose-600 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Send Another Message
                </motion.button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 mb-2 font-medium">
                      Your Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      // type="text"
                      // id="name"
                      // value={formData.name}
                      // onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 ${
                        errors.name ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="John & Jane"
                      {...register('name', { required: true })}
                    />
                    {errors.name?.message && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-gray-700 mb-2 font-medium">
                      Email Address <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      {...register('email', { required: true })}
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 ${
                        errors.email ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="your@email.com"
                    />
                    {errors.email?.message && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-gray-700 mb-2 font-medium">
                      Phone Number
                    </label>
                    <input
                      type="number"
                      id="phone"
                      {...register('phone')}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
                      placeholder="(123) 456-7890"
                    />
                    {errors.phone?.message && <p className='text-red-500 text-sm mt-1'>{errors.phone.message}</p>}
                  </div>
                  
                  <div>
                    <label htmlFor="weddingDate" className="block text-gray-700 mb-2 font-medium">
                      Wedding Date
                    </label>
                    <input
                      type="date"
                      id="weddingDate"
                      {...register('weddingDate')}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
                    />
                    {errors.weddingDate?.message && <p className='text-red-500 text-sm mt-1'>{errors.weddingDate.message}</p>}
                  </div>
                  
                  <div>
                    <label htmlFor="guestCount" className="block text-gray-700 mb-2 font-medium">
                      Estimated Guest Count
                    </label>
                    <select
                      id="guestCount"
                      {...register('guestCount')}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
                    >
                      <option value="">Select guest count</option>
                      <option value="1-50">1-50 guests</option>
                      <option value="51-100">51-100 guests</option>
                      <option value="101-150">101-150 guests</option>
                      <option value="151-200">151-200 guests</option>
                      <option value="200+">200+ guests</option>
                    </select>
                    {errors.guestCount?.message && <p className='text-red-500 text-sm mt-1'>{errors.guestCount.message}</p>}
                  </div>
                  
                  <div>
                    <label htmlFor="service" className="block text-gray-700 mb-2 font-medium">
                      Service Interested In
                    </label>
                    <select
                      id="service"
                      {...register('service')}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
                    >
                      <option value="">Select a service</option>
                      {services.map((service) => (
                        <option key={service} value={service}>{service}</option>
                      ))}
                    </select>
                    {errors.service?.message && <p className='text-red-500 text-sm mt-1'>{errors.service.message}</p>}
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-gray-700 mb-2 font-medium">
                    Your Message <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    {...register('message', { required: true })}
                    rows={5}
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 ${
                      errors.message ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Tell us about your dream wedding..."
                  />
                  {errors.message?.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
                </div>
                
                <motion.button
                  type="submit"
                  className="w-full bg-rose-500 text-white px-6 py-4 rounded-lg hover:bg-rose-600 transition-colors flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    'Sending...'
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;