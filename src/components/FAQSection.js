import React, { useState } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';

const FAQSection = () => {
  const [faqs, setFaqs] = useState([
    {
      id: 1,
      question: 'How does DIYA AI protect my privacy?',
      answer: 'DIYA AI operates with strict privacy controls. You can set granular permissions for who can ask about your availability, and DIYA only shares information you\'ve explicitly allowed. All data is encrypted end-to-end.',
      isOpen: false,
      delay: 0
    },
    {
      id: 2,
      question: 'Can I use Syncup for business teams?',
      answer: 'Absolutely! Syncup is designed for both personal and professional use. Teams can create shared workspaces, set business hours, and coordinate more effectively while maintaining individual privacy preferences.',
      isOpen: false,
      delay: 100
    },
    {
      id: 3,
      question: 'How accurate are the status suggestions?',
      answer: 'Our AI learns from your patterns and integrates with your calendar to provide highly accurate status suggestions. The system gets smarter over time, achieving 95%+ accuracy for regular users.',
      isOpen: false,
      delay: 200
    },
    {
      id: 4,
      question: 'Is my data secure?',
      answer: 'Yes, security is our top priority. We use enterprise-grade encryption, biometric authentication, and follow strict data protection standards. Your data is never sold or shared with third parties.',
      isOpen: false,
      delay: 300
    },
    {
      id: 5,
      question: 'How does the @mention system work?',
      answer: 'Simply type @username in any conversation, and DIYA will intelligently check their availability and respond on their behalf based on their current status and privacy settings. It\'s like having a personal assistant for everyone.',
      isOpen: false,
      delay: 400
    }
  ]);

  const toggleFaq = (id) => {
    setFaqs(prev => prev.map(faq => 
      faq.id === id ? { ...faq, isOpen: !faq.isOpen } : faq
    ));
  };

  return (
    <section id="faq" className="section-padding bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to know about Syncup
          </p>
        </div>

        <div className="space-y-6">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
              data-aos="fade-up"
              data-aos-delay={faq.delay}
            >
              <button
                onClick={() => toggleFaq(faq.id)}
                className="w-full flex items-center justify-between text-left"
              >
                <h3 className="text-lg font-semibold text-gray-900">{faq.question}</h3>
                <div className="ml-4 flex-shrink-0">
                  {faq.isOpen ? (
                    <ChevronUp className="w-5 h-5 text-primary-500" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-primary-500" />
                  )}
                </div>
              </button>
              {faq.isOpen && (
                <div className="mt-4 text-gray-600 leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
