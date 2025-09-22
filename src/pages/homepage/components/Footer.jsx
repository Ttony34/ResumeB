import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const Footer = () => {
  const currentYear = new Date()?.getFullYear();

  const footerSections = [
    {
      title: "Product",
      links: [
        { name: "Resume Builder", path: "/resume-builder-studio" },
        { name: "Templates", path: "/template-gallery" },
        { name: "Cover Letters", path: "/cover-letter-builder" },
        { name: "LinkedIn Optimizer", path: "/linkedin-optimizer" },
        { name: "ATS Scanner", path: "/ats-scanner" }
      ]
    },
    {
      title: "Resources",
      links: [
        { name: "Career Blog", path: "/career-blog" },
        { name: "Resume Examples", path: "/resume-examples" },
        { name: "Interview Tips", path: "/interview-tips" },
        { name: "Salary Guide", path: "/salary-guide" },
        { name: "Career Advice", path: "/career-advice" }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About Us", path: "/about-resume-forge" },
        { name: "Pricing", path: "/pricing-premium" },
        { name: "Success Stories", path: "/success-stories" },
        { name: "Press", path: "/press" },
        { name: "Careers", path: "/careers" }
      ]
    },
    {
      title: "Support",
      links: [
        { name: "Help Center", path: "/help-center" },
        { name: "Contact Us", path: "/contact" },
        { name: "Live Chat", path: "/live-chat" },
        { name: "Video Tutorials", path: "/tutorials" },
        { name: "Community", path: "/community" }
      ]
    }
  ];

  const socialLinks = [
    { name: "Twitter", icon: "Twitter", url: "https://twitter.com/resumeforge" },
    { name: "LinkedIn", icon: "Linkedin", url: "https://linkedin.com/company/resumeforge" },
    { name: "Facebook", icon: "Facebook", url: "https://facebook.com/resumeforge" },
    { name: "Instagram", icon: "Instagram", url: "https://instagram.com/resumeforge" },
    { name: "YouTube", icon: "Youtube", url: "https://youtube.com/resumeforge" }
  ];

  return (
    <footer className="bg-primary text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-6 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link to="/homepage" className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-secondary to-accent rounded-lg flex items-center justify-center">
                <Icon name="FileText" size={24} color="white" strokeWidth={2.5} />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold font-accent">ResumeForge</span>
                <span className="text-sm text-white/70 -mt-1">Career Excellence</span>
              </div>
            </Link>

            <p className="text-white/80 mb-6 leading-relaxed">
              Transform your career story with AI-powered resume building. Join over 2.3 million 
              professionals who've accelerated their careers with ResumeForge.
            </p>

            {/* Newsletter Signup */}
            <div className="mb-6">
              <h4 className="font-semibold mb-3">Stay Updated</h4>
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-secondary"
                />
                <Button
                  variant="default"
                  className="bg-secondary hover:bg-secondary/90 text-white px-6"
                  iconName="Send"
                  iconPosition="right"
                >
                  Subscribe
                </Button>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks?.map((social) => (
                <a
                  key={social?.name}
                  href={social?.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-secondary hover:scale-110 transition-all duration-300"
                  aria-label={social?.name}
                >
                  <Icon name={social?.icon} size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {footerSections?.map((section) => (
            <div key={section?.title}>
              <h4 className="font-semibold mb-4">{section?.title}</h4>
              <ul className="space-y-3">
                {section?.links?.map((link) => (
                  <li key={link?.name}>
                    <Link
                      to={link?.path}
                      className="text-white/70 hover:text-white hover:translate-x-1 transition-all duration-200 inline-block"
                    >
                      {link?.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      {/* Trust Badges Section */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Security Badges */}
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Icon name="Shield" size={20} className="text-accent" />
                <span className="text-sm text-white/70">SSL Secured</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Lock" size={20} className="text-accent" />
                <span className="text-sm text-white/70">GDPR Compliant</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="CheckCircle" size={20} className="text-accent" />
                <span className="text-sm text-white/70">SOC 2 Certified</span>
              </div>
            </div>

            {/* Trust Metrics */}
            <div className="flex items-center space-x-6 text-sm text-white/70">
              <div className="flex items-center space-x-2">
                <Icon name="Users" size={16} />
                <span>2.3M+ Users</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Star" size={16} className="text-accent fill-current" />
                <span>4.9/5 Rating</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Award" size={16} />
                <span>Industry Leader</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <div className="text-white/70 text-sm">
              © {currentYear} ResumeForge. All rights reserved. Empowering careers worldwide.
            </div>

            {/* Legal Links */}
            <div className="flex items-center space-x-6 text-sm">
              <Link
                to="/privacy-policy"
                className="text-white/70 hover:text-white transition-colors duration-200"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms-of-service"
                className="text-white/70 hover:text-white transition-colors duration-200"
              >
                Terms of Service
              </Link>
              <Link
                to="/cookie-policy"
                className="text-white/70 hover:text-white transition-colors duration-200"
              >
                Cookie Policy
              </Link>
              <Link
                to="/accessibility"
                className="text-white/70 hover:text-white transition-colors duration-200"
              >
                Accessibility
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Back to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 w-12 h-12 bg-secondary hover:bg-secondary/90 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 z-40"
        aria-label="Back to top"
      >
        <Icon name="ChevronUp" size={20} className="mx-auto" />
      </button>
    </footer>
  );
};

export default Footer;
