import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import { exportResumeWithNotification } from '../../../utils/pdfExport';

const ProgressSidebar = ({ currentStep, onStepClick, completedSteps }) => {
  const [isExporting, setIsExporting] = useState(false);
  const [exportMessage, setExportMessage] = useState('');

  const handlePDFExport = async () => {
    setIsExporting(true);
    setExportMessage('');
    
    await exportResumeWithNotification(
      'resume-template',
      'ResumeForge_Resume',
      (message) => {
        setExportMessage('✓ ' + message);
        setTimeout(() => setExportMessage(''), 3000);
      },
      (message) => {
        setExportMessage('✗ ' + message);
        setTimeout(() => setExportMessage(''), 5000);
      }
    );
    
    setIsExporting(false);
  };
  const steps = [
    {
      id: 1,
      name: 'Personal Info',
      icon: 'User',
      description: 'Basic contact details'
    },
    {
      id: 2,
      name: 'Experience',
      icon: 'Briefcase',
      description: 'Work history & achievements'
    },
    {
      id: 3,
      name: 'Education',
      icon: 'GraduationCap',
      description: 'Academic background'
    },
    {
      id: 4,
      name: 'Skills',
      icon: 'Zap',
      description: 'Technical & soft skills'
    },
    {
      id: 5,
      name: 'Preview',
      icon: 'Eye',
      description: 'Review & export'
    }
  ];

  const getStepStatus = (stepId) => {
    if (completedSteps?.includes(stepId)) return 'completed';
    if (stepId === currentStep) return 'current';
    return 'pending';
  };

  const getStepStyles = (status) => {
    switch (status) {
      case 'completed':
        return {
          container: 'bg-accent/10 border-accent/20 hover:bg-accent/20',
          icon: 'bg-accent text-white',
          text: 'text-accent',
          description: 'text-accent/70'
        };
      case 'current':
        return {
          container: 'bg-secondary/10 border-secondary/20 hover:bg-secondary/20',
          icon: 'bg-secondary text-white',
          text: 'text-secondary',
          description: 'text-secondary/70'
        };
      default:
        return {
          container: 'bg-muted/50 border-border hover:bg-muted',
          icon: 'bg-muted text-text-secondary',
          text: 'text-text-secondary',
          description: 'text-text-secondary/70'
        };
    }
  };

  return (
    <div className="w-80 bg-background border-r border-border h-full overflow-y-auto">
      <div className="p-6">
        <div className="flex items-center space-x-3 mb-8">
          <div className="w-10 h-10 gradient-career rounded-lg flex items-center justify-center">
            <Icon name="FileText" size={20} color="white" strokeWidth={2.5} />
          </div>
          <div>
            <h1 className="text-xl font-bold text-primary font-accent">Resume Builder</h1>
            <p className="text-sm text-text-secondary">Step-by-step creation</p>
          </div>
        </div>

        <div className="space-y-3">
          {steps?.map((step, index) => {
            const status = getStepStatus(step?.id);
            const styles = getStepStyles(status);
            const isClickable = step?.id <= currentStep || completedSteps?.includes(step?.id);

            return (
              <button
                key={step?.id}
                onClick={() => isClickable && onStepClick(step?.id)}
                disabled={!isClickable}
                className={`w-full text-left p-4 rounded-lg border transition-all duration-200 ${styles?.container} ${
                  isClickable ? 'cursor-pointer' : 'cursor-not-allowed opacity-50'
                }`}
              >
                <div className="flex items-start space-x-3">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${styles?.icon}`}>
                    {status === 'completed' ? (
                      <Icon name="Check" size={16} />
                    ) : (
                      <Icon name={step?.icon} size={16} />
                    )}
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <h3 className={`font-medium ${styles?.text}`}>{step?.name}</h3>
                      <span className="text-xs text-text-secondary">
                        {index + 1}/{steps?.length}
                      </span>
                    </div>
                    <p className={`text-sm mt-1 ${styles?.description}`}>
                      {step?.description}
                    </p>
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        <div className="mt-8 p-4 bg-muted/50 rounded-lg">
          <div className="flex items-center space-x-2 mb-3">
            <Icon name="Shield" size={16} className="text-secondary" />
            <span className="text-sm font-medium text-foreground">Auto-Save Enabled</span>
          </div>
          <p className="text-xs text-text-secondary">
            Your progress is automatically saved every 30 seconds. You can safely close and return anytime.
          </p>
        </div>

        <div className="mt-6 p-4 gradient-career rounded-lg text-white">
          <div className="flex items-center space-x-2 mb-2">
            <Icon name="Zap" size={16} color="white" />
            <span className="text-sm font-medium">ATS Optimization</span>
          </div>
          <p className="text-xs opacity-90 mb-3">
            Your resume is being optimized for Applicant Tracking Systems in real-time.
          </p>
          <div className="flex items-center justify-between">
            <span className="text-xs">Optimization Score</span>
            <span className="text-sm font-semibold">87%</span>
          </div>
          <div className="w-full bg-white/20 rounded-full h-2 mt-2">
            <div className="bg-white h-2 rounded-full" style={{ width: '87%' }}></div>
          </div>
        </div>

        <div className="mt-6 space-y-3">
          <button className="w-full flex items-center justify-center space-x-2 px-4 py-3 bg-secondary text-white rounded-lg hover:bg-secondary/90 transition-colors">
            <Icon name="Save" size={16} />
            <span>Save Draft</span>
          </button>
          
          <button 
            onClick={handlePDFExport}
            disabled={isExporting}
            className="w-full flex items-center justify-center space-x-2 px-4 py-3 border border-border text-foreground rounded-lg hover:bg-muted transition-colors disabled:opacity-50"
          >
            <Icon name={isExporting ? "Loader2" : "Download"} size={16} className={isExporting ? 'animate-spin' : ''} />
            <span>{isExporting ? 'Generating...' : 'Export PDF'}</span>
          </button>
          
          {/* Export Status Message */}
          {exportMessage && (
            <div className={`mt-2 p-2 text-xs rounded ${exportMessage.startsWith('✓') ? 'bg-accent/10 text-accent' : 'bg-error/10 text-error'}`}>
              {exportMessage}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProgressSidebar;