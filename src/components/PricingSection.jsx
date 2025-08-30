import React from "react";
import { motion } from "framer-motion";
import { Check, Star, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function PricingSection({ onStartTrial }) {
  const plans = [
    {
      name: "Starter",
      price: "Free",
      period: "",
      description: "Perfect for trying out mindfulness with your child",
      features: [
        "3 guided sessions",
        "Basic breathing exercises",
        "Progress tracking",
        "Email support"
      ],
      popular: false,
      cta: "Start Free"
    },
    {
      name: "Explorer",
      price: "$19",
      period: "/month",
      description: "Ideal for families committed to regular practice",
      features: [
        "Unlimited sessions",
        "All age programs",
        "Advanced techniques",
        "Parent resources",
        "Priority support",
        "Progress reports"
      ],
      popular: true,
      cta: "Start Free Trial"
    },
    {
      name: "Family",
      price: "$39",
      period: "/month",
      description: "Best for families with multiple children",
      features: [
        "Everything in Explorer",
        "Up to 5 child profiles",
        "Family challenges",
        "1-on-1 coaching calls",
        "Custom programs",
        "Early access to new content"
      ],
      popular: false,
      cta: "Start Free Trial"
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Choose Your <span className="text-purple-600">Journey</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Start with a free trial and discover the perfect plan for your family's mindfulness journey.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 ${
                plan.popular ? 'ring-2 ring-purple-500 scale-105' : 'hover:scale-105'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-full text-sm font-medium flex items-center gap-2">
                    <Star className="w-4 h-4" />
                    Most Popular
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                  {plan.period && <span className="text-gray-500 ml-1">{plan.period}</span>}
                </div>
                <p className="text-gray-600">{plan.description}</p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-3">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center ${
                      plan.popular ? 'bg-purple-600' : 'bg-gray-200'
                    }`}>
                      <Check className={`w-3 h-3 ${plan.popular ? 'text-white' : 'text-gray-600'}`} />
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                onClick={onStartTrial}
                className={`w-full py-3 rounded-xl font-medium transition-all duration-200 ${
                  plan.popular 
                    ? 'bg-purple-600 hover:bg-purple-700 text-white' 
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-900 hover:text-purple-600'
                }`}
              >
                {plan.popular && <Zap className="w-4 h-4 mr-2" />}
                {plan.cta}
              </Button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16 p-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl text-white"
        >
          <h3 className="text-2xl font-bold mb-4">30-Day Money-Back Guarantee</h3>
          <p className="text-purple-100 mb-6">
            Try any paid plan risk-free. If you're not completely satisfied, get a full refund within 30 days.
          </p>
          <div className="flex justify-center">
            <Button 
              onClick={onStartTrial}
              className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-3 rounded-xl font-medium"
            >
              Start Your Free Trial
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}