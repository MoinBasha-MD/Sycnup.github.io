import React from 'react';
import { 
  Smartphone, Monitor, Tablet, Watch, 
  MessageCircle, Video, Calendar, Bell,
  Users, Globe, Shield, Zap
} from 'lucide-react';

const AppShowcaseSection = () => {
  const platforms = [
    {
      icon: Smartphone,
      name: 'Mobile Apps',
      description: 'Native iOS and Android applications with full feature parity',
      features: ['Push notifications', 'Offline sync', 'Biometric security', 'Location awareness']
    },
    {
      icon: Monitor,
      name: 'Desktop',
      description: 'Powerful desktop applications for Windows, macOS, and Linux',
      features: ['Multi-window support', 'Keyboard shortcuts', 'System integration', 'High productivity']
    },
    {
      icon: Globe,
      name: 'Web Platform',
      description: 'Full-featured web application accessible from any browser',
      features: ['No installation required', 'Cross-browser support', 'Real-time updates', 'Cloud synchronization']
    },
    {
      icon: Watch,
      name: 'Wearables',
      description: 'Smart watch integration for quick status updates and notifications',
      features: ['Quick replies', 'Status updates', 'Meeting alerts', 'Health integration']
    }
  ];

  const coreFeatures = [
    {
      icon: MessageCircle,
      title: 'Smart Messaging',
      description: 'Rich messaging with text, voice notes, files, and more. Disappearing messages, read receipts, and smart notifications keep you connected without overwhelming you.',
      benefits: ['Rich media support', 'Priority notifications', 'Read receipts', 'Disappearing messages']
    },
    {
      icon: Video,
      title: 'Seamless Video Calls',
      description: 'Initiate video calls across work and personal contexts with intelligent scheduling that considers all participants\' availability across their complete life schedules.',
      benefits: ['Cross-platform calling', 'Smart scheduling', 'Background blur', 'Recording capabilities']
    },
    {
      icon: Calendar,
      title: 'Unified Calendar',
      description: 'Merge work meetings, personal appointments, travel plans, and social events into one intelligent calendar that helps you balance all aspects of your life.',
      benefits: ['Multi-calendar sync', 'Travel time calculation', 'Conflict detection', 'Smart suggestions']
    },
    {
      icon: Bell,
      title: 'Smart Notifications',
      description: 'Receive notifications that adapt to your current context. Important work calls during personal time are handled differently than casual messages during focus hours.',
      benefits: ['Context-aware alerts', 'Do not disturb modes', 'Priority escalation', 'Custom rules']
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Complete Application Ecosystem
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Syncup works seamlessly across all your devices and platforms, ensuring your life coordination never misses a beat, whether you're at your desk, on the go, or anywhere in between.
          </p>
        </div>

        {/* Platform Support */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {platforms.map((platform, index) => (
            <div
              key={index}
              className="modern-card p-6 shadow-lg text-center group hover:shadow-xl transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <platform.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{platform.name}</h3>
              <p className="text-gray-600 text-sm mb-4">{platform.description}</p>
              <ul className="space-y-1">
                {platform.features.map((feature, idx) => (
                  <li key={idx} className="text-xs text-gray-500 flex items-center">
                    <div className="w-1 h-1 bg-blue-500 rounded-full mr-2"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Core Features Deep Dive */}
        <div className="mb-16">
          <div className="text-center mb-12" data-aos="fade-up">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Powerful Features for Every Life Moment
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover how Syncup's advanced features adapt to your complete lifestyle, from professional meetings to personal adventures.
            </p>
          </div>

          <div className="space-y-12">
            {coreFeatures.map((feature, index) => (
              <div
                key={index}
                className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mr-4">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-900">{feature.title}</h4>
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed">{feature.description}</p>
                  <div className="grid grid-cols-2 gap-3">
                    {feature.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-700">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                        {benefit}
                      </div>
                    ))}
                  </div>
                </div>
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 border border-gray-100">
                    <div className="aspect-video bg-white rounded-xl shadow-lg flex items-center justify-center">
                      <div className="text-center">
                        <feature.icon className="w-16 h-16 text-blue-500 mx-auto mb-4" />
                        <div className="text-sm text-gray-500">Interactive Demo</div>
                        <div className="text-xs text-gray-400 mt-1">Feature Preview</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Specifications */}
        <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 mb-16" data-aos="fade-up">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Built for Performance & Security</h3>
            <p className="text-gray-600">Enterprise-grade infrastructure supporting millions of life coordination moments daily</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Bank-Level Security</h4>
              <p className="text-sm text-gray-600">End-to-end encryption, zero-knowledge architecture, and SOC 2 compliance ensure your personal and professional data stays private.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Lightning Fast</h4>
              <p className="text-sm text-gray-600">Sub-100ms response times globally with edge computing and intelligent caching for instant life coordination.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Scalable Architecture</h4>
              <p className="text-sm text-gray-600">From individual users to enterprise teams of 10,000+, Syncup scales seamlessly with your life and organization.</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center" data-aos="fade-up">
          <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Experience Complete Life Synchronization?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Join millions of users who have transformed how they coordinate their professional and personal lives with Syncup's intelligent platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
                Start Free Trial
              </button>
              <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                Schedule Demo
              </button>
            </div>
            <div className="mt-4 text-blue-200 text-sm">
              ✓ 14-day free trial  ✓ No credit card required  ✓ Full feature access  ✓ Cancel anytime
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppShowcaseSection;
