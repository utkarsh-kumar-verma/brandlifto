import React from 'react';
import { Award, Users, Lightbulb, Zap } from 'lucide-react';

const About: React.FC = () => {
  const values = [
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Cutting-edge solutions that push the boundaries of event management'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Working closely with clients to bring their vision to life'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Delivering exceptional results that exceed expectations'
    },
    {
      icon: Zap,
      title: 'Impact',
      description: 'Creating memorable experiences that drive real business results'
    }
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-gray-900 to-gray-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                About <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Brandlifto</span>
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed mb-6">
                We are a premier event management company specializing in creating extraordinary experiences that elevate brands and drive meaningful connections.
              </p>
              <p className="text-gray-400 leading-relaxed">
                With years of industry expertise and a passion for innovation, we transform ordinary events into extraordinary brand experiences. Our comprehensive approach combines strategic planning, creative execution, and cutting-edge technology to deliver results that matter.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-8">
              <div className="text-center p-6 bg-gray-800/50 rounded-xl backdrop-blur-lg border border-gray-700/50">
                <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                  2+
                </div>
                <div className="text-gray-400">Years Experience</div>
              </div>
              <div className="text-center p-6 bg-gray-800/50 rounded-xl backdrop-blur-lg border border-gray-700/50">
                <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                  10+
                </div>
                <div className="text-gray-400">Team Members</div>
              </div>
            </div>
          </div>

          {/* Right Content - Values */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-white mb-8 text-center lg:text-left">Our Core Values</h3>
            {values.map((value, index) => (
              <div
                key={value.title}
                className="flex items-start space-x-4 p-6 bg-gray-800/30 rounded-xl backdrop-blur-lg border border-gray-700/30 hover:border-purple-400/50 transition-all duration-300 transform hover:scale-105"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex-shrink-0 p-3 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg">
                  <value.icon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-white mb-2">{value.title}</h4>
                  <p className="text-gray-400">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mission Statement */}
        <div className="mt-20 text-center">
          <div className="max-w-4xl mx-auto p-8 bg-gradient-to-r from-purple-900/20 to-pink-900/20 rounded-2xl backdrop-blur-lg border border-purple-400/20">
            <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
            <p className="text-lg text-gray-300 leading-relaxed">
              To revolutionize the event management industry by creating immersive, impactful experiences that connect brands with their audiences in meaningful ways, driving engagement, loyalty, and business growth.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;