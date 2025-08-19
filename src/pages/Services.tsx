import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, Code, Database, Globe, Layers, LayoutGrid, Smartphone, Wand2, BarChart2, Server, Zap, MessageSquare } from 'lucide-react';
import AnimatedSection from '../components/utils/AnimatedSection';

interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
  color: string;
}

const Services: React.FC = () => {
  const [activeTab, setActiveTab] = useState('all');

  const services: Service[] = [
    {
      id: 'web',
      title: 'Web Development',
      description: 'Custom websites and web applications tailored to your specific business needs and objectives.',
      icon: <Globe className="h-6 w-6" />,
      features: [
        'Responsive design for all devices',
        'Custom CMS integration',
        'E-commerce functionality',
        'Progressive Web Apps (PWAs)',
        'API development and integration',
        'Web accessibility compliance'
      ],
      color: 'primary'
    },
    {
      id: 'mobile',
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications that provide seamless user experiences.',
      icon: <Smartphone className="h-6 w-6" />,
      features: [
        'iOS and Android development',
        'Cross-platform solutions',
        'App Store optimization',
        'Push notification systems',
        'Offline functionality',
        'In-app purchase integration'
      ],
      color: 'accent'
    },
    {
      id: 'ui',
      title: 'UI/UX Design',
      description: 'User-centered design solutions that enhance user satisfaction and drive engagement.',
      icon: <Wand2 className="h-6 w-6" />,
      features: [
        'User research and personas',
        'Wireframing and prototyping',
        'Visual design and branding',
        'User testing and iteration',
        'Micro-interaction design',
        'Accessibility-first approach'
      ],
      color: 'primary'
    },
    {
      id: 'marketing',
      title: 'Digital Marketing',
      description: 'Strategic marketing solutions to boost your online presence and drive conversions.',
      icon: <BarChart2 className="h-6 w-6" />,
      features: [
        'SEO optimization',
        'Social media marketing',
        'Content strategy',
        'Email marketing campaigns',
        'PPC advertising',
        'Analytics and reporting'
      ],
      color: 'accent'
    },
    {
      id: 'cloud',
      title: 'Cloud Solutions',
      description: 'Scalable and secure cloud infrastructure for your business applications and data.',
      icon: <Server className="h-6 w-6" />,
      features: [
        'Cloud migration strategies',
        'AWS, Azure, Google Cloud expertise',
        'Serverless architecture',
        'Database optimization',
        'DevOps implementation',
        'Disaster recovery planning'
      ],
      color: 'primary'
    },
    {
      id: 'consulting',
      title: 'IT Consulting',
      description: 'Expert guidance to help you make informed technology decisions and optimize your IT infrastructure.',
      icon: <MessageSquare className="h-6 w-6" />,
      features: [
        'Technology assessment',
        'Digital transformation strategy',
        'Security audits',
        'Process optimization',
        'Technology roadmapping',
        'Vendor selection assistance'
      ],
      color: 'accent'
    },
  ];

  const categories = [
    { id: 'all', label: 'All Services' },
    { id: 'web', label: 'Web' },
    { id: 'mobile', label: 'Mobile' },
    { id: 'ui', label: 'UI/UX' },
    { id: 'marketing', label: 'Marketing' },
    { id: 'cloud', label: 'Cloud' },
    { id: 'consulting', label: 'Consulting' },
  ];

  const filteredServices = activeTab === 'all'
    ? services
    : services.filter(service => service.id === activeTab);

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
              Our Services
            </h1>
            <p className="text-white/80 text-lg max-w-3xl mx-auto">
              We offer a comprehensive range of digital services designed to
              help your business thrive in today's competitive landscape. From
              web development to cloud solutions, we have the expertise to bring
              your vision to life.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Service Categories */}
      <section className="section-container -mt-16 relative z-20">
        <div className="bg-white dark:bg-dark-800 rounded-lg shadow-xl p-4 md:p-6">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`px-4 py-2 rounded-md transition-colors ${
                  activeTab === category.id
                    ? "bg-primary-600 text-white"
                    : "bg-dark-100 dark:bg-dark-700 text-dark-600 dark:text-dark-300 hover:bg-dark-200 dark:hover:bg-dark-600"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service, index) => (
            <AnimatedSection
              key={service.id}
              delay={0.1 * index}
              className="flex flex-col h-full"
            >
              <div
                className={`bg-white dark:bg-dark-800 rounded-lg shadow-md overflow-hidden flex flex-col h-full border-t-4 ${
                  service.color === "primary"
                    ? "border-primary-600"
                    : "border-accent-500"
                }`}
              >
                <div className="p-6">
                  <div
                    className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${
                      service.color === "primary"
                        ? "bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400"
                        : "bg-accent-100 dark:bg-accent-900/30 text-accent-600 dark:text-accent-400"
                    }`}
                  >
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-primary-800 dark:text-primary-300">
                    {service.title}
                  </h3>
                  <p className="text-dark-600 dark:text-dark-300 mb-6">
                    {service.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="text-lg font-medium mb-3 text-dark-700 dark:text-dark-200">
                      Key Features
                    </h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <Check className="h-5 w-5 text-accent-500 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-dark-600 dark:text-dark-300">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-auto p-6 pt-0">
                  <Link
                    to="/contact"
                    className={`inline-flex items-center font-medium ${
                      service.color === "primary"
                        ? "text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300"
                        : "text-accent-600 dark:text-accent-400 hover:text-accent-700 dark:hover:text-accent-300"
                    } transition-colors`}
                  >
                    Learn More <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="section-container bg-primary-50 dark:bg-dark-900/30 py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="section-title">Our Process</h2>
              <p className="section-subtitle">
                We follow a proven methodology to ensure every project is
                delivered on time, within budget, and to the highest quality
                standards.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            <AnimatedSection
              delay={0.1}
              className="bg-white dark:bg-dark-800 p-6 rounded-lg shadow-md relative"
            >
              <div className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-primary-600 dark:bg-primary-400 flex items-center justify-center text-white font-bold">
                1
              </div>
              <div className="bg-primary-100 dark:bg-primary-900/30 p-4 rounded-lg inline-block mb-4">
                <Layers className="h-6 w-6 text-primary-600 dark:text-primary-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-primary-800 dark:text-primary-300">
                Discovery
              </h3>
              <p className="text-dark-600 dark:text-dark-300">
                We begin by understanding your business objectives, target
                audience, and project requirements through in-depth
                consultations.
              </p>
            </AnimatedSection>

            <AnimatedSection
              delay={0.2}
              className="bg-white dark:bg-dark-800 p-6 rounded-lg shadow-md relative"
            >
              <div className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-primary-600 dark:bg-primary-400 flex items-center justify-center text-white font-bold">
                2
              </div>
              <div className="bg-primary-100 dark:bg-primary-900/30 p-4 rounded-lg inline-block mb-4">
                <LayoutGrid className="h-6 w-6 text-primary-600 dark:text-primary-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-primary-800 dark:text-primary-300">
                Planning
              </h3>
              <p className="text-dark-600 dark:text-dark-300">
                We create detailed project specifications, wireframes, and
                timelines to ensure clear expectations and smooth execution.
              </p>
            </AnimatedSection>

            <AnimatedSection
              delay={0.3}
              className="bg-white dark:bg-dark-800 p-6 rounded-lg shadow-md relative"
            >
              <div className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-primary-600 dark:bg-primary-400 flex items-center justify-center text-white font-bold">
                3
              </div>
              <div className="bg-primary-100 dark:bg-primary-900/30 p-4 rounded-lg inline-block mb-4">
                <Code className="h-6 w-6 text-primary-600 dark:text-primary-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-primary-800 dark:text-primary-300">
                Development
              </h3>
              <p className="text-dark-600 dark:text-dark-300">
                Our expert team brings your project to life using the latest
                technologies and industry best practices.
              </p>
            </AnimatedSection>

            <AnimatedSection
              delay={0.4}
              className="bg-white dark:bg-dark-800 p-6 rounded-lg shadow-md relative"
            >
              <div className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-primary-600 dark:bg-primary-400 flex items-center justify-center text-white font-bold">
                4
              </div>
              <div className="bg-primary-100 dark:bg-primary-900/30 p-4 rounded-lg inline-block mb-4">
                <Zap className="h-6 w-6 text-primary-600 dark:text-primary-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-primary-800 dark:text-primary-300">
                Launch & Support
              </h3>
              <p className="text-dark-600 dark:text-dark-300">
                We ensure a smooth deployment and provide ongoing support to
                help you maximize the value of your digital solution.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="section-container">
        <AnimatedSection>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="section-title">Technologies We Work With</h2>
            <p className="section-subtitle">
              We leverage the latest technologies to create scalable,
              high-performance digital solutions.
            </p>
          </div>
        </AnimatedSection>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
          <AnimatedSection
            delay={0.1}
            className="bg-white dark:bg-dark-800 p-6 rounded-lg shadow-md text-center"
          >
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
              alt="React"
              className="h-16 w-16 mx-auto mb-4"
            />
            <h3 className="font-semibold text-primary-800 dark:text-primary-300">
              React
            </h3>
          </AnimatedSection>

          <AnimatedSection
            delay={0.15}
            className="bg-white dark:bg-dark-800 p-6 rounded-lg shadow-md text-center"
          >
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
              alt="Node.js"
              className="h-16 w-16 mx-auto mb-4"
            />
            <h3 className="font-semibold text-primary-800 dark:text-primary-300">
              Node.js
            </h3>
          </AnimatedSection>

          <AnimatedSection
            delay={0.2}
            className="bg-white dark:bg-dark-800 p-6 rounded-lg shadow-md text-center"
          >
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
              alt="MongoDB"
              className="h-16 w-16 mx-auto mb-4"
            />
            <h3 className="font-semibold text-primary-800 dark:text-primary-300">
              MongoDB
            </h3>
          </AnimatedSection>

          <AnimatedSection
            delay={0.25}
            className="bg-white dark:bg-dark-800 p-6 rounded-lg shadow-md text-center"
          >
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
              alt="TypeScript"
              className="h-16 w-16 mx-auto mb-4"
            />
            <h3 className="font-semibold text-primary-800 dark:text-primary-300">
              TypeScript
            </h3>
          </AnimatedSection>

          <AnimatedSection
            delay={0.3}
            className="bg-white dark:bg-dark-800 p-6 rounded-lg shadow-md text-center"
          >
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg"
              alt="Flutter"
              className="h-16 w-16 mx-auto mb-4"
            />
            <h3 className="font-semibold text-primary-800 dark:text-primary-300">
              Flutter
            </h3>
          </AnimatedSection>

          <AnimatedSection
            delay={0.35}
            className="bg-white dark:bg-dark-800 p-6 rounded-lg shadow-md text-center"
          >
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg"
              alt="AWS"
              className="h-16 w-16 mx-auto mb-4"
            />
            <h3 className="font-semibold text-primary-800 dark:text-primary-300">
              AWS
            </h3>
          </AnimatedSection>

          <AnimatedSection
            delay={0.4}
            className="bg-white dark:bg-dark-800 p-6 rounded-lg shadow-md text-center"
          >
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
              alt="Figma"
              className="h-16 w-16 mx-auto mb-4"
            />
            <h3 className="font-semibold text-primary-800 dark:text-primary-300">
              Figma
            </h3>
          </AnimatedSection>

          <AnimatedSection
            delay={0.45}
            className="bg-white dark:bg-dark-800 p-6 rounded-lg shadow-md text-center"
          >
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"
              alt="Tailwind CSS"
              className="h-16 w-16 mx-auto mb-4"
            />
            <h3 className="font-semibold text-primary-800 dark:text-primary-300">
              Tailwind CSS
            </h3>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-container">
        <div className="bg-gradient-to-r from-primary-800 to-primary-600 dark:from-primary-900 dark:to-primary-700 rounded-2xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
            <div className="col-span-3 p-10 md:p-16">
              <AnimatedSection>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Ready to Transform Your Digital Presence?
                </h2>
                <p className="text-white/80 text-lg mb-8">
                  Let's discuss how our services can help you achieve your
                  business goals. Contact us today for a free consultation.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    to="/contact"
                    className="px-6 py-3 bg-white text-primary-700 font-medium rounded-md flex items-center transition-colors hover:bg-dark-100"
                  >
                    Get In Touch <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                  <Link
                    to="/portfolio"
                    className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-medium rounded-md flex items-center transition-colors"
                  >
                    View Our Work
                  </Link>
                </div>
              </AnimatedSection>
            </div>
            <div className="col-span-2 relative hidden lg:block">
              <img
                src="https://images.pexels.com/photos/3182822/pexels-photo-3182822.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Business team working"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Services;