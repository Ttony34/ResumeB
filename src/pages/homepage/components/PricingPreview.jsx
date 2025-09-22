import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const PricingPreview = () => {
  const plans = [
    {
      id: 'free',
      name: 'Free',
      price: '$0',
      period: 'forever',
      description: 'Perfect for getting started with basic resume building',
      features: [
        '3 Basic Templates',
        'PDF Download',
        'Basic Customization',
        'Email Support'
      ],
      limitations: [
        'Limited template selection',
        'Basic formatting options',
        'No AI suggestions'
      ],
      cta: 'Get Started Free',
      popular: false,
      color: 'border-border'
    },
    {
      id: 'premium',
      name: 'Premium',
      price: '$19',
      period: 'per month',
      description: 'Everything you need for professional career advancement',
      features: [
        '55+ Premium Templates',
        'AI-Powered Content Suggestions',
        'ATS Optimization Scanner',
        'Multiple Format Downloads',
        'Cover Letter Builder',
        'LinkedIn Profile Optimizer',
        'Priority Support',
        'Version History'
      ],
      limitations: [],
      cta: 'Start Premium Trial',
      popular: true,
      color: 'border-secondary'
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      price: '$49',
      period: 'per month',
      description: 'Advanced features for teams and career professionals',
      features: [
        'Everything in Premium',
        'Team Collaboration',
        'Custom Branding',
        'Advanced Analytics',
        'Dedicated Account Manager',
        'Custom Templates',
        'API Access',
        'White-label Solution'
      ],
      limitations: [],
      cta: 'Contact Sales',
      popular: false,
      color: 'border-primary'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
            <Icon name="Crown" size={16} className="mr-2" />
            Simple Pricing
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            Choose Your Career Acceleration Plan
          </h2>
          
          <p className="text-xl text-text-secondary max-w-3xl mx-auto mb-8">
            Start free and upgrade when you're ready. All plans include our core resume building tools 
            with premium features to supercharge your job search.
          </p>

          {/* Pricing Toggle */}
          <div className="inline-flex items-center bg-muted rounded-lg p-1">
            <button className="px-4 py-2 rounded-md bg-card text-primary font-medium shadow-sm">
              Monthly
            </button>
            <button className="px-4 py-2 rounded-md text-text-secondary hover:text-primary transition-colors">
              Annual
              <span className="ml-2 text-xs bg-accent text-white px-2 py-1 rounded-full">
                Save 20%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {plans?.map((plan) => (
            <div
              key={plan?.id}
              className={`relative bg-card rounded-2xl p-8 shadow-subtle hover:shadow-premium transition-all duration-500 border-2 ${plan?.color} ${
                plan?.popular ? 'scale-105 shadow-premium' : 'hover:scale-105'
              }`}
            >
              {/* Popular Badge */}
              {plan?.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-secondary text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-primary mb-2">{plan?.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-primary">{plan?.price}</span>
                  <span className="text-text-secondary ml-2">/{plan?.period}</span>
                </div>
                <p className="text-text-secondary">{plan?.description}</p>
              </div>

              {/* Features List */}
              <div className="mb-8">
                <ul className="space-y-3">
                  {plan?.features?.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Icon 
                        name="CheckCircle" 
                        size={16} 
                        className="text-accent mr-3 mt-0.5 flex-shrink-0" 
                      />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Limitations */}
                {plan?.limitations?.length > 0 && (
                  <div className="mt-6 pt-6 border-t border-border">
                    <div className="text-sm text-text-secondary mb-3">Limitations:</div>
                    <ul className="space-y-2">
                      {plan?.limitations?.map((limitation, index) => (
                        <li key={index} className="flex items-start">
                          <Icon 
                            name="X" 
                            size={14} 
                            className="text-text-secondary mr-3 mt-0.5 flex-shrink-0" 
                          />
                          <span className="text-sm text-text-secondary">{limitation}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* CTA Button */}
              <Button
                variant={plan?.popular ? "default" : "outline"}
                fullWidth
                className={`py-3 font-semibold ${
                  plan?.popular 
                    ? 'bg-secondary hover:bg-secondary/90 text-white' :'border-2 border-secondary text-secondary hover:bg-secondary hover:text-white'
                }`}
              >
                {plan?.cta}
              </Button>
            </div>
          ))}
        </div>

        {/* Bottom Features */}
        <div className="bg-card rounded-2xl p-8 shadow-subtle">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-primary mb-4">
              All Plans Include
            </h3>
            <p className="text-text-secondary">
              Core features available to every ResumeForge user
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: 'Shield', title: 'ATS Optimization', desc: 'Pass applicant tracking systems' },
              { icon: 'Download', title: 'Multiple Formats', desc: 'PDF, Word, and more' },
              { icon: 'Smartphone', title: 'Mobile Friendly', desc: 'Edit on any device' },
              { icon: 'Lock', title: 'Secure & Private', desc: 'Your data is protected' }
            ]?.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-secondary/10 rounded-lg mb-4">
                  <Icon name={feature?.icon} size={24} className="text-secondary" />
                </div>
                <h4 className="font-semibold text-primary mb-2">{feature?.title}</h4>
                <p className="text-sm text-text-secondary">{feature?.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-career rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Transform Your Career?
            </h3>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              Join over 2.3 million professionals who've accelerated their careers with ResumeForge. 
              Start building your perfect resume today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="default"
                size="lg"
                className="bg-white text-primary hover:bg-white/90 px-8 py-4 font-semibold"
                iconName="Zap"
                iconPosition="left"
              >
                Start Free Trial
              </Button>
              <Link to="/pricing-premium">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-primary px-8 py-4 font-semibold"
                  iconName="ArrowRight"
                  iconPosition="right"
                >
                  View Full Pricing
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingPreview;