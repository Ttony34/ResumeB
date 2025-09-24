import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Button from '../../components/ui/Button';
import Input from '../../components/ui/Input';
import Icon from '../../components/AppIcon';

const SignIn = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate authentication
    setTimeout(() => {
      setIsLoading(false);
      // On successful sign-in, redirect to dashboard
      navigate('/user-dashboard');
    }, 1500);
  };

  return (
    <>
      <Helmet>
        <title>Sign In - ResumeForge</title>
        <meta name="description" content="Sign in to your ResumeForge account to continue building your professional resume." />
      </Helmet>

      <div className="min-h-screen bg-background flex">
        {/* Left Side - Sign In Form */}
        <div className="flex-1 flex items-center justify-center px-6 py-12">
          <div className="max-w-md w-full space-y-8">
            {/* Header */}
            <div className="text-center">
              <Link to="/homepage" className="inline-flex items-center space-x-3 mb-8">
                <div className="w-10 h-10 gradient-career rounded-lg flex items-center justify-center">
                  <Icon name="FileText" size={24} color="white" strokeWidth={2.5} />
                </div>
                <span className="text-2xl font-bold text-primary font-accent">ResumeForge</span>
              </Link>
              
              <h2 className="text-3xl font-bold text-foreground mb-2">Welcome back</h2>
              <p className="text-text-secondary">Sign in to continue your career journey</p>
            </div>

            {/* Sign In Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email address
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter your email"
                  className="w-full"
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-foreground mb-2">
                  Password
                </label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="Enter your password"
                  className="w-full"
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="rememberMe"
                    name="rememberMe"
                    type="checkbox"
                    checked={formData.rememberMe}
                    onChange={handleInputChange}
                    className="h-4 w-4 text-secondary focus:ring-secondary border-border rounded"
                  />
                  <label htmlFor="rememberMe" className="ml-2 block text-sm text-text-secondary">
                    Remember me
                  </label>
                </div>

                <Link
                  to="/forgot-password"
                  className="text-sm text-secondary hover:text-secondary/80 transition-colors"
                >
                  Forgot password?
                </Link>
              </div>

              <Button
                type="submit"
                variant="default"
                size="lg"
                disabled={isLoading}
                className="w-full bg-secondary hover:bg-secondary/90"
              >
                {isLoading ? (
                  <Icon name="Loader2" size={20} className="animate-spin mr-2" />
                ) : (
                  <Icon name="LogIn" size={20} className="mr-2" />
                )}
                {isLoading ? 'Signing in...' : 'Sign in'}
              </Button>
            </form>

            {/* Social Sign In */}
            <div className="space-y-4">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-border" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-background text-text-secondary">Or continue with</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => console.log('Google sign in')}
                >
                  <Icon name="Chrome" size={16} className="mr-2" />
                  Google
                </Button>
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => console.log('LinkedIn sign in')}
                >
                  <Icon name="Linkedin" size={16} className="mr-2" />
                  LinkedIn
                </Button>
              </div>
            </div>

            {/* Sign Up Link */}
            <div className="text-center">
              <p className="text-text-secondary">
                Don't have an account?{' '}
                <Link
                  to="/sign-up"
                  className="text-secondary hover:text-secondary/80 font-medium transition-colors"
                >
                  Sign up for free
                </Link>
              </p>
            </div>
          </div>
        </div>

        {/* Right Side - Background */}
        <div className="hidden lg:block relative w-0 flex-1">
          <div className="absolute inset-0 gradient-career">
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white px-8">
                <h3 className="text-3xl font-bold mb-4">Join 2.3M+ Professionals</h3>
                <p className="text-xl opacity-90 mb-8">
                  Build resumes that get you hired by top companies worldwide
                </p>
                <div className="grid grid-cols-1 gap-4 max-w-sm mx-auto">
                  <div className="flex items-center space-x-3">
                    <Icon name="CheckCircle" size={20} className="text-accent" />
                    <span>ATS-optimized templates</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="CheckCircle" size={20} className="text-accent" />
                    <span>AI-powered suggestions</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="CheckCircle" size={20} className="text-accent" />
                    <span>Real-time optimization</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;