import React from 'react';

interface FilterOption {
  id: string;
  label: string;
}

interface ProductFilterProps {
  categories: FilterOption[];
  applications: FilterOption[];
  selectedCategory: string;
  selectedApplication: string;
  onCategoryChange: (category: string) => void;
  onApplicationChange: (application: string) => void;
}

export function ProductFilter({
  categories,
  applications,
  selectedCategory,
  selectedApplication,
  onCategoryChange,
  onApplicationChange
}: ProductFilterProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="mb-6">
        <h3 className="font-semibold mb-3">Categories</h3>
        <div className="space-y-2">
          {categories.map((category) => (
            <label key={category.id} className="flex items-center">
              <input
                type="radio"
                name="category"
                value={category.id}
                checked={selectedCategory === category.id}
                onChange={(e) => onCategoryChange(e.target.value)}
                className="mr-2"
              />
              {category.label}
            </label>
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-semibold mb-3">Applications</h3>
        <div className="space-y-2">
          {applications.map((application) => (
            <label key={application.id} className="flex items-center">
              <input
                type="checkbox"
                value={application.id}
                checked={selectedApplication === application.id}
                onChange={(e) => onApplicationChange(e.target.value)}
                className="mr-2"
              />
              {application.label}
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}