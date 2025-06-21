import { Calendar, ExternalLink, TrendingUp, Users } from 'lucide-react';
import React from 'react';

const Portfolio: React.FC = () => {
  const projects = [
    {
      title: 'Education Expo',
      category: 'Education Conference',
      description: 'Where education meets impact — we create experiences that connect institutions, ideas, and outcomes.',
      image: 'https://res.cloudinary.com/dviff7dzi/image/upload/v1750527050/ChatGPT_Image_Jun_21_2025_11_00_16_PM_rnq80h.png',
      stats: [
        { icon: Users, value: '1,000+', label: 'Attendees' },
        { icon: Calendar, value: '5', label: 'Days' },
        { icon: TrendingUp, value: '95%', label: 'Satisfaction' }
      ],
      tags: ['Education', 'Consulting', 'Career Development']
    },
    {
      title: 'Brand Launch Spectacular',
      category: 'Product Launch',
      description: 'An immersive product launch event that generated massive media coverage and customer engagement.',
      image: 'https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg?auto=compress&cs=tinysrgb&w=800',
      stats: [
        { icon: Users, value: '500+', label: 'VIP Guests' },
        { icon: Calendar, value: '1', label: 'Night' },
        { icon: TrendingUp, value: '200%', label: 'ROI' }
      ],
      tags: ['Product Launch', 'Brand Activation', 'Media']
    },
    {
      title: 'Virtual Innovation Expo',
      category: 'Virtual Event',
      description: 'A cutting-edge virtual exhibition connecting thousands of participants in an interactive digital space.',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800',
      stats: [
        { icon: Users, value: '5,000+', label: 'Participants' },
        { icon: Calendar, value: '2', label: 'Days' },
        { icon: TrendingUp, value: '85%', label: 'Engagement' }
      ],
      tags: ['Virtual', 'Exhibition', 'Innovation']
    },
    {
      title: 'Seminars and Conferences',
      category: 'Corporate Event',
      description: 'We organize impactful seminars and conferences tailored to diverse business needs — delivering results that go beyond expectations.',
      image: 'https://res.cloudinary.com/dviff7dzi/image/upload/v1750526000/1717788736216_hqkrgl.jpg',
      stats: [
        { icon: Users, value: '800+', label: 'Participants' },
        { icon: Calendar, value: '1', label: 'Evening' },
        { icon: TrendingUp, value: '90%', label: 'Engagement' }
      ],
      tags: ['Business Event', 'Networking', 'Business Growth']
    }
  ];

  return (
    <section id="portfolio" className="py-24 bg-gray-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Portfolio</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Explore our successful events and campaigns that have transformed brands and created lasting impact
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group relative bg-gray-900/50 rounded-2xl overflow-hidden backdrop-blur-lg border border-gray-700/50 hover:border-purple-400/50 transition-all duration-500 transform hover:scale-105"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4 px-3 py-1 bg-purple-600/80 backdrop-blur-lg rounded-full text-white text-sm">
                  {project.category}
                </div>

                {/* View Button */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="p-2 bg-white/20 backdrop-blur-lg rounded-full text-white hover:bg-white/30 transition-colors">
                    <ExternalLink className="h-5 w-5" />
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-gray-800/50 text-gray-300 rounded-full text-sm border border-gray-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4">
                  {project.stats.map((stat, statIndex) => (
                    <div key={statIndex} className="text-center">
                      <div className="flex justify-center mb-2">
                        <stat.icon className="h-5 w-5 text-purple-400" />
                      </div>
                      <div className="text-lg font-bold text-white">{stat.value}</div>
                      <div className="text-xs text-gray-400">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/0 via-purple-600/0 to-pink-600/0 group-hover:from-purple-600/10 group-hover:via-purple-600/5 group-hover:to-pink-600/10 transition-all duration-500 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        {/* <div className="text-center mt-12">
          <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25">
            View All Projects
          </button>
        </div> */}
      </div>
    </section>
  );
};

export default Portfolio;