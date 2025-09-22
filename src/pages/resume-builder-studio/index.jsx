import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/ui/Header';
import PersonalInfoForm from './components/PersonalInfoForm';
import ExperienceForm from './components/ExperienceForm';
import EducationForm from './components/EducationForm';
import SkillsForm from './components/SkillsForm';
import ResumePreview from './components/ResumePreview';
import ProgressSidebar from './components/ProgressSidebar';
import ATSOptimizationPanel from './components/ATSOptimizationPanel';
import Icon from '../../components/AppIcon';

const ResumeBuilderStudio = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [completedSteps, setCompletedSteps] = useState([]);
  const [resumeData, setResumeData] = useState({
    personalInfo: {},
    experience: [],
    education: [],
    skills: {}
  });
  const [showPreview, setShowPreview] = useState(false);
  const [lastSaved, setLastSaved] = useState(null);

  // Auto-save functionality
  useEffect(() => {
    const autoSave = setInterval(() => {
      // Simulate auto-save
      setLastSaved(new Date());
    }, 30000); // Every 30 seconds

    return () => clearInterval(autoSave);
  }, [resumeData]);

  const handleStepChange = (step) => {
    setCurrentStep(step);
  };

  const handleNext = () => {
    if (!completedSteps?.includes(currentStep)) {
      setCompletedSteps([...completedSteps, currentStep]);
    }
    if (currentStep < 5) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const updateResumeData = (section, data) => {
    setResumeData(prev => ({
      ...prev,
      [section]: data
    }));
  };

  const renderCurrentForm = () => {
    switch (currentStep) {
      case 1:
        return (
          <PersonalInfoForm
            data={resumeData?.personalInfo}
            onChange={(data) => updateResumeData('personalInfo', data)}
            onNext={handleNext}
          />
        );
      case 2:
        return (
          <ExperienceForm
            data={resumeData?.experience}
            onChange={(data) => updateResumeData('experience', data)}
            onNext={handleNext}
            onPrev={handlePrev}
          />
        );
      case 3:
        return (
          <EducationForm
            data={resumeData?.education}
            onChange={(data) => updateResumeData('education', data)}
            onNext={handleNext}
            onPrev={handlePrev}
          />
        );
      case 4:
        return (
          <SkillsForm
            data={resumeData?.skills}
            onChange={(data) => updateResumeData('skills', data)}
            onNext={handleNext}
            onPrev={handlePrev}
          />
        );
      case 5:
        return (
          <div className="space-y-6">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center">
                <Icon name="Eye" size={20} className="text-secondary" />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-foreground">Preview & Export</h2>
                <p className="text-sm text-text-secondary">Review your resume and export when ready</p>
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-card border border-border rounded-lg p-6">
                  <h3 className="font-semibold text-foreground mb-4 flex items-center">
                    <Icon name="Download" size={18} className="mr-2 text-secondary" />
                    Export Options
                  </h3>
                  
                  <div className="space-y-3">
                    <button className="w-full flex items-center justify-between p-4 border border-border rounded-lg hover:bg-muted transition-colors">
                      <div className="flex items-center space-x-3">
                        <Icon name="FileText" size={20} className="text-error" />
                        <div className="text-left">
                          <p className="font-medium text-foreground">PDF Format</p>
                          <p className="text-sm text-text-secondary">Best for applications</p>
                        </div>
                      </div>
                      <Icon name="Download" size={16} className="text-text-secondary" />
                    </button>
                    
                    <button className="w-full flex items-center justify-between p-4 border border-border rounded-lg hover:bg-muted transition-colors">
                      <div className="flex items-center space-x-3">
                        <Icon name="FileType" size={20} className="text-blue-600" />
                        <div className="text-left">
                          <p className="font-medium text-foreground">Word Document</p>
                          <p className="text-sm text-text-secondary">Editable format</p>
                        </div>
                      </div>
                      <Icon name="Download" size={16} className="text-text-secondary" />
                    </button>
                    
                    <button className="w-full flex items-center justify-between p-4 border border-border rounded-lg hover:bg-muted transition-colors">
                      <div className="flex items-center space-x-3">
                        <Icon name="Type" size={20} className="text-gray-600" />
                        <div className="text-left">
                          <p className="font-medium text-foreground">Plain Text</p>
                          <p className="text-sm text-text-secondary">ATS-friendly</p>
                        </div>
                      </div>
                      <Icon name="Download" size={16} className="text-text-secondary" />
                    </button>
                  </div>
                </div>

                <div className="bg-card border border-border rounded-lg p-6">
                  <h3 className="font-semibold text-foreground mb-4 flex items-center">
                    <Icon name="Share2" size={18} className="mr-2 text-secondary" />
                    Share & Collaborate
                  </h3>
                  
                  <div className="space-y-3">
                    <button className="w-full flex items-center space-x-3 p-3 border border-border rounded-lg hover:bg-muted transition-colors">
                      <Icon name="Link" size={16} className="text-secondary" />
                      <span className="text-sm text-foreground">Generate shareable link</span>
                    </button>
                    
                    <button className="w-full flex items-center space-x-3 p-3 border border-border rounded-lg hover:bg-muted transition-colors">
                      <Icon name="Mail" size={16} className="text-secondary" />
                      <span className="text-sm text-foreground">Email for feedback</span>
                    </button>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <ATSOptimizationPanel 
                  resumeData={resumeData}
                  onOptimizationUpdate={(data) => console.log('Optimization update:', data)}
                />
                
                <div className="bg-card border border-border rounded-lg p-6">
                  <h3 className="font-semibold text-foreground mb-4 flex items-center">
                    <Icon name="Clock" size={18} className="mr-2 text-secondary" />
                    Version History
                  </h3>
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                      <div>
                        <p className="text-sm font-medium text-foreground">Current Version</p>
                        <p className="text-xs text-text-secondary">Last saved: {lastSaved ? lastSaved?.toLocaleTimeString() : 'Never'}</p>
                      </div>
                      <span className="text-xs bg-secondary text-white px-2 py-1 rounded">Latest</span>
                    </div>
                    
                    <div className="flex items-center justify-between p-3 hover:bg-muted/50 rounded-lg transition-colors">
                      <div>
                        <p className="text-sm text-foreground">Version 1.2</p>
                        <p className="text-xs text-text-secondary">2 hours ago</p>
                      </div>
                      <button className="text-xs text-secondary hover:text-secondary/80">Restore</button>
                    </div>
                    
                    <div className="flex items-center justify-between p-3 hover:bg-muted/50 rounded-lg transition-colors">
                      <div>
                        <p className="text-sm text-foreground">Version 1.1</p>
                        <p className="text-xs text-text-secondary">Yesterday</p>
                      </div>
                      <button className="text-xs text-secondary hover:text-secondary/80">Restore</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-between pt-4">
              <button
                onClick={handlePrev}
                className="px-6 py-2 border border-border text-foreground rounded-lg hover:bg-muted transition-colors flex items-center space-x-2"
              >
                <Icon name="ArrowLeft" size={16} />
                <span>Back</span>
              </button>
              
              <div className="flex items-center space-x-3">
                <Link
                  to="/template-gallery"
                  className="px-6 py-2 border border-border text-foreground rounded-lg hover:bg-muted transition-colors flex items-center space-x-2"
                >
                  <Icon name="Layout" size={16} />
                  <span>Try Different Template</span>
                </Link>
                
                <button className="px-6 py-2 bg-secondary text-white rounded-lg hover:bg-secondary/90 transition-colors flex items-center space-x-2">
                  <Icon name="Download" size={16} />
                  <span>Download Resume</span>
                </button>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="pt-16 flex h-screen">
        {/* Progress Sidebar */}
        <ProgressSidebar
          currentStep={currentStep}
          onStepClick={handleStepChange}
          completedSteps={completedSteps}
        />

        {/* Main Content Area */}
        <div className="flex-1 flex">
          {/* Form Section */}
          <div className="flex-1 overflow-y-auto">
            <div className="p-8 max-w-4xl mx-auto">
              {/* Header Actions */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center space-x-4">
                  <Link
                    to="/template-gallery"
                    className="flex items-center space-x-2 text-text-secondary hover:text-foreground transition-colors"
                  >
                    <Icon name="ArrowLeft" size={16} />
                    <span className="text-sm">Back to Templates</span>
                  </Link>
                </div>
                
                <div className="flex items-center space-x-3">
                  <button
                    onClick={() => setShowPreview(!showPreview)}
                    className="lg:hidden flex items-center space-x-2 px-4 py-2 border border-border rounded-lg hover:bg-muted transition-colors"
                  >
                    <Icon name="Eye" size={16} />
                    <span className="text-sm">Preview</span>
                  </button>
                  
                  <div className="flex items-center space-x-2 text-sm text-text-secondary">
                    <Icon name="Save" size={14} className="text-accent" />
                    <span>Auto-saved {lastSaved ? 'just now' : 'never'}</span>
                  </div>
                </div>
              </div>

              {/* Form Content */}
              {renderCurrentForm()}
            </div>
          </div>

          {/* Preview Section - Desktop */}
          <div className={`hidden lg:block w-1/2 border-l border-border ${showPreview ? 'block' : 'hidden'}`}>
            <ResumePreview data={resumeData} selectedTemplate="modern" />
          </div>
        </div>
      </div>

      {/* Mobile Preview Modal */}
      {showPreview && (
        <div className="lg:hidden fixed inset-0 z-50 bg-background">
          <div className="flex items-center justify-between p-4 border-b border-border">
            <h3 className="font-semibold text-foreground">Resume Preview</h3>
            <button
              onClick={() => setShowPreview(false)}
              className="p-2 hover:bg-muted rounded-lg transition-colors"
            >
              <Icon name="X" size={20} />
            </button>
          </div>
          <div className="h-full overflow-y-auto">
            <ResumePreview data={resumeData} selectedTemplate="modern" />
          </div>
        </div>
      )}
    </div>
  );
};

export default ResumeBuilderStudio;