import React from 'react';
import Icon from '../../../components/AppIcon';

const ValueProposition = () => {
  const features = [
    {
      id: 1,
      icon: "Shield",
      title: "ATS-Optimized Templates",
      description: "Every template is designed to pass Applicant Tracking Systems with optimized formatting, keywords, and structure that hiring managers love.",
      benefits: ["98% ATS Pass Rate", "Keyword Optimization", "Format Compliance"],
      color: "text-accent"
    },
    {
      id: 2,
      icon: "Brain",
      title: "AI-Powered Content Suggestions",
      description: "Our intelligent system analyzes your experience and suggests compelling bullet points, skills, and achievements tailored to your industry.",
      benefits: ["Smart Content Generation", "Industry-Specific Tips", "Achievement Optimization"],
      color: "text-secondary"
    },
    {
      id: 3,
      icon: "Palette",
      title: "Industry-Specific Designs",
      description: "Choose from professionally designed templates crafted for specific industries, from creative portfolios to executive presentations.",
      benefits: ["50+ Industry Templates", "Professional Layouts", "Customizable Designs"],
      color: "text-primary"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-medium mb-6">
            <Icon name="Star" size={16} className="mr-2" />
            Why Choose ResumeForge
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            Three Pillars of Career Success
          </h2>
          
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            We've engineered the perfect combination of technology, design, and career expertise to give you the competitive edge in today's job market.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {features?.map((feature, index) => (
            <div 
              key={feature?.id}
              className="group relative bg-card rounded-2xl p-8 shadow-subtle hover:shadow-premium transition-all duration-500 hover:-translate-y-2"
            >
              {/* Feature Icon */}
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-${feature?.color?.split('-')?.[1]}/10 to-${feature?.color?.split('-')?.[1]}/20 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <Icon 
                  name={feature?.icon} 
                  size={32} 
                  className={feature?.color}
                />
              </div>

              {/* Feature Content */}
              <h3 className="text-xl font-bold text-primary mb-4 group-hover:text-secondary transition-colors duration-300">
                {feature?.title}
              </h3>
              
              <p className="text-text-secondary mb-6 leading-relaxed">
                {feature?.description}
              </p>

              {/* Benefits List */}
              <ul className="space-y-3">
                {feature?.benefits?.map((benefit, benefitIndex) => (
                  <li key={benefitIndex} className="flex items-center text-sm">
                    <Icon 
                      name="CheckCircle" 
                      size={16} 
                      className={`${feature?.color} mr-3 flex-shrink-0`}
                    />
                    <span className="text-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-secondary/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              
              {/* Number Badge */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-secondary text-white rounded-full flex items-center justify-center text-sm font-bold shadow-lg">
                {index + 1}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-8 bg-muted rounded-2xl p-8">
            <div className="flex items-center space-x-4">
              <div className="flex -space-x-2">
                <div className="w-10 h-10 bg-accent rounded-full border-2 border-white flex items-center justify-center">
                  <Icon name="Users" size={16} className="text-white" />
                </div>
                <div className="w-10 h-10 bg-secondary rounded-full border-2 border-white flex items-center justify-center">
                  <Icon name="TrendingUp" size={16} className="text-white" />
                </div>
                <div className="w-10 h-10 bg-primary rounded-full border-2 border-white flex items-center justify-center">
                  <Icon name="Award" size={16} className="text-white" />
                </div>
              </div>
              <div className="text-left">
                <div className="font-semibold text-primary">Join 2.3M+ Professionals</div>
                <div className="text-sm text-text-secondary">Who've advanced their careers with ResumeForge</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;