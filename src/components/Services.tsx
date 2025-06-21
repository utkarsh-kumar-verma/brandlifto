import React from 'react';
import { Calendar, Users, TrendingUp, Megaphone, Video, Target } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: Calendar,
      title: 'Event Management',
      description: 'End-to-end event planning and execution for corporate events, conferences, and brand activations.',
      features: ['Event Planning', 'Venue Management', 'Logistics Coordination', 'On-site Support'],
      color: 'from-purple-500 to-purple-700'
    },
    {
      icon: Target,
      title: 'Lead Generation',
      description: 'Strategic lead generation campaigns that convert prospects into qualified customers.',
      features: ['Digital Marketing', 'Lead Qualification', 'CRM Integration', 'Analytics & Reporting'],
      color: 'from-pink-500 to-pink-700'
    },
    {
      icon: Users,
      title: 'Crowd Management',
      description: 'Professional crowd control and management for safe and organized events.',
      features: ['Safety Protocols', 'Flow Management', 'Emergency Planning', 'Staff Training'],
      color: 'from-blue-500 to-blue-700'
    },
    {
      icon: Megaphone,
      title: 'Brand Promotion',
      description: 'Comprehensive brand promotion strategies to enhance visibility and engagement.',
      features: ['Brand Strategy', 'Campaign Development', 'Social Media', 'Content Creation'],
      color: 'from-green-500 to-green-700'
    },
    {
      icon: Video,
      title: 'Virtual Events',
      description: 'Cutting-edge virtual and hybrid event solutions for global audience reach.',
      features: ['Platform Setup', 'Interactive Features', 'Tech Support', 'Recording Services'],
      color: 'from-orange-500 to-orange-700'
    },
    {
      icon: TrendingUp,
      title: 'Audience Generation',
      description: 'Build and engage targeted audiences through strategic marketing initiatives.',
      features: ['Market Research', 'Targeting Strategy', 'Community Building', 'Engagement Tactics'],
      color: 'from-teal-500 to-teal-700'
    }
  ];

  return (
    <section id="services" className="py-24 bg-gray-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-purple-900/5 to-gray-900"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Comprehensive solutions to elevate your brand and create unforgettable experiences
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative p-8 bg-gray-800/50 backdrop-blur-lg rounded-2xl border border-gray-700/50 hover:border-purple-400/50 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Card Background Glow */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`}></div>
              
              {/* Icon */}
              <div className={`relative inline-flex p-4 bg-gradient-to-br ${service.color} rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="h-8 w-8 text-white" />
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features List */}
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={feature} className="flex items-center text-gray-300">
                      <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button className="mt-6 px-6 py-2 bg-gradient-to-r from-purple-600/20 to-pink-600/20 hover:from-purple-600 hover:to-pink-600 text-purple-300 hover:text-white border border-purple-400/30 hover:border-transparent rounded-lg transition-all duration-300 transform hover:scale-105">
                  Learn More
                </button>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        {/* <div className="text-center mt-16">
          <p className="text-gray-400 mb-6">Ready to transform your next event?</p>
          <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25">
            Start Your Project
          </button>
        </div> */}
      </div>
    </section>
  );
};

export default Services;