import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, Users } from 'lucide-react';

const Events = () => {
  const events = [
    {
      title: "Title here ",
      date: "datae here ",
      time: "48 Hours",
      location: "Virtual Event",
      description: "Join us for our flagship hackathon event where teams compete to build innovative solutions.",
      participants: "200+ Participants",
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=1000"
    },
    {
      title: "title here ",
      date: "April 5, 2024",
      time: "2:00 PM - 5:00 PM",
      location: "Tech Hub",
      description: "Learn about blockchain, smart contracts, and the future of web development.",
      participants: "50 Seats",
      image: "https://images.unsplash.com/photo-1591267990532-e5bdb1b0ceb8?auto=format&fit=crop&q=80&w=1000"
    },
    {
      title: "title here ",
      date: "May 1-3, 2024",
      time: "9:00 AM - 4:00 PM",
      location: "Innovation Center",
      description: "Intensive training on machine learning algorithms and artificial intelligence applications.",
      participants: "100 Seats",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=1000"
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
                <button className="btn-primary w-full mt-6">Register Now</button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;