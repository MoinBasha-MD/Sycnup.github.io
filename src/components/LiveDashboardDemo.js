import React, { useState, useEffect } from 'react';
import { 
  Clock, MessageCircle, Video, Coffee, 
  Zap, Calendar
} from 'lucide-react';

const LiveDashboardDemo = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [activeUsers, setActiveUsers] = useState([]);

  // Update time every second for live feel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Simulate live user activity updates
  useEffect(() => {
    const users = [
      {
        id: 1,
        name: 'Sarah Chen',
        role: 'Product Manager',
        avatar: 'SC',
        status: 'at-airport',
        activity: 'Flight to NYC at 6 PM',
        lastSeen: 'now',
        statusColor: 'bg-blue-500',
        activityIcon: Clock,
        location: 'SFO Airport'
      },
      {
        id: 2,
        name: 'Mike Rodriguez',
        role: 'Developer',
        avatar: 'MR',
        status: 'driving',
        activity: 'Commuting home',
        lastSeen: '2 min ago',
        statusColor: 'bg-orange-500',
        activityIcon: Clock,
        location: 'Highway 101'
      },
      {
        id: 3,
        name: 'Emma Wilson',
        role: 'Designer',
        avatar: 'EW',
        status: 'cinema',
        activity: 'Movie at 8 PM',
        lastSeen: '5 min ago',
        statusColor: 'bg-purple-500',
        activityIcon: Clock,
        location: 'AMC Theater'
      },
      {
        id: 4,
        name: 'Alex Park',
        role: 'Marketing',
        avatar: 'AP',
        status: 'shopping',
        activity: 'Mall visit until 7 PM',
        lastSeen: 'now',
        statusColor: 'bg-pink-500',
        activityIcon: Clock,
        location: 'Westfield Mall'
      },
      {
        id: 5,
        name: 'Lisa Zhang',
        role: 'Sales',
        avatar: 'LZ',
        status: 'vacation',
        activity: 'Beach vacation in Hawaii',
        lastSeen: '1 min ago',
        statusColor: 'bg-green-500',
        activityIcon: Clock,
        location: 'Maui, Hawaii'
      },
      {
        id: 6,
        name: 'David Kim',
        role: 'DevOps',
        avatar: 'DK',
        status: 'friends',
        activity: 'Chilling with friends',
        lastSeen: '3 min ago',
        statusColor: 'bg-yellow-500',
        activityIcon: Coffee,
        location: 'Central Park'
      }
    ];

    // Simulate status changes every few seconds
    const updateStatuses = () => {
      const updatedUsers = users.map(user => {
        const random = Math.random();
        if (random < 0.1) { // 10% chance to update
          const activities = [
            { activity: 'At airport - Flight delayed', status: 'at-airport', color: 'bg-blue-500', icon: Clock },
            { activity: 'Driving to cinema', status: 'driving', color: 'bg-orange-500', icon: Clock },
            { activity: 'Movie night with family', status: 'cinema', color: 'bg-purple-500', icon: Clock },
            { activity: 'Shopping at mall', status: 'shopping', color: 'bg-pink-500', icon: Clock },
            { activity: 'On vacation in Bali', status: 'vacation', color: 'bg-green-500', icon: Clock },
            { activity: 'Coffee with friends', status: 'friends', color: 'bg-yellow-500', icon: Coffee },
            { activity: 'Available for work', status: 'work-available', color: 'bg-emerald-500', icon: MessageCircle },
            { activity: 'In office meeting', status: 'work-meeting', color: 'bg-red-500', icon: Video }
          ];
          const newActivity = activities[Math.floor(Math.random() * activities.length)];
          return {
            ...user,
            activity: newActivity.activity,
            status: newActivity.status,
            statusColor: newActivity.color,
            activityIcon: newActivity.icon,
            lastSeen: 'now'
          };
        }
        return user;
      });
      setActiveUsers(updatedUsers);
    };

    setActiveUsers(users);
    const statusTimer = setInterval(updateStatuses, 3000);
    
    return () => clearInterval(statusTimer);
  }, []);

  const workAvailableCount = activeUsers.filter(user => user.status === 'work-available').length;
  const personalActivityCount = activeUsers.filter(user => ['at-airport', 'driving', 'cinema', 'shopping', 'vacation', 'friends'].includes(user.status)).length;
  const workMeetingCount = activeUsers.filter(user => user.status === 'work-meeting').length;
  // const totalUsers = activeUsers.length;

  return (
    <section className="section-padding bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Live Life Dashboard
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See your team's complete life status - work, travel, entertainment, and personal activities
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Live Stats Panel */}
          <div className="lg:col-span-1">
            <div className="modern-card p-6 shadow-lg h-fit sticky top-8">
              <div className="text-center mb-6">
                <div className="text-2xl font-bold text-gray-900 mb-2">
                  Team Status
                </div>
                <div className="text-sm text-gray-500">
                  {currentTime.toLocaleTimeString()}
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-emerald-50 rounded-xl">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-emerald-500 rounded-full mr-3 animate-pulse"></div>
                    <span className="font-medium text-emerald-800">Work Available</span>
                  </div>
                  <span className="font-bold text-emerald-600">{workAvailableCount}</span>
                </div>

                <div className="flex items-center justify-between p-3 bg-blue-50 rounded-xl">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                    <span className="font-medium text-blue-800">Personal Activities</span>
                  </div>
                  <span className="font-bold text-blue-600">{personalActivityCount}</span>
                </div>

                <div className="flex items-center justify-between p-3 bg-red-50 rounded-xl">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-red-500 rounded-full mr-3"></div>
                    <span className="font-medium text-red-800">Work Meetings</span>
                  </div>
                  <span className="font-bold text-red-600">{workMeetingCount}</span>
                </div>

                <div className="mt-6 p-4 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl text-white text-center">
                  <div className="text-sm opacity-90">Team Productivity</div>
                  <div className="text-2xl font-bold">94%</div>
                  <div className="text-xs opacity-75">↑ 12% from yesterday</div>
                </div>
              </div>
            </div>
          </div>

          {/* Live Team Members */}
          <div className="lg:col-span-2">
            <div className="grid gap-4">
              {activeUsers.map((user, index) => (
                <div
                  key={user.id}
                  className="modern-card p-4 shadow-lg hover:shadow-xl transition-all duration-300 group"
                  data-aos="fade-up"
                  data-aos-delay={index * 50}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      {/* Avatar with live status indicator */}
                      <div className="relative">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold">
                          {user.avatar}
                        </div>
                        <div className={`absolute -bottom-1 -right-1 w-4 h-4 ${user.statusColor} rounded-full border-2 border-white ${user.status === 'online' ? 'animate-pulse' : ''}`}></div>
                      </div>

                      {/* User Info */}
                      <div className="flex-1">
                        <div className="flex items-center space-x-2">
                          <h3 className="font-semibold text-gray-900">{user.name}</h3>
                          <span className="text-xs text-gray-500">• {user.location}</span>
                        </div>
                        <div className="text-sm text-gray-600">{user.role}</div>
                        <div className="flex items-center space-x-2 mt-1">
                          <user.activityIcon className="w-4 h-4 text-gray-400" />
                          <span className="text-sm text-gray-700">{user.activity}</span>
                        </div>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center space-x-2">
                      <div className="text-xs text-gray-500">{user.lastSeen}</div>
                      <div className="flex space-x-1 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                          <MessageCircle className="w-4 h-4 text-gray-600" />
                        </button>
                        <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                          <Video className="w-4 h-4 text-gray-600" />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Live activity indicator */}
                  {user.status === 'online' && (
                    <div className="mt-3 flex items-center text-xs text-green-600">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-ping"></div>
                      Active now
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Quick Actions */}
            <div className="mt-8 p-6 bg-white rounded-2xl shadow-lg border border-gray-100">
              <h3 className="font-semibold text-gray-900 mb-4">Quick Actions</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <button className="flex items-center justify-center p-3 bg-blue-50 hover:bg-blue-100 rounded-xl transition-colors">
                  <MessageCircle className="w-5 h-5 text-blue-600 mr-2" />
                  <span className="text-sm font-medium text-blue-700">Message All</span>
                </button>
                <button className="flex items-center justify-center p-3 bg-green-50 hover:bg-green-100 rounded-xl transition-colors">
                  <Video className="w-5 h-5 text-green-600 mr-2" />
                  <span className="text-sm font-medium text-green-700">Start Meeting</span>
                </button>
                <button className="flex items-center justify-center p-3 bg-purple-50 hover:bg-purple-100 rounded-xl transition-colors">
                  <Calendar className="w-5 h-5 text-purple-600 mr-2" />
                  <span className="text-sm font-medium text-purple-700">Schedule</span>
                </button>
                <button className="flex items-center justify-center p-3 bg-orange-50 hover:bg-orange-100 rounded-xl transition-colors">
                  <Zap className="w-5 h-5 text-orange-600 mr-2" />
                  <span className="text-sm font-medium text-orange-700">Focus Mode</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveDashboardDemo;
