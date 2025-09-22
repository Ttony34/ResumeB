import React from 'react';
import Icon from '../../../components/AppIcon';

const MissionSection = () => {
  const values = [
    {
      icon: "Shield",
      title: "Privacy First",
      description: "Your career data is protected with enterprise-grade security and never shared without explicit consent."
    },
    {
      icon: "Users",
      title: "Inclusive Design",
      description: "Templates and guidance that celebrate diverse career paths and professional backgrounds."
    },
    {
      icon: "TrendingUp",
      title: "Career Equity",
      description: "Democratizing access to professional presentation tools that level the playing field."
    },
    {
      icon: "Heart",
      title: "User Success",
      description: "Every feature is designed with one goal: helping you advance your career with confidence."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Mission Statement */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Icon name="Target" size={16} />
            <span>Our Mission</span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold text-primary font-accent mb-6">
            Empowering Professionals Through
            <span className="block text-secondary">Better Career Storytelling</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-4xl mx-auto leading-relaxed">
            We believe every professional deserves a resume that opens doors. Our mission is to bridge the gap between talent and opportunity through intelligent design, industry insights, and career advancement tools that make a real difference.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values?.map((value, index) => (
            <div key={index} className="text-center group">
              <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-secondary/20 transition-colors duration-300">
                <Icon name={value?.icon} size={28} className="text-secondary" />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">{value?.title}</h3>
              <p className="text-text-secondary leading-relaxed">{value?.description}</p>
            </div>
          ))}
        </div>

        {/* Company Story */}
        <div className="mt-20 bg-card rounded-2xl p-8 lg:p-12 shadow-subtle">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold text-primary font-accent mb-6">
                The Problem We Solved
              </h3>
              <div className="space-y-4 text-text-secondary">
                <p>
                  In 2019, our founders—seasoned HR professionals and design experts—noticed a critical gap in the job market. Talented professionals were being overlooked not because of their qualifications, but because of poor resume presentation.
                </p>
                <p>
                  Generic templates weren't cutting it. Hiring managers were drowning in poorly formatted resumes that failed to showcase true potential. Meanwhile, job seekers struggled with outdated advice and one-size-fits-all solutions.
                </p>
                <p>
                  ResumeForge was born from this frustration—a platform that combines deep hiring insights with exceptional design to create resumes that truly represent professional excellence.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-career rounded-xl p-8 text-white">
                <Icon name="Lightbulb" size={48} className="text-secondary mb-4" />
                <h4 className="text-xl font-semibold mb-4">Our Solution</h4>
                <p className="text-white/90">
                  Industry-aware templates designed by hiring experts, powered by ATS optimization, and backed by real career advancement data.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;