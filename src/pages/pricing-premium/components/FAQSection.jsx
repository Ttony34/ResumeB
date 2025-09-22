import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState(0);

  const faqs = [
    {
      question: "What's the difference between Premium and Executive plans?",
      answer: `Premium includes all standard templates, AI suggestions, and unlimited downloads for $14.99/month. Executive adds exclusive C-level templates, LinkedIn optimization, career coaching, resume review service, and priority support for $29.99/month. Executive is designed for senior professionals targeting leadership roles.`
    },
    {
      question: "Can I cancel my subscription anytime?",
      answer: `Yes, you can cancel your subscription at any time with no cancellation fees. Your access will continue until the end of your current billing period. We also offer a 30-day money-back guarantee if you're not completely satisfied with your purchase.`
    },
    {
      question: "Do you offer refunds?",
      answer: `We offer a 30-day money-back guarantee on all paid plans. If you're not satisfied with ResumeForge within 30 days of purchase, contact our support team for a full refund. No questions asked.`
    },
    {
      question: "Are the templates ATS-friendly?",
      answer: `Yes, all our templates are designed to be ATS (Applicant Tracking System) compliant. We regularly test our templates with major ATS platforms like Workday, Greenhouse, and Lever to ensure your resume gets through automated screening systems.`
    },
    {
      question: "Can I download my resume in different formats?",
      answer: `Premium and Executive users can download resumes in PDF, Word (.docx), and plain text formats. Free users can download in PDF format only. All downloads are high-resolution and print-ready.`
    },
    {
      question: "How does the AI content suggestion work?",
      answer: `Our AI analyzes your job title, industry, and experience level to suggest relevant bullet points, skills, and keywords. It helps optimize your content for ATS systems and provides industry-specific language that resonates with hiring managers.`
    },
    {
      question: "Is my data secure and private?",
      answer: `Absolutely. We use enterprise-grade security measures including SSL encryption, secure data centers, and strict privacy policies. Your personal information and resume data are never shared with third parties. You own your data and can delete it anytime.`
    },
    {
      question: "Do you offer student discounts?",
      answer: `Yes, we offer a 50% student discount on all paid plans. Students need to verify their enrollment status through our partner verification service. The discount applies for up to 4 years or until graduation.`
    },
    {
      question: "Can I use ResumeForge for multiple resumes?",
      answer: `Yes, you can create unlimited resumes with any paid plan. This is perfect for targeting different roles or industries. Each resume can use different templates and be customized independently.`
    },
    {
      question: "What kind of support do you provide?",
      answer: `Free users get access to our help center and community forum. Premium users receive email support with 24-hour response time. Executive users get priority support, live chat, phone support, and access to career coaching sessions.`
    }
  ];

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? -1 : index);
  };

  return (
    <div className="bg-card border border-border rounded-xl p-6">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-foreground mb-2">
          Frequently Asked Questions
        </h3>
        <p className="text-text-secondary">
          Everything you need to know about ResumeForge pricing and features
        </p>
      </div>
      <div className="max-w-3xl mx-auto space-y-4">
        {faqs?.map((faq, index) => (
          <div
            key={index}
            className="border border-border rounded-lg overflow-hidden transition-all duration-200 hover:shadow-subtle"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-muted transition-colors duration-200"
            >
              <span className="font-semibold text-foreground pr-4">
                {faq?.question}
              </span>
              <Icon
                name={openFAQ === index ? "ChevronUp" : "ChevronDown"}
                size={20}
                className={`text-text-secondary transition-transform duration-200 flex-shrink-0 ${
                  openFAQ === index ? 'rotate-180' : ''
                }`}
              />
            </button>
            
            <div
              className={`transition-all duration-300 ease-out ${
                openFAQ === index
                  ? 'max-h-96 opacity-100' :'max-h-0 opacity-0 overflow-hidden'
              }`}
            >
              <div className="px-6 pb-4 text-text-secondary leading-relaxed">
                {faq?.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Contact Support */}
      <div className="mt-8 text-center p-6 bg-muted rounded-lg">
        <h4 className="font-semibold text-foreground mb-2">
          Still have questions?
        </h4>
        <p className="text-text-secondary text-sm mb-4">
          Our support team is here to help you choose the right plan
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button className="flex items-center justify-center px-4 py-2 text-sm font-medium text-secondary hover:text-secondary/80 transition-colors duration-200">
            <Icon name="Mail" size={16} className="mr-2" />
            Email Support
          </button>
          <button className="flex items-center justify-center px-4 py-2 text-sm font-medium text-secondary hover:text-secondary/80 transition-colors duration-200">
            <Icon name="MessageCircle" size={16} className="mr-2" />
            Live Chat
          </button>
          <button className="flex items-center justify-center px-4 py-2 text-sm font-medium text-secondary hover:text-secondary/80 transition-colors duration-200">
            <Icon name="Phone" size={16} className="mr-2" />
            Schedule Call
          </button>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
