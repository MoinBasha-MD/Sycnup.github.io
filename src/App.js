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
    // Initialize AOS with error handling
    try {
      AOS.init({
        duration: 800,
        easing: 'ease-out-cubic',
        once: true,
        offset: 100
      });
    } catch (error) {
      console.warn('AOS initialization failed:', error);
    }

    // Enhanced typing animation with mobile compatibility
    const syncupText = "Syncup";
    const taglineText = "One Life, One Rhythm, One Sync";
    
    let syncupIndex = 0;
    let taglineIndex = 0;
    let syncupComplete = false;
    let animationTimeout;
    
    const typeSequential = () => {
      try {
        const syncupElement = document.getElementById('syncup-text');
        const taglineElement = document.getElementById('tagline-text');
        
        if (!syncupElement || !taglineElement) {
          animationTimeout = setTimeout(typeSequential, 100);
          return;
        }
        
        if (!syncupComplete) {
          if (syncupIndex <= syncupText.length) {
            syncupElement.textContent = syncupText.substring(0, syncupIndex);
            syncupIndex++;
            const delay = Math.random() * 50 + 80;
            animationTimeout = setTimeout(typeSequential, delay);
          } else {
            syncupComplete = true;
            animationTimeout = setTimeout(typeSequential, 800);
          }
        } else {
          if (taglineIndex <= taglineText.length) {
            taglineElement.textContent = taglineText.substring(0, taglineIndex);
            taglineIndex++;
            const delay = Math.random() * 40 + 60;
            animationTimeout = setTimeout(typeSequential, delay);
          }
        }
      } catch (error) {
        console.warn('Typing animation error:', error);
      }
    };
    
    // Start animation with delay
    const startTimeout = setTimeout(typeSequential, 1500);
    
    // Cleanup function
    return () => {
      if (startTimeout) clearTimeout(startTimeout);
      if (animationTimeout) clearTimeout(animationTimeout);
    };
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
      <section className="relative min-h-screen bg-gradient-to-br from-indigo-50 via-white to-cyan-50 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse" style={{animationDelay: '2s'}}></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse" style={{animationDelay: '4s'}}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[90vh]">
            {/* Left Content */}
            <div className="text-center lg:text-left" data-aos="fade-up">
              {/* Badge */}
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800 rounded-full text-sm font-semibold mb-8 shadow-sm">
                <Star className="w-4 h-4 mr-2" />
                Now Available on iOS & Android
              </div>
              
              {/* Main Heading */}
              <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 mb-6 leading-tight">
                Sync Your{' '}
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  Entire Life
                </span>
              </h1>
              
              {/* Subtitle */}
              <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Experience seamless coordination between your professional commitments and personal moments with AI-powered intelligence.
              </p>
              
              {/* Key Features */}
              <div className="grid md:grid-cols-3 gap-6 mb-10">
                <div className="group bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Clock className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-3 text-lg">Smart Time Management</h3>
                  <p className="text-gray-600 leading-relaxed">Automatically coordinate schedules across work meetings, personal appointments, and leisure activities</p>
                </div>
                
                <div className="group bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Heart className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-3 text-lg">Work-Life Balance</h3>
                  <p className="text-gray-600 leading-relaxed">Seamlessly blend professional responsibilities with personal commitments for a harmonious lifestyle</p>
                </div>
                
                <div className="group bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Brain className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-3 text-lg">AI-Powered Intelligence</h3>
                  <p className="text-gray-600 leading-relaxed">DIYA AI learns your patterns and proactively manages communications across all life contexts</p>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                <button className="group relative bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-indigo-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative flex items-center justify-center">
                    <Download className="w-5 h-5 mr-3" />
                    Download for iOS
                  </div>
                </button>
                <button className="group bg-white text-gray-900 px-8 py-4 rounded-2xl font-semibold text-lg border-2 border-gray-200 hover:border-gray-300 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-center justify-center">
                    <Smartphone className="w-5 h-5 mr-3 text-gray-600 group-hover:text-gray-900 transition-colors" />
                    Get on Android
                  </div>
                </button>
              </div>
              
              {/* Trust Indicators */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-6 text-sm text-gray-500">
                <div className="flex items-center">
                  <Check className="w-4 h-4 text-green-500 mr-2" />
                  Free forever plan
                </div>
                <div className="flex items-center">
                  <Check className="w-4 h-4 text-green-500 mr-2" />
                  No credit card required
                </div>
                <div className="flex items-center">
                  <Check className="w-4 h-4 text-green-500 mr-2" />
                  14-day premium trial
                </div>
              </div>
            </div>
            
            {/* Right Content - Interactive Demo */}
            <div className="relative" data-aos="fade-left">
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full opacity-20 animate-pulse" style={{animationDelay: '1s'}}></div>
              
              <div className="relative z-10">
                {/* Typing Animation Card */}
                <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-6 mb-6 shadow-2xl border border-gray-200/50">
                  <div className="text-center">
                    <div className="text-3xl md:text-4xl font-bold mb-3">
                      <span id="syncup-text" className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"></span>
                    </div>
                    <div className="text-lg font-medium text-gray-600">
                      <span id="tagline-text"></span>
                    </div>
                  </div>
                </div>
                
                {/* AI Demo Card */}
                <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-gray-200/50">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg">
                      <MessageCircle className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <div className="font-bold text-xl text-gray-900">DIYA AI Assistant</div>
                      <div className="text-gray-500 font-medium">Smart conversation scenarios</div>
                    </div>
                  </div>
                  
                  {/* Chat Interface */}
                  <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-6 border border-gray-100 max-h-80 overflow-y-auto">
                    <div className="space-y-4">
                      {/* User Message */}
                      <div className="flex justify-end">
                        <div className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-5 py-3 rounded-2xl rounded-br-md max-w-xs shadow-md">
                          <div className="text-sm font-medium">Hi DIYA! 👋</div>
                        </div>
                      </div>
                      
                      {/* AI Response */}
                      <div className="flex justify-start">
                        <div className="bg-white text-gray-800 px-5 py-3 rounded-2xl rounded-bl-md max-w-xs border border-gray-200 shadow-sm">
                          <div className="text-sm">Hello! I'm here to help you coordinate with your team. What would you like to do?</div>
                        </div>
                      </div>
                      
                      {/* User Query */}
                      <div className="flex justify-end">
                        <div className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-5 py-3 rounded-2xl rounded-br-md max-w-xs shadow-md">
                          <div className="text-sm font-medium">@sarah free for dinner after her movie?</div>
                        </div>
                      </div>
                      
                      {/* AI Smart Response */}
                      <div className="flex justify-start">
                        <div className="bg-white text-gray-800 px-5 py-3 rounded-2xl rounded-bl-md max-w-xs border border-gray-200 shadow-sm">
                          <div className="text-sm">Sarah's movie ends at 10 PM. She's free after that and loves late-night dining! I'll let her know. 🍽️</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Quick Action Buttons */}
                  <div className="flex gap-2 flex-wrap mt-4">
                    <button className="text-xs bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-700 px-4 py-2 rounded-full hover:from-blue-200 hover:to-indigo-200 transition-all duration-200 font-medium shadow-sm">
                      "Going to airport"
                    </button>
                    <button className="text-xs bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 px-4 py-2 rounded-full hover:from-green-200 hover:to-emerald-200 transition-all duration-200 font-medium shadow-sm">
                      "Movie night plans?"
                    </button>
                    <button className="text-xs bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 px-4 py-2 rounded-full hover:from-purple-200 hover:to-pink-200 transition-all duration-200 font-medium shadow-sm">
                      "Weekend vacation?"
                    </button>
                  </div>
                </div>
              </div>
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
