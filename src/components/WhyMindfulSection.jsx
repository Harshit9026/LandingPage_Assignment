import React from "react";
import { motion } from "framer-motion";
import { Brain, Heart, Smile, Target, Users, Zap } from "lucide-react";

export default function WhyMindfulSection() {
  const benefits = [
    {
      icon: Brain,
      title: "Better Focus",
      description: "Improve concentration and attention span through guided mindfulness exercises"
    },
    {
      icon: Heart,
      title: "Emotional Balance",
      description: "Learn to manage emotions and develop emotional intelligence"
    },
    {
      icon: Smile,
      title: "Reduced Anxiety",
      description: "Build confidence and reduce stress through calming techniques"
    },
    {
      icon: Target,
      title: "Better Sleep",
      description: "Improve sleep quality with relaxation and bedtime meditation"
    },
    {
      icon: Users,
      title: "Social Skills",
      description: "Enhance empathy and communication through mindful awareness"
    },
    {
      icon: Zap,
      title: "Increased Energy",
      description: "Boost natural energy and enthusiasm for learning and play"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Why <span className="text-purple-600">Mindful Kids?</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Research shows that mindfulness helps children develop crucial life skills 
            that benefit them academically, socially, and emotionally.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 group hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <benefit.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
              <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}