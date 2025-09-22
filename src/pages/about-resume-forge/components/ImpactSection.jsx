import React from 'react';
import Icon from '../../../components/AppIcon';

const ImpactSection = () => {
  const impactStats = [
    {
      icon: "Users",
      number: "500,000+",
      label: "Professionals Served",
      description: "Resumes created across 50+ industries"
    },
    {
      icon: "TrendingUp",
      number: "89%",
      label: "Success Rate",
      description: "Users report improved interview callbacks"
    },
    {
      icon: "DollarSign",
      number: "$2.3B+",
      label: "Salary Impact",
      description: "Combined salary increases achieved by users"
    },
    {
      icon: "Award",
      number: "15+",
      label: "Industry Awards",
      description: "Recognition for design and innovation"
    },
    {
      icon: "Globe",
      number: "120+",
      label: "Countries",
      description: "Global reach with localized templates"
    },
    {
      icon: "Building",
      number: "5,000+",
      label: "Partner Companies",
      description: "Recruiting firms and career centers"
    }
  ];

  const partnerships = [
    {
      type: "Career Coaching",
      partners: ["CareerPath Institute", "Professional Growth Academy", "Executive Coaching Network"],
      icon: "Users"
    },
    {
      type: "Educational Institutions",
      partners: ["Stanford Career Center", "MIT Professional Development", "Harvard Extension School"],
      icon: "GraduationCap"
    },
    {
      type: "Recruiting Firms",
      partners: ["TalentBridge Partners", "Executive Search Pro", "Tech Recruiting Solutions"],
      icon: "Building"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Impact Stats */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Icon name="BarChart3" size={16} />
            <span>Our Impact</span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold text-primary font-accent mb-6">
            Transforming Careers
            <span className="block text-secondary">Worldwide</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto mb-12">
            Real numbers that reflect our commitment to helping professionals achieve their career goals and advance their professional journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {impactStats?.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-secondary/20 transition-colors duration-300">
                <Icon name={stat?.icon} size={28} className="text-secondary" />
              </div>
              <div className="text-4xl font-bold text-primary mb-2">{stat?.number}</div>
              <div className="text-lg font-semibold text-foreground mb-2">{stat?.label}</div>
              <div className="text-text-secondary text-sm">{stat?.description}</div>
            </div>
          ))}
        </div>

        {/* Partnerships */}
        <div className="bg-card rounded-2xl p-8 lg:p-12 shadow-subtle">
          <div className="text-center mb-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-primary font-accent mb-4">
              Trusted Partnerships
            </h3>
            <p className="text-text-secondary max-w-2xl mx-auto">
              We collaborate with leading organizations to ensure our platform meets the highest standards of career development and professional excellence.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {partnerships?.map((category, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Icon name={category?.icon} size={24} className="text-secondary" />
                </div>
                <h4 className="text-lg font-semibold text-primary mb-4">{category?.type}</h4>
                <div className="space-y-2">
                  {category?.partners?.map((partner, partnerIndex) => (
                    <div key={partnerIndex} className="text-text-secondary text-sm py-1">
                      {partner}
                    </div>
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

export default ImpactSection;