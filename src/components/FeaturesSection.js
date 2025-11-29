import React from 'react';
import { 
  MapPin, MessageCircle, Video, Image, Users, 
  Shield, Bell, FileText, Eye, Phone, Check 
} from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      id: 1,
      icon: MapPin,
      title: 'Live Location Map',
      description: 'See where your friends are in real-time on a beautiful 3D map. Get notified when friends are nearby and never miss spontaneous meetups.',
      benefits: ['Real-time location sharing', 'Nearby friend alerts', 'Privacy controls'],
      delay: 0
    },
    {
      id: 2,
      icon: MessageCircle,
      title: 'Smart Status Updates',
      description: 'Share your availability with real-time status. Auto-detect driving, meetings, or sleeping. Friends know when NOT to disturb you.',
      benefits: ['Auto-detect activities', 'Emergency override', 'Custom status messages'],
      delay: 50
    },
    {
      id: 3,
      icon: Image,
      title: '24-Hour Stories',
      description: 'Share photos, videos, and text that disappear in 24 hours. See who viewed your stories and engage with friends\' moments.',
      benefits: ['Photo & video stories', 'View tracking', 'Privacy settings'],
      delay: 100
    },
    {
      id: 4,
      icon: FileText,
      title: 'For You Feed',
      description: 'See ONLY your friends\' posts. No strangers, no algorithm chaos. Just real connections with people you care about.',
      benefits: ['Friends-only content', 'Like & comment', 'Share moments'],
      delay: 150
    },
    {
      id: 5,
      icon: Eye,
      title: 'Explore Tab',
      description: 'Discover public posts from non-friends. Find trending content, connect with new people, and expand your network.',
      benefits: ['Public content discovery', 'Trending posts', 'New connections'],
      delay: 200
    },
    {
      id: 6,
      icon: Video,
      title: 'Video & Voice Calls',
      description: 'Crystal clear video and voice calls with friends and groups. Screen sharing, background blur, and recording capabilities.',
      benefits: ['HD video calls', 'Group calling', 'Screen sharing'],
      delay: 250
    },
    {
      id: 7,
      icon: Phone,
      title: 'Advanced Messaging',
      description: 'Text, voice notes, files, and more. Disappearing messages, read receipts, and smart notifications keep you connected.',
      benefits: ['Rich messaging', 'Voice notes', 'File sharing'],
      delay: 300
    },
    {
      id: 8,
      icon: FileText,
      title: 'Pages & Communities',
      description: 'Create pages for businesses, events, or communities. Build followers, share content, and get verified badges.',
      benefits: ['Create pages', 'Verified badges', 'Analytics dashboard'],
      delay: 350
    },
    {
      id: 9,
      icon: Users,
      title: 'Unified Friends System',
      description: 'Device contacts and app connections in one place. Seamlessly manage all your friendships and connections.',
      benefits: ['Device contact sync', 'App connections', 'Friend requests'],
      delay: 400
    },
    {
      id: 10,
      icon: Bell,
      title: 'Smart Notifications',
      description: 'Context-aware notifications that adapt to your status. Important messages break through, casual ones wait.',
      benefits: ['Priority alerts', 'Do not disturb', 'Custom rules'],
      delay: 450
    },
    {
      id: 11,
      icon: Shield,
      title: 'Privacy & Security',
      description: 'Complete control with ghost mode, timer mode, and custom visibility. Your data is encrypted and protected.',
      benefits: ['Ghost mode', 'Timer mode', 'End-to-end encryption'],
      delay: 500
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="modern-card p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              data-aos="fade-up"
              data-aos-delay={feature.delay}
            >
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-4 icon-float">
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 text-refined">{feature.title}</h3>
              <p className="text-gray-600 mb-4 leading-relaxed text-sm">{feature.description}</p>
              <ul className="space-y-2">
                {feature.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center text-xs text-gray-600 font-medium">
                    <Check className="w-3.5 h-3.5 text-green-500 mr-2 flex-shrink-0" />
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
