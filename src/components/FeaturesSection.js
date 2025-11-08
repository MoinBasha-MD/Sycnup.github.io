import React from 'react';
import { Brain, MessageCircle, Zap, Shield, Check } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      id: 1,
      icon: Brain,
      title: 'Maya AI Assistant (Upcoming)',
      description: 'Ask about anyone\'s availability with simple @mentions. Maya will intelligently handle requests while respecting privacy and boundaries.',
      benefits: ['Save time', 'Reduce interruptions', 'Smart coordination'],
      delay: 0
    },
    {
      id: 2,
      icon: MessageCircle,
      title: 'Real-Time Status Sharing',
      description: 'Share your availability with smart status updates. Automatic duration suggestions and seamless calendar integration.',
      benefits: ['Reduce unnecessary calls', 'Improve coordination', 'Respect boundaries'],
      delay: 100
    },
    {
      id: 3,
      icon: Zap,
      title: 'Advanced Chat System',
      description: 'Enhanced messaging with smart notifications, read receipts, and seamless group coordination.',
      benefits: ['Stay connected', 'Communicate efficiently', 'Never miss important messages'],
      delay: 200
    },
    {
      id: 4,
      icon: Shield,
      title: 'Privacy & Security',
      description: 'Complete control over your data with granular privacy settings, biometric security, and consent-based sharing.',
      benefits: ['Complete control', 'Enterprise-grade security', 'Peace of mind'],
      delay: 300
    }
  ];

  return (
    <section id="features" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Powerful Features for Modern Communication
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how Syncup transforms the way you connect, coordinate, and communicate with others
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="modern-card p-8 shadow-lg"
              data-aos="fade-up"
              data-aos-delay={feature.delay}
            >
              <div className="w-14 h-14 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl flex items-center justify-center mb-6 icon-float">
                <feature.icon className="w-7 h-7 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-refined">{feature.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{feature.description}</p>
              <ul className="space-y-3">
                {feature.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center text-sm text-gray-600 font-medium">
                    <Check className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
