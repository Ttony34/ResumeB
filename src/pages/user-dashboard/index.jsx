import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import ResumeCard from './components/ResumeCard';
import MilestoneTracker from './components/MilestoneTracker';
import TemplateFavorites from './components/TemplateFavorites';
import RecentActivity from './components/RecentActivity';
import QuickActions from './components/QuickActions';
import AccountSettings from './components/AccountSettings';

const UserDashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedResumes, setSelectedResumes] = useState([]);
  const [showBulkActions, setShowBulkActions] = useState(false);

  // Mock user data
  const user = {
    id: 1,
    name: "Sarah Johnson",
    email: "sarah.johnson@email.com",
    phone: "+1 (555) 123-4567",
    jobTitle: "Senior Marketing Manager",
    company: "TechCorp Inc.",
    isPremium: true,
    subscriptionRenewal: "2025-03-15",
    joinDate: "2024-01-15",
    preferences: {
      emailNotifications: true,
      marketingEmails: false,
      resumeAnalytics: true,
      publicProfile: false
    }
  };

  // Mock resumes data
  const resumes = [
    {
      id: 1,
      name: "Marketing Manager Resume",
      template: "Executive Pro",
      status: "active",
      isPremium: true,
      thumbnail: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&h=500&fit=crop",
      downloads: 12,
      views: 45,
      lastModified: "2025-01-15T10:30:00Z",
      createdAt: "2025-01-10T14:20:00Z"
    },
    {
      id: 2,
      name: "Creative Portfolio Resume",
      template: "Creative Bold",
      status: "draft",
      isPremium: false,
      thumbnail: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=500&fit=crop",
      downloads: 3,
      views: 18,
      lastModified: "2025-01-12T16:45:00Z",
      createdAt: "2025-01-08T09:15:00Z"
    },
    {
      id: 3,
      name: "Technical Lead Resume",
      template: "Modern Clean",
      status: "active",
      isPremium: true,
      thumbnail: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop",
      downloads: 8,
      views: 32,
      lastModified: "2025-01-14T11:20:00Z",
      createdAt: "2025-01-05T13:30:00Z"
    }
  ];

  // Mock milestones data
  const milestones = {
    applications: 24,
    interviews: 8,
    offers: 3,
    responses: 67
  };

  // Mock favorite templates
  const favoriteTemplates = [
    {
      id: 1,
      name: "Executive Elite",
      category: "Executive",
      isPremium: true,
      thumbnail: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=300&h=400&fit=crop"
    },
    {
      id: 2,
      name: "Creative Spark",
      category: "Creative",
      isPremium: false,
      thumbnail: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=300&h=400&fit=crop"
    },
    {
      id: 3,
      name: "Tech Professional",
      category: "Technical",
      isPremium: true,
      thumbnail: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop"
    }
  ];

  // Mock recent activities
  const recentActivities = [
    {
      id: 1,
      type: "downloaded",
      action: "Downloaded resume",
      resumeName: "Marketing Manager Resume",
      format: "PDF",
      timestamp: "2025-01-18T14:30:00Z"
    },
    {
      id: 2,
      type: "edited",
      action: "Updated resume",
      resumeName: "Technical Lead Resume",
      timestamp: "2025-01-18T11:15:00Z"
    },
    {
      id: 3,
      type: "shared",
      action: "Shared resume with recruiter",
      resumeName: "Marketing Manager Resume",
      timestamp: "2025-01-17T16:45:00Z"
    },
    {
      id: 4,
      type: "created",
      action: "Created new resume",
      resumeName: "Creative Portfolio Resume",
      timestamp: "2025-01-16T09:20:00Z"
    }
  ];

  const tabs = [
    { id: 'overview', label: 'Overview', icon: 'LayoutDashboard' },
    { id: 'resumes', label: 'My Resumes', icon: 'FileText' },
    { id: 'templates', label: 'Favorites', icon: 'Heart' },
    { id: 'activity', label: 'Activity', icon: 'Activity' },
    { id: 'settings', label: 'Settings', icon: 'Settings' }
  ];

  // Handle resume actions
  const handleEditResume = (resumeId) => {
    navigate(`/resume-builder-studio?resume=${resumeId}`);
  };

  const handleDownloadResume = (resumeId) => {
    console.log('Downloading resume:', resumeId);
    // Add download logic here
  };

  const handleDuplicateResume = (resumeId) => {
    console.log('Duplicating resume:', resumeId);
    // Add duplicate logic here
  };

  const handleShareResume = (resumeId) => {
    console.log('Sharing resume:', resumeId);
    // Add share logic here
  };

  const handleDeleteResume = (resumeId) => {
    console.log('Deleting resume:', resumeId);
    // Add delete logic here
  };

  const handleUseTemplate = (templateId) => {
    navigate(`/resume-builder-studio?template=${templateId}`);
  };

  const handleRemoveFavorite = (templateId) => {
    console.log('Removing favorite:', templateId);
    // Add remove favorite logic here
  };

  const handleCreateResume = () => {
    navigate('/resume-builder-studio');
  };

  const handleBrowseTemplates = () => {
    navigate('/template-gallery');
  };

  const handleUpgradePremium = () => {
    navigate('/pricing-premium');
  };

  const handleUpdateProfile = (profileData) => {
    console.log('Updating profile:', profileData);
    // Add profile update logic here
  };

  const handleUpdatePreferences = (preferences) => {
    console.log('Updating preferences:', preferences);
    // Add preferences update logic here
  };

  const handleSelectResume = (resumeId) => {
    setSelectedResumes(prev => {
      const newSelection = prev?.includes(resumeId)
        ? prev?.filter(id => id !== resumeId)
        : [...prev, resumeId];
      setShowBulkActions(newSelection?.length > 0);
      return newSelection;
    });
  };

  const handleBulkAction = (action) => {
    console.log(`Bulk ${action} for resumes:`, selectedResumes);
    setSelectedResumes([]);
    setShowBulkActions(false);
  };

  useEffect(() => {
    document.title = 'Dashboard - ResumeForge';
  }, []);

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="space-y-8">
            {/* Welcome Section */}
            <div className="bg-gradient-career text-white rounded-lg p-8">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-3xl font-bold mb-2">Welcome back, {user?.name}!</h1>
                  <p className="text-white/80 mb-4">
                    You have {resumes?.length} resumes and {favoriteTemplates?.length} favorite templates
                  </p>
                  <div className="flex items-center space-x-4 text-sm">
                    <div className="flex items-center space-x-1">
                      <Icon name="Calendar" size={16} />
                      <span>Member since {new Date(user.joinDate)?.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</span>
                    </div>
                    {user?.isPremium && (
                      <div className="flex items-center space-x-1">
                        <Icon name="Crown" size={16} />
                        <span>Premium Member</span>
                      </div>
                    )}
                  </div>
                </div>
                <div className="hidden md:block">
                  <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center">
                    <Icon name="User" size={48} className="text-white/80" />
                  </div>
                </div>
              </div>
            </div>
            <QuickActions
              onCreateResume={handleCreateResume}
              onBrowseTemplates={handleBrowseTemplates}
              onUpgradePremium={handleUpgradePremium}
              isPremium={user?.isPremium}
            />
            <MilestoneTracker milestones={milestones} />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <TemplateFavorites
                favorites={favoriteTemplates}
                onUseTemplate={handleUseTemplate}
                onRemoveFavorite={handleRemoveFavorite}
              />
              <RecentActivity activities={recentActivities} />
            </div>
          </div>
        );

      case 'resumes':
        return (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold text-foreground">My Resumes</h2>
                <p className="text-muted-foreground">Manage and organize your resume collection</p>
              </div>
              <div className="flex items-center space-x-3">
                {showBulkActions && (
                  <div className="flex items-center space-x-2 bg-muted px-4 py-2 rounded-lg">
                    <span className="text-sm text-muted-foreground">
                      {selectedResumes?.length} selected
                    </span>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleBulkAction('download')}
                      iconName="Download"
                      iconSize={14}
                    >
                      Download
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleBulkAction('delete')}
                      iconName="Trash2"
                      iconSize={14}
                    >
                      Delete
                    </Button>
                  </div>
                )}
                <Button
                  variant="default"
                  onClick={handleCreateResume}
                  iconName="Plus"
                  iconSize={16}
                >
                  New Resume
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {resumes?.map((resume) => (
                <div key={resume?.id} className="relative">
                  <div className="absolute top-3 left-3 z-10">
                    <input
                      type="checkbox"
                      checked={selectedResumes?.includes(resume?.id)}
                      onChange={() => handleSelectResume(resume?.id)}
                      className="w-4 h-4 text-secondary bg-white border-border rounded focus:ring-secondary"
                    />
                  </div>
                  <ResumeCard
                    resume={resume}
                    onEdit={handleEditResume}
                    onDownload={handleDownloadResume}
                    onDuplicate={handleDuplicateResume}
                    onShare={handleShareResume}
                    onDelete={handleDeleteResume}
                  />
                </div>
              ))}
            </div>
          </div>
        );

      case 'templates':
        return (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold text-foreground">Favorite Templates</h2>
                <p className="text-muted-foreground">Your bookmarked template collection</p>
              </div>
              <Button
                variant="default"
                onClick={handleBrowseTemplates}
                iconName="Layout"
                iconSize={16}
              >
                Browse Templates
              </Button>
            </div>

            <TemplateFavorites
              favorites={favoriteTemplates}
              onUseTemplate={handleUseTemplate}
              onRemoveFavorite={handleRemoveFavorite}
            />
          </div>
        );

      case 'activity':
        return (
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-foreground">Activity History</h2>
              <p className="text-muted-foreground">Track all your resume-related actions</p>
            </div>

            <RecentActivity activities={recentActivities} />
          </div>
        );

      case 'settings':
        return (
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-foreground">Account Settings</h2>
              <p className="text-muted-foreground">Manage your profile and preferences</p>
            </div>

            <AccountSettings
              user={user}
              onUpdateProfile={handleUpdateProfile}
              onUpdatePreferences={handleUpdatePreferences}
            />
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="pt-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
          {/* Tab Navigation */}
          <div className="mb-8">
            <div className="border-b border-border">
              <nav className="-mb-px flex space-x-8 overflow-x-auto">
                {tabs?.map((tab) => (
                  <button
                    key={tab?.id}
                    onClick={() => setActiveTab(tab?.id)}
                    className={`flex items-center space-x-2 py-4 px-1 border-b-2 font-medium text-sm whitespace-nowrap transition-colors duration-200 ${
                      activeTab === tab?.id
                        ? 'border-secondary text-secondary' :'border-transparent text-muted-foreground hover:text-foreground hover:border-border'
                    }`}
                  >
                    <Icon name={tab?.icon} size={16} />
                    <span>{tab?.label}</span>
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Tab Content */}
          {renderTabContent()}
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;