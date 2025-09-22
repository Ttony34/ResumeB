import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const TestimonialSection = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Jennifer Martinez",
      role: "Senior Marketing Director",
      company: "Fortune 500 Company",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      content: `ResumeForge transformed my career trajectory completely. The executive templates and LinkedIn optimization helped me land a $180K role at a Fortune 500 company. The AI suggestions were spot-on and saved me hours of writing. Worth every penny!`,
      results: {
        salaryIncrease: "45%",
        timeToHire: "3 weeks",
        interviews: "12"
      },
      plan: "Executive"
    },
    {
      id: 2,
      name: "David Chen",
      role: "Software Engineering Manager",
      company: "Tech Unicorn",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      content: `The ATS optimization feature is a game-changer. My resume started getting through automated screening systems, and I received 3x more interview calls. The premium templates look incredibly professional and modern.`,
      results: {
        salaryIncrease: "32%",
        timeToHire: "5 weeks",
        interviews: "8"
      },
      plan: "Premium"
    },
    {
      id: 3,
      name: "Sarah Thompson",
      role: "Product Manager",
      company: "Growing Startup",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      content: `As a career changer, I was struggling to present my transferable skills effectively. ResumeForge's industry-specific templates and content suggestions helped me pivot from consulting to product management successfully.`,
      results: {
        salaryIncrease: "28%",
        timeToHire: "4 weeks",
        interviews: "6"
      },
      plan: "Premium"
    },
    {
      id: 4,
      name: "Robert Kim",
      role: "VP of Sales",
      company: "Enterprise Software",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      content: `The executive package exceeded my expectations. The career coaching session and resume review service provided invaluable insights. My new resume opened doors to C-level conversations I never had access to before.`,
      results: {
        salaryIncrease: "52%",
        timeToHire: "2 weeks",
        interviews: "15"
      },
      plan: "Executive"
    }
  ];

  const careerCoachTestimonials = [
    {
      name: "Dr. Amanda Foster",
      role: "Career Coach & HR Consultant",
      company: "15+ years experience",
      avatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&h=150&fit=crop&crop=face",
      content: `I recommend ResumeForge to all my clients. The templates are professionally designed and ATS-compliant. The platform understands modern hiring practices better than any other tool I've seen.`
    },
    {
      name: "Marcus Johnson",
      role: "Executive Recruiter",
      company: "Top-tier Executive Search",
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face",
      content: `ResumeForge resumes consistently stand out in my candidate pool. The executive templates demonstrate attention to detail and professionalism that hiring managers notice immediately.`
    }
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Icon
        key={i}
        name="Star"
        size={16}
        className={i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}
      />
    ));
  };

  return (
    <div className="space-y-12">
      {/* User Testimonials */}
      <div className="bg-card border border-border rounded-xl p-6">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-foreground mb-2">
            Success Stories from Our Users
          </h3>
          <p className="text-text-secondary">
            Real results from professionals who transformed their careers
          </p>
        </div>

        {/* Testimonial Navigation */}
        <div className="flex justify-center mb-8">
          <div className="flex space-x-2 bg-muted rounded-lg p-1">
            {testimonials?.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  activeTestimonial === index
                    ? 'bg-secondary' :'bg-border hover:bg-text-secondary'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Active Testimonial */}
        <div className="max-w-4xl mx-auto">
          {testimonials?.map((testimonial, index) => (
            <div
              key={testimonial?.id}
              className={`transition-all duration-500 ${
                activeTestimonial === index
                  ? 'opacity-100 transform translate-x-0'
                  : 'opacity-0 transform translate-x-4 absolute'
              }`}
              style={{ display: activeTestimonial === index ? 'block' : 'none' }}
            >
              <div className="text-center mb-6">
                <div className="flex justify-center mb-4">
                  {renderStars(testimonial?.rating)}
                </div>
                <blockquote className="text-lg text-foreground leading-relaxed mb-6 italic">
                  "{testimonial?.content}"
                </blockquote>
              </div>

              <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="flex items-center mb-4 md:mb-0">
                  <Image
                    src={testimonial?.avatar}
                    alt={testimonial?.name}
                    className="w-16 h-16 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-foreground">{testimonial?.name}</h4>
                    <p className="text-text-secondary text-sm">{testimonial?.role}</p>
                    <p className="text-text-secondary text-sm">{testimonial?.company}</p>
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-secondary/10 text-secondary mt-1">
                      {testimonial?.plan} User
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-accent">{testimonial?.results?.salaryIncrease}</div>
                    <div className="text-xs text-text-secondary">Salary Increase</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-secondary">{testimonial?.results?.timeToHire}</div>
                    <div className="text-xs text-text-secondary">Time to Hire</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-foreground">{testimonial?.results?.interviews}</div>
                    <div className="text-xs text-text-secondary">Interviews</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Career Coach Testimonials */}
      <div className="bg-muted rounded-xl p-6">
        <div className="text-center mb-8">
          <h3 className="text-xl font-bold text-foreground mb-2">
            Endorsed by Career Professionals
          </h3>
          <p className="text-text-secondary">
            Trusted by career coaches and recruiters worldwide
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {careerCoachTestimonials?.map((coach, index) => (
            <div key={index} className="bg-card rounded-lg p-6 border border-border">
              <div className="flex items-start mb-4">
                <Image
                  src={coach?.avatar}
                  alt={coach?.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-semibold text-foreground">{coach?.name}</h4>
                  <p className="text-text-secondary text-sm">{coach?.role}</p>
                  <p className="text-text-secondary text-xs">{coach?.company}</p>
                </div>
              </div>
              <blockquote className="text-sm text-foreground italic">
                "{coach?.content}"
              </blockquote>
            </div>
          ))}
        </div>
      </div>
      {/* Trust Metrics */}
      <div className="bg-card border border-border rounded-xl p-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-3xl font-bold text-secondary mb-2">94%</div>
            <div className="text-sm text-text-secondary">Success Rate</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-accent mb-2">2.8x</div>
            <div className="text-sm text-text-secondary">More Interviews</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-foreground mb-2">15K+</div>
            <div className="text-sm text-text-secondary">Happy Users</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-secondary mb-2">4.9/5</div>
            <div className="text-sm text-text-secondary">User Rating</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;