import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const TeamSection = () => {
  const founders = [
    {
      name: "Sarah Chen",
      role: "Co-Founder & CEO",
      background: "Former VP of Talent at TechCorp",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face",
      expertise: ["Strategic HR", "Talent Acquisition", "Leadership"],
      linkedin: "#",
      description: "15+ years in executive recruiting with expertise in scaling high-growth companies."
    },
    {
      name: "Marcus Rodriguez",
      role: "Co-Founder & CTO",
      background: "Former Lead Designer at DesignStudio",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      expertise: ["Product Design", "User Experience", "Technology"],
      linkedin: "#",
      description: "Award-winning designer with a passion for creating tools that empower career growth."
    }
  ];

  const teamMembers = [
    {
      name: "Dr. Emily Watson",
      role: "Head of Career Strategy",
      background: "Career Coach & Author",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
      expertise: ["Career Coaching", "Professional Development", "Industry Trends"]
    },
    {
      name: "James Park",
      role: "Lead Product Designer",
      background: "Former Design Lead at StartupX",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      expertise: ["UI/UX Design", "Design Systems", "User Research"]
    },
    {
      name: "Lisa Thompson",
      role: "Head of Partnerships",
      background: "Former Recruiting Director",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=300&h=300&fit=crop&crop=face",
      expertise: ["Recruiting", "Partnership Development", "Industry Relations"]
    },
    {
      name: "David Kim",
      role: "Senior Engineer",
      background: "Full-Stack Developer",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300&h=300&fit=crop&crop=face",
      expertise: ["React Development", "System Architecture", "Performance Optimization"]
    }
  ];

  return (
    <section className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Icon name="Users" size={16} />
            <span>Meet Our Team</span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold text-primary font-accent mb-6">
            Experts Who Understand
            <span className="block text-secondary">Both Sides of Hiring</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Our team combines decades of experience in HR, recruiting, design, and career coaching to create tools that truly make a difference.
          </p>
        </div>

        {/* Founders */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-primary text-center mb-12">Leadership Team</h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {founders?.map((founder, index) => (
              <div key={index} className="bg-card rounded-2xl p-8 shadow-subtle hover:shadow-premium transition-all duration-300">
                <div className="text-center mb-6">
                  <div className="relative inline-block mb-4">
                    <Image
                      src={founder?.image}
                      alt={founder?.name}
                      className="w-24 h-24 rounded-full object-cover mx-auto"
                    />
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-secondary rounded-full flex items-center justify-center">
                      <Icon name="Award" size={16} color="white" />
                    </div>
                  </div>
                  <h4 className="text-xl font-bold text-primary">{founder?.name}</h4>
                  <p className="text-secondary font-medium">{founder?.role}</p>
                  <p className="text-sm text-text-secondary">{founder?.background}</p>
                </div>
                
                <p className="text-text-secondary mb-6 text-center">{founder?.description}</p>
                
                <div className="flex flex-wrap justify-center gap-2 mb-6">
                  {founder?.expertise?.map((skill, skillIndex) => (
                    <span key={skillIndex} className="px-3 py-1 bg-secondary/10 text-secondary text-sm rounded-full">
                      {skill}
                    </span>
                  ))}
                </div>
                
                <div className="text-center">
                  <a href={founder?.linkedin} className="inline-flex items-center space-x-2 text-secondary hover:text-secondary/80 transition-colors">
                    <Icon name="Linkedin" size={16} />
                    <span className="text-sm">Connect on LinkedIn</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Team Members */}
        <div>
          <h3 className="text-2xl font-bold text-primary text-center mb-12">Core Team</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers?.map((member, index) => (
              <div key={index} className="bg-card rounded-xl p-6 shadow-subtle hover:shadow-premium transition-all duration-300 text-center">
                <Image
                  src={member?.image}
                  alt={member?.name}
                  className="w-20 h-20 rounded-full object-cover mx-auto mb-4"
                />
                <h4 className="text-lg font-semibold text-primary mb-1">{member?.name}</h4>
                <p className="text-secondary font-medium text-sm mb-1">{member?.role}</p>
                <p className="text-xs text-text-secondary mb-4">{member?.background}</p>
                
                <div className="flex flex-wrap justify-center gap-1">
                  {member?.expertise?.map((skill, skillIndex) => (
                    <span key={skillIndex} className="px-2 py-1 bg-muted text-text-secondary text-xs rounded">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
