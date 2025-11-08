import React from 'react';
import {
  Map,
  Navigation,
  Globe,
  Radar,
  Users,
  Compass
} from 'lucide-react';

const locationFeatures = [
  {
    icon: Map,
    title: '3D Mapbox Visuals',
    description: 'Experience dynamic lighting, realistic buildings, and immersive terrain in our Snap Map-inspired view.'
  },
  {
    icon: Navigation,
    title: 'Live Friend Sharing',
    description: 'See friends nearby or across the globe with smooth camera flyovers, clusters, and precise distance insights.'
  },
  {
    icon: Radar,
    title: 'Smart Updates',
    description: 'Battery-aware intervals, WebSocket pushes, and auto-refresh keep everyone current without draining phones.'
  },
  {
    icon: Users,
    title: 'Invite & Share',
    description: 'Tap any profile to open deep links to chat, share live locations, or request journeys right from the map.'
  },
  {
    icon: Globe,
    title: 'Global Search',
    description: 'Search by username, mutual connections, or nearby activity with instant suggestions from the backend index.'
  },
  {
    icon: Compass,
    title: 'Adaptive Controls',
    description: 'Layers, day/night presets, recenter, and distance circles give you the right context in one tap.'
  }
];

const LocationIntelligenceSection = () => {
  return (
    <section id="location" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div data-aos="fade-right">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Snap Map-Level Location Intelligence
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Syncup blends real-time WebSocket streaming with Mapbox Standard 2024 to deliver a playful, privacy-aware map experience. Toggle 3D, satellite, or street layers, share locations instantly, and explore your network with cinematic camera movements.
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              {locationFeatures.map((feature) => (
                <div key={feature.title} className="modern-card p-5 shadow-lg" data-aos="fade-up">
                  <div className="w-12 h-12 bg-gradient-to-br from-sky-500 to-indigo-600 rounded-xl flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div data-aos="fade-left" className="relative">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-3xl p-8 shadow-2xl border border-blue-100">
              <div className="aspect-[9/16] bg-white rounded-2xl shadow-inner overflow-hidden flex items-center justify-center">
                <div className="text-center px-6 py-8">
                  <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full mb-4 text-sm font-semibold">
                    Live Map Demo
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Nearby Friends Animation</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Automatic clustering keeps the map clean while precision distance cards hover above friend pins. Tap to open their profile or jump into chat.
                  </p>
                  <div className="mt-6 grid grid-cols-2 gap-3 text-left text-sm text-gray-500">
                    <div>• Real-time socket updates</div>
                    <div>• 60° pitch flyovers</div>
                    <div>• Live/temporary shares</div>
                    <div>• Privacy-first prompts</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationIntelligenceSection;
