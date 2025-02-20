import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

const PanelMembers = () => {
  const members = [
    {
      name: "Aman M B ",
      role: "President",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400",
      bio: "AI enthusiast and full-stack developer with a passion for building scalable solutions.",
      social: {
        github: "https://github.com",
        linkedin: "https://linkedin.com",
        email: "mailto:sarah@example.com"
      }
    },
    {
      name: "Abdul Muneem ",
      role: "Secretary",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400",
      bio: "Blockchain developer and cybersecurity expert focusing on decentralized systems.",
      social: {
        github: "https://github.com",
        linkedin: "https://linkedin.com",
        email: "mailto:james@example.com"
      }
    },
    {
      name: "Emily Rodriguez",
      role: "Technical Lead",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=400",
      bio: "Cloud architecture specialist with extensive experience in AWS and Azure.",
      social: {
        github: "https://github.com",
        linkedin: "https://linkedin.com",
        email: "mailto:emily@example.com"
      }
    },
    {
      name: "Michael Chang",
      role: "Events Coordinator",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400",
      bio: "Community builder and full-stack developer passionate about educational tech.",
      social: {
        github: "https://github.com",
        linkedin: "https://linkedin.com",
        email: "mailto:michael@example.com"
      }
    },
    {
      name: "Sophia Lee",
      role: "Marketing Lead",
      image: "https://images.unsplash.com/photo-1530178723480-87e14ec9a248?auto=format&fit=crop&q=80&w=400",
      bio: "Digital marketing strategist with a focus on user engagement and brand growth.",
      social: {
        github: "https://github.com",
        linkedin: "https://linkedin.com",
        email: "mailto:sophia@example.com"
      }
    },
    {
      name: "Daniel Kim",
      role: "Designer",
      image: "https://images.unsplash.com/photo-1501606178152-4b8c5c3d35d5?auto=format&fit=crop&q=80&w=400",
      bio: "UX/UI designer with an eye for intuitive and aesthetically pleasing designs.",
      social: {
        github: "https://github.com",
        linkedin: "https://linkedin.com",
        email: "mailto:daniel@example.com"
      }
    },
    {
      name: "Olivia Zhang",
      role: "Data Analyst",
      image: "https://images.unsplash.com/photo-1504784164053-15b85c5fd59b?auto=format&fit=crop&q=80&w=400",
      bio: "Data scientist passionate about extracting insights from complex datasets.",
      social: {
        github: "https://github.com",
        linkedin: "https://linkedin.com",
        email: "mailto:olivia@example.com"
      }
    },
    {
      name: "Ethan Patel",
      role: "DevOps Lead",
      image: "https://images.unsplash.com/photo-1509494899179-bb7e2dfeee62?auto=format&fit=crop&q=80&w=400",
      bio: "DevOps engineer with a deep understanding of CI/CD pipelines and cloud infrastructure.",
      social: {
        github: "https://github.com",
        linkedin: "https://linkedin.com",
        email: "mailto:ethan@example.com"
      }
    },
    {
      name: "Charlotte Moore",
      role: "Product Manager",
      image: "https://images.unsplash.com/photo-1524231183779-7025b998b78d?auto=format&fit=crop&q=80&w=400",
      bio: "Product strategist with a passion for creating user-centric products and experiences.",
      social: {
        github: "https://github.com",
        linkedin: "https://linkedin.com",
        email: "mailto:charlotte@example.com"
      }
    },
    {
      name: "Joshua Carter",
      role: "Software Engineer",
      image: "https://images.unsplash.com/photo-1514767637503-92bbf8770cc6?auto=format&fit=crop&q=80&w=400",
      bio: "Software engineer with expertise in building scalable web applications and microservices.",
      social: {
        github: "https://github.com",
        linkedin: "https://linkedin.com",
        email: "mailto:joshua@example.com"
      }
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
        <h1 className="section-title">Panel Members</h1>
        <p className="text-gray-300 max-w-2xl mx-auto px-4">
          Meet our dedicated team of tech enthusiasts leading Ascent Club.
        </p>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {members.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-dark-200 rounded-lg overflow-hidden group"
            >
              <div className="relative h-64">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-200 to-transparent"></div>
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold text-primary-400">{member.name}</h2>
                <p className="text-lg text-primary-300 mb-2">{member.role}</p>
                <p className="text-gray-300 mb-4">{member.bio}</p>
                <div className="flex space-x-4">
                  <a 
                    href={member.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-primary-400 transition-colors"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a 
                    href={member.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-primary-400 transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a 
                    href={member.social.email}
                    className="text-gray-400 hover:text-primary-400 transition-colors"
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PanelMembers;
