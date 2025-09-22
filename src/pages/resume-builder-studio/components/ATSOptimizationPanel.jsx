import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const ATSOptimizationPanel = ({ resumeData, onOptimizationUpdate }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  // Mock ATS analysis data
  const atsAnalysis = {
    overallScore: 87,
    categories: [
      {
        name: 'Keyword Optimization',
        score: 92,
        status: 'excellent',
        suggestions: [
          'Great use of industry-specific keywords',
          'Consider adding "project management" for better matching'
        ]
      },
      {
        name: 'Format Compatibility',
        score: 95,
        status: 'excellent',
        suggestions: [
          'Clean, ATS-friendly formatting detected',
          'Proper heading structure maintained'
        ]
      },
      {
        name: 'Content Structure',
        score: 78,
        status: 'good',
        suggestions: [
          'Add more quantifiable achievements',
          'Include specific metrics and numbers',
          'Consider adding a skills section'
        ]
      },
      {
        name: 'Contact Information',
        score: 85,
        status: 'good',
        suggestions: [
          'All essential contact details present',
          'Consider adding LinkedIn profile URL'
        ]
      }
    ],
    keywordMatches: [
      { keyword: 'JavaScript', frequency: 3, recommended: 4 },
      { keyword: 'React', frequency: 2, recommended: 3 },
      { keyword: 'Project Management', frequency: 1, recommended: 2 },
      { keyword: 'Team Leadership', frequency: 0, recommended: 2 }
    ]
  };

  const getScoreColor = (score) => {
    if (score >= 90) return 'text-accent';
    if (score >= 70) return 'text-warning';
    return 'text-error';
  };

  const getScoreBg = (score) => {
    if (score >= 90) return 'bg-accent';
    if (score >= 70) return 'bg-warning';
    return 'bg-error';
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'excellent':
        return <Icon name="CheckCircle" size={16} className="text-accent" />;
      case 'good':
        return <Icon name="AlertCircle" size={16} className="text-warning" />;
      default:
        return <Icon name="XCircle" size={16} className="text-error" />;
    }
  };

  return (
    <div className="bg-card border border-border rounded-lg overflow-hidden">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full p-4 flex items-center justify-between hover:bg-muted/50 transition-colors"
      >
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center">
            <Icon name="Target" size={20} className="text-secondary" />
          </div>
          <div className="text-left">
            <h3 className="font-semibold text-foreground">ATS Optimization</h3>
            <p className="text-sm text-text-secondary">Real-time analysis & suggestions</p>
          </div>
        </div>
        
        <div className="flex items-center space-x-3">
          <div className="text-right">
            <div className={`text-2xl font-bold ${getScoreColor(atsAnalysis?.overallScore)}`}>
              {atsAnalysis?.overallScore}%
            </div>
            <div className="text-xs text-text-secondary">Overall Score</div>
          </div>
          <Icon 
            name={isExpanded ? "ChevronUp" : "ChevronDown"} 
            size={20} 
            className="text-text-secondary" 
          />
        </div>
      </button>
      {isExpanded && (
        <div className="border-t border-border p-4 space-y-6">
          {/* Score Breakdown */}
          <div className="space-y-4">
            <h4 className="font-medium text-foreground flex items-center">
              <Icon name="BarChart3" size={16} className="mr-2 text-secondary" />
              Score Breakdown
            </h4>
            
            {atsAnalysis?.categories?.map((category, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    {getStatusIcon(category?.status)}
                    <span className="text-sm font-medium text-foreground">{category?.name}</span>
                  </div>
                  <span className={`text-sm font-semibold ${getScoreColor(category?.score)}`}>
                    {category?.score}%
                  </span>
                </div>
                
                <div className="w-full bg-muted rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full ${getScoreBg(category?.score)}`}
                    style={{ width: `${category?.score}%` }}
                  ></div>
                </div>
                
                <div className="space-y-1">
                  {category?.suggestions?.map((suggestion, suggestionIndex) => (
                    <p key={suggestionIndex} className="text-xs text-text-secondary pl-6">
                      • {suggestion}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Keyword Analysis */}
          <div className="space-y-4">
            <h4 className="font-medium text-foreground flex items-center">
              <Icon name="Hash" size={16} className="mr-2 text-secondary" />
              Keyword Analysis
            </h4>
            
            <div className="space-y-3">
              {atsAnalysis?.keywordMatches?.map((keyword, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                  <div>
                    <span className="text-sm font-medium text-foreground">{keyword?.keyword}</span>
                    <p className="text-xs text-text-secondary">
                      Used {keyword?.frequency} times • Recommended {keyword?.recommended} times
                    </p>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    {keyword?.frequency >= keyword?.recommended ? (
                      <Icon name="CheckCircle" size={16} className="text-accent" />
                    ) : (
                      <button className="text-xs bg-secondary text-white px-2 py-1 rounded hover:bg-secondary/90 transition-colors">
                        Add More
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="space-y-3">
            <h4 className="font-medium text-foreground flex items-center">
              <Icon name="Zap" size={16} className="mr-2 text-secondary" />
              Quick Improvements
            </h4>
            
            <div className="grid grid-cols-1 gap-2">
              <button className="flex items-center justify-between p-3 bg-secondary/5 border border-secondary/20 rounded-lg hover:bg-secondary/10 transition-colors">
                <div className="flex items-center space-x-2">
                  <Icon name="Plus" size={14} className="text-secondary" />
                  <span className="text-sm text-foreground">Add missing keywords</span>
                </div>
                <Icon name="ArrowRight" size={14} className="text-secondary" />
              </button>
              
              <button className="flex items-center justify-between p-3 bg-warning/5 border border-warning/20 rounded-lg hover:bg-warning/10 transition-colors">
                <div className="flex items-center space-x-2">
                  <Icon name="TrendingUp" size={14} className="text-warning" />
                  <span className="text-sm text-foreground">Enhance achievements</span>
                </div>
                <Icon name="ArrowRight" size={14} className="text-warning" />
              </button>
              
              <button className="flex items-center justify-between p-3 bg-accent/5 border border-accent/20 rounded-lg hover:bg-accent/10 transition-colors">
                <div className="flex items-center space-x-2">
                  <Icon name="FileCheck" size={14} className="text-accent" />
                  <span className="text-sm text-foreground">Format optimization</span>
                </div>
                <Icon name="ArrowRight" size={14} className="text-accent" />
              </button>
            </div>
          </div>

          {/* ATS Tips */}
          <div className="bg-gradient-career rounded-lg p-4 text-white">
            <div className="flex items-center space-x-2 mb-2">
              <Icon name="Lightbulb" size={16} color="white" />
              <span className="text-sm font-medium">Pro Tip</span>
            </div>
            <p className="text-xs opacity-90">
              ATS systems scan for exact keyword matches. Use the same terminology found in job descriptions to increase your resume's visibility.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ATSOptimizationPanel;