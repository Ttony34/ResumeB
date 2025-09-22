import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';


const RecentActivity = ({ activities }) => {
  const getActivityIcon = (type) => {
    switch (type) {
      case 'created':
        return 'Plus';
      case 'edited':
        return 'Edit3';
      case 'downloaded':
        return 'Download';
      case 'shared':
        return 'Share2';
      case 'duplicated':
        return 'Copy';
      default:
        return 'Activity';
    }
  };

  const getActivityColor = (type) => {
    switch (type) {
      case 'created':
        return 'text-success';
      case 'edited':
        return 'text-secondary';
      case 'downloaded':
        return 'text-primary';
      case 'shared':
        return 'text-conversion-accent';
      case 'duplicated':
        return 'text-muted-foreground';
      default:
        return 'text-muted-foreground';
    }
  };

  const formatTimeAgo = (date) => {
    const now = new Date();
    const activityDate = new Date(date);
    const diffInMinutes = Math.floor((now - activityDate) / (1000 * 60));
    
    if (diffInMinutes < 1) return 'Just now';
    if (diffInMinutes < 60) return `${diffInMinutes}m ago`;
    
    const diffInHours = Math.floor(diffInMinutes / 60);
    if (diffInHours < 24) return `${diffInHours}h ago`;
    
    const diffInDays = Math.floor(diffInHours / 24);
    if (diffInDays < 7) return `${diffInDays}d ago`;
    
    return activityDate?.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <div className="bg-card border border-border rounded-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-semibold text-foreground mb-1">Recent Activity</h2>
          <p className="text-sm text-muted-foreground">Your latest resume actions</p>
        </div>
        <Button variant="outline" size="sm" iconName="Clock" iconSize={16}>
          View All
        </Button>
      </div>
      {activities?.length === 0 ? (
        <div className="text-center py-8">
          <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
            <Icon name="Activity" size={24} className="text-muted-foreground" />
          </div>
          <h3 className="font-medium text-foreground mb-2">No recent activity</h3>
          <p className="text-sm text-muted-foreground">
            Start creating or editing resumes to see your activity here
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {activities?.map((activity) => (
            <div key={activity?.id} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-muted/50 transition-colors duration-200">
              <div className={`w-8 h-8 rounded-full bg-muted flex items-center justify-center flex-shrink-0 ${getActivityColor(activity?.type)}`}>
                <Icon name={getActivityIcon(activity?.type)} size={16} />
              </div>
              
              <div className="flex-1 min-w-0">
                <p className="text-sm text-foreground">
                  <span className="font-medium">{activity?.action}</span>
                  {activity?.resumeName && (
                    <>
                      {' '}
                      <span className="font-medium text-secondary">"{activity?.resumeName}"</span>
                    </>
                  )}
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  {formatTimeAgo(activity?.timestamp)}
                </p>
              </div>

              {activity?.type === 'downloaded' && (
                <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                  <Icon name="Download" size={12} />
                  <span>{activity?.format}</span>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default RecentActivity;