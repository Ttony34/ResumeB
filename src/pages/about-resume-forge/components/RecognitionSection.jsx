import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const RecognitionSection = () => {
  const mediaFeatures = [
    {
      outlet: "TechCrunch",
      headline: "ResumeForge Revolutionizes Career Presentation with AI-Powered Templates",
      date: "March 2024",
      logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=120&h=60&fit=crop"
    },
    {
      outlet: "Forbes",
      headline: "The Future of Resume Building: How ResumeForge is Changing the Game",
      date: "January 2024",
      logo: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=120&h=60&fit=crop"
    },
    {
      outlet: "Harvard Business Review",
      headline: "Why Modern Professionals Need Smarter Resume Tools",
      date: "December 2023",
      logo: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=120&h=60&fit=crop"
    }
  ];

  const awards = [
    {
      title: "Best Career Tool 2024",
      organization: "HR Tech Awards",
      icon: "Award",
      year: "2024"
    },
    {
      title: "Innovation in Design",
      organization: "UX Design Awards",
      icon: "Palette",
      year: "2023"
    },
    {
      title: "Top Startup to Watch",
      organization: "TechCrunch Disrupt",
      icon: "Rocket",
      year: "2023"
    },
    {
      title: "People\'s Choice Award",
      organization: "Product Hunt",
      icon: "Heart",
      year: "2022"
    }
  ];

  const testimonials = [
    {
      quote: "ResumeForge has transformed how we think about candidate presentation. The quality of resumes we receive has dramatically improved.",
      author: "Jennifer Martinez",
      role: "VP of Talent Acquisition",
      company: "TechGlobal Inc.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=80&h=80&fit=crop&crop=face"
    },
    {
      quote: "As a career coach, I recommend ResumeForge to all my clients. The templates are industry-aware and the results speak for themselves.",
      author: "Dr. Michael Chen",
      role: "Senior Career Coach",
      company: "Executive Career Solutions",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face"
    }
  ];

  return (
    <section className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Icon name="Star" size={16} />
            <span>Recognition & Media</span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold text-primary font-accent mb-6">
            Industry Recognition &
            <span className="block text-secondary">Media Coverage</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Our commitment to excellence has been recognized by leading publications and industry organizations worldwide.
          </p>
        </div>

        {/* Media Features */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-primary text-center mb-8">Featured In</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {mediaFeatures?.map((feature, index) => (
              <div key={index} className="bg-card rounded-xl p-6 shadow-subtle hover:shadow-premium transition-all duration-300">
                <div className="flex items-center space-x-3 mb-4">
                  <Image
                    src={feature?.logo}
                    alt={`${feature?.outlet} logo`}
                    className="w-12 h-6 object-contain"
                  />
                  <div>
                    <div className="font-semibold text-primary">{feature?.outlet}</div>
                    <div className="text-xs text-text-secondary">{feature?.date}</div>
                  </div>
                </div>
                <h4 className="font-medium text-foreground leading-snug">{feature?.headline}</h4>
              </div>
            ))}
          </div>
        </div>

        {/* Awards */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-primary text-center mb-8">Awards & Recognition</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {awards?.map((award, index) => (
              <div key={index} className="bg-card rounded-xl p-6 text-center shadow-subtle hover:shadow-premium transition-all duration-300">
                <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Icon name={award?.icon} size={24} className="text-secondary" />
                </div>
                <h4 className="font-semibold text-primary mb-2">{award?.title}</h4>
                <p className="text-sm text-text-secondary mb-1">{award?.organization}</p>
                <p className="text-xs text-secondary font-medium">{award?.year}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Industry Testimonials */}
        <div>
          <h3 className="text-2xl font-bold text-primary text-center mb-8">What Industry Leaders Say</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials?.map((testimonial, index) => (
              <div key={index} className="bg-card rounded-xl p-8 shadow-subtle">
                <div className="flex items-start space-x-1 mb-4">
                  {[...Array(5)]?.map((_, i) => (
                    <Icon key={i} name="Star" size={16} className="text-secondary fill-current" />
                  ))}
                </div>
                <blockquote className="text-foreground mb-6 italic leading-relaxed">
                  "{testimonial?.quote}"
                </blockquote>
                <div className="flex items-center space-x-3">
                  <Image
                    src={testimonial?.image}
                    alt={testimonial?.author}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-primary">{testimonial?.author}</div>
                    <div className="text-sm text-text-secondary">{testimonial?.role}</div>
                    <div className="text-xs text-secondary">{testimonial?.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecognitionSection;