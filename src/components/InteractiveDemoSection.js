import React, { useState } from 'react';
import { MessageCircle, Users } from 'lucide-react';

const InteractiveDemoSection = () => {
  const [demoMessages, setDemoMessages] = useState([
    {
      id: 1,
      sender: 'maya',
      text: "Hi! I'm Maya, the upcoming AI assistant. Try asking about someone's availability!",
      time: '10:00 AM'
    }
  ]);
  const [pendingResponse, setPendingResponse] = useState(false);

  const teamMembers = [
    {
      id: 1,
      name: 'Sarah Chen',
      role: 'Designer',
      status: 'Available',
      until: 'Until 5 PM',
      color: '#10B981',
      statusColor: 'bg-green-400'
    },
    {
      id: 2,
      name: 'Mike Johnson',
      role: 'Developer',
      status: 'In Meeting',
      until: 'Until 2:30 PM',
      color: '#F59E0B',
      statusColor: 'bg-yellow-400'
    },
    {
      id: 3,
      name: 'Alex Rivera',
      role: 'Manager',
      status: 'Focus Time',
      until: 'Until 4 PM',
      color: '#EF4444',
      statusColor: 'bg-red-400'
    },
    {
      id: 4,
      name: 'Emma Davis',
      role: 'Marketing',
      status: 'Available',
      until: 'All day',
      color: '#8B5CF6',
      statusColor: 'bg-green-400'
    }
  ];

  const addDemoMessage = () => {
    if (pendingResponse) return;

    const demoQueries = [
      { user: '@sarah free for lunch?', maya: 'Sarah is available after 1 PM and loves trying new restaurants!' },
      { user: '@team meeting at 3?', maya: 'Mike and Alex are free, but Sarah has a client call. How about 4 PM?' },
      { user: '@john quick question?', maya: 'John is in deep focus mode until 5 PM. I\'ll notify him when he\'s available!' },
      { user: '@emma coffee break?', maya: 'Emma just finished her meeting and would love a coffee break right now!' },
      { user: '@alex available now?', maya: 'Alex is wrapping up a call and will be free in 10 minutes!' },
      { user: '@team standup ready?', maya: 'Everyone is online and ready for the standup meeting!' }
    ];
    
    const randomQuery = demoQueries[Math.floor(Math.random() * demoQueries.length)];
    const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    
    setPendingResponse(true);
    
    const userMessageId = Date.now();
    setDemoMessages(prev => [...prev, {
      id: userMessageId,
      sender: 'user',
      text: randomQuery.user,
      time: currentTime
    }]);
    
    setTimeout(() => {
      const diyaMessageId = Date.now() + 1;
      setDemoMessages(prev => [...prev, {
        id: diyaMessageId,
        sender: 'maya',
        text: randomQuery.maya + ' (Maya AI coming soon)',
        time: currentTime
      }]);
      
      setPendingResponse(false);
      
      setTimeout(() => {
        const chatContainer = document.querySelector('.h-80.overflow-y-auto');
        if (chatContainer) {
          chatContainer.scrollTop = chatContainer.scrollHeight;
        }
      }, 100);
    }, 1500);
  };

  const resetDemo = () => {
    setPendingResponse(false);
    setDemoMessages([
      {
        id: 1,
        sender: 'maya',
        text: "Hi! I'm Maya, the upcoming AI assistant. Try asking about someone's availability!",
        time: '10:00 AM'
      }
    ]);
  };

  return (
    <section className="section-padding bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Try Maya AI Assistant (Preview)
          </h2>
          <p className="text-xl text-gray-600">
            Experience how Maya will handle availability requests intelligently when launched
          </p>
        </div>

        <div className="modern-card shadow-2xl p-10 max-w-5xl mx-auto" data-aos="fade-up">
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h3 className="text-xl font-bold mb-6 flex items-center text-refined">
                <MessageCircle className="w-6 h-6 text-blue-600 mr-3 icon-float" />
                Chat with Maya (Upcoming)
              </h3>
              <div className="space-y-4 h-80 overflow-y-auto bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-6 border border-gray-100">
                {demoMessages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-xs px-5 py-3 rounded-2xl shadow-sm ${
                        message.sender === 'user'
                          ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white'
                          : 'bg-white text-gray-800 border border-gray-200'
                      }`}
                    >
                      <div className="text-sm font-medium">{message.text}</div>
                      <div className="text-xs opacity-70 mt-1">{message.time}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 flex gap-3">
                <button
                  onClick={addDemoMessage}
                  disabled={pendingResponse}
                  className={`btn-primary btn-elegant text-sm px-6 py-3 ${
                    pendingResponse ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                >
                  {pendingResponse ? 'Maya is typing...' : 'Try Demo Message'}
                </button>
                <button onClick={resetDemo} className="btn-secondary text-sm px-6 py-3 micro-bounce">
                  Reset
                </button>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-6 flex items-center text-refined">
                <Users className="w-6 h-6 text-blue-600 mr-3 icon-float" />
                Team Status Board
              </h3>
              <div className="space-y-3">
                {teamMembers.map((member) => (
                  <div
                    key={member.id}
                    className="flex items-center justify-between p-3 bg-gray-50 rounded-xl"
                  >
                    <div className="flex items-center space-x-3">
                      <div
                        className="w-8 h-8 rounded-full flex items-center justify-center text-white font-semibold"
                        style={{ backgroundColor: member.color }}
                      >
                        {member.name.charAt(0)}
                      </div>
                      <div>
                        <div className="font-medium text-sm">{member.name}</div>
                        <div className="text-xs text-gray-500">{member.role}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center space-x-1">
                        <div className={`w-2 h-2 rounded-full ${member.statusColor}`}></div>
                        <span className="text-xs font-medium">{member.status}</span>
                      </div>
                      <div className="text-xs text-gray-400">{member.until}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveDemoSection;
