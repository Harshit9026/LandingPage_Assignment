import React from "react";
import { Button } from "@/components/ui/button";
import { Play, Star, Users, Award } from "lucide-react";
import { motion } from "framer-motion";

export default function HeroSection({ onStartTrial }) {
  return (
    <section className="relative bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50 py-20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-purple-200 to-transparent opacity-30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-blue-200 to-transparent opacity-30 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <div className="inline-flex items-center bg-white rounded-full px-4 py-2 shadow-sm mb-6">
              <Star className="w-4 h-4 text-yellow-400 mr-2" />
              <span className="text-sm font-medium text-gray-700">Trusted by 10,000+ Families</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Mindfulness &
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
                {" "}Meditation
              </span>
              <br />
              for Kids (4-14)
            </h1>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl">
              Help your child develop emotional intelligence, focus, and inner calm through our 
              fun and engaging mindfulness programs designed specifically for young minds.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button 
                onClick={onStartTrial}
                className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 text-lg font-medium rounded-xl transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Start Free Trial
              </Button>
              <Button 
                variant="outline"
                className="border-2 border-gray-300 hover:border-purple-600 px-8 py-4 text-lg font-medium rounded-xl transition-all duration-200 group"
              >
                <Play className="w-5 h-5 mr-2 group-hover:text-purple-600" />
                Watch Demo
              </Button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 text-center lg:text-left">
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-purple-600" />
                <span className="text-gray-700">
                  <strong className="text-gray-900">10K+</strong> Happy Kids
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-purple-600" />
                <span className="text-gray-700">
                  <strong className="text-gray-900">95%</strong> Satisfaction
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Hero Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative bg-white rounded-3xl shadow-2xl p-8 transform rotate-2 hover:rotate-0 transition-transform duration-300">
              <img 
                src="https://images.unsplash.com/photo-1544717305-2782549b5136?w=600&h=400&fit=crop&crop=faces"
                alt="Child meditating peacefully"
                className="w-full h-80 object-cover rounded-2xl"
              />
              <div className="absolute -top-4 -right-4 bg-yellow-400 rounded-full p-4 shadow-lg">
                <Star className="w-6 h-6 text-white" />
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-8 left-8 bg-purple-100 rounded-full p-3 animate-bounce">
              <span className="text-2xl">🧘‍♀️</span>
            </div>
            <div className="absolute -bottom-4 -left-4 bg-blue-100 rounded-full p-3 animate-pulse">
              <span className="text-2xl">✨</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}