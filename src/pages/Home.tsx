import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Check, BarChart, Smartphone, Globe, Zap, Users, Server } from 'lucide-react';
import AnimatedSection from '../components/utils/AnimatedSection';

const Home: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary-900/90 to-accent-900/90 z-10"></div>
          <img 
            src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1600" 
            alt="Business team" 
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div className="section-container relative z-10 pt-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.h1 
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Transforming Ideas Into <span className="text-accent-400">Digital Reality</span>
              </motion.h1>
              <motion.p 
                className="mt-6 text-xl text-white/80 max-w-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                We build innovative solutions that drive business growth and deliver exceptional user experiences.
              </motion.p>
              <motion.div 
                className="mt-8 flex flex-wrap gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <Link 
                  to="/contact" 
                  className="px-6 py-3 bg-accent-500 hover:bg-accent-600 text-white font-medium rounded-md flex items-center transition-all"
                >
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link 
                  to="/portfolio" 
                  className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-medium rounded-md flex items-center transition-all"
                >
                  View Our Work
                </Link>
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="hidden lg:block"
            >
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-accent-400 rounded-lg opacity-20"></div>
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary-400 rounded-lg opacity-20"></div>
                <div className="relative z-10 bg-white/10 backdrop-blur-lg p-6 rounded-lg border border-white/20">
                  <img 
                    src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1600" 
                    alt="Digital solutions" 
                    className="w-full h-auto rounded-md"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1, repeat: Infinity, repeatType: 'reverse' }}
        >
          <div className="w-8 h-12 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2"></div>
          </div>
        </motion.div>
      </section>

      {/* Services Preview */}
      <section className="section-container">
        <AnimatedSection>
          <div className="text-center">
            <h2 className="section-title">Our Services</h2>
            <p className="section-subtitle mx-auto">
              We offer a comprehensive range of digital services to help your business thrive in the digital era.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          <AnimatedSection delay={0.1} className="bg-white dark:bg-dark-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border border-dark-100 dark:border-dark-700">
            <div className="bg-primary-100 dark:bg-primary-900/30 p-4 rounded-lg inline-block mb-4">
              <Globe className="h-6 w-6 text-primary-600 dark:text-primary-400" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Web Development</h3>
            <p className="text-dark-600 dark:text-dark-300 mb-4">
              Custom websites and web applications that are responsive, fast, and built with modern technologies.
            </p>
            <Link to="/services" className="flex items-center text-primary-600 dark:text-primary-400 font-medium hover:text-primary-700 dark:hover:text-primary-300 transition-colors">
              Learn More <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </AnimatedSection>

          <AnimatedSection delay={0.2} className="bg-white dark:bg-dark-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border border-dark-100 dark:border-dark-700">
            <div className="bg-primary-100 dark:bg-primary-900/30 p-4 rounded-lg inline-block mb-4">
              <Smartphone className="h-6 w-6 text-primary-600 dark:text-primary-400" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Mobile Applications</h3>
            <p className="text-dark-600 dark:text-dark-300 mb-4">
              Native and cross-platform mobile apps that provide seamless user experiences across all devices.
            </p>
            <Link to="/services" className="flex items-center text-primary-600 dark:text-primary-400 font-medium hover:text-primary-700 dark:hover:text-primary-300 transition-colors">
              Learn More <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </AnimatedSection>

          <AnimatedSection delay={0.3} className="bg-white dark:bg-dark-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border border-dark-100 dark:border-dark-700">
            <div className="bg-primary-100 dark:bg-primary-900/30 p-4 rounded-lg inline-block mb-4">
              <Zap className="h-6 w-6 text-primary-600 dark:text-primary-400" />
            </div>
            <h3 className="text-xl font-semibold mb-3">UI/UX Design</h3>
            <p className="text-dark-600 dark:text-dark-300 mb-4">
              Intuitive and engaging user interfaces with a focus on user experience and conversion optimization.
            </p>
            <Link to="/services" className="flex items-center text-primary-600 dark:text-primary-400 font-medium hover:text-primary-700 dark:hover:text-primary-300 transition-colors">
              Learn More <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </AnimatedSection>

          <AnimatedSection delay={0.4} className="bg-white dark:bg-dark-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border border-dark-100 dark:border-dark-700">
            <div className="bg-primary-100 dark:bg-primary-900/30 p-4 rounded-lg inline-block mb-4">
              <BarChart className="h-6 w-6 text-primary-600 dark:text-primary-400" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Digital Marketing</h3>
            <p className="text-dark-600 dark:text-dark-300 mb-4">
              Data-driven strategies to boost your online presence and drive targeted traffic to your digital assets.
            </p>
            <Link to="/services" className="flex items-center text-primary-600 dark:text-primary-400 font-medium hover:text-primary-700 dark:hover:text-primary-300 transition-colors">
              Learn More <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </AnimatedSection>

          <AnimatedSection delay={0.5} className="bg-white dark:bg-dark-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border border-dark-100 dark:border-dark-700">
            <div className="bg-primary-100 dark:bg-primary-900/30 p-4 rounded-lg inline-block mb-4">
              <Server className="h-6 w-6 text-primary-600 dark:text-primary-400" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Cloud Solutions</h3>
            <p className="text-dark-600 dark:text-dark-300 mb-4">
              Scalable cloud infrastructure that ensures your applications run efficiently and securely.
            </p>
            <Link to="/services" className="flex items-center text-primary-600 dark:text-primary-400 font-medium hover:text-primary-700 dark:hover:text-primary-300 transition-colors">
              Learn More <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </AnimatedSection>

          <AnimatedSection delay={0.6} className="bg-white dark:bg-dark-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border border-dark-100 dark:border-dark-700">
            <div className="bg-primary-100 dark:bg-primary-900/30 p-4 rounded-lg inline-block mb-4">
              <Users className="h-6 w-6 text-primary-600 dark:text-primary-400" />
            </div>
            <h3 className="text-xl font-semibold mb-3">IT Consulting</h3>
            <p className="text-dark-600 dark:text-dark-300 mb-4">
              Expert guidance to help you navigate the complex digital landscape and make informed technology decisions.
            </p>
            <Link to="/services" className="flex items-center text-primary-600 dark:text-primary-400 font-medium hover:text-primary-700 dark:hover:text-primary-300 transition-colors">
              Learn More <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-primary-900 dark:bg-primary-900 py-16 md:py-24">
        <div className="section-container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <AnimatedSection className="text-white">
              <div className="text-4xl md:text-5xl font-bold text-accent-400 mb-2">250+</div>
              <p className="text-white/70">Projects Completed</p>
            </AnimatedSection>
            
            <AnimatedSection delay={0.1} className="text-white">
              <div className="text-4xl md:text-5xl font-bold text-accent-400 mb-2">120+</div>
              <p className="text-white/70">Happy Clients</p>
            </AnimatedSection>
            
            <AnimatedSection delay={0.2} className="text-white">
              <div className="text-4xl md:text-5xl font-bold text-accent-400 mb-2">15+</div>
              <p className="text-white/70">Years Experience</p>
            </AnimatedSection>
            
            <AnimatedSection delay={0.3} className="text-white">
              <div className="text-4xl md:text-5xl font-bold text-accent-400 mb-2">99%</div>
              <p className="text-white/70">Client Satisfaction</p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Featured Work */}
      <section className="section-container">
        <AnimatedSection>
          <div className="text-center">
            <h2 className="section-title">Featured Projects</h2>
            <p className="section-subtitle mx-auto">
              Explore some of our recent work that showcases our expertise and creativity.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          <AnimatedSection delay={0.1} className="group overflow-hidden rounded-lg relative">
            <div className="relative overflow-hidden rounded-lg">
              <img 
                src="https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Project 1" 
                className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-900/90 to-dark-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">E-Commerce Platform</h3>
                  <p className="text-white/80 mb-4">A fully-featured online store with custom product management and payment processing.</p>
                  <Link to="/portfolio" className="inline-flex items-center text-accent-400 hover:text-accent-300 transition-colors">
                    View Case Study <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2} className="group overflow-hidden rounded-lg relative">
            <div className="relative overflow-hidden rounded-lg">
              <img 
                src="https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Project 2" 
                className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-900/90 to-dark-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">Financial Dashboard</h3>
                  <p className="text-white/80 mb-4">An intuitive dashboard for tracking investments and financial performance metrics.</p>
                  <Link to="/portfolio" className="inline-flex items-center text-accent-400 hover:text-accent-300 transition-colors">
                    View Case Study <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.3} className="group overflow-hidden rounded-lg relative">
            <div className="relative overflow-hidden rounded-lg">
              <img 
                src="https://images.pexels.com/photos/5077064/pexels-photo-5077064.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Project 3" 
                className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-900/90 to-dark-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">Healthcare Mobile App</h3>
                  <p className="text-white/80 mb-4">A patient-centered mobile application for scheduling appointments and tracking health data.</p>
                  <Link to="/portfolio" className="inline-flex items-center text-accent-400 hover:text-accent-300 transition-colors">
                    View Case Study <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>

        <div className="text-center mt-12">
          <Link 
            to="/portfolio" 
            className="px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-md inline-flex items-center transition-colors"
          >
            View All Projects <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-container">
        <div className="bg-gradient-to-r from-primary-800 to-primary-600 dark:from-primary-900 dark:to-primary-700 rounded-2xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="p-10 md:p-16 flex flex-col justify-center">
              <AnimatedSection>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
                <p className="text-white/80 text-lg mb-8">
                  Let's discuss how our custom solutions can help you achieve your business goals and drive growth.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link 
                    to="/contact" 
                    className="px-6 py-3 bg-accent-500 hover:bg-accent-600 text-white font-medium rounded-md flex items-center transition-colors"
                  >
                    Schedule a Consultation <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                  <Link 
                    to="/services" 
                    className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-medium rounded-md flex items-center transition-colors"
                  >
                    Explore Services
                  </Link>
                </div>
              </AnimatedSection>
            </div>
            <div className="hidden lg:block relative">
              <img 
                src="https://images.pexels.com/photos/3182811/pexels-photo-3182811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Business meeting" 
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;