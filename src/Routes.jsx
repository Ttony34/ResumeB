import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop";
import ErrorBoundary from "components/ErrorBoundary";
import NotFound from "pages/NotFound";
import TemplateGallery from './pages/template-gallery';
import PricingPremium from './pages/pricing-premium';
import UserDashboard from './pages/user-dashboard';
import AboutResumeForge from './pages/about-resume-forge';
import ResumeBuilderStudio from './pages/resume-builder-studio';
import Homepage from './pages/homepage';
import SignIn from './pages/sign-in';

const Routes = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
      <ScrollToTop />
      <RouterRoutes>
        {/* Define your route here */}
        <Route path="/" element={<AboutResumeForge />} />
        <Route path="/template-gallery" element={<TemplateGallery />} />
        <Route path="/pricing-premium" element={<PricingPremium />} />
        <Route path="/user-dashboard" element={<UserDashboard />} />
        <Route path="/about-resume-forge" element={<AboutResumeForge />} />
        <Route path="/resume-builder-studio" element={<ResumeBuilderStudio />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="*" element={<NotFound />} />
      </RouterRoutes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;
