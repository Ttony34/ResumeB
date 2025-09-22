import React, { useState, useRef, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Input from '../../../components/ui/Input';

const SearchBar = ({ searchQuery, onSearchChange, onSortChange, sortBy }) => {
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchRef = useRef(null);

  const suggestions = [
    { text: 'Software Engineer', type: 'role', icon: 'Code' },
    { text: 'Marketing Manager', type: 'role', icon: 'Megaphone' },
    { text: 'Data Scientist', type: 'role', icon: 'BarChart3' },
    { text: 'Product Manager', type: 'role', icon: 'Package' },
    { text: 'UX Designer', type: 'role', icon: 'Palette' },
    { text: 'Financial Analyst', type: 'role', icon: 'Calculator' },
    { text: 'Modern templates', type: 'style', icon: 'Sparkles' },
    { text: 'ATS optimized', type: 'feature', icon: 'Shield' },
    { text: 'One page resume', type: 'feature', icon: 'FileText' }
  ];

  const sortOptions = [
    { value: 'popular', label: 'Most Popular', icon: 'TrendingUp' },
    { value: 'newest', label: 'Newest First', icon: 'Clock' },
    { value: 'rating', label: 'Highest Rated', icon: 'Star' },
    { value: 'downloads', label: 'Most Downloaded', icon: 'Download' },
    { value: 'name', label: 'Name A-Z', icon: 'AlphabeticalSort' }
  ];

  const filteredSuggestions = suggestions?.filter(suggestion =>
    suggestion?.text?.toLowerCase()?.includes(searchQuery?.toLowerCase()) && 
    searchQuery?.length > 0
  );

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef?.current && !searchRef?.current?.contains(event?.target)) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSuggestionClick = (suggestion) => {
    onSearchChange(suggestion?.text);
    setShowSuggestions(false);
  };

  const handleSearchFocus = () => {
    setIsSearchFocused(true);
    setShowSuggestions(true);
  };

  const handleSearchBlur = () => {
    setIsSearchFocused(false);
    // Delay hiding suggestions to allow for clicks
    setTimeout(() => setShowSuggestions(false), 200);
  };

  return (
    <div className="flex flex-col lg:flex-row gap-4 mb-6">
      {/* Search Input */}
      <div className="relative flex-1" ref={searchRef}>
        <div className="relative">
          <Input
            type="search"
            placeholder="Search templates by role, industry, or style..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e?.target?.value)}
            onFocus={handleSearchFocus}
            onBlur={handleSearchBlur}
            className="pl-10 pr-4"
          />
          <Icon 
            name="Search" 
            size={18} 
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-secondary" 
          />
          {searchQuery && (
            <button
              onClick={() => onSearchChange('')}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-text-secondary hover:text-foreground"
            >
              <Icon name="X" size={16} />
            </button>
          )}
        </div>

        {/* Search Suggestions */}
        {showSuggestions && (filteredSuggestions?.length > 0 || searchQuery?.length === 0) && (
          <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-border rounded-lg shadow-premium z-10 max-h-64 overflow-y-auto">
            {searchQuery?.length === 0 ? (
              <div className="p-4">
                <h4 className="text-sm font-medium text-foreground mb-3">Popular Searches</h4>
                <div className="space-y-2">
                  {suggestions?.slice(0, 6)?.map((suggestion, index) => (
                    <button
                      key={index}
                      onClick={() => handleSuggestionClick(suggestion)}
                      className="flex items-center space-x-3 w-full text-left px-3 py-2 rounded hover:bg-muted transition-colors duration-200"
                    >
                      <Icon name={suggestion?.icon} size={16} className="text-text-secondary" />
                      <span className="text-sm text-foreground">{suggestion?.text}</span>
                      <span className="text-xs text-text-secondary capitalize ml-auto">
                        {suggestion?.type}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <div className="p-2">
                {filteredSuggestions?.map((suggestion, index) => (
                  <button
                    key={index}
                    onClick={() => handleSuggestionClick(suggestion)}
                    className="flex items-center space-x-3 w-full text-left px-3 py-2 rounded hover:bg-muted transition-colors duration-200"
                  >
                    <Icon name={suggestion?.icon} size={16} className="text-text-secondary" />
                    <span className="text-sm text-foreground">{suggestion?.text}</span>
                    <span className="text-xs text-text-secondary capitalize ml-auto">
                      {suggestion?.type}
                    </span>
                  </button>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
      {/* Sort Dropdown */}
      <div className="relative">
        <select
          value={sortBy}
          onChange={(e) => onSortChange(e?.target?.value)}
          className="appearance-none bg-white border border-border rounded-lg px-4 py-2 pr-10 text-sm font-medium text-foreground hover:border-secondary focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all duration-200 min-w-48"
        >
          {sortOptions?.map((option) => (
            <option key={option?.value} value={option?.value}>
              {option?.label}
            </option>
          ))}
        </select>
        <Icon 
          name="ChevronDown" 
          size={16} 
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-text-secondary pointer-events-none" 
        />
      </div>
    </div>
  );
};

export default SearchBar;
