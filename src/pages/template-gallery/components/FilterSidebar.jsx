import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import { Checkbox } from '../../../components/ui/Checkbox';

const FilterSidebar = ({ 
  filters, 
  onFilterChange, 
  onClearFilters, 
  isOpen, 
  onClose 
}) => {
  const filterSections = [
    {
      id: 'industry',
      title: 'Industry',
      icon: 'Briefcase',
      options: [
        { value: 'technology', label: 'Technology', count: 45 },
        { value: 'healthcare', label: 'Healthcare', count: 32 },
        { value: 'finance', label: 'Finance', count: 28 },
        { value: 'creative', label: 'Creative', count: 38 },
        { value: 'executive', label: 'Executive', count: 22 },
        { value: 'education', label: 'Education', count: 18 },
        { value: 'sales', label: 'Sales & Marketing', count: 35 },
        { value: 'engineering', label: 'Engineering', count: 41 }
      ]
    },
    {
      id: 'experience',
      title: 'Experience Level',
      icon: 'TrendingUp',
      options: [
        { value: 'entry', label: 'Entry Level (0-2 years)', count: 52 },
        { value: 'mid', label: 'Mid-Career (3-7 years)', count: 68 },
        { value: 'senior', label: 'Senior (8-15 years)', count: 43 },
        { value: 'executive', label: 'Executive (15+ years)', count: 25 }
      ]
    },
    {
      id: 'style',
      title: 'Design Style',
      icon: 'Palette',
      options: [
        { value: 'modern', label: 'Modern', count: 78 },
        { value: 'classic', label: 'Classic', count: 45 },
        { value: 'creative', label: 'Creative', count: 34 },
        { value: 'minimalist', label: 'Minimalist', count: 56 },
        { value: 'professional', label: 'Professional', count: 62 }
      ]
    },
    {
      id: 'features',
      title: 'Features',
      icon: 'Settings',
      options: [
        { value: 'ats-optimized', label: 'ATS Optimized', count: 89 },
        { value: 'one-page', label: 'One Page Format', count: 67 },
        { value: 'two-page', label: 'Two Page Format', count: 45 },
        { value: 'cover-letter', label: 'Includes Cover Letter', count: 38 },
        { value: 'portfolio', label: 'Portfolio Section', count: 29 }
      ]
    }
  ];

  const handleFilterToggle = (sectionId, value) => {
    const currentValues = filters?.[sectionId] || [];
    const newValues = currentValues?.includes(value)
      ? currentValues?.filter(v => v !== value)
      : [...currentValues, value];
    
    onFilterChange(sectionId, newValues);
  };

  const getActiveFiltersCount = () => {
    return Object.values(filters)?.reduce((total, values) => total + values?.length, 0);
  };

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}
      {/* Sidebar */}
      <div className={`
        fixed lg:sticky top-0 left-0 h-full lg:h-auto w-80 bg-white border-r border-border z-50 lg:z-0
        transform transition-transform duration-300 ease-out lg:transform-none
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        overflow-y-auto
      `}>
        <div className="p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-2">
              <Icon name="Filter" size={20} className="text-secondary" />
              <h2 className="text-lg font-semibold text-foreground">Filters</h2>
              {getActiveFiltersCount() > 0 && (
                <span className="bg-secondary text-white text-xs px-2 py-1 rounded-full">
                  {getActiveFiltersCount()}
                </span>
              )}
            </div>
            
            <div className="flex items-center space-x-2">
              {getActiveFiltersCount() > 0 && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={onClearFilters}
                  className="text-text-secondary hover:text-foreground"
                >
                  Clear All
                </Button>
              )}
              <button
                onClick={onClose}
                className="lg:hidden p-1 hover:bg-muted rounded"
              >
                <Icon name="X" size={20} />
              </button>
            </div>
          </div>

          {/* Filter Sections */}
          <div className="space-y-6">
            {filterSections?.map((section) => (
              <div key={section?.id} className="space-y-3">
                <div className="flex items-center space-x-2">
                  <Icon name={section?.icon} size={16} className="text-text-secondary" />
                  <h3 className="font-medium text-foreground">{section?.title}</h3>
                </div>
                
                <div className="space-y-2 pl-6">
                  {section?.options?.map((option) => (
                    <div key={option?.value} className="flex items-center justify-between">
                      <Checkbox
                        label={option?.label}
                        checked={(filters?.[section?.id] || [])?.includes(option?.value)}
                        onChange={() => handleFilterToggle(section?.id, option?.value)}
                        className="flex-1"
                      />
                      <span className="text-xs text-text-secondary ml-2">
                        {option?.count}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Premium Filter */}
          <div className="mt-6 pt-6 border-t border-border">
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Icon name="Crown" size={16} className="text-conversion-accent" />
                <h3 className="font-medium text-foreground">Access Level</h3>
              </div>
              
              <div className="space-y-2 pl-6">
                <Checkbox
                  label="Free Templates"
                  checked={(filters?.access || [])?.includes('free')}
                  onChange={() => handleFilterToggle('access', 'free')}
                />
                <Checkbox
                  label="Premium Templates"
                  checked={(filters?.access || [])?.includes('premium')}
                  onChange={() => handleFilterToggle('access', 'premium')}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FilterSidebar;