import React from 'react';
import {
  Clock,
  CalendarCheck,
  MapPin,
  BarChart3,
  BellRing
} from 'lucide-react';

const statusHighlights = [
  {
    icon: Clock,
    title: 'Dynamic Durations',
    description: 'Auto-suggested timings for 250+ preset activities with intelligent start/stop for travel and emergencies.'
  },
  {
    icon: CalendarCheck,
    title: 'Pro Scheduling',
    description: 'Layer recurring rules, stacked schedules, and advanced recurrence with a single tap.'
  },
  {
    icon: MapPin,
    title: 'Location Aware',
    description: 'Attach live places, share precise coordinates, and trigger updates based on movement.'
  },
  {
    icon: BarChart3,
    title: 'Status Analytics',
    description: 'Visual dashboards to understand focus time, interruptions prevented, and engagement trends.'
  },
  {
    icon: BellRing,
    title: 'Silent Modes',
    description: 'One-tap quiet hours with device + notification sync, plus auto-cancel timers.'
  }
];

const StatusAutomationSection = () => {
  return (
    <section id="status-automation" className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Status Automation Reimagined
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The Syncup Tab blends contextual presets, intelligent durations, and live insights so your availability mirrors what you are truly doing.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {statusHighlights.map((item, index) => (
            <div
              key={item.title}
              className="modern-card p-6 shadow-lg"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-xl flex items-center justify-center mb-4">
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

export default StatusAutomationSection;
