import React from 'react';
import Icon from '../../../components/AppIcon';
import TemplateCard from './TemplateCard';

const RecommendationSection = ({ 
  recommendations, 
  onPreview, 
  onCompare, 
  isComparing, 
  selectedTemplates 
}) => {
  const recommendationCategories = [
    {
      title: 'Trending This Week',
      icon: 'TrendingUp',
      description: 'Most popular templates among job seekers',
      templates: recommendations?.filter(t => t?.trending)?.slice(0, 4)
    },
    {
      title: 'Highest Success Rate',
      icon: 'Target',
      description: 'Templates with proven interview callback rates',
      templates: recommendations?.filter(t => t?.successRate >= 85)?.slice(0, 4)
    },
    {
      title: 'Recently Added',
      icon: 'Sparkles',
      description: 'Fresh designs from our expert team',
      templates: recommendations?.filter(t => t?.isNew)?.slice(0, 4)
    }
  ];

  if (recommendations?.length === 0) return null;

  return (
    <div className="space-y-8">
      {recommendationCategories?.map((category) => {
        if (category?.templates?.length === 0) return null;
        
        return (
          <div key={category?.title} className="space-y-4">
            {/* Category Header */}
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-secondary/10 rounded-lg">
                <Icon name={category?.icon} size={20} className="text-secondary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground">{category?.title}</h3>
                <p className="text-sm text-text-secondary">{category?.description}</p>
              </div>
            </div>
            {/* Templates Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {category?.templates?.map((template) => (
                <TemplateCard
                  key={template?.id}
                  template={template}
                  onPreview={onPreview}
                  onCompare={onCompare}
                  isComparing={isComparing}
                  isSelected={selectedTemplates?.includes(template?.id)}
                />
              ))}
            </div>
          </div>
        );
      })}
      {/* AI Recommendations */}
      <div className="bg-gradient-career rounded-xl p-6 text-white">
        <div className="flex items-start space-x-4">
          <div className="p-3 bg-white/20 rounded-lg">
            <Icon name="Brain" size={24} className="text-white" />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-semibold mb-2">AI-Powered Recommendations</h3>
            <p className="text-white/90 mb-4">
              Based on your profile and industry trends, we recommend templates that increase 
              your chances of landing interviews by up to 40%.
            </p>
            <div className="flex flex-wrap gap-2">
              <div className="bg-white/20 rounded-full px-3 py-1 text-sm">
                ATS Optimization
              </div>
              <div className="bg-white/20 rounded-full px-3 py-1 text-sm">
                Industry-Specific
              </div>
              <div className="bg-white/20 rounded-full px-3 py-1 text-sm">
                Modern Design
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecommendationSection;