import React, { useState } from 'react';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';
import Icon from '../../../components/AppIcon';

const EducationForm = ({ data, onChange, onNext, onPrev }) => {
  const [education, setEducation] = useState(data || [
    {
      id: 1,
      degree: '',
      field: '',
      school: '',
      location: '',
      graduationDate: '',
      gpa: '',
      achievements: ['']
    }
  ]);

  const degreeOptions = [
    { value: 'high-school', label: 'High School Diploma' },
    { value: 'associate', label: 'Associate Degree' },
    { value: 'bachelor', label: 'Bachelor\'s Degree' },
    { value: 'master', label: 'Master\'s Degree' },
    { value: 'doctorate', label: 'Doctorate (PhD)' },
    { value: 'certificate', label: 'Professional Certificate' },
    { value: 'other', label: 'Other' }
  ];

  const handleEducationChange = (index, field, value) => {
    const updated = education?.map((edu, i) => 
      i === index ? { ...edu, [field]: value } : edu
    );
    setEducation(updated);
    onChange(updated);
  };

  const handleAchievementChange = (eduIndex, achIndex, value) => {
    const updated = education?.map((edu, i) => {
      if (i === eduIndex) {
        const newAchievements = [...edu?.achievements];
        newAchievements[achIndex] = value;
        return { ...edu, achievements: newAchievements };
      }
      return edu;
    });
    setEducation(updated);
    onChange(updated);
  };

  const addAchievement = (eduIndex) => {
    const updated = education?.map((edu, i) => 
      i === eduIndex ? { ...edu, achievements: [...edu?.achievements, ''] } : edu
    );
    setEducation(updated);
    onChange(updated);
  };

  const removeAchievement = (eduIndex, achIndex) => {
    const updated = education?.map((edu, i) => {
      if (i === eduIndex) {
        const newAchievements = edu?.achievements?.filter((_, idx) => idx !== achIndex);
        return { ...edu, achievements: newAchievements?.length ? newAchievements : [''] };
      }
      return edu;
    });
    setEducation(updated);
    onChange(updated);
  };

  const addEducation = () => {
    const newEdu = {
      id: Date.now(),
      degree: '',
      field: '',
      school: '',
      location: '',
      graduationDate: '',
      gpa: '',
      achievements: ['']
    };
    const updated = [...education, newEdu];
    setEducation(updated);
    onChange(updated);
  };

  const removeEducation = (index) => {
    if (education?.length > 1) {
      const updated = education?.filter((_, i) => i !== index);
      setEducation(updated);
      onChange(updated);
    }
  };

  const achievementSuggestions = [
    "Graduated Magna Cum Laude with 3.8 GPA",
    "President of Computer Science Student Association",
    "Dean\'s List for 6 consecutive semesters",
    "Recipient of Academic Excellence Scholarship",
    "Led senior capstone project with 95% success rate"
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center">
            <Icon name="GraduationCap" size={20} className="text-secondary" />
          </div>
          <div>
            <h2 className="text-xl font-semibold text-foreground">Education</h2>
            <p className="text-sm text-text-secondary">Add your educational background</p>
          </div>
        </div>
        
        <button
          onClick={addEducation}
          className="flex items-center space-x-2 px-4 py-2 text-sm bg-secondary/10 text-secondary rounded-lg hover:bg-secondary/20 transition-colors"
        >
          <Icon name="Plus" size={16} />
          <span>Add Education</span>
        </button>
      </div>
      {education?.map((edu, eduIndex) => (
        <div key={edu?.id} className="bg-card border border-border rounded-lg p-6 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-medium text-foreground">Education #{eduIndex + 1}</h3>
            {education?.length > 1 && (
              <button
                onClick={() => removeEducation(eduIndex)}
                className="text-error hover:text-error/80 transition-colors"
              >
                <Icon name="Trash2" size={16} />
              </button>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Select
              label="Degree Type"
              placeholder="Select degree type"
              options={degreeOptions}
              value={edu?.degree}
              onChange={(value) => handleEducationChange(eduIndex, 'degree', value)}
              required
            />
            
            <Input
              label="Field of Study"
              type="text"
              placeholder="Computer Science"
              value={edu?.field}
              onChange={(e) => handleEducationChange(eduIndex, 'field', e?.target?.value)}
              required
            />
            
            <Input
              label="School/University"
              type="text"
              placeholder="Stanford University"
              value={edu?.school}
              onChange={(e) => handleEducationChange(eduIndex, 'school', e?.target?.value)}
              required
            />
            
            <Input
              label="Location"
              type="text"
              placeholder="Stanford, CA"
              value={edu?.location}
              onChange={(e) => handleEducationChange(eduIndex, 'location', e?.target?.value)}
            />
            
            <Input
              label="Graduation Date"
              type="date"
              value={edu?.graduationDate}
              onChange={(e) => handleEducationChange(eduIndex, 'graduationDate', e?.target?.value)}
            />
            
            <Input
              label="GPA (Optional)"
              type="text"
              placeholder="3.8/4.0"
              value={edu?.gpa}
              onChange={(e) => handleEducationChange(eduIndex, 'gpa', e?.target?.value)}
              description="Include only if 3.5 or higher"
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <label className="text-sm font-medium text-foreground">Academic Achievements</label>
              <button
                onClick={() => addAchievement(eduIndex)}
                className="flex items-center space-x-1 text-xs text-secondary hover:text-secondary/80 transition-colors"
              >
                <Icon name="Plus" size={14} />
                <span>Add Achievement</span>
              </button>
            </div>

            {edu?.achievements?.map((achievement, achIndex) => (
              <div key={achIndex} className="flex items-start space-x-2">
                <textarea
                  placeholder="Honors, awards, relevant coursework, or leadership roles..."
                  value={achievement}
                  onChange={(e) => handleAchievementChange(eduIndex, achIndex, e?.target?.value)}
                  rows={2}
                  className="flex-1 px-3 py-2 border border-border rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent resize-none text-sm"
                />
                {edu?.achievements?.length > 1 && (
                  <button
                    onClick={() => removeAchievement(eduIndex, achIndex)}
                    className="mt-2 text-error hover:text-error/80 transition-colors"
                  >
                    <Icon name="X" size={16} />
                  </button>
                )}
              </div>
            ))}

            <div className="bg-muted/50 rounded-lg p-3 space-y-2">
              <p className="text-xs font-medium text-foreground flex items-center">
                <Icon name="Award" size={14} className="mr-1 text-secondary" />
                Achievement Examples
              </p>
              {achievementSuggestions?.map((suggestion, index) => (
                <button
                  key={index}
                  onClick={() => handleAchievementChange(eduIndex, 0, suggestion)}
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
          <span>Continue to Skills</span>
          <Icon name="ArrowRight" size={16} />
        </button>
      </div>
    </div>
  );
};

export default EducationForm;