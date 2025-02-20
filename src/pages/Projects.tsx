import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Globe, X } from 'lucide-react';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "AI Study Companion",
      description: "An AI-powered study assistant that helps students organize their learning materials and create personalized study plans.",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=1000",
      tech: ["React", "TensorFlow.js", "Node.js"],
      github: "https://github.com",
      demo: "https://demo.com",
      longDescription: "This project leverages artificial intelligence to revolutionize how students approach their studies. It analyzes learning patterns, creates custom study schedules, and provides intelligent recommendations for better learning outcomes."
    },
    {
      title: "Smart Campus IoT",
      description: "An IoT system that monitors and optimizes energy usage across campus buildings using smart sensors and real-time analytics.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1000",
      tech: ["Arduino", "Python", "MongoDB"],
      github: "https://github.com",
      demo: "https://demo.com",
      longDescription: "A comprehensive IoT solution that transforms campus facilities into smart buildings. The system collects real-time data about energy consumption, occupancy, and environmental conditions to optimize resource usage and reduce carbon footprint."
    },
    {
      title: "CodeCollab",
      description: "A real-time collaborative coding platform designed for remote pair programming and code reviews.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=1000",
      tech: ["WebSocket", "React", "Docker"],
      github: "https://github.com",
      demo: "https://demo.com",
      longDescription: "CodeCollab enables seamless collaboration between developers with features like real-time code synchronization, video chat, and integrated version control. Perfect for remote teams and educational purposes."
    }
  ];

  return (
    <div className="min-h-screen pt-20 pb-16">
      <motion.div 
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="section-title">Our Projects</h1>
        <p className="text-gray-300 max-w-2xl mx-auto px-4">
          Explore the innovative projects developed by our club members.
        </p>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-dark-200 rounded-lg overflow-hidden cursor-pointer hover:transform hover:scale-105 transition-transform duration-300"
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative h-48">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-200 to-transparent"></div>
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-4 text-primary-400">{project.title}</h2>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tech.map(tech => (
                    <span key={tech} className="px-3 py-1 bg-primary-600/20 text-primary-400 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-dark-200 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={e => e.stopPropagation()}
            >
              <div className="relative">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title}
                  className="w-full h-64 object-cover rounded-t-lg"
                />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 p-2 bg-dark-200/80 rounded-full hover:bg-dark-100 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              <div className="p-6">
                <h2 className="text-3xl font-bold mb-4 text-primary-400">{selectedProject.title}</h2>
                <p className="text-gray-300 mb-6">{selectedProject.longDescription}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.tech.map(tech => (
                    <span key={tech} className="px-3 py-1 bg-primary-600/20 text-primary-400 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a href={selectedProject.github} target="_blank" rel="noopener noreferrer" className="btn-primary flex items-center">
                    <Github className="w-5 h-5 mr-2" />
                    View Code
                  </a>
                  <a href={selectedProject.demo} target="_blank" rel="noopener noreferrer" className="btn-primary flex items-center">
                    <Globe className="w-5 h-5 mr-2" />
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Projects;