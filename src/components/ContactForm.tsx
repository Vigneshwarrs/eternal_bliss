import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Check, Send, Loader2 } from 'lucide-react';
import { useForm, SubmitHandler } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { API_URL } from '../main';

type FormValues = {
  name: string;
  email: string;
  phone: string;
  weddingDate: string;
  guestCount: string;
  service: string;
  message: string;
};

const services = [
  'Full Wedding Planning',
  'Partial Planning',
  'Day-of Coordination',
  'Venue Selection',
  'Design & Styling',
  'Other Inquiry'
];

const guestCountOptions = [
  '1-50 guests',
  '51-100 guests',
  '101-150 guests',
  '151-200 guests',
  '200+ guests'
];

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .required('Name is required')
    .min(2, 'Name must be at least 2 characters'),
  email: Yup.string()
    .email('Please enter a valid email')
    .required('Email is required'),
  phone: Yup.string()
    .matches(
      /^(\+\d{1,3}[- ]?)?\d{10}$/,
      'Phone number must be valid (10 digits)'
    )
    .required('Phone number is required'),
  weddingDate: Yup.string()
    .required('Wedding date is required'),
  guestCount: Yup.string()
    .required('Guest count is required')
    .oneOf(guestCountOptions, 'Please select a valid option'),
  service: Yup.string()
    .required('Service is required')
    .oneOf(services, 'Please select a valid service'),
  message: Yup.string()
    .required('Message is required')
    .min(20, 'Message should be at least 20 characters')
});

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<FormValues>({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      weddingDate: '',
      guestCount: '',
      service: '',
      message: ''
    }
  });

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    setIsSubmitting(true);
    try {
      const response = await axios.post(
        `${API_URL}/api/v1/contact-form`,
        data
      );
      
      if (response.status === 201) {
        toast.success('Message sent successfully!',{
          position: 'bottom-center',
          duration: 3000
        });
        reset();
        setSubmitSuccess(true);
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      toast.error(
        'There was an error sending your message. Please try again.'
        ,{
          position: 'bottom-center',
          duration: 3000
        });
      console.log('Submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

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
            Let's create your dream wedding together. Reach out to schedule a
            consultation.
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
                  <a
                    href="mailto:hello@eternalbliss.com"
                    className="text-rose-100 hover:text-white transition-colors"
                  >
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
                  <a
                    href="tel:+18005551234"
                    className="text-rose-100 hover:text-white transition-colors"
                  >
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
                    123 Wedding Lane
                    <br />
                    Beverly Hills, CA 90210
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-white/20">
              <h4 className="text-lg font-medium mb-4">Business Hours</h4>
              <p className="text-rose-100">
                Monday - Friday: 9am - 6pm
                <br />
                Saturday: 10am - 4pm
                <br />
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
                <h3 className="text-2xl font-serif text-gray-800 mb-3">
                  Thank You!
                </h3>
                <p className="text-gray-600 mb-8 max-w-md mx-auto">
                  Your message has been sent successfully. We'll get back to you
                  within 24 hours.
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
                  {/* Name Field */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-gray-700 mb-2 font-medium"
                    >
                      Your Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="name"
                      {...register('name')}
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 ${
                        errors.name ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="John & Jane"
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  {/* Email Field */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-gray-700 mb-2 font-medium"
                    >
                      Email Address <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      {...register('email')}
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 ${
                        errors.email ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="your@email.com"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  {/* Phone Field */}
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-gray-700 mb-2 font-medium"
                    >
                      Phone Number <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      {...register('phone')}
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 ${
                        errors.phone ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="(123) 456-7890"
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.phone.message}
                      </p>
                    )}
                  </div>

                  {/* Wedding Date Field */}
                  <div>
                    <label
                      htmlFor="weddingDate"
                      className="block text-gray-700 mb-2 font-medium"
                    >
                      Wedding Date <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="date"
                      id="weddingDate"
                      {...register('weddingDate')}
                      min={new Date().toISOString().split('T')[0]}
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 ${
                        errors.weddingDate ? 'border-red-500' : 'border-gray-300'
                      }`}
                    />
                    {errors.weddingDate && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.weddingDate.message}
                      </p>
                    )}
                  </div>

                  {/* Guest Count Field */}
                  <div>
                    <label
                      htmlFor="guestCount"
                      className="block text-gray-700 mb-2 font-medium"
                    >
                      Estimated Guest Count <span className="text-rose-500">*</span>
                    </label>
                    <select
                      id="guestCount"
                      {...register('guestCount')}
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 ${
                        errors.guestCount ? 'border-red-500' : 'border-gray-300'
                      }`}
                    >
                      <option value="">Select guest count</option>
                      {guestCountOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                    {errors.guestCount && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.guestCount.message}
                      </p>
                    )}
                  </div>

                  {/* Service Field */}
                  <div>
                    <label
                      htmlFor="service"
                      className="block text-gray-700 mb-2 font-medium"
                    >
                      Service Interested In <span className="text-rose-500">*</span>
                    </label>
                    <select
                      id="service"
                      {...register('service')}
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 ${
                        errors.service ? 'border-red-500' : 'border-gray-300'
                      }`}
                    >
                      <option value="">Select a service</option>
                      {services.map((service) => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                    {errors.service && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.service.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* Message Field */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-gray-700 mb-2 font-medium"
                  >
                    Your Message <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    {...register('message')}
                    rows={5}
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 ${
                      errors.message ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Tell us about your dream wedding..."
                  />
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  className="w-full bg-rose-500 text-white px-6 py-4 rounded-lg hover:bg-rose-600 transition-colors flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>Sending...</span>
                    </>
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