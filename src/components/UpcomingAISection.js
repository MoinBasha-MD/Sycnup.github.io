import React from 'react';
import {
  BrainCircuit,
  Handshake,
  Workflow,
  Sparkles,
  ShieldCheck,
  Network
} from 'lucide-react';

const roadmapItems = [
  {
    icon: BrainCircuit,
    title: 'Autonomous Negotiations',
    description: 'Maya-to-Maya conversations handle scheduling loops, only surfacing final proposals for human approval.'
  },
  {
    icon: Handshake,
    title: 'Contextual Follow-ups',
    description: 'AI remembers previous chats, nudges contacts at the right time, and respects shared privacy rules.'
  },
  {
    icon: Workflow,
    title: 'Workflow Automations',
    description: 'Status changes can trigger reminders, task boards, or calendar events through secure webhooks.'
  },
  {
    icon: Sparkles,
    title: 'Smart Summaries',
    description: 'Concise recaps of busy days, missed conversations, and upcoming commitments delivered automatically.'
  },
  {
    icon: ShieldCheck,
    title: 'Trust & Safety Controls',
    description: 'Granular AI permissions, audit trails, and admin dashboards keep automation transparent and controllable.'
  },
  {
    icon: Network,
    title: 'AI Mesh Network',
    description: 'Opt-in network for teams and families so personal AI agents collaborate on complex coordination tasks.'
  }
];

const UpcomingAISection = () => (
  <section id="ai-roadmap" className="section-padding bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900 text-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16" data-aos="fade-up">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Maya AI Roadmap (Upcoming)
        </h2>
        <p className="text-xl text-indigo-100 max-w-3xl mx-auto">
          We are building a world where your personal AI handles the scheduling, negotiation, and follow-up work so you can focus on living.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {roadmapItems.map((item, index) => (
          <div
            key={item.title}
            className="bg-white/10 backdrop-blur rounded-3xl p-6 border border-white/10 shadow-xl"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4">
              <item.icon className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-3">{item.title}</h3>
            <p className="text-indigo-100 text-sm leading-relaxed">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default UpcomingAISection;
