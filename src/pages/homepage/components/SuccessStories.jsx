import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const SuccessStories = () => {
  const [currentStory, setCurrentStory] = useState(0);

  const successStories = [
    {
      id: 1,
      name: "Sarah Chen",
      previousRole: "Marketing Coordinator",
      newRole: "Senior Marketing Manager",
      company: "Tech Startup → Fortune 500",
      salaryIncrease: "85%",
      timeToHire: "3 weeks",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      beforeImage: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=300&h=400&fit=crop",
      afterImage: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=300&h=400&fit=crop",
      testimonial: `ResumeForge transformed my career trajectory completely. The AI suggestions helped me articulate my achievements in ways I never thought possible. Within 3 weeks, I had multiple offers and landed my dream role with an 85% salary increase.`,
      keyChanges: [
        "Quantified marketing campaign results",
        "Highlighted leadership experience",
        "ATS-optimized keyword integration",
        "Professional visual design"
      ]
    },
    {
      id: 2,
      name: "Marcus Rodriguez",
      previousRole: "Junior Developer",
      newRole: "Senior Software Engineer",
      company: "Startup → Google",
      salaryIncrease: "120%",
      timeToHire: "2 weeks",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      beforeImage: "https://images.unsplash.com/photo-1586281380117-5a60ae2050cc?w=300&h=400&fit=crop",
      afterImage: "https://images.unsplash.com/photo-1586281380614-67ca8b3ccd72?w=300&h=400&fit=crop",
      testimonial: `The technical template was perfect for showcasing my projects and skills. The ATS optimization got me past the initial screening, and the clean design impressed the hiring managers. I couldn't believe how quickly I got responses.`,
      keyChanges: [
        "Technical project portfolio",
        "Skills matrix optimization",
        "GitHub integration showcase",
        "Clean, scannable format"
      ]
    },
    {
      id: 3,
      name: "Dr. Emily Watson",
      previousRole: "Research Associate",
      newRole: "Principal Scientist",
      company: "University → Biotech Company",
      salaryIncrease: "95%",
      timeToHire: "4 weeks",
      avatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&h=150&fit=crop&crop=face",
      beforeImage: "https://images.unsplash.com/photo-1586281380614-67ca8b3ccd72?w=300&h=400&fit=crop",
      afterImage: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=300&h=400&fit=crop",
      testimonial: `Moving from academia to industry seemed impossible until I used ResumeForge. The academic template helped me translate my research into business impact. The results speak for themselves - multiple interviews and a 95% salary increase.`,
      keyChanges: [
        "Research impact quantification",
        "Industry-relevant skills focus",
        "Publication highlights",
        "Business value translation"
      ]
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStory((prev) => (prev + 1) % successStories?.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [successStories?.length]);

  const story = successStories?.[currentStory];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-6">
            <Icon name="TrendingUp" size={16} className="mr-2" />
            Success Stories
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            Real People, Real Career Transformations
          </h2>
          
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Join thousands of professionals who've accelerated their careers with ResumeForge. 
            See how the right resume opened doors to their dream opportunities.
          </p>
        </div>

        {/* Main Story Display */}
        <div className="bg-card rounded-3xl shadow-premium overflow-hidden mb-12">
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Left Side - Story Content */}
            <div className="p-8 lg:p-12">
              {/* User Info */}
              <div className="flex items-center mb-8">
                <div className="relative">
                  <Image
                    src={story?.avatar}
                    alt={story?.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-accent rounded-full flex items-center justify-center">
                    <Icon name="CheckCircle" size={14} className="text-white" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="font-bold text-primary text-xl">{story?.name}</h3>
                  <p className="text-text-secondary">{story?.company}</p>
                </div>
              </div>

              {/* Career Progression */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-center">
                    <div className="text-sm text-text-secondary mb-1">Before</div>
                    <div className="font-semibold text-primary">{story?.previousRole}</div>
                  </div>
                  <div className="flex items-center px-4">
                    <Icon name="ArrowRight" size={24} className="text-secondary" />
                  </div>
                  <div className="text-center">
                    <div className="text-sm text-text-secondary mb-1">After</div>
                    <div className="font-semibold text-secondary">{story?.newRole}</div>
                  </div>
                </div>

                {/* Success Metrics */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-accent/10 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-accent mb-1">+{story?.salaryIncrease}</div>
                    <div className="text-sm text-text-secondary">Salary Increase</div>
                  </div>
                  <div className="bg-secondary/10 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-secondary mb-1">{story?.timeToHire}</div>
                    <div className="text-sm text-text-secondary">Time to Hire</div>
                  </div>
                </div>
              </div>

              {/* Testimonial */}
              <blockquote className="text-foreground italic mb-8 text-lg leading-relaxed">
                "{story?.testimonial}"
              </blockquote>

              {/* Key Changes */}
              <div>
                <h4 className="font-semibold text-primary mb-4">Key Resume Improvements:</h4>
                <ul className="space-y-2">
                  {story?.keyChanges?.map((change, index) => (
                    <li key={index} className="flex items-center">
                      <Icon name="CheckCircle" size={16} className="text-accent mr-3 flex-shrink-0" />
                      <span className="text-text-secondary">{change}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Side - Before/After Comparison */}
            <div className="bg-muted p-8 lg:p-12 flex flex-col justify-center">
              <div className="text-center mb-6">
                <h4 className="font-semibold text-primary mb-2">Resume Transformation</h4>
                <p className="text-sm text-text-secondary">See the visual difference</p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                {/* Before */}
                <div className="text-center">
                  <div className="text-sm text-text-secondary mb-2">Before</div>
                  <div className="relative">
                    <Image
                      src={story?.beforeImage}
                      alt="Before resume"
                      className="w-full aspect-[3/4] object-cover rounded-lg shadow-lg"
                    />
                    <div className="absolute inset-0 bg-red-500/20 rounded-lg"></div>
                    <div className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                      Old
                    </div>
                  </div>
                </div>

                {/* After */}
                <div className="text-center">
                  <div className="text-sm text-text-secondary mb-2">After</div>
                  <div className="relative">
                    <Image
                      src={story?.afterImage}
                      alt="After resume"
                      className="w-full aspect-[3/4] object-cover rounded-lg shadow-lg"
                    />
                    <div className="absolute inset-0 bg-accent/20 rounded-lg"></div>
                    <div className="absolute top-2 left-2 bg-accent text-white text-xs px-2 py-1 rounded">
                      New
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Story Navigation */}
        <div className="flex justify-center items-center space-x-4 mb-12">
          <button
            onClick={() => setCurrentStory((prev) => (prev - 1 + successStories?.length) % successStories?.length)}
            className="p-2 rounded-full bg-muted hover:bg-secondary hover:text-white transition-colors duration-300"
          >
            <Icon name="ChevronLeft" size={20} />
          </button>

          <div className="flex space-x-2">
            {successStories?.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentStory(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentStory 
                    ? 'bg-secondary scale-125' :'bg-muted hover:bg-secondary/50'
                }`}
              />
            ))}
          </div>

          <button
            onClick={() => setCurrentStory((prev) => (prev + 1) % successStories?.length)}
            className="p-2 rounded-full bg-muted hover:bg-secondary hover:text-white transition-colors duration-300"
          >
            <Icon name="ChevronRight" size={20} />
          </button>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button
            variant="default"
            size="lg"
            className="bg-accent hover:bg-accent/90 text-white px-8 py-4 text-lg font-semibold"
            iconName="Zap"
            iconPosition="left"
          >
            Start Your Success Story
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;