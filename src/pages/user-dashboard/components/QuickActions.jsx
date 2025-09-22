import React from 'react';
import Icon from '../../../components/AppIcon';


const QuickActions = ({ onCreateResume, onBrowseTemplates, onUpgradePremium, isPremium }) => {
  const actions = [
    {
      title: 'Create New Resume',
      description: 'Start building a new resume from scratch',
      icon: 'Plus',
      color: 'bg-secondary text-secondary-foreground',
      onClick: onCreateResume
    },
    {
      title: 'Browse Templates',
      description: 'Explore our collection of professional templates',
      icon: 'Layout',
      color: 'bg-primary text-primary-foreground',
      onClick: onBrowseTemplates
    },
    {
      title: 'Import Resume',
      description: 'Upload an existing resume to get started',
      icon: 'Upload',
      color: 'bg-muted text-foreground',
      onClick: () => console.log('Import resume')
    }
  ];

  if (!isPremium) {
    actions?.push({
      title: 'Upgrade to Premium',
      description: 'Unlock exclusive templates and features',
      icon: 'Crown',
      color: 'bg-conversion-accent text-white',
      onClick: onUpgradePremium
    });
  }

  return (
    <div className="bg-card border border-border rounded-lg p-6">
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-foreground mb-1">Quick Actions</h2>
        <p className="text-sm text-muted-foreground">Get started with these common tasks</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {actions?.map((action, index) => (
          <button
            key={index}
            onClick={action?.onClick}
            className="text-left p-4 rounded-lg border border-border hover:border-secondary/50 hover:shadow-subtle transition-all duration-300 group"
          >
            <div className="flex items-start space-x-3">
              <div className={`w-12 h-12 rounded-lg ${action?.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                <Icon name={action?.icon} size={20} />
              </div>
              
              <div className="flex-1 min-w-0">
                <h3 className="font-medium text-foreground mb-1 group-hover:text-secondary transition-colors duration-300">
                  {action?.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {action?.description}
                </p>
              </div>

              <Icon 
                name="ArrowRight" 
                size={16} 
                className="text-muted-foreground group-hover:text-secondary group-hover:translate-x-1 transition-all duration-300" 
              />
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuickActions;