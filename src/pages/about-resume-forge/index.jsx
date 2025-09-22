import React from 'react';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import MissionSection from './components/MissionSection';
import TeamSection from './components/TeamSection';
import ImpactSection from './components/ImpactSection';
import RecognitionSection from './components/RecognitionSection';
import ContactSection from './components/ContactSection';

const AboutResumeForge = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      {/* Main Content */}
      <main className="pt-16">
        <HeroSection />
        <MissionSection />
        <TeamSection />
        <ImpactSection />
        <RecognitionSection />
        <ContactSection />
      </main>
      {/* Footer */}
      <footer className="bg-primary text-white py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-secondary rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">RF</span>
                </div>
                <span className="text-xl font-bold font-accent">ResumeForge</span>
              </div>
              <p className="text-white/80 mb-4 max-w-md">
                Empowering professionals worldwide through intelligent resume design and career advancement tools.
              </p>
              <p className="text-white/60 text-sm">
                © {new Date()?.getFullYear()} ResumeForge. All rights reserved.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4">Platform</h4>
              <ul className="space-y-2 text-white/80 text-sm">
                <li><a href="/template-gallery" className="hover:text-white transition-colors">Templates</a></li>
                <li><a href="/resume-builder-studio" className="hover:text-white transition-colors">Builder</a></li>
                <li><a href="/pricing-premium" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="/user-dashboard" className="hover:text-white transition-colors">Dashboard</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-white/80 text-sm">
                <li>hello@resumeforge.com</li>
                <li>partnerships@resumeforge.com</li>
                <li>press@resumeforge.com</li>
                <li>careers@resumeforge.com</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AboutResumeForge;