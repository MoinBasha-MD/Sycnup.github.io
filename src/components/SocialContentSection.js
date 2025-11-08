import React from 'react';
import {
  Camera,
  Film,
  BookmarkCheck,
  Megaphone,
  BarChart2,
  UsersRound
} from 'lucide-react';

const socialFeatures = [
  {
    icon: Camera,
    title: 'Futuristic Feed',
    description: 'Glassmorphic cards, auto-play videos, and adaptive controls showcase every life moment with polish.'
  },
  {
    icon: Film,
    title: 'Creation Suite',
    description: 'Upload photos or 4K video, add captions, locations, privacy settings, and monitor real-time progress.'
  },
  {
    icon: BookmarkCheck,
    title: 'Saved & Stories',
    description: 'Bookmark highlights, view story performance, and revisit everything inside a unified media viewer.'
  },
  {
    icon: Megaphone,
    title: 'Pages & Communities',
    description: 'Launch business, creator, or community pages with dashboards, team roles, and upcoming monetization tools.'
  },
  {
    icon: BarChart2,
    title: 'Post Analytics',
    description: 'Track views, reactions, reshares, and location hotspots with backend-powered insights.'
  },
  {
    icon: UsersRound,
    title: 'Group Coordination',
    description: 'Advanced group management, filters, and bulk actions keep teams, families, and crews aligned.'
  }
];

const SocialContentSection = () => (
  <section id="content" className="section-padding bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16" data-aos="fade-up">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Share Life the Modern Way
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          The Syncup social layer delivers a cinematic feed, rich creation tools, and community-powered pages so every story lands with impact.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {socialFeatures.map((item, index) => (
          <div
            key={item.title}
            className="modern-card p-6 shadow-lg"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-pink-500 rounded-xl flex items-center justify-center mb-4">
              <item.icon className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">{item.title}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default SocialContentSection;
