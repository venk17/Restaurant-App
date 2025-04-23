import React from 'react';
import './CategoryTabs.css';

const CategoryTabs = ({ categories, activeCategory, onCategoryChange }) => {
  return (
    <div className="category-tabs">
      <div className="tabs-container">
        {categories.map((category, index) => (
          <button
            key={category.menu_category_id}
            className={`tab ${index === activeCategory ? 'active' : ''}`}
            onClick={() => onCategoryChange(index)}
          >
            {category.menu_category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryTabs;