import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const ResumeCard = ({ resume, onEdit, onDownload, onDuplicate, onShare, onDelete }) => {
  const [showActions, setShowActions] = useState(false);

  const formatDate = (date) => {
    return new Date(date)?.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'active':
        return 'bg-success/10 text-success border-success/20';
      case 'draft':
        return 'bg-warning/10 text-warning border-warning/20';
      case 'archived':
        return 'bg-muted text-muted-foreground border-border';
      default:
        return 'bg-muted text-muted-foreground border-border';
    }
  };

  return (
    <div className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-premium transition-all duration-300 group">
      {/* Resume Preview */}
      <div className="relative aspect-[3/4] bg-muted overflow-hidden">
        <Image
          src={resume?.thumbnail}
          alt={`${resume?.name} preview`}
          className="w-full h-full object-cover"
        />
        
        {/* Overlay Actions */}
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="flex space-x-2">
            <Button
              variant="secondary"
              size="sm"
              onClick={() => onEdit(resume?.id)}
              iconName="Edit3"
              iconSize={16}
            >
              Edit
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => onDownload(resume?.id)}
              iconName="Download"
              iconSize={16}
            >
              Download
            </Button>
          </div>
        </div>

        {/* Status Badge */}
        <div className="absolute top-3 left-3">
          <span className={`px-2 py-1 text-xs font-medium rounded-full border ${getStatusColor(resume?.status)}`}>
            {resume?.status?.charAt(0)?.toUpperCase() + resume?.status?.slice(1)}
          </span>
        </div>

        {/* Premium Badge */}
        {resume?.isPremium && (
          <div className="absolute top-3 right-3">
            <div className="bg-conversion-accent text-white px-2 py-1 rounded-full flex items-center space-x-1">
              <Icon name="Crown" size={12} />
              <span className="text-xs font-medium">Pro</span>
            </div>
          </div>
        )}
      </div>
      {/* Resume Info */}
      <div className="p-4">
        <div className="flex items-start justify-between mb-3">
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-foreground truncate mb-1">{resume?.name}</h3>
            <p className="text-sm text-muted-foreground">{resume?.template}</p>
          </div>
          
          <div className="relative">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setShowActions(!showActions)}
              iconName="MoreVertical"
              iconSize={16}
              className="ml-2"
            />
            
            {showActions && (
              <div className="absolute right-0 top-full mt-1 w-48 bg-popover border border-border rounded-lg shadow-premium z-10">
                <div className="py-1">
                  <button
                    onClick={() => {
                      onEdit(resume?.id);
                      setShowActions(false);
                    }}
                    className="w-full px-3 py-2 text-left text-sm hover:bg-muted flex items-center space-x-2"
                  >
                    <Icon name="Edit3" size={16} />
                    <span>Edit Resume</span>
                  </button>
                  <button
                    onClick={() => {
                      onDuplicate(resume?.id);
                      setShowActions(false);
                    }}
                    className="w-full px-3 py-2 text-left text-sm hover:bg-muted flex items-center space-x-2"
                  >
                    <Icon name="Copy" size={16} />
                    <span>Duplicate</span>
                  </button>
                  <button
                    onClick={() => {
                      onShare(resume?.id);
                      setShowActions(false);
                    }}
                    className="w-full px-3 py-2 text-left text-sm hover:bg-muted flex items-center space-x-2"
                  >
                    <Icon name="Share2" size={16} />
                    <span>Share</span>
                  </button>
                  <div className="border-t border-border my-1"></div>
                  <button
                    onClick={() => {
                      onDelete(resume?.id);
                      setShowActions(false);
                    }}
                    className="w-full px-3 py-2 text-left text-sm hover:bg-destructive/10 text-destructive flex items-center space-x-2"
                  >
                    <Icon name="Trash2" size={16} />
                    <span>Delete</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Stats */}
        <div className="flex items-center justify-between text-sm text-muted-foreground mb-3">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <Icon name="Download" size={14} />
              <span>{resume?.downloads}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Icon name="Eye" size={14} />
              <span>{resume?.views}</span>
            </div>
          </div>
          <span>{formatDate(resume?.lastModified)}</span>
        </div>

        {/* Quick Actions */}
        <div className="flex space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => onDownload(resume?.id)}
            iconName="Download"
            iconSize={14}
            className="flex-1"
          >
            Download
          </Button>
          <Button
            variant="default"
            size="sm"
            onClick={() => onEdit(resume?.id)}
            iconName="Edit3"
            iconSize={14}
            className="flex-1"
          >
            Edit
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ResumeCard;