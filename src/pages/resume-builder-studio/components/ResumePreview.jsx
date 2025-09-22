import React from 'react';
import Icon from '../../../components/AppIcon';

const ResumePreview = ({ data, selectedTemplate }) => {
  const { personalInfo, experience, education, skills } = data;

  const formatDate = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date?.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
  };

  const ModernTemplate = () => (
    <div className="bg-white text-gray-900 p-8 shadow-lg rounded-lg max-w-2xl mx-auto">
      {/* Header */}
      <div className="border-b-2 border-blue-600 pb-6 mb-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">{personalInfo?.fullName || 'Your Name'}</h1>
        <div className="flex flex-wrap gap-4 text-sm text-gray-600">
          {personalInfo?.email && (
            <div className="flex items-center">
              <Icon name="Mail" size={14} className="mr-1" />
              {personalInfo?.email}
            </div>
          )}
          {personalInfo?.phone && (
            <div className="flex items-center">
              <Icon name="Phone" size={14} className="mr-1" />
              {personalInfo?.phone}
            </div>
          )}
          {personalInfo?.location && (
            <div className="flex items-center">
              <Icon name="MapPin" size={14} className="mr-1" />
              {personalInfo?.location}
            </div>
          )}
          {personalInfo?.linkedin && (
            <div className="flex items-center">
              <Icon name="Linkedin" size={14} className="mr-1" />
              LinkedIn
            </div>
          )}
        </div>
      </div>

      {/* Summary */}
      {personalInfo?.summary && (
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-blue-600 mb-3 border-b border-gray-200 pb-1">
            PROFESSIONAL SUMMARY
          </h2>
          <p className="text-sm text-gray-700 leading-relaxed">{personalInfo?.summary}</p>
        </div>
      )}

      {/* Experience */}
      {experience && experience?.length > 0 && (
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-blue-600 mb-3 border-b border-gray-200 pb-1">
            PROFESSIONAL EXPERIENCE
          </h2>
          {experience?.map((exp, index) => (
            <div key={index} className="mb-4">
              <div className="flex justify-between items-start mb-1">
                <div>
                  <h3 className="font-semibold text-gray-900">{exp?.jobTitle || 'Job Title'}</h3>
                  <p className="text-sm text-gray-700">{exp?.company || 'Company Name'}</p>
                </div>
                <div className="text-right text-sm text-gray-600">
                  <p>{formatDate(exp?.startDate)} - {exp?.isCurrentJob ? 'Present' : formatDate(exp?.endDate)}</p>
                  <p>{exp?.location}</p>
                </div>
              </div>
              {exp?.achievements && exp?.achievements?.length > 0 && (
                <ul className="text-sm text-gray-700 ml-4 space-y-1">
                  {exp?.achievements?.filter(ach => ach?.trim())?.map((achievement, achIndex) => (
                    <li key={achIndex} className="list-disc">{achievement}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Education */}
      {education && education?.length > 0 && (
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-blue-600 mb-3 border-b border-gray-200 pb-1">
            EDUCATION
          </h2>
          {education?.map((edu, index) => (
            <div key={index} className="mb-3">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold text-gray-900">
                    {edu?.degree && edu?.field ? `${edu?.degree} in ${edu?.field}` : 'Degree'}
                  </h3>
                  <p className="text-sm text-gray-700">{edu?.school || 'University Name'}</p>
                  {edu?.gpa && <p className="text-sm text-gray-600">GPA: {edu?.gpa}</p>}
                </div>
                <div className="text-right text-sm text-gray-600">
                  <p>{formatDate(edu?.graduationDate)}</p>
                  <p>{edu?.location}</p>
                </div>
              </div>
              {edu?.achievements && edu?.achievements?.length > 0 && (
                <ul className="text-sm text-gray-700 ml-4 mt-1 space-y-1">
                  {edu?.achievements?.filter(ach => ach?.trim())?.map((achievement, achIndex) => (
                    <li key={achIndex} className="list-disc">{achievement}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Skills */}
      {skills && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills?.technical && skills?.technical?.length > 0 && (
            <div>
              <h2 className="text-lg font-semibold text-blue-600 mb-3 border-b border-gray-200 pb-1">
                TECHNICAL SKILLS
              </h2>
              <div className="flex flex-wrap gap-2">
                {skills?.technical?.map((skill, index) => (
                  <span key={index} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">
                    {skill?.name}
                  </span>
                ))}
              </div>
            </div>
          )}

          {skills?.soft && skills?.soft?.length > 0 && (
            <div>
              <h2 className="text-lg font-semibold text-blue-600 mb-3 border-b border-gray-200 pb-1">
                SOFT SKILLS
              </h2>
              <div className="flex flex-wrap gap-2">
                {skills?.soft?.map((skill, index) => (
                  <span key={index} className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">
                    {skill?.name}
                  </span>
                ))}
              </div>
            </div>
          )}

          {skills?.languages && skills?.languages?.length > 0 && (
            <div>
              <h2 className="text-lg font-semibold text-blue-600 mb-3 border-b border-gray-200 pb-1">
                LANGUAGES
              </h2>
              <div className="space-y-1">
                {skills?.languages?.map((lang, index) => (
                  <div key={index} className="flex justify-between text-sm">
                    <span className="text-gray-900">{lang?.language}</span>
                    <span className="text-gray-600 capitalize">{lang?.proficiency}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {skills?.certifications && skills?.certifications?.length > 0 && (
            <div>
              <h2 className="text-lg font-semibold text-blue-600 mb-3 border-b border-gray-200 pb-1">
                CERTIFICATIONS
              </h2>
              <div className="space-y-2">
                {skills?.certifications?.map((cert, index) => (
                  <div key={index} className="text-sm">
                    <p className="font-medium text-gray-900">{cert?.name}</p>
                    <p className="text-gray-600">{cert?.issuer} {cert?.date && `• ${new Date(cert.date)?.getFullYear()}`}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );

  return (
    <div className="h-full overflow-y-auto">
      <div className="sticky top-0 bg-background/95 backdrop-blur-sm border-b border-border p-4 z-10">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-secondary/10 rounded-lg flex items-center justify-center">
              <Icon name="Eye" size={16} className="text-secondary" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground">Live Preview</h3>
              <p className="text-xs text-text-secondary">Modern Professional Template</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <button className="p-2 hover:bg-muted rounded-lg transition-colors" title="Zoom Out">
              <Icon name="ZoomOut" size={16} className="text-text-secondary" />
            </button>
            <button className="p-2 hover:bg-muted rounded-lg transition-colors" title="Zoom In">
              <Icon name="ZoomIn" size={16} className="text-text-secondary" />
            </button>
            <button className="p-2 hover:bg-muted rounded-lg transition-colors" title="Download PDF">
              <Icon name="Download" size={16} className="text-text-secondary" />
            </button>
          </div>
        </div>
      </div>

      <div className="p-4">
        <div className="bg-gray-100 p-4 rounded-lg">
          <ModernTemplate />
        </div>
      </div>
    </div>
  );
};

export default ResumePreview;