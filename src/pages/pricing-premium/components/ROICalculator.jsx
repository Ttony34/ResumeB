import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Input from '../../../components/ui/Input';
import Button from '../../../components/ui/Button';

const ROICalculator = () => {
  const [currentSalary, setCurrentSalary] = useState('75000');
  const [targetIncrease, setTargetIncrease] = useState('15');
  const [results, setResults] = useState({
    monthlyIncrease: 0,
    yearlyIncrease: 0,
    roi: 0,
    paybackPeriod: 0
  });

  const premiumCost = 179.88; // Annual premium cost

  useEffect(() => {
    const salary = parseFloat(currentSalary) || 0;
    const increase = parseFloat(targetIncrease) || 0;
    
    const yearlyIncrease = (salary * increase) / 100;
    const monthlyIncrease = yearlyIncrease / 12;
    const roi = ((yearlyIncrease - premiumCost) / premiumCost) * 100;
    const paybackPeriod = premiumCost / monthlyIncrease;

    setResults({
      monthlyIncrease,
      yearlyIncrease,
      roi,
      paybackPeriod
    });
  }, [currentSalary, targetIncrease]);

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    })?.format(amount);
  };

  const successStories = [
    {
      name: "Sarah Chen",
      role: "Marketing Manager",
      increase: "28%",
      amount: "$18,000",
      company: "Tech Startup"
    },
    {
      name: "Michael Rodriguez",
      role: "Software Engineer",
      increase: "22%",
      amount: "$22,000",
      company: "Fortune 500"
    },
    {
      name: "Emily Johnson",
      role: "Project Manager",
      increase: "35%",
      amount: "$25,000",
      company: "Consulting Firm"
    }
  ];

  return (
    <div className="bg-card border border-border rounded-xl p-6">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-foreground mb-2">
          Calculate Your ROI
        </h3>
        <p className="text-text-secondary">
          See how much you could earn with a professional resume
        </p>
      </div>
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Calculator */}
        <div className="space-y-6">
          <div className="space-y-4">
            <Input
              label="Current Annual Salary"
              type="number"
              value={currentSalary}
              onChange={(e) => setCurrentSalary(e?.target?.value)}
              placeholder="75000"
              description="Enter your current yearly salary"
            />

            <Input
              label="Expected Salary Increase (%)"
              type="number"
              value={targetIncrease}
              onChange={(e) => setTargetIncrease(e?.target?.value)}
              placeholder="15"
              description="Average increase with professional resume is 15-25%"
            />
          </div>

          {/* Results */}
          <div className="bg-muted rounded-lg p-4 space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">
                  {formatCurrency(results?.monthlyIncrease)}
                </div>
                <div className="text-sm text-text-secondary">Monthly Increase</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-secondary">
                  {formatCurrency(results?.yearlyIncrease)}
                </div>
                <div className="text-sm text-text-secondary">Yearly Increase</div>
              </div>
            </div>

            <div className="border-t border-border pt-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-xl font-bold text-foreground">
                    {results?.roi?.toFixed(0)}%
                  </div>
                  <div className="text-sm text-text-secondary">ROI</div>
                </div>
                <div className="text-center">
                  <div className="text-xl font-bold text-foreground">
                    {results?.paybackPeriod?.toFixed(1)} months
                  </div>
                  <div className="text-sm text-text-secondary">Payback Period</div>
                </div>
              </div>
            </div>
          </div>

          <Button variant="default" fullWidth className="bg-secondary hover:bg-secondary/90">
            <Icon name="TrendingUp" size={18} className="mr-2" />
            Start Building Your Resume
          </Button>
        </div>

        {/* Success Stories */}
        <div className="space-y-4">
          <h4 className="text-lg font-semibold text-foreground mb-4">
            Real Success Stories
          </h4>
          
          {successStories?.map((story, index) => (
            <div key={index} className="bg-muted rounded-lg p-4">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h5 className="font-semibold text-foreground">{story?.name}</h5>
                  <p className="text-sm text-text-secondary">{story?.role}</p>
                </div>
                <div className="text-right">
                  <div className="text-lg font-bold text-accent">{story?.increase}</div>
                  <div className="text-sm text-text-secondary">increase</div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-text-secondary">{story?.company}</span>
                <span className="font-semibold text-secondary">{story?.amount}</span>
              </div>
            </div>
          ))}

          <div className="bg-accent/10 border border-accent/20 rounded-lg p-4">
            <div className="flex items-center mb-2">
              <Icon name="Award" size={20} className="text-accent mr-2" />
              <span className="font-semibold text-foreground">Average Results</span>
            </div>
            <p className="text-sm text-text-secondary mb-2">
              Our premium users report an average salary increase of 22% within 6 months of using ResumeForge.
            </p>
            <div className="flex items-center text-sm text-accent">
              <Icon name="Users" size={16} className="mr-1" />
              Based on 2,847 user surveys
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ROICalculator;