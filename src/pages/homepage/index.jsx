import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import ValueProposition from './components/ValueProposition';
import TemplateShowcase from './components/TemplateShowcase';
import SuccessStories from './components/SuccessStories';
import PricingPreview from './components/PricingPreview';
import TrustSignals from './components/TrustSignals';
import Footer from './components/Footer';

const Homepage = () => {
  useEffect(() => {
    // Scroll to top on component mount
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>ResumeForge - Your Career Deserves a Resume That Opens Doors</title>
        <meta 
          name="description" 
          content="Transform your career with AI-powered resume building. Create ATS-optimized, professional resumes that get you noticed. Join 2.3M+ professionals who've accelerated their careers with ResumeForge." 
        />
        <meta name="keywords" content="resume builder, professional resume, ATS optimized, career advancement, job search, resume templates" />
        <meta property="og:title" content="ResumeForge - Professional Resume Builder" />
        <meta property="og:description" content="Create stunning, ATS-optimized resumes that land interviews. Trusted by 2.3M+ professionals worldwide." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://resumeforge.com" />
        <link rel="canonical" href="https://resumeforge.com" />
      </Helmet>

      <div className="min-h-screen bg-background">
        {/* Header */}
        <Header />

        {/* Main Content */}
        <main>
          {/* Hero Section */}
          <HeroSection />

          {/* Value Proposition */}
          <ValueProposition />

          {/* Template Showcase */}
          <TemplateShowcase />

          {/* Success Stories */}
          <SuccessStories />

          {/* Pricing Preview */}
          <PricingPreview />

          {/* Trust Signals */}
          <TrustSignals />
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
};

export default Homepage;