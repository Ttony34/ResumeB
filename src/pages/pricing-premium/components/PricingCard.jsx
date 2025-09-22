import React from 'react';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const PricingCard = ({ 
  plan, 
  isPopular = false, 
  onSelectPlan,
  className = "" 
}) => {
  const {
    name,
    price,
    originalPrice,
    period,
    description,
    features,
    templateCount,
    buttonText,
    buttonVariant = "default",
    badge,
    successRate,
    userCount
  } = plan;

  return (
    <div className={`relative bg-card border rounded-xl p-6 transition-all duration-300 hover:shadow-premium hover:scale-105 ${
      isPopular 
        ? 'border-secondary shadow-lg ring-2 ring-secondary/20' 
        : 'border-border hover:border-secondary/30'
    } ${className}`}>
      {/* Popular Badge */}
      {isPopular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <div className="bg-secondary text-secondary-foreground px-4 py-1 rounded-full text-sm font-semibold">
            Most Popular
          </div>
        </div>
      )}
      {/* Badge */}
      {badge && (
        <div className="mb-4">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent">
            <Icon name="Crown" size={12} className="mr-1" />
            {badge}
          </span>
        </div>
      )}
      {/* Plan Header */}
      <div className="mb-6">
        <h3 className="text-xl font-bold text-foreground mb-2">{name}</h3>
        <p className="text-text-secondary text-sm mb-4">{description}</p>
        
        <div className="flex items-baseline mb-2">
          {originalPrice && (
            <span className="text-lg text-text-secondary line-through mr-2">
              ${originalPrice}
            </span>
          )}
          <span className="text-4xl font-bold text-foreground">${price}</span>
          <span className="text-text-secondary ml-1">/{period}</span>
        </div>

        {templateCount && (
          <p className="text-sm text-text-secondary">
            Access to {templateCount} templates
          </p>
        )}
      </div>
      {/* Success Metrics */}
      {(successRate || userCount) && (
        <div className="mb-6 p-3 bg-muted rounded-lg">
          <div className="flex items-center justify-between text-sm">
            {successRate && (
              <div className="flex items-center">
                <Icon name="TrendingUp" size={16} className="text-accent mr-1" />
                <span className="text-foreground font-medium">{successRate}% success rate</span>
              </div>
            )}
            {userCount && (
              <div className="flex items-center">
                <Icon name="Users" size={16} className="text-secondary mr-1" />
                <span className="text-text-secondary">{userCount} users</span>
              </div>
            )}
          </div>
        </div>
      )}
      {/* Features List */}
      <div className="mb-8">
        <ul className="space-y-3">
          {features?.map((feature, index) => (
            <li key={index} className="flex items-start">
              <Icon 
                name={feature?.included ? "Check" : "X"} 
                size={16} 
                className={`mr-3 mt-0.5 flex-shrink-0 ${
                  feature?.included ? 'text-accent' : 'text-text-secondary'
                }`}
              />
              <span className={`text-sm ${
                feature?.included ? 'text-foreground' : 'text-text-secondary'
              }`}>
                {feature?.text}
              </span>
            </li>
          ))}
        </ul>
      </div>
      {/* CTA Button */}
      <Button
        variant={buttonVariant}
        fullWidth
        onClick={() => onSelectPlan(plan)}
        className={isPopular ? 'bg-secondary hover:bg-secondary/90' : ''}
      >
        {buttonText}
      </Button>
      {/* Money Back Guarantee */}
      {price > 0 && (
        <div className="mt-4 text-center">
          <p className="text-xs text-text-secondary flex items-center justify-center">
            <Icon name="Shield" size={12} className="mr-1" />
            30-day money-back guarantee
          </p>
        </div>
      )}
    </div>
  );
};

export default PricingCard;