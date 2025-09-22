import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const TemplateShowcase = () => {
  const [activeCategory, setActiveCategory] = useState('Executive');

  const categories = [
    { id: 'Executive', name: 'Executive', icon: 'Crown', count: 12 },
    { id: 'Creative', name: 'Creative', icon: 'Palette', count: 18 },
    { id: 'Technical', name: 'Technical', icon: 'Code', count: 15 },
    { id: 'Academic', name: 'Academic', icon: 'GraduationCap', count: 10 }
  ];

  const templates = {
    Executive: [
      {
        id: 1,
        name: "CEO Executive",
        image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=300&h=400&fit=crop",
        features: ["Executive Summary", "Board Experience", "Strategic Achievements"],
        popular: true,
        premium: true
      },
      {
        id: 2,
        name: "Senior Manager",
        image: "https://images.unsplash.com/photo-1586281380117-5a60ae2050cc?w=300&h=400&fit=crop",
        features: ["Leadership Focus", "Team Management", "P&L Responsibility"],
        popular: false,
        premium: false
      },
      {
        id: 3,
        name: "Director Level",
        image: "https://images.unsplash.com/photo-1586281380614-67ca8b3ccd72?w=300&h=400&fit=crop",
        features: ["Strategic Vision", "Department Leadership", "Growth Metrics"],
        popular: true,
        premium: true
      }
    ],
    Creative: [
      {
        id: 4,
        name: "Graphic Designer",
        image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=300&h=400&fit=crop",
        features: ["Portfolio Integration", "Creative Skills", "Visual Impact"],
        popular: true,
        premium: false
      },
      {
        id: 5,
        name: "UX Designer",
        image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=300&h=400&fit=crop",
        features: ["User Research", "Design Process", "Case Studies"],
        popular: false,
        premium: true
      },
      {
        id: 6,
        name: "Marketing Creative",
        image: "https://images.unsplash.com/photo-1586281380117-5a60ae2050cc?w=300&h=400&fit=crop",
        features: ["Campaign Results", "Brand Development", "Creative Strategy"],
        popular: true,
        premium: false
      }
    ],
    Technical: [
      {
        id: 7,
        name: "Software Engineer",
        image: "https://images.unsplash.com/photo-1586281380614-67ca8b3ccd72?w=300&h=400&fit=crop",
        features: ["Technical Skills", "Project Portfolio", "Code Examples"],
        popular: true,
        premium: false
      },
      {
        id: 8,
        name: "DevOps Engineer",
        image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=300&h=400&fit=crop",
        features: ["Infrastructure", "Automation", "Cloud Platforms"],
        popular: false,
        premium: true
      },
      {
        id: 9,
        name: "Data Scientist",
        image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=300&h=400&fit=crop",
        features: ["Analytics Projects", "ML Models", "Data Visualization"],
        popular: true,
        premium: true
      }
    ],
    Academic: [
      {
        id: 10,
        name: "Research Professor",
        image: "https://images.unsplash.com/photo-1586281380117-5a60ae2050cc?w=300&h=400&fit=crop",
        features: ["Publications", "Research Grants", "Academic Achievements"],
        popular: true,
        premium: false
      },
      {
        id: 11,
        name: "PhD Candidate",
        image: "https://images.unsplash.com/photo-1586281380614-67ca8b3ccd72?w=300&h=400&fit=crop",
        features: ["Dissertation Focus", "Conference Papers", "Teaching Experience"],
        popular: false,
        premium: false
      },
      {
        id: 12,
        name: "Academic Administrator",
        image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=300&h=400&fit=crop",
        features: ["Administrative Leadership", "Program Development", "Faculty Relations"],
        popular: false,
        premium: true
      }
    ]
  };

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
            <Icon name="Layout" size={16} className="mr-2" />
            Professional Templates
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            Templates Designed for Your Industry
          </h2>
          
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Choose from our curated collection of industry-specific templates, 
            each crafted by career experts and optimized for modern hiring practices.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories?.map((category) => (
            <button
              key={category?.id}
              onClick={() => setActiveCategory(category?.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category?.id
                  ? 'bg-secondary text-white shadow-lg scale-105'
                  : 'bg-card text-text-secondary hover:bg-secondary/10 hover:text-secondary'
              }`}
            >
              <Icon name={category?.icon} size={18} />
              <span>{category?.name}</span>
              <span className="bg-white/20 text-xs px-2 py-1 rounded-full">
                {category?.count}
              </span>
            </button>
          ))}
        </div>

        {/* Templates Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {templates?.[activeCategory]?.map((template) => (
            <div
              key={template?.id}
              className="group bg-card rounded-2xl overflow-hidden shadow-subtle hover:shadow-premium transition-all duration-500 hover:-translate-y-2"
            >
              {/* Template Image */}
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src={template?.image}
                  alt={template?.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {template?.features?.map((feature, index) => (
                        <span
                          key={index}
                          className="text-xs bg-white/20 backdrop-blur-sm text-white px-2 py-1 rounded-full"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                    <Button
                      variant="default"
                      size="sm"
                      className="bg-white text-primary hover:bg-white/90 w-full"
                      iconName="Eye"
                      iconPosition="left"
                    >
                      Preview Template
                    </Button>
                  </div>
                </div>

                {/* Badges */}
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  {template?.popular && (
                    <span className="bg-accent text-white text-xs px-2 py-1 rounded-full font-medium">
                      Popular
                    </span>
                  )}
                  {template?.premium && (
                    <span className="bg-primary text-white text-xs px-2 py-1 rounded-full font-medium flex items-center">
                      <Icon name="Crown" size={12} className="mr-1" />
                      Premium
                    </span>
                  )}
                </div>
              </div>

              {/* Template Info */}
              <div className="p-6">
                <h3 className="font-semibold text-primary mb-2 group-hover:text-secondary transition-colors duration-300">
                  {template?.name}
                </h3>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)]?.map((_, i) => (
                      <Icon
                        key={i}
                        name="Star"
                        size={14}
                        className="text-accent fill-current"
                      />
                    ))}
                    <span className="text-sm text-text-secondary ml-2">4.9</span>
                  </div>
                  <Icon
                    name="ArrowRight"
                    size={16}
                    className="text-text-secondary group-hover:text-secondary group-hover:translate-x-1 transition-all duration-300"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center">
          <Link to="/template-gallery">
            <Button
              variant="outline"
              size="lg"
              className="px-8 py-4 text-lg font-semibold border-2 border-secondary text-secondary hover:bg-secondary hover:text-white"
              iconName="Grid"
              iconPosition="left"
            >
              View All 55+ Templates
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TemplateShowcase;