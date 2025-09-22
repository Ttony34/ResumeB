import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Image from '../../../components/AppImage';
import { Link } from 'react-router-dom';

const ComparisonPanel = ({ templates, onRemove, onClear, isOpen, onClose }) => {
  if (!isOpen || templates?.length === 0) return null;

  const comparisonFeatures = [
    'ATS Optimized',
    'One Page Format',
    'Two Page Format',
    'Cover Letter Included',
    'Portfolio Section',
    'Skills Section',
    'References Section',
    'Social Links',
    'Photo Support',
    'Color Customization'
  ];

  const hasFeature = (template, feature) => {
    return template?.features?.some(f => 
      f?.toLowerCase()?.includes(feature?.toLowerCase()?.replace(' ', '-')) ||
      f?.toLowerCase()?.includes(feature?.toLowerCase())
    );
  };

  return (
    <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl max-w-7xl w-full max-h-[90vh] overflow-hidden flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          <div className="flex items-center space-x-3">
            <Icon name="GitCompare" size={24} className="text-secondary" />
            <h2 className="text-2xl font-bold text-foreground">Compare Templates</h2>
            <span className="bg-secondary text-white text-sm px-2 py-1 rounded-full">
              {templates?.length} selected
            </span>
          </div>
          
          <div className="flex items-center space-x-3">
            <Button variant="ghost" onClick={onClear}>
              Clear All
            </Button>
            <button
              onClick={onClose}
              className="p-2 hover:bg-muted rounded-lg transition-colors duration-200"
            >
              <Icon name="X" size={24} />
            </button>
          </div>
        </div>

        {/* Comparison Content */}
        <div className="flex-1 overflow-auto p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {templates?.map((template) => (
              <div key={template?.id} className="bg-white border border-border rounded-lg overflow-hidden">
                {/* Template Header */}
                <div className="relative">
                  <div className="aspect-[3/4] bg-gray-50">
                    <Image
                      src={template?.previewImage}
                      alt={`${template?.name} preview`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Remove Button */}
                  <button
                    onClick={() => onRemove(template?.id)}
                    className="absolute top-2 right-2 p-1 bg-white/90 hover:bg-white rounded-full shadow-sm transition-colors duration-200"
                  >
                    <Icon name="X" size={16} className="text-text-secondary" />
                  </button>

                  {/* Premium Badge */}
                  {template?.isPremium && (
                    <div className="absolute top-2 left-2">
                      <div className="bg-conversion-accent text-white px-2 py-1 rounded-full text-xs font-medium flex items-center space-x-1">
                        <Icon name="Crown" size={12} />
                        <span>Premium</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Template Info */}
                <div className="p-4">
                  <h3 className="font-semibold text-foreground mb-1">{template?.name}</h3>
                  <p className="text-sm text-text-secondary mb-3 line-clamp-2">
                    {template?.description}
                  </p>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-4 mb-4 text-center">
                    <div>
                      <div className="text-lg font-bold text-secondary">{template?.rating}</div>
                      <div className="text-xs text-text-secondary">Rating</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-success">{template?.successRate}%</div>
                      <div className="text-xs text-text-secondary">Success Rate</div>
                    </div>
                  </div>

                  {/* Features Comparison */}
                  <div className="space-y-2 mb-4">
                    <h4 className="text-sm font-medium text-foreground">Features</h4>
                    <div className="space-y-1">
                      {comparisonFeatures?.map((feature) => (
                        <div key={feature} className="flex items-center justify-between text-xs">
                          <span className="text-text-secondary">{feature}</span>
                          {hasFeature(template, feature) ? (
                            <Icon name="Check" size={14} className="text-success" />
                          ) : (
                            <Icon name="X" size={14} className="text-gray-300" />
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Button */}
                  <Link to="/resume-builder-studio" className="block">
                    <Button
                      variant="default"
                      fullWidth
                      size="sm"
                      className="bg-secondary hover:bg-secondary/90"
                    >
                      <Icon name="Edit3" size={14} className="mr-2" />
                      Use Template
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Feature Comparison Table (Desktop Only) */}
          {templates?.length > 1 && (
            <div className="hidden lg:block mt-8">
              <h3 className="text-lg font-semibold text-foreground mb-4">Detailed Feature Comparison</h3>
              <div className="overflow-x-auto">
                <table className="w-full border border-border rounded-lg overflow-hidden">
                  <thead className="bg-muted">
                    <tr>
                      <th className="text-left p-4 font-medium text-foreground">Feature</th>
                      {templates?.map((template) => (
                        <th key={template?.id} className="text-center p-4 font-medium text-foreground min-w-32">
                          {template?.name}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonFeatures?.map((feature, index) => (
                      <tr key={feature} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                        <td className="p-4 text-sm text-foreground font-medium">{feature}</td>
                        {templates?.map((template) => (
                          <td key={template?.id} className="p-4 text-center">
                            {hasFeature(template, feature) ? (
                              <Icon name="Check" size={16} className="text-success mx-auto" />
                            ) : (
                              <Icon name="X" size={16} className="text-gray-300 mx-auto" />
                            )}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ComparisonPanel;