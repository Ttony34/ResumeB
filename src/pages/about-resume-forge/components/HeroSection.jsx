import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-career text-white py-20 lg:py-32 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 border border-white/20 rounded-full"></div>
        <div className="absolute top-40 right-20 w-24 h-24 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 border border-white/20 rounded-full"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                  <Icon name="Users" size={24} color="white" />
                </div>
                <span className="text-lg font-medium text-white/90">About ResumeForge</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold font-accent leading-tight">
                Forging Career
                <span className="block text-secondary">Excellence</span>
              </h1>
              <p className="text-xl text-white/90 leading-relaxed max-w-2xl">
                Born from the intersection of design mastery and hiring expertise, ResumeForge transforms how professionals present their career stories to the world.
              </p>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary">500K+</div>
                <div className="text-sm text-white/80">Resumes Created</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary">89%</div>
                <div className="text-sm text-white/80">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary">2019</div>
                <div className="text-sm text-white/80">Founded</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative z-10 bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <Image
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop"
                alt="Team collaboration at ResumeForge office"
                className="w-full h-80 object-cover rounded-xl"
              />
              <div className="absolute -bottom-4 -right-4 bg-secondary text-white p-4 rounded-xl shadow-premium">
                <Icon name="Award" size={32} />
              </div>
            </div>
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-white/10 rounded-full blur-xl"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-secondary/20 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;