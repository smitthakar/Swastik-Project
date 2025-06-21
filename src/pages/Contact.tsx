import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Phone, MapPin, Clock, CheckCircle, AlertCircle } from 'lucide-react';
import AnimatedSection from '../components/utils/AnimatedSection';

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user types
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setFormStatus('submitting');
    
    // Simulate API call
    setTimeout(() => {
      setFormStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      
      // Reset form status after some time
      setTimeout(() => {
        setFormStatus('idle');
      }, 5000);
    }, 1500);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900 to-primary-700 z-0"></div>
        <div className="absolute inset-0 opacity-20 z-0">
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-0 -left-4 w-72 h-72 bg-white opacity-10 rounded-full filter blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-400 opacity-10 rounded-full filter blur-3xl"></div>
          </div>
        </div>
        <div className="section-container relative z-10 text-center">
          <AnimatedSection>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Get In Touch
            </h1>
            <p className="text-white/80 text-lg max-w-3xl mx-auto">
              Have a project in mind or want to learn more about our services? We'd love to hear from you. Fill out the form below and our team will get back to you shortly.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section-container -mt-16 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Contact Info */}
          <AnimatedSection delay={0.1} className="lg:col-span-2">
            <div className="bg-white dark:bg-dark-800 rounded-lg shadow-xl p-6 md:p-8">
              <h2 className="text-2xl font-bold mb-6 text-primary-800 dark:text-primary-300">Contact Information</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-primary-100 dark:bg-primary-900/30 p-3 rounded-lg mr-4">
                    <Mail className="h-5 w-5 text-primary-600 dark:text-primary-400" />
                  </div>
                  <div>
                    <h3 className="font-medium text-dark-800 dark:text-dark-200">Email Us</h3>
                    <a href="mailto:info@innovatex.com" className="text-dark-600 dark:text-dark-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">info@innovatex.com</a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary-100 dark:bg-primary-900/30 p-3 rounded-lg mr-4">
                    <Phone className="h-5 w-5 text-primary-600 dark:text-primary-400" />
                  </div>
                  <div>
                    <h3 className="font-medium text-dark-800 dark:text-dark-200">Call Us</h3>
                    <a href="tel:+11234567890" className="text-dark-600 dark:text-dark-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">+1 (123) 456-7890</a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary-100 dark:bg-primary-900/30 p-3 rounded-lg mr-4">
                    <MapPin className="h-5 w-5 text-primary-600 dark:text-primary-400" />
                  </div>
                  <div>
                    <h3 className="font-medium text-dark-800 dark:text-dark-200">Visit Us</h3>
                    <p className="text-dark-600 dark:text-dark-300">123 Innovation Street, Tech City, TC 10111</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary-100 dark:bg-primary-900/30 p-3 rounded-lg mr-4">
                    <Clock className="h-5 w-5 text-primary-600 dark:text-primary-400" />
                  </div>
                  <div>
                    <h3 className="font-medium text-dark-800 dark:text-dark-200">Business Hours</h3>
                    <p className="text-dark-600 dark:text-dark-300">Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p className="text-dark-600 dark:text-dark-300">Saturday - Sunday: Closed</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-8 border-t border-dark-100 dark:border-dark-700">
                <h3 className="font-medium text-dark-800 dark:text-dark-200 mb-4">Connect With Us</h3>
                <div className="flex space-x-4">
                  <a href="#" className="bg-dark-100 dark:bg-dark-700 hover:bg-primary-100 dark:hover:bg-primary-900/30 p-3 rounded-lg text-dark-600 dark:text-dark-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                    </svg>
                  </a>
                  <a href="#" className="bg-dark-100 dark:bg-dark-700 hover:bg-primary-100 dark:hover:bg-primary-900/30 p-3 rounded-lg text-dark-600 dark:text-dark-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                    </svg>
                  </a>
                  <a href="#" className="bg-dark-100 dark:bg-dark-700 hover:bg-primary-100 dark:hover:bg-primary-900/30 p-3 rounded-lg text-dark-600 dark:text-dark-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>
                  <a href="#" className="bg-dark-100 dark:bg-dark-700 hover:bg-primary-100 dark:hover:bg-primary-900/30 p-3 rounded-lg text-dark-600 dark:text-dark-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </AnimatedSection>
          
          {/* Contact Form */}
          <AnimatedSection delay={0.2} className="lg:col-span-3">
            <div className="bg-white dark:bg-dark-800 rounded-lg shadow-xl p-6 md:p-8">
              <h2 className="text-2xl font-bold mb-6 text-primary-800 dark:text-primary-300">Send Us a Message</h2>
              
              {formStatus === 'success' ? (
                <div className="bg-green-50 dark:bg-green-900/20 text-green-800 dark:text-green-300 p-4 rounded-lg flex items-start mb-6">
                  <CheckCircle className="h-5 w-5 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">Message Sent Successfully!</p>
                    <p className="mt-1">Thank you for reaching out. We'll get back to you as soon as possible.</p>
                  </div>
                </div>
              ) : formStatus === 'error' ? (
                <div className="bg-red-50 dark:bg-red-900/20 text-red-800 dark:text-red-300 p-4 rounded-lg flex items-start mb-6">
                  <AlertCircle className="h-5 w-5 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">Something went wrong!</p>
                    <p className="mt-1">There was an error sending your message. Please try again.</p>
                  </div>
                </div>
              ) : null}
              
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-dark-700 dark:text-dark-300 mb-1">Your Name*</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 rounded-md border ${
                        errors.name 
                          ? 'border-red-500 dark:border-red-500 focus:ring-red-500 dark:focus:ring-red-500' 
                          : 'border-dark-300 dark:border-dark-600 focus:ring-primary-500 dark:focus:ring-primary-500'
                      } bg-white dark:bg-dark-700 text-dark-800 dark:text-white focus:outline-none focus:ring-2 transition-colors`}
                      placeholder="John Doe"
                    />
                    {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-dark-700 dark:text-dark-300 mb-1">Your Email*</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 rounded-md border ${
                        errors.email 
                          ? 'border-red-500 dark:border-red-500 focus:ring-red-500 dark:focus:ring-red-500' 
                          : 'border-dark-300 dark:border-dark-600 focus:ring-primary-500 dark:focus:ring-primary-500'
                      } bg-white dark:bg-dark-700 text-dark-800 dark:text-white focus:outline-none focus:ring-2 transition-colors`}
                      placeholder="john@example.com"
                    />
                    {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-dark-700 dark:text-dark-300 mb-1">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-md border border-dark-300 dark:border-dark-600 bg-white dark:bg-dark-700 text-dark-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-500 transition-colors"
                      placeholder="+1 (123) 456-7890"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-dark-700 dark:text-dark-300 mb-1">Subject</label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-md border border-dark-300 dark:border-dark-600 bg-white dark:bg-dark-700 text-dark-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-500 transition-colors"
                    >
                      <option value="">Select a subject</option>
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Project Quotation">Project Quotation</option>
                      <option value="Partnership Opportunity">Partnership Opportunity</option>
                      <option value="Job Application">Job Application</option>
                      <option value="Support">Support</option>
                    </select>
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-dark-700 dark:text-dark-300 mb-1">Your Message*</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className={`w-full px-4 py-2 rounded-md border ${
                      errors.message 
                        ? 'border-red-500 dark:border-red-500 focus:ring-red-500 dark:focus:ring-red-500' 
                        : 'border-dark-300 dark:border-dark-600 focus:ring-primary-500 dark:focus:ring-primary-500'
                    } bg-white dark:bg-dark-700 text-dark-800 dark:text-white focus:outline-none focus:ring-2 transition-colors`}
                    placeholder="Tell us about your project or inquiry..."
                  ></textarea>
                  {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
                </div>
                
                <button
                  type="submit"
                  disabled={formStatus === 'submitting'}
                  className={`px-6 py-3 bg-primary-600 text-white font-medium rounded-md inline-flex items-center transition-colors ${
                    formStatus === 'submitting' 
                      ? 'opacity-75 cursor-not-allowed' 
                      : 'hover:bg-primary-700'
                  }`}
                >
                  {formStatus === 'submitting' ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message <Send className="ml-2 h-4 w-4" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Map Section */}
      <section className="section-container">
        <AnimatedSection>
          <div className="bg-white dark:bg-dark-800 rounded-lg shadow-xl overflow-hidden">
            <div className="aspect-w-16 aspect-h-9 w-full h-96">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.3059445135!2d-74.25986613799748!3d40.69714941774136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sca!4v1655393795429!5m2!1sen!2sca"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Office Location"
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* FAQ Section */}
      <section className="section-container">
        <AnimatedSection>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-subtitle">
              Find answers to common questions about our services and process.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          <AnimatedSection delay={0.1} className="bg-white dark:bg-dark-800 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-primary-800 dark:text-primary-300">What services do you offer?</h3>
            <p className="text-dark-600 dark:text-dark-300">
              We offer a comprehensive range of digital services including web development, mobile app development, UI/UX design, digital marketing, cloud solutions, and IT consulting.
            </p>
          </AnimatedSection>
          
          <AnimatedSection delay={0.15} className="bg-white dark:bg-dark-800 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-primary-800 dark:text-primary-300">How much does a typical project cost?</h3>
            <p className="text-dark-600 dark:text-dark-300">
              Project costs vary depending on requirements, complexity, and scope. We provide detailed quotes after an initial consultation to understand your specific needs.
            </p>
          </AnimatedSection>
          
          <AnimatedSection delay={0.2} className="bg-white dark:bg-dark-800 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-primary-800 dark:text-primary-300">How long does a project take to complete?</h3>
            <p className="text-dark-600 dark:text-dark-300">
              Project timelines depend on scope and complexity. A simple website might take 4-6 weeks, while a complex application could take several months. We provide estimated timelines during our project planning phase.
            </p>
          </AnimatedSection>
          
          <AnimatedSection delay={0.25} className="bg-white dark:bg-dark-800 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-primary-800 dark:text-primary-300">Do you offer ongoing support and maintenance?</h3>
            <p className="text-dark-600 dark:text-dark-300">
              Yes, we offer various support and maintenance packages to ensure your digital solutions continue to perform optimally after launch. These can be tailored to your specific needs and budget.
            </p>
          </AnimatedSection>
          
          <AnimatedSection delay={0.3} className="bg-white dark:bg-dark-800 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-primary-800 dark:text-primary-300">What is your design process like?</h3>
            <p className="text-dark-600 dark:text-dark-300">
              Our design process begins with discovery, followed by wireframing, visual design, prototyping, and user testing. We involve clients at each stage to ensure the final product meets your expectations and user needs.
            </p>
          </AnimatedSection>
          
          <AnimatedSection delay={0.35} className="bg-white dark:bg-dark-800 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-primary-800 dark:text-primary-300">Do you work with clients internationally?</h3>
            <p className="text-dark-600 dark:text-dark-300">
              Yes, we work with clients globally. Our team is experienced in remote collaboration and we use various tools to ensure smooth communication and project management regardless of location.
            </p>
          </AnimatedSection>
        </div>
      </section>
    </motion.div>
  );
};

export default Contact;