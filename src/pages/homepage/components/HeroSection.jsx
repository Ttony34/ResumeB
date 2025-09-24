import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const HeroSection = () => {
  const [currentTemplate, setCurrentTemplate] = useState(0);

  const featuredTemplates = [
    {
      id: 1,
      name: "Executive Professional",
      category: "Executive",
      image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&h=500&fit=crop",
      description: "Perfect for C-level executives and senior management"
    },
    {
      id: 2,
      name: "Creative Designer",
      category: "Creative",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=500&fit=crop",
      description: "Showcase your creative portfolio and design skills"
    },
    {
      id: 3,
      name: "Tech Professional",
      category: "Technical",
      image: "https://images.unsplash.com/photo-1586281380614-67ca8b3ccd72?w=400&h=500&fit=crop",
      description: "Optimized for software engineers and tech roles"
    },
    {
      id: 4,
      name: "Academic Scholar",
      category: "Academic",
      image: "https://images.unsplash.com/photo-1586281380117-5a60ae2050cc?w=400&h=500&fit=crop",
      description: "Ideal for researchers and academic positions"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTemplate((prev) => (prev + 1) % featuredTemplates?.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [featuredTemplates?.length]);

  return (
    <section className="relative min-h-screen gradient-career overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-secondary rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-accent rounded-full blur-2xl"></div>
      </div>
      <div className="relative z-10 container mx-auto px-6 lg:px-8 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-6">
              <Icon name="Zap" size={16} className="mr-2" />
              Trusted by 2.3M+ Professionals
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Your Career Deserves a Resume That{' '}
              <span className="text-accent font-accent">Opens Doors</span>
            </h1>

            <p className="text-xl text-white/90 mb-8 max-w-2xl">
              Transform your career story with AI-powered resume building. Create ATS-optimized, 
              visually stunning resumes that get you noticed by top employers and land more interviews.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link to="/resume-builder-studio">
                <Button 
                  variant="default" 
                  size="lg" 
                  className="bg-accent hover:bg-accent/90 text-white px-8 py-4 text-lg font-semibold w-full sm:w-auto"
                  iconName="Edit3"
                  iconPosition="left"
                >
                  Build My Resume Now
                </Button>
              </Link>
              
              <Link to="/template-gallery">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg font-semibold w-full sm:w-auto"
                  iconName="Layout"
                  iconPosition="left"
                >
                  Browse Templates
                </Button>
              </Link>
            </div>

            {/* Success Metrics */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-2xl font-bold text-white mb-1">2.3M+</div>
                <div className="text-white/80 text-sm">Resumes Created</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-2xl font-bold text-accent mb-1">89%</div>
                <div className="text-white/80 text-sm">Interview Rate Increase</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-2xl font-bold text-accent mb-1">156%</div>
                <div className="text-white/80 text-sm">Average Salary Boost</div>
              </div>
            </div>
          </div>

          {/* Right Content - Template Carousel */}
          <div className="relative">
            <div className="relative w-full max-w-md mx-auto">
              {/* Main Template Display */}
              <div className="relative bg-white rounded-2xl shadow-premium p-6 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="aspect-[3/4] overflow-hidden rounded-lg mb-4">
                  <Image
                    src={featuredTemplates?.[currentTemplate]?.image}
                    alt={featuredTemplates?.[currentTemplate]?.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-center">
                  <h3 className="font-semibold text-primary mb-1">
                    {featuredTemplates?.[currentTemplate]?.name}
                  </h3>
                  <p className="text-sm text-text-secondary mb-2">
                    {featuredTemplates?.[currentTemplate]?.category}
                  </p>
                  <p className="text-xs text-text-secondary">
                    {featuredTemplates?.[currentTemplate]?.description}
                  </p>
                </div>
              </div>

              {/* Background Templates */}
              <div className="absolute -top-4 -left-4 w-full bg-white/50 rounded-2xl shadow-lg transform -rotate-6 -z-10"></div>
              <div className="absolute -top-8 -left-8 w-full bg-white/30 rounded-2xl shadow-lg transform -rotate-12 -z-20"></div>

              {/* Template Indicators */}
              <div className="flex justify-center mt-6 space-x-2">
                {featuredTemplates?.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTemplate(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentTemplate 
                        ? 'bg-accent scale-125' :'bg-white/50 hover:bg-white/70'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-6 -right-6 bg-accent text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg animate-pulse">
              ATS Optimized
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white text-primary px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
              <Icon name="CheckCircle" size={16} className="inline mr-1" />
              AI Powered
            </div>
          </div>
        </div>
      </div>
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/70 animate-bounce">
        <Icon name="ChevronDown" size={24} />
      </div>
    </section>
  );
};

export default HeroSection;