import React, { useState } from 'react';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import PricingCard from './components/PricingCard';
import FeatureComparison from './components/FeatureComparison';
import ROICalculator from './components/ROICalculator';
import TestimonialSection from './components/TestimonialSection';
import FAQSection from './components/FAQSection';
import LimitedTimeOffer from './components/LimitedTimeOffer';

const PricingPremium = () => {
  const [billingCycle, setBillingCycle] = useState('monthly');
  const [selectedPlan, setSelectedPlan] = useState(null);

  const pricingPlans = [
    {
      name: "Free",
      price: 0,
      period: "forever",
      description: "Perfect for getting started with basic resume building",
      features: [
        { text: "3 basic templates", included: true },
        { text: "Standard PDF download", included: true },
        { text: "Basic resume builder", included: true },
        { text: "Community support", included: true },
        { text: "Premium templates", included: false },
        { text: "AI content suggestions", included: false },
        { text: "Cover letter builder", included: false },
        { text: "Unlimited downloads", included: false }
      ],
      templateCount: "3 templates",
      buttonText: "Get Started Free",
      buttonVariant: "outline",
      successRate: "78",
      userCount: "50K+"
    },
    {
      name: "Premium",
      price: billingCycle === 'monthly' ? 14.99 : 11.99,
      originalPrice: billingCycle === 'monthly' ? null : 14.99,
      period: "month",
      description: "Ideal for professionals seeking career advancement",
      features: [
        { text: "25+ premium templates", included: true },
        { text: "AI content suggestions", included: true },
        { text: "Cover letter builder", included: true },
        { text: "Unlimited downloads", included: true },
        { text: "Multiple file formats", included: true },
        { text: "ATS optimization", included: true },
        { text: "Email support", included: true },
        { text: "LinkedIn optimization", included: false }
      ],
      templateCount: "25+ templates",
      buttonText: "Start Premium Trial",
      buttonVariant: "default",
      badge: "Most Popular",
      successRate: "89",
      userCount: "25K+"
    },
    {
      name: "Executive",
      price: billingCycle === 'monthly' ? 29.99 : 24.99,
      originalPrice: billingCycle === 'monthly' ? null : 29.99,
      period: "month",
      description: "Designed for senior professionals and executives",
      features: [
        { text: "50+ executive templates", included: true },
        { text: "LinkedIn profile optimization", included: true },
        { text: "Career coaching session", included: true },
        { text: "Resume review service", included: true },
        { text: "Priority support", included: true },
        { text: "Interview preparation", included: true },
        { text: "Salary negotiation guide", included: true },
        { text: "Personal branding kit", included: true }
      ],
      templateCount: "50+ templates",
      buttonText: "Go Executive",
      buttonVariant: "default",
      badge: "Best Value",
      successRate: "94",
      userCount: "5K+"
    }
  ];

  const handlePlanSelection = (plan) => {
    setSelectedPlan(plan);
    // Handle plan selection logic here
    console.log('Selected plan:', plan);
  };

  const trustSignals = [
    { icon: "Shield", text: "SSL Secured" },
    { icon: "CreditCard", text: "Secure Payments" },
    { icon: "RefreshCw", text: "Cancel Anytime" },
    { icon: "Award", text: "30-Day Guarantee" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
              Choose Your
              <span className="text-gradient block">Career Success Plan</span>
            </h1>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              Transform your career with professional resume templates, AI-powered content suggestions, 
              and expert guidance. Join 80,000+ professionals who've advanced their careers with ResumeForge.
            </p>
          </div>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center mb-12">
            <div className="bg-muted rounded-lg p-1 flex">
              <button
                onClick={() => setBillingCycle('monthly')}
                className={`px-6 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                  billingCycle === 'monthly' ?'bg-card text-foreground shadow-subtle' :'text-text-secondary hover:text-foreground'
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingCycle('yearly')}
                className={`px-6 py-2 rounded-md text-sm font-medium transition-all duration-200 relative ${
                  billingCycle === 'yearly' ?'bg-card text-foreground shadow-subtle' :'text-text-secondary hover:text-foreground'
                }`}
              >
                Yearly
                <span className="absolute -top-2 -right-2 bg-accent text-white text-xs px-2 py-0.5 rounded-full">
                  20% OFF
                </span>
              </button>
            </div>
          </div>

          {/* Trust Signals */}
          <div className="flex flex-wrap justify-center gap-6 mb-16">
            {trustSignals?.map((signal, index) => (
              <div key={index} className="flex items-center text-sm text-text-secondary">
                <Icon name={signal?.icon} size={16} className="mr-2 text-accent" />
                {signal?.text}
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Pricing Cards */}
      <section className="pb-16 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {pricingPlans?.map((plan, index) => (
              <PricingCard
                key={plan?.name}
                plan={plan}
                isPopular={index === 1}
                onSelectPlan={handlePlanSelection}
                className={index === 1 ? 'lg:scale-105' : ''}
              />
            ))}
          </div>
        </div>
      </section>
      {/* Limited Time Offer */}
      <section className="pb-16 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <LimitedTimeOffer />
        </div>
      </section>
      {/* ROI Calculator */}
      <section className="pb-16 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <ROICalculator />
        </div>
      </section>
      {/* Feature Comparison */}
      <section className="pb-16 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <FeatureComparison />
        </div>
      </section>
      {/* Testimonials */}
      <section className="pb-16 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <TestimonialSection />
        </div>
      </section>
      {/* FAQ Section */}
      <section className="pb-16 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <FAQSection />
        </div>
      </section>
      {/* Final CTA */}
      <section className="pb-16 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-card border border-border rounded-xl p-8 text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to Transform Your Career?
            </h3>
            <p className="text-text-secondary mb-6 max-w-2xl mx-auto">
              Join thousands of professionals who've successfully advanced their careers with ResumeForge. 
              Start your free trial today and see the difference a professional resume makes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="default" size="lg" className="bg-secondary hover:bg-secondary/90">
                <Icon name="Zap" size={18} className="mr-2" />
                Start Free Trial
              </Button>
              <Button variant="outline" size="lg">
                <Icon name="Play" size={18} className="mr-2" />
                Watch Demo
              </Button>
            </div>
            <div className="mt-6 flex flex-wrap justify-center gap-6 text-sm text-text-secondary">
              <div className="flex items-center">
                <Icon name="Check" size={16} className="mr-1 text-accent" />
                No credit card required
              </div>
              <div className="flex items-center">
                <Icon name="Check" size={16} className="mr-1 text-accent" />
                Cancel anytime
              </div>
              <div className="flex items-center">
                <Icon name="Check" size={16} className="mr-1 text-accent" />
                30-day guarantee
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-muted py-12 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-gradient-career rounded-lg flex items-center justify-center">
                  <Icon name="FileText" size={20} color="white" strokeWidth={2.5} />
                </div>
                <div className="flex flex-col">
                  <span className="text-lg font-bold text-primary font-accent">ResumeForge</span>
                  <span className="text-xs text-text-secondary -mt-1">Career Excellence</span>
                </div>
              </div>
              <p className="text-text-secondary text-sm">
                Empowering professionals to forge successful careers through intelligent resume building and career advancement tools.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-foreground mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-text-secondary">
                <li><a href="#" className="hover:text-foreground transition-colors">Templates</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Resume Builder</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Cover Letters</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Career Tools</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-foreground mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-text-secondary">
                <li><a href="#" className="hover:text-foreground transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Live Chat</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Tutorials</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-foreground mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-text-secondary">
                <li><a href="#" className="hover:text-foreground transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Security</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-text-secondary text-sm">
              © {new Date()?.getFullYear()} ResumeForge. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-text-secondary hover:text-foreground transition-colors">
                <Icon name="Twitter" size={20} />
              </a>
              <a href="#" className="text-text-secondary hover:text-foreground transition-colors">
                <Icon name="Linkedin" size={20} />
              </a>
              <a href="#" className="text-text-secondary hover:text-foreground transition-colors">
                <Icon name="Facebook" size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PricingPremium;