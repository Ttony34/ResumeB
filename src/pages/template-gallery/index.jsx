import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import FilterSidebar from './components/FilterSidebar';
import SearchBar from './components/SearchBar';
import TemplateCard from './components/TemplateCard';
import TemplatePreviewModal from './components/TemplatePreviewModal';
import ComparisonPanel from './components/ComparisonPanel';
import RecommendationSection from './components/RecommendationSection';

const TemplateGallery = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('popular');
  const [filters, setFilters] = useState({});
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [isComparing, setIsComparing] = useState(false);
  const [selectedForComparison, setSelectedForComparison] = useState([]);
  const [isComparisonOpen, setIsComparisonOpen] = useState(false);
  const [viewMode, setViewMode] = useState('grid'); // grid or list

  // Mock template data
  const mockTemplates = [
    {
      id: 1,
      name: "Modern Professional",
      description: "Clean, contemporary design perfect for tech and business professionals. Features optimized spacing and modern typography.",
      previewImage: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&h=600&fit=crop",
      mobilePreview: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=300&h=400&fit=crop",
      printPreview: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=600&h=800&fit=crop",
      isPremium: false,
      industry: "Technology",
      experience: "Mid-Career",
      style: "Modern",
      features: ["ATS Optimized", "One Page Format", "Skills Section", "Social Links", "Color Customization"],
      rating: 4.8,
      reviews: 1247,
      downloads: "12.5K",
      successRate: 87,
      trending: true,
      isNew: false
    },
    {
      id: 2,
      name: "Executive Elite",
      description: "Sophisticated design for senior-level professionals and executives. Emphasizes leadership experience and achievements.",
      previewImage: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=600&fit=crop",
      mobilePreview: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=300&h=400&fit=crop",
      printPreview: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=800&fit=crop",
      isPremium: true,
      industry: "Executive",
      experience: "Executive",
      style: "Professional",
      features: ["ATS Optimized", "Two Page Format", "Executive Summary", "References Section", "Premium Typography"],
      rating: 4.9,
      reviews: 892,
      downloads: "8.3K",
      successRate: 92,
      trending: false,
      isNew: false
    },
    {
      id: 3,
      name: "Creative Portfolio",
      description: "Vibrant design for creative professionals in design, marketing, and media. Includes portfolio section and visual elements.",
      previewImage: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=600&fit=crop",
      mobilePreview: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=300&h=400&fit=crop",
      printPreview: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=800&fit=crop",
      isPremium: true,
      industry: "Creative",
      experience: "Mid-Career",
      style: "Creative",
      features: ["Portfolio Section", "Photo Support", "Color Customization", "Creative Layout", "Social Links"],
      rating: 4.7,
      reviews: 634,
      downloads: "5.8K",
      successRate: 83,
      trending: true,
      isNew: true
    },
    {
      id: 4,
      name: "Healthcare Professional",
      description: "Trusted design for healthcare workers, emphasizing certifications, clinical experience, and patient care skills.",
      previewImage: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=600&fit=crop",
      mobilePreview: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=300&h=400&fit=crop",
      printPreview: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=800&fit=crop",
      isPremium: false,
      industry: "Healthcare",
      experience: "Senior",
      style: "Professional",
      features: ["ATS Optimized", "Certifications Section", "Clinical Experience", "References Section", "Professional Layout"],
      rating: 4.6,
      reviews: 456,
      downloads: "4.2K",
      successRate: 89,
      trending: false,
      isNew: false
    },
    {
      id: 5,
      name: "Finance Analyst",
      description: "Professional template for finance and accounting professionals. Highlights analytical skills and quantitative achievements.",
      previewImage: "https://images.unsplash.com/photo-1554224154-26032fced8bd?w=400&h=600&fit=crop",
      mobilePreview: "https://images.unsplash.com/photo-1554224154-26032fced8bd?w=300&h=400&fit=crop",
      printPreview: "https://images.unsplash.com/photo-1554224154-26032fced8bd?w=600&h=800&fit=crop",
      isPremium: false,
      industry: "Finance",
      experience: "Mid-Career",
      style: "Classic",
      features: ["ATS Optimized", "Quantitative Achievements", "Skills Section", "Professional Layout", "Clean Typography"],
      rating: 4.5,
      reviews: 723,
      downloads: "6.7K",
      successRate: 85,
      trending: false,
      isNew: false
    },
    {
      id: 6,
      name: "Minimalist Pro",
      description: "Clean, minimal design that lets your experience speak for itself. Perfect for any industry with a focus on content.",
      previewImage: "https://images.unsplash.com/photo-1586281380614-a1c4d9e0b6b8?w=400&h=600&fit=crop",
      mobilePreview: "https://images.unsplash.com/photo-1586281380614-a1c4d9e0b6b8?w=300&h=400&fit=crop",
      printPreview: "https://images.unsplash.com/photo-1586281380614-a1c4d9e0b6b8?w=600&h=800&fit=crop",
      isPremium: true,
      industry: "Technology",
      experience: "Entry",
      style: "Minimalist",
      features: ["ATS Optimized", "One Page Format", "Clean Layout", "Focus on Content", "Minimal Design"],
      rating: 4.8,
      reviews: 1089,
      downloads: "9.4K",
      successRate: 88,
      trending: true,
      isNew: true
    },
    {
      id: 7,
      name: "Academic Scholar",
      description: "Comprehensive template for academic professionals, researchers, and educators. Includes publications and research sections.",
      previewImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop",
      mobilePreview: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop",
      printPreview: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=800&fit=crop",
      isPremium: false,
      industry: "Education",
      experience: "Senior",
      style: "Classic",
      features: ["Publications Section", "Research Experience", "Academic Achievements", "References Section", "Professional Layout"],
      rating: 4.4,
      reviews: 312,
      downloads: "2.8K",
      successRate: 91,
      trending: false,
      isNew: false
    },
    {
      id: 8,
      name: "Sales Champion",
      description: "Dynamic template for sales and marketing professionals. Emphasizes achievements, targets, and client relationships.",
      previewImage: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=600&fit=crop",
      mobilePreview: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=300&h=400&fit=crop",
      printPreview: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=800&fit=crop",
      isPremium: true,
      industry: "Sales",
      experience: "Mid-Career",
      style: "Modern",
      features: ["ATS Optimized", "Achievement Metrics", "Client Success Stories", "Sales Targets", "Dynamic Layout"],
      rating: 4.7,
      reviews: 567,
      downloads: "7.1K",
      successRate: 86,
      trending: true,
      isNew: false
    }
  ];

  // Filter and sort templates
  const filteredTemplates = mockTemplates?.filter(template => {
    // Search filter
    if (searchQuery) {
      const query = searchQuery?.toLowerCase();
      const matchesSearch = 
        template?.name?.toLowerCase()?.includes(query) ||
        template?.description?.toLowerCase()?.includes(query) ||
        template?.industry?.toLowerCase()?.includes(query) ||
        template?.experience?.toLowerCase()?.includes(query) ||
        template?.style?.toLowerCase()?.includes(query) ||
        template?.features?.some(feature => feature?.toLowerCase()?.includes(query));
      
      if (!matchesSearch) return false;
    }

    // Apply filters
    for (const [filterKey, filterValues] of Object.entries(filters)) {
      if (filterValues?.length === 0) continue;

      switch (filterKey) {
        case 'industry':
          if (!filterValues?.includes(template?.industry?.toLowerCase())) return false;
          break;
        case 'experience':
          const expMap = {
            'entry': 'Entry',
            'mid': 'Mid-Career',
            'senior': 'Senior',
            'executive': 'Executive'
          };
          if (!filterValues?.some(val => expMap?.[val] === template?.experience)) return false;
          break;
        case 'style':
          if (!filterValues?.includes(template?.style?.toLowerCase())) return false;
          break;
        case 'access':
          if (filterValues?.includes('free') && template?.isPremium) return false;
          if (filterValues?.includes('premium') && !template?.isPremium) return false;
          break;
        case 'features':
          const hasRequiredFeatures = filterValues?.some(feature => 
            template?.features?.some(templateFeature => 
              templateFeature?.toLowerCase()?.includes(feature?.replace('-', ' '))
            )
          );
          if (!hasRequiredFeatures) return false;
          break;
      }
    }

    return true;
  });

  // Sort templates
  const sortedTemplates = [...filteredTemplates]?.sort((a, b) => {
    switch (sortBy) {
      case 'popular':
        return parseInt(b?.downloads?.replace('K', '000')?.replace('.', '')) - 
               parseInt(a?.downloads?.replace('K', '000')?.replace('.', ''));
      case 'newest':
        return b?.isNew - a?.isNew;
      case 'rating':
        return b?.rating - a?.rating;
      case 'downloads':
        return parseInt(b?.downloads?.replace('K', '000')?.replace('.', '')) - 
               parseInt(a?.downloads?.replace('K', '000')?.replace('.', ''));
      case 'name':
        return a?.name?.localeCompare(b?.name);
      default:
        return 0;
    }
  });

  const handleFilterChange = (filterKey, values) => {
    setFilters(prev => ({
      ...prev,
      [filterKey]: values
    }));
  };

  const handleClearFilters = () => {
    setFilters({});
    setSearchQuery('');
  };

  const handlePreview = (template) => {
    setSelectedTemplate(template);
    setIsPreviewOpen(true);
  };

  const handleCompareToggle = (templateId) => {
    setSelectedForComparison(prev => {
      if (prev?.includes(templateId)) {
        return prev?.filter(id => id !== templateId);
      } else if (prev?.length < 3) {
        return [...prev, templateId];
      }
      return prev;
    });
  };

  const handleStartComparison = () => {
    setIsComparing(true);
  };

  const handleStopComparison = () => {
    setIsComparing(false);
    setSelectedForComparison([]);
  };

  const handleOpenComparison = () => {
    setIsComparisonOpen(true);
  };

  const handleRemoveFromComparison = (templateId) => {
    setSelectedForComparison(prev => prev?.filter(id => id !== templateId));
  };

  const getComparisonTemplates = () => {
    return mockTemplates?.filter(template => selectedForComparison?.includes(template?.id));
  };

  useEffect(() => {
    // Close mobile filter when screen size changes
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsFilterOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <Helmet>
        <title>Template Gallery - Professional Resume Templates | ResumeForge</title>
        <meta name="description" content="Browse our collection of professional resume templates. ATS-optimized designs for every industry and experience level. Find your perfect template today." />
        <meta name="keywords" content="resume templates, professional resume, ATS optimized, job application, career" />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="pt-16">
          {/* Hero Section */}
          <section className="bg-gradient-career text-white py-12">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
              <div className="text-center">
                <h1 className="text-4xl lg:text-5xl font-bold mb-4">
                  Professional Resume Templates
                </h1>
                <p className="text-xl text-white/90 mb-6 max-w-3xl mx-auto">
                  Discover ATS-optimized templates designed by hiring experts. 
                  Choose from {mockTemplates?.length}+ professional designs that get you noticed.
                </p>
                <div className="flex flex-wrap justify-center gap-4 text-sm">
                  <div className="flex items-center space-x-2">
                    <Icon name="Shield" size={16} />
                    <span>ATS Optimized</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icon name="Download" size={16} />
                    <span>50K+ Downloads</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icon name="Star" size={16} />
                    <span>4.8 Average Rating</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icon name="Target" size={16} />
                    <span>87% Success Rate</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
            <div className="flex gap-8">
              {/* Filter Sidebar */}
              <FilterSidebar
                filters={filters}
                onFilterChange={handleFilterChange}
                onClearFilters={handleClearFilters}
                isOpen={isFilterOpen}
                onClose={() => setIsFilterOpen(false)}
              />

              {/* Main Content */}
              <div className="flex-1 min-w-0">
                {/* Search and Controls */}
                <div className="mb-6">
                  <SearchBar
                    searchQuery={searchQuery}
                    onSearchChange={setSearchQuery}
                    onSortChange={setSortBy}
                    sortBy={sortBy}
                  />

                  {/* Controls Bar */}
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div className="flex items-center space-x-4">
                      {/* Mobile Filter Button */}
                      <Button
                        variant="outline"
                        onClick={() => setIsFilterOpen(true)}
                        className="lg:hidden"
                      >
                        <Icon name="Filter" size={16} className="mr-2" />
                        Filters
                        {Object.values(filters)?.reduce((total, values) => total + values?.length, 0) > 0 && (
                          <span className="ml-2 bg-secondary text-white text-xs px-2 py-1 rounded-full">
                            {Object.values(filters)?.reduce((total, values) => total + values?.length, 0)}
                          </span>
                        )}
                      </Button>

                      {/* Results Count */}
                      <span className="text-sm text-text-secondary">
                        {sortedTemplates?.length} templates found
                      </span>
                    </div>

                    <div className="flex items-center space-x-3">
                      {/* Comparison Controls */}
                      {!isComparing ? (
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={handleStartComparison}
                        >
                          <Icon name="GitCompare" size={16} className="mr-2" />
                          Compare
                        </Button>
                      ) : (
                        <div className="flex items-center space-x-2">
                          <span className="text-sm text-text-secondary">
                            {selectedForComparison?.length}/3 selected
                          </span>
                          {selectedForComparison?.length > 1 && (
                            <Button
                              variant="default"
                              size="sm"
                              onClick={handleOpenComparison}
                              className="bg-secondary hover:bg-secondary/90"
                            >
                              <Icon name="GitCompare" size={16} className="mr-2" />
                              Compare ({selectedForComparison?.length})
                            </Button>
                          )}
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={handleStopComparison}
                          >
                            Cancel
                          </Button>
                        </div>
                      )}

                      {/* View Mode Toggle */}
                      <div className="flex border border-border rounded-lg overflow-hidden">
                        <button
                          onClick={() => setViewMode('grid')}
                          className={`p-2 transition-colors duration-200 ${
                            viewMode === 'grid' ?'bg-secondary text-white' :'bg-white text-text-secondary hover:text-foreground'
                          }`}
                        >
                          <Icon name="Grid3X3" size={16} />
                        </button>
                        <button
                          onClick={() => setViewMode('list')}
                          className={`p-2 transition-colors duration-200 ${
                            viewMode === 'list' ?'bg-secondary text-white' :'bg-white text-text-secondary hover:text-foreground'
                          }`}
                        >
                          <Icon name="List" size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Templates Grid/List */}
                {sortedTemplates?.length > 0 ? (
                  <div className={`
                    ${viewMode === 'grid' ?'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6' :'space-y-4'
                    }
                  `}>
                    {sortedTemplates?.map((template) => (
                      <TemplateCard
                        key={template?.id}
                        template={template}
                        onPreview={handlePreview}
                        onCompare={handleCompareToggle}
                        isComparing={isComparing}
                        isSelected={selectedForComparison?.includes(template?.id)}
                      />
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <Icon name="Search" size={48} className="text-text-secondary mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-foreground mb-2">No templates found</h3>
                    <p className="text-text-secondary mb-4">
                      Try adjusting your search criteria or filters to find more templates.
                    </p>
                    <Button variant="outline" onClick={handleClearFilters}>
                      Clear All Filters
                    </Button>
                  </div>
                )}

                {/* Recommendations Section */}
                {sortedTemplates?.length > 0 && (
                  <div className="mt-12">
                    <RecommendationSection
                      recommendations={mockTemplates}
                      onPreview={handlePreview}
                      onCompare={handleCompareToggle}
                      isComparing={isComparing}
                      selectedTemplates={selectedForComparison}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </main>

        {/* Template Preview Modal */}
        <TemplatePreviewModal
          template={selectedTemplate}
          isOpen={isPreviewOpen}
          onClose={() => setIsPreviewOpen(false)}
        />

        {/* Comparison Panel */}
        <ComparisonPanel
          templates={getComparisonTemplates()}
          onRemove={handleRemoveFromComparison}
          onClear={() => setSelectedForComparison([])}
          isOpen={isComparisonOpen}
          onClose={() => setIsComparisonOpen(false)}
        />
      </div>
    </>
  );
};

export default TemplateGallery;