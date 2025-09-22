import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ContactSection = () => {
  const contactInfo = [
    {
      icon: "Mail",
      title: "General Inquiries",
      details: ["hello@resumeforge.com", "Response within 24 hours"],
      action: "Send Email"
    },
    {
      icon: "Users",
      title: "Partnership Opportunities",
      details: ["partnerships@resumeforge.com", "Business development team"],
      action: "Discuss Partnership"
    },
    {
      icon: "MessageCircle",
      title: "Media & Press",
      details: ["press@resumeforge.com", "Media kit available"],
      action: "Media Inquiry"
    },
    {
      icon: "Briefcase",
      title: "Careers",
      details: ["careers@resumeforge.com", "Join our growing team"],
      action: "View Openings"
    }
  ];

  const officeLocations = [
    {
      city: "San Francisco",
      address: "123 Innovation Drive\nSan Francisco, CA 94105",
      type: "Headquarters",
      icon: "Building"
    },
    {
      city: "New York",
      address: "456 Career Avenue\nNew York, NY 10001",
      type: "East Coast Office",
      icon: "Building2"
    },
    {
      city: "Austin",
      address: "789 Tech Boulevard\nAustin, TX 78701",
      type: "Development Center",
      icon: "Code"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Icon name="MessageSquare" size={16} />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold text-primary font-accent mb-6">
            Let's Start a
            <span className="block text-secondary">Conversation</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Whether you're interested in partnerships, have questions about our platform, or want to join our team, we'd love to hear from you.
          </p>
        </div>

        {/* Contact Options */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactInfo?.map((contact, index) => (
            <div key={index} className="bg-card rounded-xl p-6 shadow-subtle hover:shadow-premium transition-all duration-300 text-center">
              <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Icon name={contact?.icon} size={24} className="text-secondary" />
              </div>
              <h3 className="text-lg font-semibold text-primary mb-3">{contact?.title}</h3>
              <div className="space-y-1 mb-4">
                {contact?.details?.map((detail, detailIndex) => (
                  <p key={detailIndex} className={`text-sm ${detailIndex === 0 ? 'text-secondary font-medium' : 'text-text-secondary'}`}>
                    {detail}
                  </p>
                ))}
              </div>
              <Button variant="outline" size="sm" className="w-full">
                {contact?.action}
              </Button>
            </div>
          ))}
        </div>

        {/* Office Locations */}
        <div className="bg-card rounded-2xl p-8 lg:p-12 shadow-subtle">
          <div className="text-center mb-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-primary font-accent mb-4">
              Our Locations
            </h3>
            <p className="text-text-secondary max-w-2xl mx-auto">
              With offices across the United States, we're building the future of career advancement from coast to coast.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {officeLocations?.map((office, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Icon name={office?.icon} size={28} className="text-secondary" />
                </div>
                <h4 className="text-xl font-semibold text-primary mb-2">{office?.city}</h4>
                <p className="text-sm text-secondary font-medium mb-3">{office?.type}</p>
                <p className="text-text-secondary text-sm whitespace-pre-line leading-relaxed">
                  {office?.address}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-career rounded-2xl p-8 lg:p-12 text-white">
            <h3 className="text-2xl lg:text-3xl font-bold font-accent mb-4">
              Ready to Transform Your Career?
            </h3>
            <p className="text-white/90 mb-8 max-w-2xl mx-auto">
              Join hundreds of thousands of professionals who have advanced their careers with ResumeForge. Start building your perfect resume today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg" className="bg-white text-primary hover:bg-white/90">
                <Icon name="Zap" size={20} className="mr-2" />
                Start Building Now
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                <Icon name="Eye" size={20} className="mr-2" />
                View Templates
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;