import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, Users } from 'lucide-react';

const Events = () => {
  const events = [
    {
      title: "Ascent Selection",
      date: "Updated through messages ",
      time: "2 Hours",
      location: "Impact Collage of enginering",
      description: "Join us for our flagship hackathon event where teams compete to build innovative solutions.",
      participants: "200+ Participants",
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=1000"
    },
    {
      title: "Event Opening",
      date: "March 17, 2025",
      time: "09:00 AM - 04:00 PM",
      location: "Impact college of Engineering and applied Science",
      description: "Club Inaugration",
      participants: "Team Ascent",
      image: "https://plus.unsplash.com/premium_photo-1680700308566-543a60569017?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
        <h1 className="section-title">Upcoming Events</h1>
        <p className="text-gray-300 max-w-2xl mx-auto px-4">
          Join us for exciting tech events, workshops, and hackathons.
        </p>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-dark-200 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-transform duration-300"
            >
              <div className="relative h-48">
                <img 
                  src={event.image} 
                  alt={event.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-200 to-transparent"></div>
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-4 text-primary-400">{event.title}</h2>
                <p className="text-gray-300 mb-4">{event.description}</p>
                <div className="space-y-2">
                  <div className="flex items-center text-gray-400">
                    <Calendar className="w-5 h-5 mr-2" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center text-gray-400">
                    <Clock className="w-5 h-5 mr-2" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center text-gray-400">
                    <MapPin className="w-5 h-5 mr-2" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center text-gray-400">
                    <Users className="w-5 h-5 mr-2" />
                    <span>{event.participants}</span>
                  </div>
                </div>
                <a href="https://forms.gle/c9UyGRunfXAHyBDa6" target="_blank" rel="noopener noreferrer">
                  <button className="btn-primary w-full mt-6">Register Now</button>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;
