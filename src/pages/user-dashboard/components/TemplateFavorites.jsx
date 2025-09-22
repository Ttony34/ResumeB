import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const TemplateFavorites = ({ favorites, onUseTemplate, onRemoveFavorite }) => {
  return (
    <div className="bg-card border border-border rounded-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-semibold text-foreground mb-1">Favorite Templates</h2>
          <p className="text-sm text-muted-foreground">Quick access to your bookmarked designs</p>
        </div>
        <Button variant="outline" size="sm" iconName="Plus" iconSize={16}>
          Browse More
        </Button>
      </div>
      {favorites?.length === 0 ? (
        <div className="text-center py-8">
          <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
            <Icon name="Heart" size={24} className="text-muted-foreground" />
          </div>
          <h3 className="font-medium text-foreground mb-2">No favorites yet</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Browse our template gallery and save your favorites for quick access
          </p>
          <Button variant="default" iconName="Layout" iconSize={16}>
            Explore Templates
          </Button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {favorites?.map((template) => (
            <div key={template?.id} className="group relative">
              <div className="aspect-[3/4] bg-muted rounded-lg overflow-hidden mb-3">
                <Image
                  src={template?.thumbnail}
                  alt={template?.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                
                {/* Overlay Actions */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex space-x-2">
                    <Button
                      variant="secondary"
                      size="sm"
                      onClick={() => onUseTemplate(template?.id)}
                      iconName="Plus"
                      iconSize={16}
                    >
                      Use Template
                    </Button>
                  </div>
                </div>

                {/* Remove Favorite */}
                <button
                  onClick={() => onRemoveFavorite(template?.id)}
                  className="absolute top-2 right-2 w-8 h-8 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <Icon name="Heart" size={16} className="text-red-400 fill-current" />
                </button>

                {/* Premium Badge */}
                {template?.isPremium && (
                  <div className="absolute top-2 left-2">
                    <div className="bg-conversion-accent text-white px-2 py-1 rounded-full flex items-center space-x-1">
                      <Icon name="Crown" size={12} />
                      <span className="text-xs font-medium">Pro</span>
                    </div>
                  </div>
                )}
              </div>

              <div className="text-center">
                <h3 className="font-medium text-foreground mb-1">{template?.name}</h3>
                <p className="text-sm text-muted-foreground">{template?.category}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TemplateFavorites;