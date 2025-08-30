import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Clock, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ProgramsSection({ onStartTrial }) {
  const programs = [
    {
      title: "Little Explorers (4-6)",
      image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=600&h=400&fit=crop&crop=faces",
      description: "Fun storytelling and simple breathing exercises designed for preschoolers",
      duration: "15 min sessions",
      participants: "Individual or group",
      features: ["Story-based learning", "Simple breathing games", "Movement meditation", "Calm-down techniques"]
    },
    {
      title: "Young Minds (7-10)",
      image: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=600&h=400&fit=crop&crop=faces",
      description: "Interactive mindfulness activities that build focus and emotional awareness",
      duration: "20 min sessions",
      participants: "Small groups",
      features: ["Focus exercises", "Emotion recognition", "Mindful listening", "Gratitude practice"]
    },
    {
      title: "Teen Wellness (11-14)",
      image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=600&h=400&fit=crop&crop=faces",
      description: "Advanced techniques for managing stress, anxiety, and social challenges",
      duration: "25 min sessions",
      participants: "Individual coaching",
      features: ["Stress management", "Anxiety relief", "Confidence building", "Peer relationship skills"]
    }
  ];

  return (
    <section id="programs" className="py-20 bg-gradient-to-b from-purple-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Programs for <span className="text-purple-600">Every Age</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Age-appropriate mindfulness programs tailored to your child's developmental stage and learning style.
          </p>
        </motion.div>

        <div className="space-y-16">
          {programs.map((program, index) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl transform rotate-3 group-hover:rotate-6 transition-transform duration-300"></div>
                  <img 
                    src={program.image}
                    alt={program.title}
                    className="relative w-full h-80 object-cover rounded-3xl shadow-2xl"
                  />
                </div>
              </div>

              <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">{program.title}</h3>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">{program.description}</p>

                <div className="flex flex-wrap gap-4 mb-6">
                  <div className="flex items-center gap-2 bg-purple-100 px-4 py-2 rounded-full">
                    <Clock className="w-4 h-4 text-purple-600" />
                    <span className="text-sm font-medium text-purple-800">{program.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 bg-blue-100 px-4 py-2 rounded-full">
                    <Users className="w-4 h-4 text-blue-600" />
                    <span className="text-sm font-medium text-blue-800">{program.participants}</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {program.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  onClick={onStartTrial}
                  className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-xl font-medium group"
                >
                  Try This Program
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}