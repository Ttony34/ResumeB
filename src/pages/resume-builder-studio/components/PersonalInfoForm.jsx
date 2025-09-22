import React, { useState } from 'react';
import Input from '../../../components/ui/Input';
import Icon from '../../../components/AppIcon';

const PersonalInfoForm = ({ data, onChange, onNext }) => {
  const [formData, setFormData] = useState({
    fullName: data?.fullName || '',
    email: data?.email || '',
    phone: data?.phone || '',
    location: data?.location || '',
    website: data?.website || '',
    linkedin: data?.linkedin || '',
    summary: data?.summary || ''
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    onChange({ ...formData, [field]: value });
    
    // Clear error when user starts typing
    if (errors?.[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData?.fullName?.trim()) {
      newErrors.fullName = 'Full name is required';
    }
    
    if (!formData?.email?.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/?.test(formData?.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData?.phone?.trim()) {
      newErrors.phone = 'Phone number is required';
    }
    
    if (!formData?.location?.trim()) {
      newErrors.location = 'Location is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors)?.length === 0;
  };

  const handleNext = () => {
    if (validateForm()) {
      onNext();
    }
  };

  const aiSuggestions = [
    "Results-driven professional with 5+ years of experience in digital marketing",
    "Innovative software engineer passionate about creating scalable solutions",
    "Strategic business analyst with expertise in data-driven decision making"
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center">
          <Icon name="User" size={20} className="text-secondary" />
        </div>
        <div>
          <h2 className="text-xl font-semibold text-foreground">Personal Information</h2>
          <p className="text-sm text-text-secondary">Let's start with your basic details</p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Input
          label="Full Name"
          type="text"
          placeholder="John Doe"
          value={formData?.fullName}
          onChange={(e) => handleInputChange('fullName', e?.target?.value)}
          error={errors?.fullName}
          required
        />
        
        <Input
          label="Email Address"
          type="email"
          placeholder="john.doe@email.com"
          value={formData?.email}
          onChange={(e) => handleInputChange('email', e?.target?.value)}
          error={errors?.email}
          required
        />
        
        <Input
          label="Phone Number"
          type="tel"
          placeholder="+1 (555) 123-4567"
          value={formData?.phone}
          onChange={(e) => handleInputChange('phone', e?.target?.value)}
          error={errors?.phone}
          required
        />
        
        <Input
          label="Location"
          type="text"
          placeholder="New York, NY"
          value={formData?.location}
          onChange={(e) => handleInputChange('location', e?.target?.value)}
          error={errors?.location}
          required
        />
        
        <Input
          label="Website"
          type="url"
          placeholder="https://johndoe.com"
          value={formData?.website}
          onChange={(e) => handleInputChange('website', e?.target?.value)}
        />
        
        <Input
          label="LinkedIn Profile"
          type="url"
          placeholder="https://linkedin.com/in/johndoe"
          value={formData?.linkedin}
          onChange={(e) => handleInputChange('linkedin', e?.target?.value)}
        />
      </div>
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <label className="text-sm font-medium text-foreground">Professional Summary</label>
          <button className="flex items-center space-x-1 text-xs text-secondary hover:text-secondary/80 transition-colors">
            <Icon name="Sparkles" size={14} />
            <span>AI Suggestions</span>
          </button>
        </div>
        
        <textarea
          placeholder="Write a compelling summary that highlights your key achievements and career goals..."
          value={formData?.summary}
          onChange={(e) => handleInputChange('summary', e?.target?.value)}
          rows={4}
          className="w-full px-3 py-2 border border-border rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent resize-none text-sm"
        />
        
        <div className="bg-muted/50 rounded-lg p-3 space-y-2">
          <p className="text-xs font-medium text-foreground flex items-center">
            <Icon name="Lightbulb" size={14} className="mr-1 text-secondary" />
            AI-Powered Suggestions
          </p>
          {aiSuggestions?.map((suggestion, index) => (
            <button
              key={index}
              onClick={() => handleInputChange('summary', suggestion)}
              className="block w-full text-left text-xs text-text-secondary hover:text-foreground hover:bg-background rounded p-2 transition-colors"
            >
              "{suggestion}"
            </button>
          ))}
        </div>
      </div>
      <div className="flex justify-end pt-4">
        <button
          onClick={handleNext}
          className="px-6 py-2 bg-secondary text-white rounded-lg hover:bg-secondary/90 transition-colors flex items-center space-x-2"
        >
          <span>Continue to Experience</span>
          <Icon name="ArrowRight" size={16} />
        </button>
      </div>
    </div>
  );
};

export default PersonalInfoForm;