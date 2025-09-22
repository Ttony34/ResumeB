import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Image from '../../../components/AppImage';
import { Link } from 'react-router-dom';

const TemplatePreviewModal = ({ template, isOpen, onClose }) => {
  const [activePreview, setActivePreview] = useState(0);

  if (!isOpen || !template) return null;

  const previewFormats = [
    { name: 'Desktop View', icon: 'Monitor', image: template?.previewImage },
    { name: 'Mobile View', icon: 'Smartphone', image: template?.mobilePreview || template?.previewImage },
    { name: 'Print View', icon: 'Printer', image: template?.printPreview || template?.previewImage }
  ];

  const idealUserProfiles = [
    `${template?.experience} professionals in ${template?.industry}`,
    "Job seekers prioritizing ATS compatibility",
    "Candidates seeking modern, professional presentation",
    "Users who value clean, readable formatting"
  ];

  return (
    <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl max-w-6xl w-full max-h-[90vh] overflow-hidden flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          <div className="flex items-center space-x-4">
            <div>
              <h2 className="text-2xl font-bold text-foreground">{template?.name}</h2>
              <div className="flex items-center space-x-4 mt-1">
                <div className="flex items-center space-x-1">
                  <div className="flex">
                    {[...Array(5)]?.map((_, i) => (
                      <Icon
                        key={i}
                        name="Star"
                        size={14}
                        className={`${
                          i < Math.floor(template?.rating) 
                            ? 'text-yellow-400 fill-current' :'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-text-secondary">
                    {template?.rating} ({template?.reviews} reviews)
                  </span>
                </div>
                <div className="text-sm text-success font-medium">
                  {template?.successRate}% success rate
                </div>
                <div className="flex items-center space-x-1 text-sm text-text-secondary">
                  <Icon name="Download" size={14} />
                  <span>{template?.downloads} downloads</span>
                </div>
              </div>
            </div>
            {template?.isPremium && (
              <div className="bg-conversion-accent text-white px-3 py-1 rounded-full text-sm font-medium flex items-center space-x-1">
                <Icon name="Crown" size={14} />
                <span>Premium</span>
              </div>
            )}
          </div>
          
          <button
            onClick={onClose}
            className="p-2 hover:bg-muted rounded-lg transition-colors duration-200"
          >
            <Icon name="X" size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="flex flex-1 overflow-hidden">
          {/* Preview Section */}
          <div className="flex-1 p-6">
            {/* Preview Tabs */}
            <div className="flex space-x-1 mb-4 bg-muted rounded-lg p-1">
              {previewFormats?.map((format, index) => (
                <button
                  key={index}
                  onClick={() => setActivePreview(index)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                    activePreview === index
                      ? 'bg-white text-secondary shadow-sm'
                      : 'text-text-secondary hover:text-foreground'
                  }`}
                >
                  <Icon name={format?.icon} size={16} />
                  <span>{format?.name}</span>
                </button>
              ))}
            </div>

            {/* Preview Image */}
            <div className="bg-gray-50 rounded-lg overflow-hidden aspect-[3/4] flex items-center justify-center">
              <Image
                src={previewFormats?.[activePreview]?.image}
                alt={`${template?.name} ${previewFormats?.[activePreview]?.name}`}
                className="max-w-full max-h-full object-contain"
              />
            </div>
          </div>

          {/* Details Section */}
          <div className="w-80 border-l border-border p-6 overflow-y-auto">
            <div className="space-y-6">
              {/* Description */}
              <div>
                <h3 className="font-semibold text-foreground mb-2">Description</h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {template?.description}
                </p>
              </div>

              {/* Features */}
              <div>
                <h3 className="font-semibold text-foreground mb-3">Key Features</h3>
                <div className="space-y-2">
                  {template?.features?.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <Icon name="Check" size={14} className="text-success" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Ideal For */}
              <div>
                <h3 className="font-semibold text-foreground mb-3">Ideal For</h3>
                <div className="space-y-2">
                  {idealUserProfiles?.map((profile, index) => (
                    <div key={index} className="flex items-start space-x-2">
                      <Icon name="Target" size={14} className="text-secondary mt-0.5" />
                      <span className="text-sm text-text-secondary">{profile}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Industry Insights */}
              <div>
                <h3 className="font-semibold text-foreground mb-2">Industry Insights</h3>
                <div className="bg-muted rounded-lg p-3">
                  <p className="text-sm text-text-secondary">
                    This template performs exceptionally well in {template?.industry?.toLowerCase()} roles, 
                    with a {template?.successRate}% success rate among users who received interview callbacks 
                    within 30 days of application.
                  </p>
                </div>
              </div>

              {/* Customization Options */}
              <div>
                <h3 className="font-semibold text-foreground mb-3">Customization</h3>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-text-secondary">Color Themes</span>
                    <span className="text-sm font-medium text-foreground">8 options</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-text-secondary">Font Styles</span>
                    <span className="text-sm font-medium text-foreground">5 options</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-text-secondary">Layout Variants</span>
                    <span className="text-sm font-medium text-foreground">3 options</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3 pt-4 border-t border-border">
                <Link to="/resume-builder-studio" className="block">
                  <Button
                    variant="default"
                    fullWidth
                    className="bg-secondary hover:bg-secondary/90"
                  >
                    <Icon name="Edit3" size={16} className="mr-2" />
                    Use This Template
                  </Button>
                </Link>
                
                {template?.isPremium ? (
                  <Link to="/pricing-premium" className="block">
                    <Button variant="outline" fullWidth>
                      <Icon name="Crown" size={16} className="mr-2" />
                      Upgrade to Premium
                    </Button>
                  </Link>
                ) : (
                  <Button variant="outline" fullWidth>
                    <Icon name="Download" size={16} className="mr-2" />
                    Download Preview
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TemplatePreviewModal;