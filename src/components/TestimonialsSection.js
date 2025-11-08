import React from 'react';
import { Quote, Sparkles, ShieldCheck } from 'lucide-react';

const testimonials = [
  {
    name: 'Aisha Rahman',
    role: 'Emergency Surgeon & Founder',
    quote:
      'Syncup became the quiet teammate I desperately needed. My family sees when I am in surgery, my co-founders know when to expect replies, and I no longer feel like I am letting anyone down.',
    metric: '4.5 hrs/day clarity regained'
  },
  {
    name: 'Dev Sharma',
    role: 'Remote Engineering Lead & New Dad',
    quote:
      'Instead of apologizing for missed pings, I share focus windows that everyone respects. Syncup gives my team context, so I can give my daughter attention.',
    metric: '93% fewer off-hour interruptions'
  },
  {
    name: 'Lina Martins',
    role: 'Neighborhood Responder & Organizer',
    quote:
      'Coordinating volunteers takes heart and timing. Syncup routes urgent requests to whoever is free and keeps our community humming without chaos.',
    metric: '18 weekly operations automated'
  }
];

const badges = [
  {
    icon: Sparkles,
    title: 'Loved by multi-hyphenate lives',
    description: 'Designed with clinicians, founders, caregivers, and creators in our closed beta cohorts.'
  },
  {
    icon: ShieldCheck,
    title: 'Security that scales with you',
    description: 'SOC2 controls in progress, data residency options, and full audit trails for enterprise rollouts.'
  }
];

const TestimonialsSection = () => (
  <section className="section-padding bg-gradient-to-br from-slate-900 via-indigo-900 to-blue-900 text-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div data-aos="fade-right">
          <p className="uppercase tracking-[0.4em] text-xs font-semibold text-blue-200 mb-4">REAL STORIES</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">People who live on Syncup rarely go back</h2>
          <p className="text-lg text-blue-100 leading-relaxed mb-10">
            Syncup started as a promise: no more losing trust because life gets hectic. These voices from our early communities show how coordination with heart—and serious infrastructure—feels.
          </p>

          <div className="space-y-4">
            {badges.map(({ icon: Icon, title, description }) => (
              <div key={title} className="flex items-start gap-4 bg-white/10 border border-white/10 rounded-2xl p-4 backdrop-blur-sm" data-aos="fade-up">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-base font-semibold">{title}</h3>
                  <p className="text-sm text-blue-100/80 leading-relaxed">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-1 gap-6" data-aos="fade-left">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="relative bg-white/10 border border-white/15 rounded-3xl p-8 shadow-xl backdrop-blur-xl overflow-hidden"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="absolute -top-10 -right-6 text-white/10">
                <Quote className="w-24 h-24" />
              </div>
              <p className="text-lg leading-relaxed text-blue-50 mb-6">“{testimonial.quote}”</p>
              <div className="flex items-center justify-between text-sm text-blue-100">
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-blue-200/80">{testimonial.role}</div>
                </div>
                <span className="inline-flex items-center px-3 py-1 text-xs font-semibold uppercase tracking-wider bg-white/15 rounded-full">
                  {testimonial.metric}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
