import React from 'react';
import { Hexagon, Download, Smartphone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-primary-500 rounded-lg flex items-center justify-center">
                <Hexagon className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">Syncup</span>
            </div>
            <p className="text-gray-400 mb-2">
              Revolutionizing communication with AI-powered status sharing and intelligent coordination.
            </p>
            <p className="text-sm text-primary-300 font-medium mb-6">
              One Life, One Rhythm, One Sync
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary-500 cursor-pointer transition-colors">
                <span className="text-sm font-bold">f</span>
              </div>
              <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary-500 cursor-pointer transition-colors">
                <span className="text-sm font-bold">t</span>
              </div>
              <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary-500 cursor-pointer transition-colors">
                <span className="text-sm font-bold">in</span>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-6">Product</h3>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-white transition-colors">How It Works</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Security</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-6">Support</h3>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-6">Download</h3>
            <div className="space-y-3">
              <button className="w-full bg-gray-800 hover:bg-gray-700 px-4 py-3 rounded-lg flex items-center transition-colors">
                <Download className="w-5 h-5 mr-3" />
                <div className="text-left">
                  <div className="text-xs text-gray-400">Download on the</div>
                  <div className="font-semibold">App Store</div>
                </div>
              </button>
              <button className="w-full bg-gray-800 hover:bg-gray-700 px-4 py-3 rounded-lg flex items-center transition-colors">
                <Smartphone className="w-5 h-5 mr-3" />
                <div className="text-left">
                  <div className="text-xs text-gray-400">Get it on</div>
                  <div className="font-semibold">Google Play</div>
                </div>
              </button>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="text-center mb-8">
            <div className="inline-flex items-center space-x-4 bg-primary-500 text-white px-6 py-3 rounded-full">
              <Download className="w-5 h-5" />
              <span className="font-semibold">Download Syncup Now - It's Free!</span>
              <span className="bg-white text-primary-500 px-2 py-1 rounded-full text-xs font-bold">NEW</span>
            </div>
          </div>
          <div className="text-center text-gray-400">
            <p>&copy; 2024 Syncup. All rights reserved. Built with ❤️ for better communication.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
