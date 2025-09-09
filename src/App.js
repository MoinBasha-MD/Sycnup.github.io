import React, { useState, useEffect } from 'react';
import { 
  Menu, X, Star, Download, Smartphone, Clock, Users, Brain, 
  MessageCircle, Calendar, MapPin, Zap, Shield, Heart, 
  Check, ChevronDown, Play, Pause, Volume2, VolumeX,
  Hexagon, Building, TrendingUp, Globe
} from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ScenariosSection from './components/ScenariosSection';
import FeaturesSection from './components/FeaturesSection';
import InteractiveDemoSection from './components/InteractiveDemoSection';
import LiveDashboardDemo from './components/LiveDashboardDemo';
import AppShowcaseSection from './components/AppShowcaseSection';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: true,
      offset: 100
    });

    // Smooth sequential typing animation - Syncup first, then tagline
    const syncupText = "Syncup";
    const taglineText = "One Life, One Rhythm, One Sync";
    
    let syncupIndex = 0;
    let taglineIndex = 0;
    let syncupComplete = false;
    let isTyping = false;
    
    const typeSequential = () => {
      const syncupElement = document.getElementById('syncup-text');
      const taglineElement = document.getElementById('tagline-text');
      
      if (!syncupElement || !taglineElement) {
        setTimeout(typeSequential, 100);
        return;
      }
      
      if (!syncupComplete) {
        // Type Syncup first with smooth animation
        if (syncupIndex <= syncupText.length) {
          syncupElement.textContent = syncupText.substring(0, syncupIndex);
          isTyping = syncupIndex < syncupText.length;
          syncupIndex++;
          
          // Variable speed for more natural typing
          const delay = Math.random() * 50 + 80; // 80-130ms random delay
          setTimeout(typeSequential, delay);
        } else {
          syncupComplete = true;
          isTyping = false;
          setTimeout(typeSequential, 800); // Longer pause before tagline
        }
      } else {
        // Type tagline after Syncup is complete
        if (taglineIndex <= taglineText.length) {
          taglineElement.textContent = taglineText.substring(0, taglineIndex);
          isTyping = taglineIndex < taglineText.length;
          taglineIndex++;
          
          // Slightly faster for tagline
          const delay = Math.random() * 40 + 60; // 60-100ms random delay
          setTimeout(typeSequential, delay);
        } else {
          isTyping = false;
        }
      }
    };
    
    // Start typing animation after a short delay
    setTimeout(typeSequential, 1500);
  }, []);

  return (
    <div id="app" className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full nav-modern z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center micro-bounce">
                <Hexagon className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="text-xl font-bold text-refined gradient-text">Syncup</span>
                <div className="text-xs text-gray-500 font-medium tracking-wide">One Life, One Rhythm, One Sync</div>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-600 hover:text-blue-600 transition-all duration-300 font-medium">Features</a>
              <a href="#how-it-works" className="text-gray-600 hover:text-blue-600 transition-all duration-300 font-medium">How It Works</a>
              <a href="#faq" className="text-gray-600 hover:text-blue-600 transition-all duration-300 font-medium">FAQ</a>
              <button className="btn-primary btn-elegant">Download Now</button>
            </div>
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden micro-bounce">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="section-elegant bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative min-h-[80vh]">
          {/* Typing Animation - Responsive */}
          <div className="absolute top-16 right-2 sm:top-20 sm:right-4 lg:top-24 lg:right-8 z-50 bg-white/90 backdrop-blur-sm rounded-xl p-3 sm:p-4 lg:p-6 shadow-xl border border-blue-200 w-[280px] sm:w-[320px] lg:w-[400px] hidden sm:block">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-2 lg:mb-3">
                <span id="syncup-text" className="text-blue-600"></span>
              </div>
              <div className="text-sm sm:text-base lg:text-lg xl:text-xl font-medium h-8 sm:h-10 lg:h-12 flex items-center justify-center">
                <span id="tagline-text" className="text-gray-700 whitespace-nowrap"></span>
              </div>
            </div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
            <div className="text-center mb-12" data-aos="fade-up">
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-6">
                <Star className="w-4 h-4 mr-2" />
                Now Available on iOS & Android
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 text-hero">
                Sync Your <span className="gradient-text">Entire Life</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                Experience seamless coordination between your professional commitments and personal moments. Whether you're attending office meetings, catching flights at the airport, enjoying cinema nights with loved ones, or planning vacation getaways - Syncup's intelligent communication platform ensures every aspect of your life stays perfectly synchronized.
              </p>
              
              {/* Key Benefits */}
              <div className="grid md:grid-cols-3 gap-6 mb-8 max-w-4xl mx-auto">
                <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mb-4 mx-auto">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Smart Time Management</h3>
                  <p className="text-sm text-gray-600">Automatically coordinate schedules across work meetings, personal appointments, and leisure activities</p>
                </div>
                
                <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mb-4 mx-auto">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Work-Life Balance</h3>
                  <p className="text-sm text-gray-600">Seamlessly blend professional responsibilities with personal commitments for a harmonious lifestyle</p>
                </div>
                
                <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mb-4 mx-auto">
                    <Brain className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">AI-Powered Intelligence</h3>
                  <p className="text-sm text-gray-600">DIYA AI learns your patterns and proactively manages communications across all life contexts</p>
                </div>
              </div>

              {/* Enhanced Features List */}
              <div className="bg-white/30 backdrop-blur-sm rounded-2xl p-6 mb-8 max-w-4xl mx-auto border border-white/20">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">What Makes Syncup Different</h3>
                <div className="grid md:grid-cols-2 gap-4 text-left">
                  <div className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium text-gray-900">Complete Life Integration</div>
                      <div className="text-sm text-gray-600">Manage work calls, family dinners, travel plans, and social events in one unified platform</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium text-gray-900">Intelligent Context Awareness</div>
                      <div className="text-sm text-gray-600">DIYA understands whether you're in a business meeting or at a movie theater and responds appropriately</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium text-gray-900">Real-Time Status Sharing</div>
                      <div className="text-sm text-gray-600">Automatically update your availability whether you're driving, shopping, on vacation, or in the office</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium text-gray-900">Cross-Platform Synchronization</div>
                      <div className="text-sm text-gray-600">Seamlessly coordinate across mobile, desktop, and web platforms for consistent communication</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button className="btn-primary btn-elegant text-lg px-10 py-4 text-refined">
                  <Download className="w-5 h-5 mr-3 inline" />
                  Download for iOS
                </button>
                <button className="btn-secondary text-lg px-10 py-4 text-refined micro-bounce">
                  <Smartphone className="w-5 h-5 mr-3 inline" />
                  Get on Android
                </button>
              </div>
              
              <div className="mt-6 text-sm text-gray-500">
                ✓ Free forever plan available  ✓ No credit card required  ✓ 14-day premium trial  ✓ Cancel anytime
              </div>
            </div>
            <div className="relative" data-aos="fade-left">
              <div className="relative z-10">
                <div className="modern-card p-8 shadow-xl">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center icon-float">
                        <MessageCircle className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="font-bold text-lg text-refined">DIYA AI Assistant</div>
                        <div className="text-sm text-gray-500 font-medium">Smart conversation scenarios</div>
                      </div>
                    </div>
                    
                    {/* Chat Messages */}
                    <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-4 border border-gray-100 max-h-80 overflow-y-auto">
                      <div className="space-y-3">
                        {/* User starts conversation */}
                        <div className="flex justify-end">
                          <div className="bg-blue-500 text-white px-4 py-2 rounded-2xl rounded-br-md max-w-xs">
                            <div className="text-sm">Hi DIYA! 👋</div>
                          </div>
                        </div>
                        
                        {/* DIYA responds */}
                        <div className="flex justify-start">
                          <div className="bg-white text-gray-800 px-4 py-2 rounded-2xl rounded-bl-md max-w-xs border border-gray-200">
                            <div className="text-sm">Hello! I'm here to help you coordinate with your team. What would you like to do?</div>
                          </div>
                        </div>
                        
                        {/* User asks about availability */}
                        <div className="flex justify-end">
                          <div className="bg-blue-500 text-white px-4 py-2 rounded-2xl rounded-br-md max-w-xs">
                            <div className="text-sm">@sarah free for dinner after her movie?</div>
                          </div>
                        </div>
                        
                        {/* DIYA checks and responds */}
                        <div className="flex justify-start">
                          <div className="bg-white text-gray-800 px-4 py-2 rounded-2xl rounded-bl-md max-w-xs border border-gray-200">
                            <div className="text-sm">Sarah's movie ends at 10 PM. She's free after that and loves late-night dining! I'll let her know. 🍽️</div>
                          </div>
                        </div>
                        
                        {/* User wants to set status */}
                        <div className="flex justify-end">
                          <div className="bg-blue-500 text-white px-4 py-2 rounded-2xl rounded-br-md max-w-xs">
                            <div className="text-sm">Set my status to "At airport" until 8 PM</div>
                          </div>
                        </div>
                        
                        {/* DIYA confirms */}
                        <div className="flex justify-start">
                          <div className="bg-white text-gray-800 px-4 py-2 rounded-2xl rounded-bl-md max-w-xs border border-gray-200">
                            <div className="text-sm">✅ Status updated! I'll handle work calls and let everyone know you're traveling until 8 PM. ✈️</div>
                          </div>
                        </div>
                        
                        {/* User asks about team */}
                        <div className="flex justify-end">
                          <div className="bg-blue-500 text-white px-4 py-2 rounded-2xl rounded-br-md max-w-xs">
                            <div className="text-sm">Who can join weekend beach trip?</div>
                          </div>
                        </div>
                        
                        {/* DIYA provides team status */}
                        <div className="flex justify-start">
                          <div className="bg-white text-gray-800 px-4 py-2 rounded-2xl rounded-bl-md max-w-xs border border-gray-200">
                            <div className="text-sm">Mike is free this weekend! Emma has family plans. Alex is already on vacation in Hawaii. Should I create a group chat? 🏖️</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Interactive buttons */}
                    <div className="flex gap-2 flex-wrap">
                      <button className="text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded-full hover:bg-blue-200 transition-colors">
                        Try: "Going to airport"
                      </button>
                      <button className="text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full hover:bg-green-200 transition-colors">
                        Try: "Movie night plans?"
                      </button>
                      <button className="text-xs bg-purple-100 text-purple-700 px-3 py-1 rounded-full hover:bg-purple-200 transition-colors">
                        Try: "Weekend vacation?"
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full pulse-subtle"></div>
              <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full pulse-subtle" style={{animationDelay: '1s'}}></div>
              <div className="absolute top-1/3 -right-8 w-16 h-16 bg-gradient-to-br from-green-100 to-emerald-100 rounded-full pulse-subtle" style={{animationDelay: '2s'}}></div>
            </div>
          </div>
        </div>
      </section>

      <ScenariosSection />
      <InteractiveDemoSection />
      <LiveDashboardDemo />
      <AppShowcaseSection />
      <FeaturesSection />
      
      {/* How It Works Section */}
      <section id="how-it-works" className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Get Started in Minutes
            </h2>
            <p className="text-xl text-gray-600">
              Four simple steps to revolutionize your communication
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Download, title: 'Download & Set Up', description: 'Quick registration with phone verification' },
              { icon: Users, title: 'Connect & Sync', description: 'Import contacts and build your network' },
              { icon: MessageCircle, title: 'Share & Coordinate', description: 'Set statuses and start using DIYA AI' },
              { icon: Heart, title: 'Stay In Sync', description: 'Enjoy effortless communication and coordination' }
            ].map((step, index) => (
              <div key={index} className="text-center" data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="relative mb-8">
                  <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center text-primary-500 font-bold text-sm">
                    {index + 1}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div data-aos="fade-right">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Transform Your Daily Communication
              </h2>
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                    <Users className="w-6 h-6 text-primary-500 mr-3" />
                    For Individuals
                  </h3>
                  <ul className="space-y-3">
                    {[
                      'Never interrupt someone who\'s busy again',
                      'Get instant answers about availability',
                      'Maintain better work-life boundaries',
                      'Stay connected without being overwhelmed'
                    ].map((benefit, index) => (
                      <li key={index} className="flex items-start">
                        <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                    <Building className="w-6 h-6 text-primary-500 mr-3" />
                    For Teams
                  </h3>
                  <ul className="space-y-3">
                    {[
                      'Coordinate meetings effortlessly',
                      'Reduce unnecessary interruptions',
                      'Improve team communication',
                      'Boost overall productivity'
                    ].map((benefit, index) => (
                      <li key={index} className="flex items-start">
                        <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="relative" data-aos="fade-left">
              <div className="bg-gradient-to-br from-primary-500 to-primary-700 rounded-3xl p-8 text-white">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-3xl font-bold">85%</div>
                      <div className="text-primary-100">Less Interruptions</div>
                    </div>
                    <TrendingUp className="w-8 h-8 text-primary-200" />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-3xl font-bold">2.5hrs</div>
                      <div className="text-primary-100">Time Saved Daily</div>
                    </div>
                    <Clock className="w-8 h-8 text-primary-200" />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-3xl font-bold">98%</div>
                      <div className="text-primary-100">User Satisfaction</div>
                    </div>
                    <Heart className="w-8 h-8 text-primary-200" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="section-padding bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Built with Cutting-Edge Technology
            </h2>
            <p className="text-xl text-gray-300">
              Enterprise-grade security meets consumer-friendly design
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Brain, title: 'AI-Powered', description: 'Advanced natural language processing for intelligent responses', delay: 0 },
              { icon: Zap, title: 'Real-Time', description: 'WebSocket technology for instant updates and notifications', delay: 100 },
              { icon: Globe, title: 'Cross-Platform', description: 'Available on both iOS and Android with native performance', delay: 200 },
              { icon: Shield, title: 'Secure', description: 'End-to-end encryption and biometric authentication', delay: 300 }
            ].map((tech) => (
              <div
                key={tech.title}
                className="text-center p-6 rounded-2xl bg-gray-800 hover-lift"
                data-aos="fade-up"
                data-aos-delay={tech.delay}
              >
                <tech.icon className="w-12 h-12 text-primary-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">{tech.title}</h3>
                <p className="text-gray-400 text-sm">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQSection />

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary-500 to-primary-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Revolutionize Your Communication?
          </h2>
          <p className="text-xl text-primary-100 mb-2">
            Download Syncup today and experience the future of intelligent coordination
          </p>
          <p className="text-primary-200 font-medium mb-8">
            One Life, One Rhythm, One Sync
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-primary-500 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors">
              <Download className="w-5 h-5 mr-2 inline" />
              Download for iOS
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-primary-500 transition-colors">
              <Smartphone className="w-5 h-5 mr-2 inline" />
              Get on Android
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default App;
