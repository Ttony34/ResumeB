import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';


const MilestoneTracker = ({ milestones }) => {
  const milestoneItems = [
    {
      key: 'applications',
      label: 'Applications Sent',
      icon: 'Send',
      color: 'text-secondary',
      bgColor: 'bg-secondary/10'
    },
    {
      key: 'interviews',
      label: 'Interviews Scheduled',
      icon: 'Calendar',
      color: 'text-conversion-accent',
      bgColor: 'bg-conversion-accent/10'
    },
    {
      key: 'offers',
      label: 'Job Offers',
      icon: 'Award',
      color: 'text-success',
      bgColor: 'bg-success/10'
    },
    {
      key: 'responses',
      label: 'Response Rate',
      icon: 'TrendingUp',
      color: 'text-primary',
      bgColor: 'bg-primary/10',
      isPercentage: true
    }
  ];

  return (
    <div className="bg-card border border-border rounded-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-semibold text-foreground mb-1">Career Progress</h2>
          <p className="text-sm text-muted-foreground">Track your job search milestones</p>
        </div>
        <Button variant="outline" size="sm" iconName="BarChart3" iconSize={16}>
          View Details
        </Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {milestoneItems?.map((item) => (
          <div key={item?.key} className="text-center">
            <div className={`w-16 h-16 ${item?.bgColor} rounded-full flex items-center justify-center mx-auto mb-3`}>
              <Icon name={item?.icon} size={24} className={item?.color} />
            </div>
            <div className="text-2xl font-bold text-foreground mb-1">
              {milestones?.[item?.key]}{item?.isPercentage ? '%' : ''}
            </div>
            <div className="text-sm text-muted-foreground">{item?.label}</div>
          </div>
        ))}
      </div>
      {/* Progress Insights */}
      <div className="mt-6 pt-6 border-t border-border">
        <div className="flex items-center space-x-2 text-sm">
          <Icon name="TrendingUp" size={16} className="text-success" />
          <span className="text-muted-foreground">
            Your response rate has improved by <span className="font-medium text-success">15%</span> this month
          </span>
        </div>
      </div>
    </div>
  );
};

export default MilestoneTracker;