import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const LimitedTimeOffer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 2,
    hours: 14,
    minutes: 32,
    seconds: 45
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { days, hours, minutes, seconds } = prev;
        
        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        } else if (days > 0) {
          days--;
          hours = 23;
          minutes = 59;
          seconds = 59;
        }
        
        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const offers = [
    {
      title: "Black Friday Special",
      discount: "50% OFF",
      originalPrice: "$29.99",
      salePrice: "$14.99",
      plan: "Executive Plan",
      description: "Get our premium Executive plan at Premium pricing",
      features: [
        "All Executive templates",
        "LinkedIn optimization",
        "Career coaching session",
        "Priority support"
      ],
      badge: "Limited Time",
      urgency: "Only 127 spots left"
    }
  ];

  const recentActivity = [
    { name: "Sarah M.", location: "New York", action: "upgraded to Executive", time: "2 min ago" },
    { name: "David L.", location: "California", action: "started free trial", time: "5 min ago" },
    { name: "Emily R.", location: "Texas", action: "upgraded to Premium", time: "8 min ago" },
    { name: "Michael K.", location: "Florida", action: "downloaded resume", time: "12 min ago" }
  ];

  const [currentActivity, setCurrentActivity] = useState(0);

  useEffect(() => {
    const activityTimer = setInterval(() => {
      setCurrentActivity(prev => (prev + 1) % recentActivity?.length);
    }, 3000);

    return () => clearInterval(activityTimer);
  }, []);

  return (
    <div className="bg-gradient-career text-white rounded-xl p-6 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-4 right-4 w-32 h-32 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-4 left-4 w-24 h-24 border border-white/20 rounded-full"></div>
      </div>
      <div className="relative z-10">
        {/* Header */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/20 text-sm font-medium mb-3">
            <Icon name="Zap" size={16} className="mr-2" />
            {offers?.[0]?.badge}
          </div>
          <h3 className="text-2xl font-bold mb-2">{offers?.[0]?.title}</h3>
          <p className="text-white/80">{offers?.[0]?.description}</p>
        </div>

        {/* Countdown Timer */}
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 mb-6">
          <div className="text-center mb-4">
            <h4 className="font-semibold mb-2">Offer expires in:</h4>
          </div>
          <div className="grid grid-cols-4 gap-2 text-center">
            <div className="bg-white/20 rounded-lg p-3">
              <div className="text-2xl font-bold">{timeLeft?.days?.toString()?.padStart(2, '0')}</div>
              <div className="text-xs text-white/80">Days</div>
            </div>
            <div className="bg-white/20 rounded-lg p-3">
              <div className="text-2xl font-bold">{timeLeft?.hours?.toString()?.padStart(2, '0')}</div>
              <div className="text-xs text-white/80">Hours</div>
            </div>
            <div className="bg-white/20 rounded-lg p-3">
              <div className="text-2xl font-bold">{timeLeft?.minutes?.toString()?.padStart(2, '0')}</div>
              <div className="text-xs text-white/80">Minutes</div>
            </div>
            <div className="bg-white/20 rounded-lg p-3">
              <div className="text-2xl font-bold">{timeLeft?.seconds?.toString()?.padStart(2, '0')}</div>
              <div className="text-xs text-white/80">Seconds</div>
            </div>
          </div>
        </div>

        {/* Offer Details */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div>
            <div className="flex items-center mb-4">
              <span className="text-4xl font-bold text-conversion-accent mr-3">
                {offers?.[0]?.discount}
              </span>
              <div>
                <div className="text-lg line-through text-white/60">
                  {offers?.[0]?.originalPrice}/month
                </div>
                <div className="text-2xl font-bold">
                  {offers?.[0]?.salePrice}/month
                </div>
              </div>
            </div>
            
            <div className="flex items-center text-sm text-white/80 mb-4">
              <Icon name="AlertCircle" size={16} className="mr-2 text-conversion-accent" />
              {offers?.[0]?.urgency}
            </div>
          </div>

          <div>
            <h5 className="font-semibold mb-3">What's included:</h5>
            <ul className="space-y-2">
              {offers?.[0]?.features?.map((feature, index) => (
                <li key={index} className="flex items-center text-sm">
                  <Icon name="Check" size={16} className="mr-2 text-accent" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mb-6">
          <Button
            variant="default"
            size="lg"
            className="bg-white text-primary hover:bg-white/90 font-semibold px-8"
          >
            <Icon name="Crown" size={18} className="mr-2" />
            Claim This Offer Now
          </Button>
          <p className="text-xs text-white/60 mt-2">
            30-day money-back guarantee • Cancel anytime
          </p>
        </div>

        {/* Social Proof */}
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-2 h-2 bg-accent rounded-full mr-2 animate-pulse"></div>
              <span className="text-sm">
                <strong>{recentActivity?.[currentActivity]?.name}</strong> from {recentActivity?.[currentActivity]?.location} {recentActivity?.[currentActivity]?.action}
              </span>
            </div>
            <span className="text-xs text-white/60">
              {recentActivity?.[currentActivity]?.time}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LimitedTimeOffer;