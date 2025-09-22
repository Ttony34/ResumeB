import React, { useState } from 'react';
import Input from '../../../components/ui/Input';
import Icon from '../../../components/AppIcon';

const ExperienceForm = ({ data, onChange, onNext, onPrev }) => {
  const [experiences, setExperiences] = useState(data || [
    {
      id: 1,
      jobTitle: '',
      company: '',
      location: '',
      startDate: '',
      endDate: '',
      isCurrentJob: false,
      achievements: ['']
    }
  ]);

  const handleExperienceChange = (index, field, value) => {
    const updated = experiences?.map((exp, i) => 
      i === index ? { ...exp, [field]: value } : exp
    );
    setExperiences(updated);
    onChange(updated);
  };

  const handleAchievementChange = (expIndex, achIndex, value) => {
    const updated = experiences?.map((exp, i) => {
      if (i === expIndex) {
        const newAchievements = [...exp?.achievements];
        newAchievements[achIndex] = value;
        return { ...exp, achievements: newAchievements };
      }
      return exp;
    });
    setExperiences(updated);
    onChange(updated);
  };

  const addAchievement = (expIndex) => {
    const updated = experiences?.map((exp, i) => 
      i === expIndex ? { ...exp, achievements: [...exp?.achievements, ''] } : exp
    );
    setExperiences(updated);
    onChange(updated);
  };

  const removeAchievement = (expIndex, achIndex) => {
    const updated = experiences?.map((exp, i) => {
      if (i === expIndex) {
        const newAchievements = exp?.achievements?.filter((_, idx) => idx !== achIndex);
        return { ...exp, achievements: newAchievements?.length ? newAchievements : [''] };
      }
      return exp;
    });
    setExperiences(updated);
    onChange(updated);
  };

  const addExperience = () => {
    const newExp = {
      id: Date.now(),
      jobTitle: '',
      company: '',
      location: '',
      startDate: '',
      endDate: '',
      isCurrentJob: false,
      achievements: ['']
    };
    const updated = [...experiences, newExp];
    setExperiences(updated);
    onChange(updated);
  };

  const removeExperience = (index) => {
    if (experiences?.length > 1) {
      const updated = experiences?.filter((_, i) => i !== index);
      setExperiences(updated);
      onChange(updated);
    }
  };

  const achievementSuggestions = [
    "Increased sales revenue by 25% through strategic client relationship management",
    "Led cross-functional team of 8 members to deliver project 2 weeks ahead of schedule",
    "Implemented new process that reduced operational costs by $50,000 annually",
    "Managed budget of $2M+ while maintaining 98% client satisfaction rate"
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center">
            <Icon name="Briefcase" size={20} className="text-secondary" />
          </div>
          <div>
            <h2 className="text-xl font-semibold text-foreground">Work Experience</h2>
            <p className="text-sm text-text-secondary">Add your professional experience</p>
          </div>
        </div>
        
        <button
          onClick={addExperience}
          className="flex items-center space-x-2 px-4 py-2 text-sm bg-secondary/10 text-secondary rounded-lg hover:bg-secondary/20 transition-colors"
        >
          <Icon name="Plus" size={16} />
          <span>Add Experience</span>
        </button>
      </div>
      {experiences?.map((experience, expIndex) => (
        <div key={experience?.id} className="bg-card border border-border rounded-lg p-6 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-medium text-foreground">Experience #{expIndex + 1}</h3>
            {experiences?.length > 1 && (
              <button
                onClick={() => removeExperience(expIndex)}
                className="text-error hover:text-error/80 transition-colors"
              >
                <Icon name="Trash2" size={16} />
              </button>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              label="Job Title"
              type="text"
              placeholder="Senior Software Engineer"
              value={experience?.jobTitle}
              onChange={(e) => handleExperienceChange(expIndex, 'jobTitle', e?.target?.value)}
              required
            />
            
            <Input
              label="Company"
              type="text"
              placeholder="Tech Solutions Inc."
              value={experience?.company}
              onChange={(e) => handleExperienceChange(expIndex, 'company', e?.target?.value)}
              required
            />
            
            <Input
              label="Location"
              type="text"
              placeholder="San Francisco, CA"
              value={experience?.location}
              onChange={(e) => handleExperienceChange(expIndex, 'location', e?.target?.value)}
            />
            
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id={`current-${expIndex}`}
                checked={experience?.isCurrentJob}
                onChange={(e) => handleExperienceChange(expIndex, 'isCurrentJob', e?.target?.checked)}
                className="w-4 h-4 text-secondary border-border rounded focus:ring-secondary"
              />
              <label htmlFor={`current-${expIndex}`} className="text-sm text-foreground">
                I currently work here
              </label>
            </div>
            
            <Input
              label="Start Date"
              type="date"
              value={experience?.startDate}
              onChange={(e) => handleExperienceChange(expIndex, 'startDate', e?.target?.value)}
            />
            
            {!experience?.isCurrentJob && (
              <Input
                label="End Date"
                type="date"
                value={experience?.endDate}
                onChange={(e) => handleExperienceChange(expIndex, 'endDate', e?.target?.value)}
              />
            )}
          </div>

          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <label className="text-sm font-medium text-foreground">Key Achievements</label>
              <button
                onClick={() => addAchievement(expIndex)}
                className="flex items-center space-x-1 text-xs text-secondary hover:text-secondary/80 transition-colors"
              >
                <Icon name="Plus" size={14} />
                <span>Add Achievement</span>
              </button>
            </div>

            {experience?.achievements?.map((achievement, achIndex) => (
              <div key={achIndex} className="flex items-start space-x-2">
                <textarea
                  placeholder="Describe a specific achievement with quantifiable results..."
                  value={achievement}
                  onChange={(e) => handleAchievementChange(expIndex, achIndex, e?.target?.value)}
                  rows={2}
                  className="flex-1 px-3 py-2 border border-border rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent resize-none text-sm"
                />
                {experience?.achievements?.length > 1 && (
                  <button
                    onClick={() => removeAchievement(expIndex, achIndex)}
                    className="mt-2 text-error hover:text-error/80 transition-colors"
                  >
                    <Icon name="X" size={16} />
                  </button>
                )}
              </div>
            ))}

            <div className="bg-muted/50 rounded-lg p-3 space-y-2">
              <p className="text-xs font-medium text-foreground flex items-center">
                <Icon name="Target" size={14} className="mr-1 text-secondary" />
                Achievement Examples
              </p>
              {achievementSuggestions?.map((suggestion, index) => (
                <button
                  key={index}
                  onClick={() => handleAchievementChange(expIndex, 0, suggestion)}
                  className="block w-full text-left text-xs text-text-secondary hover:text-foreground hover:bg-background rounded p-2 transition-colors"
                >
                  • {suggestion}
                </button>
              ))}
            </div>
          </div>
        </div>
      ))}
      <div className="flex justify-between pt-4">
        <button
          onClick={onPrev}
          className="px-6 py-2 border border-border text-foreground rounded-lg hover:bg-muted transition-colors flex items-center space-x-2"
        >
          <Icon name="ArrowLeft" size={16} />
          <span>Back</span>
        </button>
        
        <button
          onClick={onNext}
          className="px-6 py-2 bg-secondary text-white rounded-lg hover:bg-secondary/90 transition-colors flex items-center space-x-2"
        >
          <span>Continue to Education</span>
          <Icon name="ArrowRight" size={16} />
        </button>
      </div>
    </div>
  );
};

export default ExperienceForm;