import React from 'react';
import { Clock, Coffee, Briefcase } from 'lucide-react';

const ScenariosSection = () => {
  const scenarios = [
    {
      id: 1,
      icon: Clock,
      title: 'Meeting Coordination',
      subtitle: 'Team scheduling made effortless',
      without: 'Send multiple messages, wait for replies, endless back-and-forth scheduling, 20 minutes wasted',
      with: '@team when can we meet? Maya (upcoming) instantly shows everyone\'s availability and suggests optimal times',
      timeSaved: '18 min',
      delay: 0
    },
    {
      id: 2,
      icon: Coffee,
      title: 'Social Plans',
      subtitle: 'Never interrupt friends again',
      without: 'Call at the wrong time, interrupt important moments, feel guilty, miss social opportunities',
      with: '@sarah coffee later? Maya (upcoming): "Sarah is free after 4 PM and loves coffee dates!"',
      timeSaved: '15 min',
      delay: 100
    },
    {
      id: 3,
      icon: Briefcase,
      title: 'Work Collaboration',
      subtitle: 'Respect focus time',
      without: 'Interrupt focused work sessions, break concentration, reduce team productivity, create unnecessary stress',
      with: '@john quick question? Maya (upcoming): "John is in focus mode until 3 PM. I\'ll notify him!"',
      timeSaved: '45 min',
      delay: 200
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            See Syncup in Action
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real scenarios where Syncup saves time and keeps you perfectly synchronized
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {scenarios.map((scenario) => (
            <div
              key={scenario.id}
              className="modern-card p-8 shadow-lg"
              data-aos="fade-up"
              data-aos-delay={scenario.delay}
            >
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl flex items-center justify-center mr-4 icon-float">
                  <scenario.icon className="w-7 h-7 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 text-refined">{scenario.title}</h3>
                  <p className="text-sm text-gray-500 font-medium">{scenario.subtitle}</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="bg-white rounded-xl p-4 border-l-4 border-red-200">
                  <div className="text-sm font-medium text-red-600 mb-1">❌ Without Syncup</div>
                  <p className="text-sm text-gray-600">{scenario.without}</p>
                </div>
                
                <div className="bg-white rounded-xl p-4 border-l-4 border-green-200">
                  <div className="text-sm font-medium text-green-600 mb-1">✅ With Syncup</div>
                  <p className="text-sm text-gray-600">{scenario.with}</p>
                </div>
                
                <div className="bg-blue-50 rounded-xl p-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-blue-700">Time Saved</span>
                    <span className="text-lg font-bold text-blue-600">{scenario.timeSaved}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScenariosSection;
