import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight, ChevronLeft, ChevronRight, Globe, Monitor, Smartphone, X } from 'lucide-react';
import AnimatedSection from '../components/utils/AnimatedSection';

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  client: string;
  technologies: string[];
  url?: string;
  gallery: string[];
}

const Portfolio: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web Development' },
    { id: 'mobile', label: 'Mobile Apps' },
    { id: 'ui', label: 'UI/UX Design' },
    { id: 'ecommerce', label: 'E-Commerce' },
  ];

  const projects: Project[] = [
    {
      id: 1,
      title: 'Modern E-Commerce Platform',
      category: 'ecommerce',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      description: 'A fully-featured e-commerce platform with custom product management, user accounts, and secure payment processing. The platform includes an intuitive admin dashboard for inventory management and sales analytics.',
      client: 'FashionHub Inc.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Redux', 'Express'],
      url: 'https://example.com',
      gallery: [
        'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/34577/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
      ]
    },
    {
      id: 2,
      title: 'Financial Dashboard',
      category: 'web',
      image: 'https://images.pexels.com/photos/7567444/pexels-photo-7567444.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      description: 'An intuitive financial dashboard for tracking investments and financial performance metrics. Features include real-time data visualization, custom alerts, and comprehensive reporting tools.',
      client: 'InvestPro',
      technologies: ['React', 'TypeScript', 'Chart.js', 'Node.js', 'PostgreSQL', 'Socket.io'],
      gallery: [
        'https://images.pexels.com/photos/7567444/pexels-photo-7567444.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/186461/pexels-photo-186461.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/4386158/pexels-photo-4386158.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
      ]
    },
    {
      id: 3,
      title: 'Healthcare Mobile App',
      category: 'mobile',
      image: 'https://images.pexels.com/photos/3845761/pexels-photo-3845761.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      description: 'A patient-centered mobile application for scheduling appointments, accessing medical records, and communicating with healthcare providers. The app includes secure messaging, appointment reminders, and medication tracking.',
      client: 'MedCare Solutions',
      technologies: ['React Native', 'Firebase', 'Redux', 'Node.js', 'Express', 'MongoDB'],
      gallery: [
        'https://images.pexels.com/photos/3845761/pexels-photo-3845761.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/3846009/pexels-photo-3846009.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/5699456/pexels-photo-5699456.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
      ]
    },
    {
      id: 4,
      title: 'Corporate Website Redesign',
      category: 'ui',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      description: 'Complete redesign of a corporate website focusing on modern aesthetics, improved user experience, and performance optimization. The project included user research, wireframing, prototyping, and responsive implementation.',
      client: 'TechGlobal Corp',
      technologies: ['Figma', 'Adobe XD', 'HTML5', 'CSS3', 'JavaScript', 'Webflow'],
      url: 'https://example.com',
      gallery: [
        'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
      ]
    },
    {
      id: 5,
      title: 'Real Estate Marketplace',
      category: 'web',
      image: 'https://images.pexels.com/photos/1546168/pexels-photo-1546168.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      description: 'A comprehensive real estate marketplace with property listings, advanced search functionality, virtual tours, and agent contact systems. The platform includes user accounts, saved searches, and notification preferences.',
      client: 'HomeFind Realty',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Google Maps API', 'AWS S3'],
      gallery: [
        'https://images.pexels.com/photos/1546168/pexels-photo-1546168.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
      ]
    },
    {
      id: 6,
      title: 'Fitness Tracking App',
      category: 'mobile',
      image: 'https://images.pexels.com/photos/4498362/pexels-photo-4498362.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      description: 'A comprehensive fitness tracking application with workout planning, progress monitoring, and social features. The app includes custom workout creation, activity tracking, and nutrition logging.',
      client: 'FitLife',
      technologies: ['Flutter', 'Firebase', 'Google Fit API', 'Node.js', 'MongoDB'],
      gallery: [
        'https://images.pexels.com/photos/4498362/pexels-photo-4498362.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/4498361/pexels-photo-4498361.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/4498484/pexels-photo-4498484.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
      ]
    },
    {
      id: 7,
      title: 'Online Learning Platform',
      category: 'web',
      image: 'https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      description: 'An interactive online learning platform with course management, student progress tracking, and integrated assessment tools. The platform includes video lessons, quizzes, assignments, and discussion forums.',
      client: 'EduLearn',
      technologies: ['React', 'Redux', 'Node.js', 'MongoDB', 'Express', 'Socket.io', 'AWS'],
      gallery: [
        'https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/5905700/pexels-photo-5905700.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/5905558/pexels-photo-5905558.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
      ]
    },
    {
      id: 8,
      title: 'Food Delivery App',
      category: 'mobile',
      image: 'https://images.pexels.com/photos/6169193/pexels-photo-6169193.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      description: 'A feature-rich food delivery application with restaurant browsing, order placement, and real-time tracking. The app includes user profiles, payment integration, and delivery status updates.',
      client: 'QuickBite',
      technologies: ['React Native', 'Redux', 'Firebase', 'Google Maps API', 'Stripe', 'Node.js'],
      gallery: [
        'https://images.pexels.com/photos/6169193/pexels-photo-6169193.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/6169668/pexels-photo-6169668.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/6169659/pexels-photo-6169659.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
      ]
    },
    {
      id: 9,
      title: 'E-Commerce Mobile App',
      category: 'ecommerce',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      description: 'A fully-featured e-commerce mobile application with product browsing, cart management, and secure checkout. The app includes user accounts, order history, and personalized recommendations.',
      client: 'ShopEasy',
      technologies: ['React Native', 'Redux', 'Node.js', 'MongoDB', 'Stripe', 'Firebase'],
      gallery: [
        'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/264547/pexels-photo-264547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
      ]
    }
  ];

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter(project => project.category === activeCategory);

  const openProjectModal = (project: Project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
    document.body.style.overflow = 'hidden';
  };

  const closeProjectModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  };

  const nextImage = () => {
    if (!selectedProject) return;
    setCurrentImageIndex((prevIndex) => 
      prevIndex === selectedProject.gallery.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    if (!selectedProject) return;
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? selectedProject.gallery.length - 1 : prevIndex - 1
    );
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'web':
        return <Monitor className="h-4 w-4 mr-1" />;
      case 'mobile':
        return <Smartphone className="h-4 w-4 mr-1" />;
      case 'ecommerce':
        return <Globe className="h-4 w-4 mr-1" />;
      default:
        return null;
    }
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
              Our Portfolio
            </h1>
            <p className="text-white/80 text-lg max-w-3xl mx-auto">
              Explore our diverse range of projects showcasing our expertise in web development, mobile applications, UI/UX design, and more.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Project Categories */}
      <section className="section-container -mt-16 relative z-20">
        <div className="bg-white dark:bg-dark-800 rounded-lg shadow-xl p-4 md:p-6">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-md transition-colors ${
                  activeCategory === category.id
                    ? 'bg-primary-600 text-white'
                    : 'bg-dark-100 dark:bg-dark-700 text-dark-600 dark:text-dark-300 hover:bg-dark-200 dark:hover:bg-dark-600'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <AnimatedSection key={project.id} delay={0.1 * index} className="group">
              <div 
                className="bg-white dark:bg-dark-800 rounded-lg shadow-md overflow-hidden cursor-pointer"
                onClick={() => openProjectModal(project)}
              >
                <div className="relative overflow-hidden aspect-w-16 aspect-h-9">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-56 object-cover object-center transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-100 text-primary-800 dark:bg-primary-900 dark:text-primary-300">
                        {getCategoryIcon(project.category)}
                        {categories.find(c => c.id === project.category)?.label}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-semibold mb-2 text-primary-800 dark:text-primary-300">{project.title}</h3>
                  <p className="text-dark-600 dark:text-dark-300 mb-4 line-clamp-2">{project.description}</p>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.slice(0, 3).map((tech, idx) => (
                      <span 
                        key={idx}
                        className="inline-block px-2 py-1 text-xs font-medium rounded bg-dark-100 dark:bg-dark-700 text-dark-700 dark:text-dark-300"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="inline-block px-2 py-1 text-xs font-medium rounded bg-dark-100 dark:bg-dark-700 text-dark-700 dark:text-dark-300">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                  <button className="flex items-center text-primary-600 dark:text-primary-400 font-medium hover:text-primary-700 dark:hover:text-primary-300 transition-colors">
                    View Details <ArrowRight className="ml-1 h-4 w-4" />
                  </button>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-dark-900/80 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="bg-white dark:bg-dark-800 rounded-lg shadow-xl max-w-6xl w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="relative">
              <div className="relative aspect-w-16 aspect-h-9 bg-dark-900">
                <img 
                  src={selectedProject.gallery[currentImageIndex]} 
                  alt={selectedProject.title} 
                  className="w-full h-auto max-h-[60vh] object-contain"
                />
                
                {selectedProject.gallery.length > 1 && (
                  <>
                    <button 
                      onClick={(e) => { e.stopPropagation(); prevImage(); }} 
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-dark-800/50 hover:bg-dark-800/80 text-white transition-colors"
                      aria-label="Previous image"
                    >
                      <ChevronLeft size={24} />
                    </button>
                    <button 
                      onClick={(e) => { e.stopPropagation(); nextImage(); }} 
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-dark-800/50 hover:bg-dark-800/80 text-white transition-colors"
                      aria-label="Next image"
                    >
                      <ChevronRight size={24} />
                    </button>
                  </>
                )}
                
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  {selectedProject.gallery.map((_, idx) => (
                    <button 
                      key={idx} 
                      onClick={(e) => { e.stopPropagation(); setCurrentImageIndex(idx); }}
                      className={`w-2 h-2 rounded-full ${
                        currentImageIndex === idx ? 'bg-white' : 'bg-white/40'
                      }`}
                      aria-label={`Go to image ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>
              
              <button 
                onClick={closeProjectModal} 
                className="absolute top-4 right-4 p-2 rounded-full bg-dark-800/50 hover:bg-dark-800/80 text-white transition-colors"
                aria-label="Close modal"
              >
                <X size={20} />
              </button>
            </div>
            
            <div className="p-6 md:p-8">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <h3 className="text-2xl font-bold text-primary-800 dark:text-primary-300">{selectedProject.title}</h3>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-100 text-primary-800 dark:bg-primary-900 dark:text-primary-300">
                  {getCategoryIcon(selectedProject.category)}
                  {categories.find(c => c.id === selectedProject.category)?.label}
                </span>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="md:col-span-2">
                  <h4 className="text-lg font-semibold mb-3 text-dark-800 dark:text-dark-200">Overview</h4>
                  <p className="text-dark-600 dark:text-dark-300 mb-6">{selectedProject.description}</p>
                  
                  <h4 className="text-lg font-semibold mb-3 text-dark-800 dark:text-dark-200">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {selectedProject.technologies.map((tech, idx) => (
                      <span 
                        key={idx}
                        className="inline-block px-3 py-1 text-sm font-medium rounded bg-dark-100 dark:bg-dark-700 text-dark-700 dark:text-dark-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  {selectedProject.url && (
                    <a 
                      href={selectedProject.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 rounded bg-primary-600 hover:bg-primary-700 text-white font-medium transition-colors"
                    >
                      Visit Website <ArrowUpRight className="ml-1 h-4 w-4" />
                    </a>
                  )}
                </div>
                
                <div>
                  <div className="bg-dark-50 dark:bg-dark-700 rounded-lg p-5">
                    <h4 className="text-lg font-semibold mb-4 text-dark-800 dark:text-dark-200">Project Details</h4>
                    
                    <div className="space-y-3">
                      <div>
                        <p className="text-sm text-dark-500 dark:text-dark-400">Client</p>
                        <p className="font-medium text-dark-800 dark:text-dark-200">{selectedProject.client}</p>
                      </div>
                      
                      <div>
                        <p className="text-sm text-dark-500 dark:text-dark-400">Category</p>
                        <p className="font-medium text-dark-800 dark:text-dark-200">
                          {categories.find(c => c.id === selectedProject.category)?.label}
                        </p>
                      </div>
                      
                      <div>
                        <p className="text-sm text-dark-500 dark:text-dark-400">Year</p>
                        <p className="font-medium text-dark-800 dark:text-dark-200">2023</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}

      {/* CTA Section */}
      <section className="section-container">
        <div className="bg-gradient-to-r from-primary-800 to-primary-600 dark:from-primary-900 dark:to-primary-700 rounded-2xl overflow-hidden text-center py-16 px-8">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Start Your Project?</h2>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help bring your vision to life with our expertise in digital solutions.
            </p>
            <a 
              href="/contact" 
              className="px-6 py-3 bg-white text-primary-700 font-medium rounded-md inline-flex items-center transition-colors hover:bg-dark-100"
            >
              Get In Touch <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </AnimatedSection>
        </div>
      </section>
    </motion.div>
  );
};

export default Portfolio;