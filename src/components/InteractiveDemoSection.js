import React, { useState, useEffect } from 'react';
import { Users, ChevronLeft, ChevronRight } from 'lucide-react';

const InteractiveDemoSection = () => {
  const [currentStory, setCurrentStory] = useState(0);

  const realStories = [
    {
      id: 1,
      name: 'Rajesh Kumar',
      age: 32,
      role: 'Software Engineer',
      emoji: '🚗',
      problem: 'Nearly crashed while answering calls during heavy traffic',
      solution: 'Sets "🚗 Driving" status. Family sees it and texts instead. Reaches home safely.',
      impact: 'Life saved. Zero distractions.',
      color: 'from-red-500 to-orange-500'
    },
    {
      id: 2,
      name: 'Priya Sharma',
      age: 28,
      role: 'Marketing Manager',
      emoji: '🏥',
      problem: 'Father had heart attack. Missed 15 calls in meeting. Saw them 2 hours later.',
      solution: 'Mother sends SOS. Emergency override breaks through silent mode. Priya responds in 30 seconds.',
      impact: 'Emergency handled. Father saved.',
      color: 'from-blue-500 to-indigo-500'
    },
    {
      id: 3,
      name: 'Arjun Patel',
      age: 25,
      role: 'Student',
      emoji: '✈️',
      problem: 'Best friend visited after 5 years. Posted on Instagram. Arjun saw it 6 hours later. Friend had left.',
      solution: 'Friend updates status: "✈️ Just landed!". Arjun gets instant notification. They meet within 30 minutes.',
      impact: 'Reunion happened. Memories made.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 4,
      name: 'Sarah Chen',
      age: 30,
      role: 'Designer',
      emoji: '📍',
      problem: 'Missed spontaneous coffee meetup. Friend was 200m away but she didn\'t know.',
      solution: 'Gets notification: "Mike is 200m away at Starbucks!". Joins him in 5 minutes.',
      impact: 'Never miss nearby friends again.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 5,
      name: 'David Lee',
      age: 35,
      role: 'Team Lead',
      emoji: '💼',
      problem: 'Team constantly interrupted during focus time. Productivity dropped 40%.',
      solution: 'Everyone sets "🔴 Focus mode" status. Team respects it. Messages wait until free.',
      impact: 'Productivity up 60%. Team happier.',
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  const nextStory = () => {
    setCurrentStory((prev) => (prev + 1) % realStories.length);
  };

  const prevStory = () => {
    setCurrentStory((prev) => (prev - 1 + realStories.length) % realStories.length);
  };

  useEffect(() => {
    const interval = setInterval(nextStory, 5000);
    return () => clearInterval(interval);
  }, []);

  const story = realStories[currentStory];

  return (
    <section className="section-padding bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Real Stories, Real Impact
          </h2>
          <p className="text-xl text-gray-600">
            See how SyncUp is changing lives every day
          </p>
        </div>

        <div className="modern-card shadow-2xl p-8 max-w-4xl mx-auto relative overflow-hidden" data-aos="fade-up">
          {/* Story Carousel */}
          <div className={`bg-gradient-to-r ${story.color} rounded-2xl p-8 text-white mb-6`}>
            <div className="text-center mb-6">
              <div className="text-6xl mb-4">{story.emoji}</div>
              <h3 className="text-2xl font-bold mb-2">{story.name}, {story.age}</h3>
              <p className="text-white/90 font-medium">{story.role}</p>
            </div>
            
            <div className="space-y-4">
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
                <div className="font-bold mb-2">❌ The Problem:</div>
                <p className="text-sm">{story.problem}</p>
              </div>
              
              <div className="bg-white/30 backdrop-blur-sm rounded-xl p-4">
                <div className="font-bold mb-2">✅ With SyncUp:</div>
                <p className="text-sm">{story.solution}</p>
              </div>
              
              <div className="bg-white/40 backdrop-blur-sm rounded-xl p-4 text-center">
                <div className="font-bold text-lg">{story.impact}</div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between">
            <button
              onClick={prevStory}
              className="p-3 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors"
            >
              <ChevronLeft className="w-6 h-6 text-gray-700" />
            </button>
            
            <div className="flex gap-2">
              {realStories.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentStory(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === currentStory ? 'w-8 bg-blue-600' : 'w-2 bg-gray-300'
                  }`}
                />
              ))}
            </div>
            
            <button
              onClick={nextStory}
              className="p-3 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors"
            >
              <ChevronRight className="w-6 h-6 text-gray-700" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveDemoSection;
