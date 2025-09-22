import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import { Checkbox } from '../../../components/ui/Checkbox';

const AccountSettings = ({ user, onUpdateProfile, onUpdatePreferences }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: user?.name,
    email: user?.email,
    phone: user?.phone || '',
    jobTitle: user?.jobTitle || '',
    company: user?.company || ''
  });

  const [preferences, setPreferences] = useState({
    emailNotifications: user?.preferences?.emailNotifications ?? true,
    marketingEmails: user?.preferences?.marketingEmails ?? false,
    resumeAnalytics: user?.preferences?.resumeAnalytics ?? true,
    publicProfile: user?.preferences?.publicProfile ?? false
  });

  const handleSaveProfile = () => {
    onUpdateProfile(profile);
    setIsEditing(false);
  };

  const handlePreferenceChange = (key, value) => {
    const newPreferences = { ...preferences, [key]: value };
    setPreferences(newPreferences);
    onUpdatePreferences(newPreferences);
  };

  return (
    <div className="bg-card border border-border rounded-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-semibold text-foreground mb-1">Account Settings</h2>
          <p className="text-sm text-muted-foreground">Manage your profile and preferences</p>
        </div>
        {!isEditing && (
          <Button
            variant="outline"
            size="sm"
            onClick={() => setIsEditing(true)}
            iconName="Edit3"
            iconSize={16}
          >
            Edit Profile
          </Button>
        )}
      </div>
      <div className="space-y-6">
        {/* Profile Information */}
        <div>
          <h3 className="font-medium text-foreground mb-4">Profile Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              label="Full Name"
              value={profile?.name}
              onChange={(e) => setProfile({ ...profile, name: e?.target?.value })}
              disabled={!isEditing}
            />
            <Input
              label="Email Address"
              type="email"
              value={profile?.email}
              onChange={(e) => setProfile({ ...profile, email: e?.target?.value })}
              disabled={!isEditing}
            />
            <Input
              label="Phone Number"
              type="tel"
              value={profile?.phone}
              onChange={(e) => setProfile({ ...profile, phone: e?.target?.value })}
              disabled={!isEditing}
              placeholder="Optional"
            />
            <Input
              label="Job Title"
              value={profile?.jobTitle}
              onChange={(e) => setProfile({ ...profile, jobTitle: e?.target?.value })}
              disabled={!isEditing}
              placeholder="Optional"
            />
          </div>
          
          {isEditing && (
            <div className="flex space-x-3 mt-4">
              <Button
                variant="default"
                size="sm"
                onClick={handleSaveProfile}
                iconName="Check"
                iconSize={16}
              >
                Save Changes
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  setIsEditing(false);
                  setProfile({
                    name: user?.name,
                    email: user?.email,
                    phone: user?.phone || '',
                    jobTitle: user?.jobTitle || '',
                    company: user?.company || ''
                  });
                }}
                iconName="X"
                iconSize={16}
              >
                Cancel
              </Button>
            </div>
          )}
        </div>

        {/* Subscription Info */}
        <div className="pt-6 border-t border-border">
          <h3 className="font-medium text-foreground mb-4">Subscription</h3>
          <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
            <div className="flex items-center space-x-3">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                user?.isPremium ? 'bg-conversion-accent text-white' : 'bg-muted text-muted-foreground'
              }`}>
                <Icon name={user?.isPremium ? 'Crown' : 'User'} size={20} />
              </div>
              <div>
                <p className="font-medium text-foreground">
                  {user?.isPremium ? 'Premium Plan' : 'Free Plan'}
                </p>
                <p className="text-sm text-muted-foreground">
                  {user?.isPremium 
                    ? `Renews on ${new Date(user.subscriptionRenewal)?.toLocaleDateString()}`
                    : 'Upgrade to unlock premium features'
                  }
                </p>
              </div>
            </div>
            {!user?.isPremium && (
              <Button variant="default" size="sm" iconName="Crown" iconSize={16}>
                Upgrade Now
              </Button>
            )}
          </div>
        </div>

        {/* Notification Preferences */}
        <div className="pt-6 border-t border-border">
          <h3 className="font-medium text-foreground mb-4">Preferences</h3>
          <div className="space-y-4">
            <Checkbox
              label="Email Notifications"
              description="Receive updates about your resumes and account"
              checked={preferences?.emailNotifications}
              onChange={(e) => handlePreferenceChange('emailNotifications', e?.target?.checked)}
            />
            <Checkbox
              label="Marketing Emails"
              description="Get tips, templates, and career advice via email"
              checked={preferences?.marketingEmails}
              onChange={(e) => handlePreferenceChange('marketingEmails', e?.target?.checked)}
            />
            <Checkbox
              label="Resume Analytics"
              description="Track views and engagement on shared resumes"
              checked={preferences?.resumeAnalytics}
              onChange={(e) => handlePreferenceChange('resumeAnalytics', e?.target?.checked)}
            />
            <Checkbox
              label="Public Profile"
              description="Allow your profile to be discoverable by recruiters"
              checked={preferences?.publicProfile}
              onChange={(e) => handlePreferenceChange('publicProfile', e?.target?.checked)}
            />
          </div>
        </div>

        {/* Danger Zone */}
        <div className="pt-6 border-t border-border">
          <h3 className="font-medium text-destructive mb-4">Danger Zone</h3>
          <div className="space-y-3">
            <Button
              variant="outline"
              size="sm"
              iconName="Download"
              iconSize={16}
              className="text-muted-foreground"
            >
              Export My Data
            </Button>
            <Button
              variant="destructive"
              size="sm"
              iconName="Trash2"
              iconSize={16}
            >
              Delete Account
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountSettings;
