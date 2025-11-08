import React from 'react';
import { Shield, Server, Activity } from 'lucide-react';

const trustPillars = [
  {
    icon: Shield,
    title: 'Secure by Design',
    points: [
      'JWT auth with refresh rotation',
      'End-to-end encrypted chats and PIN unlock',
      'Granular privacy controls across status, location, and AI'
    ]
  },
  {
    icon: Server,
    title: 'Robust APIs',
    points: [
      'Modular REST endpoints for chat, posts, location, and pages',
      'Rate-limited services with monitoring and logging',
      'Realtime WebSockets for messages, statuses, and location events'
    ]
  },
  {
    icon: Activity,
    title: 'Reliably Real-Time',
    points: [
      'UnifiedSocketContext ensures single live connection',
      'Background notifications and reconnection agent',
      'Battery-aware polling and Mapbox optimisations'
    ]
  }
];

const PlatformTrustSection = () => (
  <section className="section-padding bg-gray-900 text-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16" data-aos="fade-up">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Built on a Proven Platform</h2>
        <p className="text-lg text-gray-300 max-w-3xl mx-auto">
          Syncup’s backend powers messaging, location, posts, calls, calendar, status, and AI services with enterprise safeguards.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {trustPillars.map((pillar, index) => (
          <div
            key={pillar.title}
            className="bg-white/5 backdrop-blur rounded-3xl p-8 border border-white/10 shadow-lg"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <div className="w-12 h-12 bg-white/15 rounded-xl flex items-center justify-center mb-4">
              <pillar.icon className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold mb-4">{pillar.title}</h3>
            <ul className="space-y-3 text-sm text-gray-200">
              {pillar.points.map((point) => (
                <li key={point} className="flex items-start">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 mt-1"></span>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default PlatformTrustSection;
