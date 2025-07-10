import React from 'react';
import { motion } from 'framer-motion';
import { Award, Clock, Coffee, Code, Heart, Target, Users } from 'lucide-react';
import AnimatedSection from '../components/utils/AnimatedSection';

const About: React.FC = () => {
  const teamMembers = [
    {
      name: 'Vaidik Limbachiya',
      position: 'Co-Founder',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      bio: 'With over 15 years of experience in the tech industry, John leads our company with vision and strategic direction.'
    },
    {
      name: 'Darshan Sarvaiya',
      position: 'CTO',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      bio: 'Sarah brings technical excellence and innovation to our team, ensuring we stay at the cutting edge of technology.'
    },
    {
      name: 'Smit Thakar',
      position: 'Creative Director',
      image: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      bio: "Michael's eye for design and user experience has shaped our signature aesthetic and approach to digital products."
    },
    {
      name: 'Jay Vaghela',
      position: 'Head of Marketing',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      bio: 'Emily crafts our brand story and ensures our message reaches the right audience with maximum impact.'
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-primary-50 dark:bg-dark-800 -skew-y-6 origin-top-left transform-gpu z-0"></div>
        <div className="section-container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <h1 className="text-4xl md:text-5xl font-bold text-primary-800 dark:text-primary-300 mb-6">
                About Swastik
              </h1>
              <p className="text-dark-600 dark:text-dark-300 text-lg mb-6">
                Founded in 2010, Swastik has grown from a small startup to a leading digital solutions provider. Our journey has been defined by innovation, quality, and a relentless focus on client success.
              </p>
              <p className="text-dark-600 dark:text-dark-300 text-lg">
                We believe in harnessing the power of technology to solve complex business challenges and create meaningful digital experiences that drive growth and engagement.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-accent-400 rounded-lg opacity-20"></div>
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary-400 rounded-lg opacity-20"></div>
                <div className="relative z-10 bg-white dark:bg-dark-700 p-2 rounded-lg shadow-lg">
                  <img 
                    src="https://images.pexels.com/photos/3182781/pexels-photo-3182781.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                    alt="Our team" 
                    className="w-full h-auto rounded"
                  />
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Our Mission & Vision */}
      <section className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <AnimatedSection className="bg-white dark:bg-dark-800 p-8 rounded-lg shadow-md border border-dark-100 dark:border-dark-700">
            <div className="bg-primary-100 dark:bg-primary-900/30 p-4 rounded-lg inline-block mb-4">
              <Target className="h-6 w-6 text-primary-600 dark:text-primary-400" />
            </div>
            <h2 className="text-2xl font-bold mb-4 text-primary-800 dark:text-primary-300">Our Mission</h2>
            <p className="text-dark-600 dark:text-dark-300">
              To empower businesses through innovative digital solutions that drive growth, enhance user experiences, and create lasting value. We are committed to delivering excellence in every project, big or small.
            </p>
          </AnimatedSection>
          
          <AnimatedSection delay={0.1} className="bg-white dark:bg-dark-800 p-8 rounded-lg shadow-md border border-dark-100 dark:border-dark-700">
            <div className="bg-primary-100 dark:bg-primary-900/30 p-4 rounded-lg inline-block mb-4">
              <Heart className="h-6 w-6 text-primary-600 dark:text-primary-400" />
            </div>
            <h2 className="text-2xl font-bold mb-4 text-primary-800 dark:text-primary-300">Our Vision</h2>
            <p className="text-dark-600 dark:text-dark-300">
              To be the most trusted partner for digital transformation, recognized globally for our innovative solutions, technical excellence, and exceptional client service. We aspire to shape the future of digital experiences.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Company Values */}
      <section className="section-container bg-primary-50 dark:bg-dark-900/30 py-16 md:py-24 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 lg:mx-auto">
        <AnimatedSection>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="section-title">Our Values</h2>
            <p className="section-subtitle">
              These core principles guide everything we do and define who we are as a company.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          <AnimatedSection delay={0.1} className="bg-white dark:bg-dark-800 p-6 rounded-lg shadow-md">
            <div className="bg-primary-100 dark:bg-primary-900/30 p-4 rounded-lg inline-block mb-4">
              <Award className="h-6 w-6 text-primary-600 dark:text-primary-400" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-primary-800 dark:text-primary-300">Excellence</h3>
            <p className="text-dark-600 dark:text-dark-300">
              We strive for excellence in everything we do, from code quality to client communication. We set high standards and consistently meet them.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.2} className="bg-white dark:bg-dark-800 p-6 rounded-lg shadow-md">
            <div className="bg-primary-100 dark:bg-primary-900/30 p-4 rounded-lg inline-block mb-4">
              <Code className="h-6 w-6 text-primary-600 dark:text-primary-400" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-primary-800 dark:text-primary-300">Innovation</h3>
            <p className="text-dark-600 dark:text-dark-300">
              We embrace creativity and forward-thinking, constantly exploring new technologies and approaches to solve complex problems.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.3} className="bg-white dark:bg-dark-800 p-6 rounded-lg shadow-md">
            <div className="bg-primary-100 dark:bg-primary-900/30 p-4 rounded-lg inline-block mb-4">
              <Users className="h-6 w-6 text-primary-600 dark:text-primary-400" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-primary-800 dark:text-primary-300">Collaboration</h3>
            <p className="text-dark-600 dark:text-dark-300">
              We believe in the power of teamwork, both internally and with our clients. The best solutions emerge from diverse perspectives.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.4} className="bg-white dark:bg-dark-800 p-6 rounded-lg shadow-md">
            <div className="bg-primary-100 dark:bg-primary-900/30 p-4 rounded-lg inline-block mb-4">
              <Clock className="h-6 w-6 text-primary-600 dark:text-primary-400" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-primary-800 dark:text-primary-300">Reliability</h3>
            <p className="text-dark-600 dark:text-dark-300">
              We deliver on our promises, meeting deadlines and exceeding expectations. Our clients can count on us when it matters most.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.5} className="bg-white dark:bg-dark-800 p-6 rounded-lg shadow-md">
            <div className="bg-primary-100 dark:bg-primary-900/30 p-4 rounded-lg inline-block mb-4">
              <Coffee className="h-6 w-6 text-primary-600 dark:text-primary-400" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-primary-800 dark:text-primary-300">Passion</h3>
            <p className="text-dark-600 dark:text-dark-300">
              We love what we do, and it shows in our work. Our enthusiasm drives us to go above and beyond for every project.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.6} className="bg-white dark:bg-dark-800 p-6 rounded-lg shadow-md">
            <div className="bg-primary-100 dark:bg-primary-900/30 p-4 rounded-lg inline-block mb-4">
              <Target className="h-6 w-6 text-primary-600 dark:text-primary-400" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-primary-800 dark:text-primary-300">Client Focus</h3>
            <p className="text-dark-600 dark:text-dark-300">
              We put our clients at the center of everything we do, listening carefully to their needs and tailoring solutions accordingly.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Our Team */}
      <section className="section-container">
        <AnimatedSection>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="section-title">Meet Our Team</h2>
            <p className="section-subtitle">
              Our talented team brings together diverse expertise and a shared passion for creating exceptional digital experiences.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {teamMembers.map((member, index) => (
            <AnimatedSection key={member.name} delay={0.1 * index}>
              <div className="bg-white dark:bg-dark-800 rounded-lg shadow-md overflow-hidden group">
                <div className="aspect-w-1 aspect-h-1 relative overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-72 object-cover object-center transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-900/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-semibold text-primary-800 dark:text-primary-300">{member.name}</h3>
                  <p className="text-accent-600 dark:text-accent-400 mb-3">{member.position}</p>
                  <p className="text-dark-600 dark:text-dark-300 text-sm">{member.bio}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Company Timeline */}
      {/* <section className="section-container">
        <AnimatedSection>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="section-title">Our Journey</h2>
            <p className="section-subtitle">
              From humble beginnings to industry leadership, explore the key milestones that have shaped our company.
            </p>
          </div>
        </AnimatedSection>

        <div className="relative mt-16">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary-200 dark:bg-primary-900/30"></div>
          
          <div className="space-y-12">
            <AnimatedSection className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-4 w-8 h-8 rounded-full bg-primary-600 dark:bg-primary-400 border-4 border-white dark:border-dark-800 z-10"></div>
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-8">
                <div className="md:col-span-2 md:text-right md:pr-8">
                  <h3 className="text-xl font-semibold text-primary-800 dark:text-primary-300">2010</h3>
                  <h4 className="text-lg font-medium text-accent-600 dark:text-accent-400">Company Founded</h4>
                </div>
                <div className="md:col-span-3 md:pl-8 bg-white dark:bg-dark-800 p-6 rounded-lg shadow-md">
                  <p className="text-dark-600 dark:text-dark-300">
                    Swastik was founded with a mission to provide quality web development services to small businesses. Starting with just 3 team members, we worked from a small office space focusing on local clients.
                  </p>
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.1} className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-4 w-8 h-8 rounded-full bg-primary-600 dark:bg-primary-400 border-4 border-white dark:border-dark-800 z-10"></div>
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-8">
                <div className="md:col-span-2 md:text-right md:pr-8">
                  <h3 className="text-xl font-semibold text-primary-800 dark:text-primary-300">2013</h3>
                  <h4 className="text-lg font-medium text-accent-600 dark:text-accent-400">Expansion Phase</h4>
                </div>
                <div className="md:col-span-3 md:pl-8 bg-white dark:bg-dark-800 p-6 rounded-lg shadow-md">
                  <p className="text-dark-600 dark:text-dark-300">
                    We expanded our service offerings to include mobile app development and digital marketing. Our team grew to 15 members and we moved to a larger office to accommodate our growth.
                  </p>
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.2} className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-4 w-8 h-8 rounded-full bg-primary-600 dark:bg-primary-400 border-4 border-white dark:border-dark-800 z-10"></div>
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-8">
                <div className="md:col-span-2 md:text-right md:pr-8">
                  <h3 className="text-xl font-semibold text-primary-800 dark:text-primary-300">2016</h3>
                  <h4 className="text-lg font-medium text-accent-600 dark:text-accent-400">International Growth</h4>
                </div>
                <div className="md:col-span-3 md:pl-8 bg-white dark:bg-dark-800 p-6 rounded-lg shadow-md">
                  <p className="text-dark-600 dark:text-dark-300">
                    We secured our first major international clients and established a presence in European markets. Our innovative approach to digital solutions gained recognition in the industry.
                  </p>
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.3} className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-4 w-8 h-8 rounded-full bg-primary-600 dark:bg-primary-400 border-4 border-white dark:border-dark-800 z-10"></div>
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-8">
                <div className="md:col-span-2 md:text-right md:pr-8">
                  <h3 className="text-xl font-semibold text-primary-800 dark:text-primary-300">2019</h3>
                  <h4 className="text-lg font-medium text-accent-600 dark:text-accent-400">Technology Innovation</h4>
                </div>
                <div className="md:col-span-3 md:pl-8 bg-white dark:bg-dark-800 p-6 rounded-lg shadow-md">
                  <p className="text-dark-600 dark:text-dark-300">
                    We launched our proprietary cloud solutions platform and expanded into AI and machine learning applications. This period marked significant technological advancement for our company.
                  </p>
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.4} className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-4 w-8 h-8 rounded-full bg-primary-600 dark:bg-primary-400 border-4 border-white dark:border-dark-800 z-10"></div>
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-8">
                <div className="md:col-span-2 md:text-right md:pr-8">
                  <h3 className="text-xl font-semibold text-primary-800 dark:text-primary-300">2023</h3>
                  <h4 className="text-lg font-medium text-accent-600 dark:text-accent-400">Global Recognition</h4>
                </div>
                <div className="md:col-span-3 md:pl-8 bg-white dark:bg-dark-800 p-6 rounded-lg shadow-md">
                  <p className="text-dark-600 dark:text-dark-300">
                    Swastik was recognized as one of the top digital solution providers globally. With offices in three countries and a team of over 100 professionals, we continue to drive innovation in the digital space.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section> */}
    </motion.div>
  );
};

export default About;