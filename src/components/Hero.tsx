import { ArrowRight, Play, Sparkles, Star, Zap } from 'lucide-react';
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen  pb-20 flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-gray-900 to-blue-900">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%239C92AC%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="floating-element absolute top-20 left-10 text-purple-400 opacity-60">
          <Sparkles className="h-6 w-6" />
        </div>
        <div className="floating-element absolute top-40 right-20 text-pink-400 opacity-60" style={{ animationDelay: '0.5s' }}>
          <Star className="h-8 w-8" />
        </div>
        <div className="floating-element absolute bottom-40 left-20 text-blue-400 opacity-60" style={{ animationDelay: '1s' }}>
          <Zap className="h-7 w-7" />
        </div>
        <div className="floating-element absolute bottom-20 right-10 text-purple-400 opacity-60" style={{ animationDelay: '1.5s' }}>
          <Sparkles className="h-5 w-5" />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8 animate-slideUp">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-purple-600/20 backdrop-blur-lg rounded-full border border-purple-400/30 mt-16">
            <Zap className="h-4 w-4 text-purple-400 mr-2" />
            <span className="text-purple-300 text-sm font-medium">Premier Event Management</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
            Transform Your
            <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              Brand Experience
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Elevate your events, amplify your brand, and engage your audience with our comprehensive event management and lead generation solutions.
          </p>

          {/* Service Tags */}
          <div className="flex flex-wrap justify-center gap-3 text-sm">
            {['Event Management', 'Lead Generation', 'Brand Promotion', 'Virtual Events', 'Crowd Management'].map((service, index) => (
              <span
                key={service}
                className="px-4 py-2 bg-gray-800/50 backdrop-blur-lg rounded-full border border-gray-700 text-gray-300 hover:border-purple-400 transition-all duration-300 transform hover:scale-105"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {service}
              </span>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
            <button onClick={() => window.open('https://wa.me/+916207577121?text=Hello%20there!', '_blank')}
             className="group flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25">
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
            
            {/* <button className="group flex items-center px-8 py-4 bg-transparent border-2 border-gray-600 hover:border-purple-400 text-white rounded-full transition-all duration-300 transform hover:scale-105 backdrop-blur-lg">
              <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              Watch Demo
            </button> */}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2  md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-gray-700/50">
            {[
              { number: '100+', label: 'Events Managed' },
              { number: '50K+', label: 'Leads Generated' },
              { number: '98%', label: 'Client Satisfaction' },
              { number: '24/7', label: 'Support Available' },
            ].map((stat, index) => (
              <div
                key={stat.label}
                className="text-center transform hover:scale-105 transition-all duration-300"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <div className="text-gray-400 mt-2">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gradient-to-b from-purple-400 to-transparent rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;