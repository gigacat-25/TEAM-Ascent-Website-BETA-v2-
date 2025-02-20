import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Target, Rocket } from 'lucide-react';

const About = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const sections = [
    {
      title: "Our Vision",
      icon: <Lightbulb className="w-12 h-12 text-primary-400" />,
      content: "To create a vibrant ecosystem where technology enthusiasts can collaborate, innovate, and grow together, pushing the boundaries of what's possible in the digital age."
    },
    {
      title: "Our Mission",
      icon: <Target className="w-12 h-12 text-primary-400" />,
      content: "To empower the next generation of tech leaders through hands-on learning experiences, collaborative projects, and meaningful connections within the tech community."
    },
    {
      title: "Our Objectives",
      icon: <Rocket className="w-12 h-12 text-primary-400" />,
      content: "To foster innovation, facilitate knowledge sharing, and create opportunities for practical experience in cutting-edge technologies while building a strong network of tech enthusiasts."
    }
  ];

  return (
    <div className="min-h-screen pt-20 pb-16">
      {/* Header */}
      <motion.div 
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="section-title">About Ascent Club</h1>
        <p className="text-gray-300 max-w-2xl mx-auto px-4">
          Discover our journey in fostering innovation and building a community of tech enthusiasts.
        </p>
      </motion.div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {sections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-dark-200 rounded-lg p-6 hover:transform hover:scale-105 transition-transform duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 p-3 bg-dark-100 rounded-full">
                  {section.icon}
                </div>
                <h2 className="text-2xl font-bold mb-4 text-primary-400">{section.title}</h2>
                <p className="text-gray-300">{section.content}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Values Section */}
      <motion.div
        className="mt-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <h2 className="text-3xl font-bold text-center mb-12 text-primary-400">Our Core Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {['Innovation', 'Collaboration', 'Excellence', 'Growth'].map((value, index) => (
            <motion.div
              key={value}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-dark-200 p-4 rounded-lg text-center hover:bg-dark-100 transition-colors"
            >
              <h3 className="text-xl font-semibold text-primary-300 mb-2">{value}</h3>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default About;