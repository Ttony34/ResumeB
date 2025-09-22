import React, { useState } from 'react';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';
import Icon from '../../../components/AppIcon';

const SkillsForm = ({ data, onChange, onNext, onPrev }) => {
  const [skillsData, setSkillsData] = useState(data || {
    technical: [],
    soft: [],
    languages: [],
    certifications: []
  });

  const [newSkill, setNewSkill] = useState({
    technical: '',
    soft: '',
    language: '',
    proficiency: '',
    certification: '',
    issuer: '',
    date: ''
  });

  const proficiencyOptions = [
    { value: 'beginner', label: 'Beginner' },
    { value: 'intermediate', label: 'Intermediate' },
    { value: 'advanced', label: 'Advanced' },
    { value: 'expert', label: 'Expert' },
    { value: 'native', label: 'Native' }
  ];

  const addSkill = (category, skillData) => {
    if (category === 'languages' && skillData?.language && skillData?.proficiency) {
      const updated = {
        ...skillsData,
        [category]: [...skillsData?.[category], { 
          language: skillData?.language, 
          proficiency: skillData?.proficiency,
          id: Date.now()
        }]
      };
      setSkillsData(updated);
      onChange(updated);
      setNewSkill(prev => ({ ...prev, language: '', proficiency: '' }));
    } else if (category === 'certifications' && skillData?.certification && skillData?.issuer) {
      const updated = {
        ...skillsData,
        [category]: [...skillsData?.[category], { 
          name: skillData?.certification,
          issuer: skillData?.issuer,
          date: skillData?.date,
          id: Date.now()
        }]
      };
      setSkillsData(updated);
      onChange(updated);
      setNewSkill(prev => ({ ...prev, certification: '', issuer: '', date: '' }));
    } else if ((category === 'technical' || category === 'soft') && skillData?.[category]) {
      const updated = {
        ...skillsData,
        [category]: [...skillsData?.[category], { 
          name: skillData?.[category],
          id: Date.now()
        }]
      };
      setSkillsData(updated);
      onChange(updated);
      setNewSkill(prev => ({ ...prev, [category]: '' }));
    }
  };

  const removeSkill = (category, index) => {
    const updated = {
      ...skillsData,
      [category]: skillsData?.[category]?.filter((_, i) => i !== index)
    };
    setSkillsData(updated);
    onChange(updated);
  };

  const technicalSkillSuggestions = [
    "JavaScript", "Python", "React", "Node.js", "SQL", "AWS", "Docker", "Git",
    "Java", "TypeScript", "MongoDB", "PostgreSQL", "Kubernetes", "Jenkins"
  ];

  const softSkillSuggestions = [
    "Leadership", "Communication", "Problem Solving", "Team Collaboration",
    "Project Management", "Critical Thinking", "Adaptability", "Time Management"
  ];

  const addSuggestedSkill = (category, skill) => {
    if (category === 'technical') {
      addSkill(category, { technical: skill });
    } else if (category === 'soft') {
      addSkill(category, { soft: skill });
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center">
          <Icon name="Zap" size={20} className="text-secondary" />
        </div>
        <div>
          <h2 className="text-xl font-semibold text-foreground">Skills & Certifications</h2>
          <p className="text-sm text-text-secondary">Showcase your expertise and qualifications</p>
        </div>
      </div>
      {/* Technical Skills */}
      <div className="bg-card border border-border rounded-lg p-6 space-y-4">
        <div className="flex items-center space-x-2">
          <Icon name="Code" size={18} className="text-secondary" />
          <h3 className="font-medium text-foreground">Technical Skills</h3>
        </div>

        <div className="flex items-center space-x-2">
          <Input
            placeholder="Add technical skill (e.g., JavaScript, Python)"
            value={newSkill?.technical}
            onChange={(e) => setNewSkill(prev => ({ ...prev, technical: e?.target?.value }))}
            onKeyPress={(e) => e?.key === 'Enter' && addSkill('technical', newSkill)}
            className="flex-1"
          />
          <button
            onClick={() => addSkill('technical', newSkill)}
            className="px-4 py-2 bg-secondary text-white rounded-lg hover:bg-secondary/90 transition-colors"
          >
            <Icon name="Plus" size={16} />
          </button>
        </div>

        <div className="flex flex-wrap gap-2">
          {skillsData?.technical?.map((skill, index) => (
            <div key={skill?.id} className="flex items-center space-x-2 bg-secondary/10 text-secondary px-3 py-1 rounded-full text-sm">
              <span>{skill?.name}</span>
              <button
                onClick={() => removeSkill('technical', index)}
                className="hover:text-error transition-colors"
              >
                <Icon name="X" size={14} />
              </button>
            </div>
          ))}
        </div>

        <div className="bg-muted/50 rounded-lg p-3">
          <p className="text-xs font-medium text-foreground mb-2">Popular Technical Skills:</p>
          <div className="flex flex-wrap gap-2">
            {technicalSkillSuggestions?.map((skill, index) => (
              <button
                key={index}
                onClick={() => addSuggestedSkill('technical', skill)}
                className="text-xs bg-background hover:bg-secondary/10 text-text-secondary hover:text-secondary px-2 py-1 rounded transition-colors"
              >
                {skill}
              </button>
            ))}
          </div>
        </div>
      </div>
      {/* Soft Skills */}
      <div className="bg-card border border-border rounded-lg p-6 space-y-4">
        <div className="flex items-center space-x-2">
          <Icon name="Users" size={18} className="text-secondary" />
          <h3 className="font-medium text-foreground">Soft Skills</h3>
        </div>

        <div className="flex items-center space-x-2">
          <Input
            placeholder="Add soft skill (e.g., Leadership, Communication)"
            value={newSkill?.soft}
            onChange={(e) => setNewSkill(prev => ({ ...prev, soft: e?.target?.value }))}
            onKeyPress={(e) => e?.key === 'Enter' && addSkill('soft', newSkill)}
            className="flex-1"
          />
          <button
            onClick={() => addSkill('soft', newSkill)}
            className="px-4 py-2 bg-secondary text-white rounded-lg hover:bg-secondary/90 transition-colors"
          >
            <Icon name="Plus" size={16} />
          </button>
        </div>

        <div className="flex flex-wrap gap-2">
          {skillsData?.soft?.map((skill, index) => (
            <div key={skill?.id} className="flex items-center space-x-2 bg-accent/10 text-accent px-3 py-1 rounded-full text-sm">
              <span>{skill?.name}</span>
              <button
                onClick={() => removeSkill('soft', index)}
                className="hover:text-error transition-colors"
              >
                <Icon name="X" size={14} />
              </button>
            </div>
          ))}
        </div>

        <div className="bg-muted/50 rounded-lg p-3">
          <p className="text-xs font-medium text-foreground mb-2">Popular Soft Skills:</p>
          <div className="flex flex-wrap gap-2">
            {softSkillSuggestions?.map((skill, index) => (
              <button
                key={index}
                onClick={() => addSuggestedSkill('soft', skill)}
                className="text-xs bg-background hover:bg-accent/10 text-text-secondary hover:text-accent px-2 py-1 rounded transition-colors"
              >
                {skill}
              </button>
            ))}
          </div>
        </div>
      </div>
      {/* Languages */}
      <div className="bg-card border border-border rounded-lg p-6 space-y-4">
        <div className="flex items-center space-x-2">
          <Icon name="Globe" size={18} className="text-secondary" />
          <h3 className="font-medium text-foreground">Languages</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
          <Input
            placeholder="Language (e.g., Spanish)"
            value={newSkill?.language}
            onChange={(e) => setNewSkill(prev => ({ ...prev, language: e?.target?.value }))}
            className="md:col-span-2"
          />
          <div className="flex items-center space-x-2">
            <Select
              placeholder="Proficiency"
              options={proficiencyOptions}
              value={newSkill?.proficiency}
              onChange={(value) => setNewSkill(prev => ({ ...prev, proficiency: value }))}
              className="flex-1"
            />
            <button
              onClick={() => addSkill('languages', newSkill)}
              className="px-4 py-2 bg-secondary text-white rounded-lg hover:bg-secondary/90 transition-colors"
            >
              <Icon name="Plus" size={16} />
            </button>
          </div>
        </div>

        <div className="space-y-2">
          {skillsData?.languages?.map((lang, index) => (
            <div key={lang?.id} className="flex items-center justify-between bg-muted/50 px-3 py-2 rounded-lg">
              <span className="text-sm text-foreground">{lang?.language}</span>
              <div className="flex items-center space-x-2">
                <span className="text-xs text-text-secondary capitalize">{lang?.proficiency}</span>
                <button
                  onClick={() => removeSkill('languages', index)}
                  className="text-error hover:text-error/80 transition-colors"
                >
                  <Icon name="X" size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Certifications */}
      <div className="bg-card border border-border rounded-lg p-6 space-y-4">
        <div className="flex items-center space-x-2">
          <Icon name="Award" size={18} className="text-secondary" />
          <h3 className="font-medium text-foreground">Certifications</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
          <Input
            placeholder="Certification name"
            value={newSkill?.certification}
            onChange={(e) => setNewSkill(prev => ({ ...prev, certification: e?.target?.value }))}
            className="md:col-span-2"
          />
          <Input
            placeholder="Issuing organization"
            value={newSkill?.issuer}
            onChange={(e) => setNewSkill(prev => ({ ...prev, issuer: e?.target?.value }))}
          />
          <div className="flex items-center space-x-2">
            <Input
              type="date"
              value={newSkill?.date}
              onChange={(e) => setNewSkill(prev => ({ ...prev, date: e?.target?.value }))}
              className="flex-1"
            />
            <button
              onClick={() => addSkill('certifications', newSkill)}
              className="px-4 py-2 bg-secondary text-white rounded-lg hover:bg-secondary/90 transition-colors"
            >
              <Icon name="Plus" size={16} />
            </button>
          </div>
        </div>

        <div className="space-y-2">
          {skillsData?.certifications?.map((cert, index) => (
            <div key={cert?.id} className="flex items-center justify-between bg-muted/50 px-3 py-2 rounded-lg">
              <div>
                <span className="text-sm font-medium text-foreground">{cert?.name}</span>
                <p className="text-xs text-text-secondary">{cert?.issuer} {cert?.date && `• ${new Date(cert.date)?.getFullYear()}`}</p>
              </div>
              <button
                onClick={() => removeSkill('certifications', index)}
                className="text-error hover:text-error/80 transition-colors"
              >
                <Icon name="X" size={14} />
              </button>
            </div>
          ))}
        </div>
      </div>
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
          <span>Preview & Export</span>
          <Icon name="ArrowRight" size={16} />
        </button>
      </div>
    </div>
  );
};

export default SkillsForm;
