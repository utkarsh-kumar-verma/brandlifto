import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: 'Paramita',
      position: 'Marketing Head',
      company: 'TC Global',
      image: 'https://images.pexels.com/photos/3727511/pexels-photo-3727511.jpeg?auto=compress&cs=tinysrgb&w=200',
      content: 'Brandlifto transformed our annual conference into an unforgettable experience. Their attention to detail and innovative approach exceeded all our expectations.',
      rating: 5
    },
    {
      name: 'Daksh',
      position: 'CEO',
      company: 'StartupHub',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=200',
      content: 'The virtual event they created for us was incredibly engaging. We saw 300% more attendees than our previous events and generated exceptional leads.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      position: 'Brand Manager',
      company: 'Fashion Forward',
      image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=200',
      content: 'Their brand promotion strategies helped us reach new audiences and increase our market presence significantly. Truly professional and results-driven.',
      rating: 5
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-800 to-gray-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Client <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Testimonials</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Don't just take our word for it - hear what our clients have to say about their experience
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="relative p-8 bg-gray-800/50 backdrop-blur-lg rounded-2xl border border-gray-700/50 hover:border-purple-400/50 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 text-purple-400/30">
                <Quote className="h-8 w-8" />
              </div>

              {/* Rating */}
              <div className="flex space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-300 leading-relaxed mb-6 italic">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center space-x-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-purple-400/30"
                />
                <div>
                  <div className="text-white font-semibold">{testimonial.name}</div>
                  <div className="text-purple-400 text-sm">{testimonial.position}</div>
                  <div className="text-gray-400 text-sm">{testimonial.company}</div>
                </div>
              </div>

              {/* Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 via-transparent to-pink-600/5 rounded-2xl pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-gray-700/50">
          {[
            { number: '98%', label: 'Client Satisfaction' },
            { number: '4.9/5', label: 'Average Rating' },
            { number: '90%', label: 'Repeat Clients' },
            { number: '24h', label: 'Response Time' },
          ].map((stat, index) => (
            <div
              key={stat.label}
              className="text-center transform hover:scale-105 transition-all duration-300"
            >
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;