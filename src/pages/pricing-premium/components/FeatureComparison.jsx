import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const FeatureComparison = () => {
  const [activeCategory, setActiveCategory] = useState('templates');

  const categories = [
    { id: 'templates', name: 'Templates & Design', icon: 'Layout' },
    { id: 'features', name: 'Features & Tools', icon: 'Settings' },
    { id: 'support', name: 'Support & Service', icon: 'HeadphonesIcon' },
    { id: 'export', name: 'Export & Download', icon: 'Download' }
  ];

  const comparisonData = {
    templates: [
      { feature: 'Basic Templates', free: true, premium: true, executive: true },
      { feature: 'Premium Templates', free: false, premium: true, executive: true },
      { feature: 'Executive Templates', free: false, premium: false, executive: true },
      { feature: 'Industry-Specific Designs', free: '3', premium: '25+', executive: '50+' },
      { feature: 'ATS-Optimized Templates', free: false, premium: true, executive: true },
      { feature: 'Creative Templates', free: false, premium: true, executive: true }
    ],
    features: [
      { feature: 'Resume Builder', free: true, premium: true, executive: true },
      { feature: 'AI Content Suggestions', free: false, premium: true, executive: true },
      { feature: 'Cover Letter Builder', free: false, premium: true, executive: true },
      { feature: 'LinkedIn Optimization', free: false, premium: false, executive: true },
      { feature: 'Salary Calculator', free: false, premium: true, executive: true },
      { feature: 'Interview Preparation', free: false, premium: false, executive: true }
    ],
    support: [
      { feature: 'Email Support', free: false, premium: true, executive: true },
      { feature: 'Priority Support', free: false, premium: false, executive: true },
      { feature: 'Career Coaching', free: false, premium: false, executive: true },
      { feature: 'Resume Review', free: false, premium: false, executive: true },
      { feature: 'Live Chat Support', free: false, premium: true, executive: true },
      { feature: 'Phone Support', free: false, premium: false, executive: true }
    ],
    export: [
      { feature: 'PDF Download', free: true, premium: true, executive: true },
      { feature: 'Word Download', free: false, premium: true, executive: true },
      { feature: 'Multiple Formats', free: false, premium: true, executive: true },
      { feature: 'Unlimited Downloads', free: false, premium: true, executive: true },
      { feature: 'High-Resolution Export', free: false, premium: true, executive: true },
      { feature: 'Print Optimization', free: false, premium: true, executive: true }
    ]
  };

  const renderFeatureValue = (value) => {
    if (typeof value === 'boolean') {
      return value ? (
        <Icon name="Check" size={18} className="text-accent" />
      ) : (
        <Icon name="X" size={18} className="text-text-secondary" />
      );
    }
    return <span className="text-sm font-medium text-foreground">{value}</span>;
  };

  return (
    <div className="bg-card border border-border rounded-xl p-6">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-foreground mb-2">
          Feature Comparison
        </h3>
        <p className="text-text-secondary">
          Compare all features across our pricing tiers
        </p>
      </div>
      {/* Category Tabs */}
      <div className="flex flex-wrap gap-2 mb-8 border-b border-border">
        {categories?.map((category) => (
          <button
            key={category?.id}
            onClick={() => setActiveCategory(category?.id)}
            className={`flex items-center space-x-2 px-4 py-2 rounded-t-lg text-sm font-medium transition-all duration-200 ${
              activeCategory === category?.id
                ? 'bg-secondary/10 text-secondary border-b-2 border-secondary' :'text-text-secondary hover:text-foreground hover:bg-muted'
            }`}
          >
            <Icon name={category?.icon} size={16} />
            <span className="hidden sm:inline">{category?.name}</span>
          </button>
        ))}
      </div>
      {/* Comparison Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left py-3 px-4 font-semibold text-foreground">
                Feature
              </th>
              <th className="text-center py-3 px-4 font-semibold text-foreground">
                Free
              </th>
              <th className="text-center py-3 px-4 font-semibold text-secondary">
                Premium
              </th>
              <th className="text-center py-3 px-4 font-semibold text-accent">
                Executive
              </th>
            </tr>
          </thead>
          <tbody>
            {comparisonData?.[activeCategory]?.map((item, index) => (
              <tr 
                key={index} 
                className="border-b border-border/50 hover:bg-muted/30 transition-colors duration-200"
              >
                <td className="py-4 px-4 text-sm text-foreground font-medium">
                  {item?.feature}
                </td>
                <td className="py-4 px-4 text-center">
                  {renderFeatureValue(item?.free)}
                </td>
                <td className="py-4 px-4 text-center">
                  {renderFeatureValue(item?.premium)}
                </td>
                <td className="py-4 px-4 text-center">
                  {renderFeatureValue(item?.executive)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Bottom CTA */}
      <div className="mt-8 text-center p-4 bg-muted rounded-lg">
        <p className="text-sm text-text-secondary mb-2">
          Still have questions about our features?
        </p>
        <button className="text-secondary hover:text-secondary/80 text-sm font-medium transition-colors duration-200">
          Contact our sales team →
        </button>
      </div>
    </div>
  );
};

export default FeatureComparison;