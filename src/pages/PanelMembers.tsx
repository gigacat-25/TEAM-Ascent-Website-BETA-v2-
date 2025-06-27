import React from 'react';
import aman from "./images/aman.jpg";
import muneem from "./images/abdul.jpeg"
import parameshwaran from "./images/par5.jpg"
import poornesh from "./images/pornesh.jpg"
import tej from "./images/tej.jpg"
import joy from "./images/joy.jpg"
import sajida from "./images/Sajida Tabassum.jpg"
import sauwam from "./images/sauwam1.jpg"
import gajana from "./images/gajana.jpg"
import akshat from "./images/akshath.jpeg"
import sir1 from "./images/ashwath.jpg"
import sir2 from "./images/balu.jpg"
import mam from "./images/nazneen.jpg"
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

const PanelMembers = () => {
  const members = [
    {
      name: "Ashwath Narayan",
      role: "Faculty",
      image: sir1,
      bio: "HOD of Mechanical engineering department",
      social: {
        github: "https://github.com",
        linkedin: "https://linkedin.com",
        email: "mailto:sarah@example.com"
      }
    },
    {
      name: "Balasubramanyam",
      role: "Faculty",
      image: sir2,
      bio: "Asst Professor in Mechanincal Engineering department",
      social: {
        github: "https://github.com",
        linkedin: "https://linkedin.com",
        email: "mailto:sarah@example.com"
      }
    },
    {
      name: "Nazneen",
      role: "Chief Advisor and Placement Officer",
      image: mam,
      bio: "Connecting talent with opportunities through guidance, mentorship, and industry partnerships. ",
      social: {
        github: "https://github.com",
        linkedin: "https://linkedin.com",
        email: "mailto:sarah@example.com"
      }
    },
    {
      name: "Aman M B ",
      role: "President",
      image: aman,
      bio: "Aspiring Data Scientist | Tech & Space Enthusiast.",
      social: {
        github: "https://github.com/amxncore",
        linkedin: "https://www.linkedin.com/in/amanmb/",
        email: "amanmuttilara@gmail.com"
      }
    },
    {
      name: "Abdul Muneem ",
      role: "Secretary",
      image: muneem,
      bio: "I’m an intermediate Python and C++ developer with experience in machine learning, web development, and CNC programming. I’m currently building an AI-powered cricket scoring site and an e-commerce platform for a pickle brand. Beyond coding, I lead the ASCENT Club, organize tech events, and plan collaborations for hackathons and job training.",
      social: {
        github: "https://github.com",
        linkedin: "https://www.linkedin.com/in/abdul-muneem-197956278?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        email: "Abdul.23am001@iceas.ac.in"
      }
    },
    {
      name: "Thejaswin P",
      role: "Technical Lead",
      image: tej,
      bio: "Passionate about tech, I specialize in optimizing networks, keeping servers stable, and making cloud services smarter. Whether it’s building rock-solid infrastructure or reducing latency, I’m always up for the challenge. When I’m not fine-tuning connections, I’m piloting FPV drones—soaring, crashing, and always learning.",
      social: {
        github: "https://github.com/gigacat-25",
        linkedin: "https://www.linkedin.com/in/thejaswin-p-68b11a334?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        email: "thejaswinp6@gmail.com"
      }
    },
    {
      name: "Parameshwaran Udayar",
      role: "Technical Lead",
      image: parameshwaran,
      bio: "Passionate about AI and web development, I focus on building impactful projects and enhancing technical skills. As the Tech Lead of ASCENT, my college’s technical club, I contribute to technical initiatives, explore emerging technologies, and mentor peers to foster innovation.",
      social: {
        github: "https://github.com/Parameshwaran2005",
        linkedin: "https://www.linkedin.com/in/parameshwaran-udayar/",
        email: "parameshwareshwar81@gmail.com"
      }
    },
    {
      name: "Poornesh G",
      role: "Technical Lead",
      image: poornesh,
      bio: "Passionate about problem-solving and technology, I started with Python, HTML, and CSS. Aspiring for a top tech role, I focus on continuous learning, networking, and growth.",
      social: {
        github: "https://github.com",
        linkedin: "https://linkedin.com",
        email: "mailto:sophia@example.com"
      }
    },
    {
      name: "Sauwam",
      role: "Event Coordinators",
      image: sauwam,
      bio: "Hey everyone! I'm an event manager at The Ascent, passionate about organizing experiences that bring people together. I also love coding, with basic skills in Python and C++. Always eager to learn, grow, and take on new challenges. Excited to connect and collaborate!",
      social: {
        github: "https://github.com/Mohammedsauwam7",
        linkedin: "https://www.linkedin.com/in/mohammed-sauwam-b699b1315?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        email: "mailto:daniel@example.com"
      }
    },
    {
      name: "Sajida",
      role: "Event Coordinators",
      image: sajida,
      bio: "Hey everyone! I'm an event manager at The Ascent, passionate about organizing experiences that bring people together. I also love coding, with basic skills in Python and C++. Always eager to learn, grow, and take on new challenges. Excited to connect and collaborate!",
      social: {
        github: "https://github.com",
        linkedin: "https://linkedin.com",
        email: "mailto:olivia@example.com"
      }
    },
    {
      name: "Gajanana",
      role: "Event Coordinators",
      image: gajana,
      bio: "Driven by logic, problem-solving, and a passion for technology, I began my journey with Python, HTML, and CSS, quickly developing a structured approach to tackling challenges. Aspiring to secure a high-paying role at a top company, I am committed to continuous learning, networking, and making meaningful contributions in the tech industry.",
      social: {
        github: "https://github.com",
        linkedin: "https://www.linkedin.com/in/gajanana-h-pujar-265b9b2a2?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        email: "gajananas536@gmail.com"
      }
    },
    {
      name: "Akshat Sinha",
      role: "Treasurer",
      image: akshat,
      bio: "I handle the financial management and budgeting, ensuring smooth and transparent fund allocation. With strong analytical skills and attention to detail, I strive to maintain financial stability and support the team's initiatives. Excited to contribute and collaborate effectively!",
      social: {
        github: "https://github.com/Akshat-21-hub",
        linkedin: "https://www.linkedin.com/in/akshat-sinha-0618b5290?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        email: "Sinhaakshat1008@gmail.com"
      }
    },
    {
      name: "Joy Palit",
      role: "Volunteering Head",
      image: joy,
      bio: "I'm specializing in Artificial Intelligence and Machine Learning while also working as an offensive security specialist. My focus is on combining AI and cybersecurity to enhance security solutions and drive innovation.",
      social: {
        github: "https://github.com/Rayz4010-",
        linkedin: "https://www.linkedin.com/in/joy-palit-0207j/",
        email: "rayquaza4010@icloud.com"
      }
    },

   
    
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
