import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const TrustSignals = () => {
  const securityBadges = [
    {
      id: 1,
      name: "SSL Secured",
      icon: "Shield",
      description: "256-bit encryption"
    },
    {
      id: 2,
      name: "GDPR Compliant",
      icon: "Lock",
      description: "Data protection certified"
    },
    {
      id: 3,
      name: "SOC 2 Type II",
      icon: "CheckCircle",
      description: "Security audited"
    },
    {
      id: 4,
      name: "Privacy First",
      icon: "Eye",
      description: "Your data stays private"
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: "Jennifer Martinez",
      role: "HR Director",
      company: "Fortune 500 Company",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=80&h=80&fit=crop&crop=face",
      quote: "ResumeForge resumes consistently stand out in our applicant pool. The formatting is professional and ATS-friendly.",
      rating: 5
    },
    {
      id: 2,
      name: "David Kim",
      role: "Recruiting Manager",
      company: "Tech Startup",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face",
      quote: "I can immediately spot a ResumeForge resume. They're well-structured, visually appealing, and highlight key achievements effectively.",
      rating: 5
    },
    {
      id: 3,
      name: "Lisa Thompson",
      role: "Career Coach",
      company: "Executive Coaching",
      avatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=80&h=80&fit=crop&crop=face",
      quote: "I recommend ResumeForge to all my clients. The templates are industry-appropriate and the AI suggestions are remarkably accurate.",
      rating: 5
    }
  ];

  const mediaLogos = [
    {
      id: 1,
      name: "TechCrunch",
      logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=120&h=40&fit=crop"
    },
    {
      id: 2,
      name: "Forbes",
      logo: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=120&h=40&fit=crop"
    },
    {
      id: 3,
      name: "Harvard Business Review",
      logo: "https://images.unsplash.com/photo-1586281380117-5a60ae2050cc?w=120&h=40&fit=crop"
    },
    {
      id: 4,
      name: "Wall Street Journal",
      logo: "https://images.unsplash.com/photo-1586281380614-67ca8b3ccd72?w=120&h=40&fit=crop"
    }
  ];

  const stats = [
    {
      id: 1,
      number: "2.3M+",
      label: "Resumes Created",
      icon: "FileText"
    },
    {
      id: 2,
      number: "89%",
      label: "Interview Success Rate",
      icon: "TrendingUp"
    },
    {
      id: 3,
      number: "156%",
      label: "Average Salary Increase",
      icon: "DollarSign"
    },
    {
      id: 4,
      number: "4.9/5",
      label: "User Satisfaction",
      icon: "Star"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-6">
            <Icon name="Award" size={16} className="mr-2" />
            Trusted by Professionals
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            Join Millions Who Trust ResumeForge
          </h2>
          
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Your career success is our priority. We're committed to providing secure, 
            reliable, and effective resume building tools trusted by professionals worldwide.
          </p>
        </div>

        {/* Success Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats?.map((stat) => (
            <div
              key={stat?.id}
              className="bg-card rounded-2xl p-6 text-center shadow-subtle hover:shadow-premium transition-all duration-300 hover:-translate-y-1"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-secondary/10 rounded-lg mb-4">
                <Icon name={stat?.icon} size={24} className="text-secondary" />
              </div>
              <div className="text-2xl font-bold text-primary mb-1">{stat?.number}</div>
              <div className="text-sm text-text-secondary">{stat?.label}</div>
            </div>
          ))}
        </div>

        {/* Security Badges */}
        <div className="bg-card rounded-2xl p-8 shadow-subtle mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-primary mb-4">
              Enterprise-Grade Security
            </h3>
            <p className="text-text-secondary">
              Your personal information and career data are protected with industry-leading security measures
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {securityBadges?.map((badge) => (
              <div key={badge?.id} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-2xl mb-4 group-hover:bg-accent/20 transition-colors duration-300">
                  <Icon name={badge?.icon} size={28} className="text-accent" />
                </div>
                <h4 className="font-semibold text-primary mb-2">{badge?.name}</h4>
                <p className="text-sm text-text-secondary">{badge?.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Professional Testimonials */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-primary mb-4">
              What Industry Professionals Say
            </h3>
            <p className="text-text-secondary">
              Trusted by HR professionals, recruiters, and career coaches
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials?.map((testimonial) => (
              <div
                key={testimonial?.id}
                className="bg-card rounded-2xl p-6 shadow-subtle hover:shadow-premium transition-all duration-300"
              >
                {/* Rating */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial?.rating)]?.map((_, i) => (
                    <Icon
                      key={i}
                      name="Star"
                      size={16}
                      className="text-accent fill-current"
                    />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-foreground mb-6 italic">
                  "{testimonial?.quote}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center">
                  <Image
                    src={testimonial?.avatar}
                    alt={testimonial?.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <div className="font-semibold text-primary">{testimonial?.name}</div>
                    <div className="text-sm text-text-secondary">
                      {testimonial?.role}, {testimonial?.company}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Media Mentions */}
        <div className="text-center">
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-primary mb-4">
              Featured In
            </h3>
            <p className="text-text-secondary">
              Recognized by leading business and technology publications
            </p>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {mediaLogos?.map((media) => (
              <div
                key={media?.id}
                className="grayscale hover:grayscale-0 transition-all duration-300 hover:scale-110"
              >
                <Image
                  src={media?.logo}
                  alt={media?.name}
                  className="h-8 object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Final Trust Message */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center px-6 py-3 bg-accent/10 text-accent rounded-full">
            <Icon name="Shield" size={20} className="mr-3" />
            <span className="font-medium">
              Trusted by 2.3M+ professionals worldwide since 2020
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSignals;