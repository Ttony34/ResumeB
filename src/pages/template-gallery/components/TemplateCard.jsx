import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const TemplateCard = ({ template, onPreview, onCompare, isComparing, isSelected }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleCompareToggle = (e) => {
    e?.preventDefault();
    e?.stopPropagation();
    onCompare(template?.id);
  };

  const handlePreview = (e) => {
    e?.preventDefault();
    e?.stopPropagation();
    onPreview(template);
  };

  return (
    <div 
      className={`template-card group relative ${isSelected ? 'ring-2 ring-secondary' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Premium Badge */}
      {template?.isPremium && (
        <div className="absolute top-3 right-3 z-10">
          <div className="bg-conversion-accent text-white px-2 py-1 rounded-full text-xs font-medium flex items-center space-x-1">
            <Icon name="Crown" size={12} />
            <span>Premium</span>
          </div>
        </div>
      )}
      {/* Compare Checkbox */}
      {isComparing && (
        <div className="absolute top-3 left-3 z-10">
          <button
            onClick={handleCompareToggle}
            className={`w-6 h-6 rounded border-2 flex items-center justify-center transition-all duration-200 ${
              isSelected 
                ? 'bg-secondary border-secondary text-white' :'bg-white border-gray-300 hover:border-secondary'
            }`}
          >
            {isSelected && <Icon name="Check" size={14} />}
          </button>
        </div>
      )}
      {/* Template Preview */}
      <div className="relative overflow-hidden rounded-t-lg bg-gray-50 aspect-[3/4]">
        <Image
          src={template?.previewImage}
          alt={`${template?.name} resume template preview`}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        
        {/* Hover Overlay */}
        <div className={`absolute inset-0 bg-black/60 flex items-center justify-center transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}>
          <div className="space-y-3">
            <Button
              variant="default"
              size="sm"
              onClick={handlePreview}
              className="bg-white text-primary hover:bg-gray-100"
            >
              <Icon name="Eye" size={16} className="mr-2" />
              Preview
            </Button>
            <Link to="/resume-builder-studio" className="block">
              <Button
                variant="default"
                size="sm"
                className="w-full bg-secondary hover:bg-secondary/90"
              >
                <Icon name="Edit3" size={16} className="mr-2" />
                Use Template
              </Button>
            </Link>
          </div>
        </div>

        {/* Premium Lock Overlay */}
        {template?.isPremium && !isHovered && (
          <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
            <div className="bg-white/90 backdrop-blur-sm rounded-full p-3">
              <Icon name="Lock" size={24} className="text-conversion-accent" />
            </div>
          </div>
        )}
      </div>
      {/* Template Info */}
      <div className="p-4 bg-white">
        <div className="flex items-start justify-between mb-2">
          <h3 className="font-semibold text-foreground group-hover:text-secondary transition-colors duration-200">
            {template?.name}
          </h3>
          <div className="flex items-center space-x-1 text-xs text-text-secondary">
            <Icon name="Download" size={12} />
            <span>{template?.downloads}</span>
          </div>
        </div>

        <p className="text-sm text-text-secondary mb-3 line-clamp-2">
          {template?.description}
        </p>

        {/* Features */}
        <div className="flex flex-wrap gap-1 mb-3">
          {template?.features?.slice(0, 3)?.map((feature, index) => (
            <span
              key={index}
              className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-muted text-text-secondary"
            >
              {feature}
            </span>
          ))}
          {template?.features?.length > 3 && (
            <span className="text-xs text-text-secondary">
              +{template?.features?.length - 3} more
            </span>
          )}
        </div>

        {/* Success Rate */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-1">
            <div className="flex">
              {[...Array(5)]?.map((_, i) => (
                <Icon
                  key={i}
                  name="Star"
                  size={12}
                  className={`${
                    i < Math.floor(template?.rating) 
                      ? 'text-yellow-400 fill-current' :'text-gray-300'
                  }`}
                />
              ))}
            </div>
            <span className="text-xs text-text-secondary">
              {template?.rating} ({template?.reviews})
            </span>
          </div>
          
          <div className="text-xs text-success font-medium">
            {template?.successRate}% success rate
          </div>
        </div>
      </div>
    </div>
  );
};

export default TemplateCard;