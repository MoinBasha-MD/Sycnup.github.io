import React from 'react';
import {
  MessageCircleHeart,
  Lock,
  Waves,
  Image as ImageIcon,
  Mic,
  BellPlus
} from 'lucide-react';

const messagingHighlights = [
  {
    icon: MessageCircleHeart,
    title: 'Expressive Reactions',
    description: 'Tap to respond with animated reactions, GIFs, and media-rich replies that sync instantly across devices.'
  },
  {
    icon: ImageIcon,
    title: 'Media Studio',
    description: 'Full-screen viewer for photos, videos, documents, and locations with pinch-to-zoom and smooth transitions.'
  },
  {
    icon: Mic,
    title: 'Voice & Files',
    description: 'Crystal-clear voice notes, file sharing, and inline previews keep conversations flowing without leaving the chat.'
  },
  {
    icon: Lock,
    title: 'PIN Encryption',
    description: 'Shake-to-lock chats, persistent PIN protection, and contact name obfuscation for truly private threads.'
  },
  {
    icon: Waves,
    title: 'Smart Sync',
    description: 'Unified WebSocket context handles statuses, typing, message receipts, and background notifications reliably.'
  },
  {
    icon: BellPlus,
    title: 'Priority Alerts',
    description: 'Contextual notifications respect focus mode while ensuring critical updates still reach you.'
  }
];

const MessagingExperienceSection = () => {
  return (
    <section id="messaging" className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Messaging Built for Real Life
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From expressive reactions to enterprise-grade encryption, Syncup’s chat engine is crafted for fast, personal, and secure conversations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {messagingHighlights.map((item, index) => (
            <div
              key={item.title}
              className="modern-card p-6 shadow-lg"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-600 rounded-xl flex items-center justify-center mb-4">
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
};

export default MessagingExperienceSection;
