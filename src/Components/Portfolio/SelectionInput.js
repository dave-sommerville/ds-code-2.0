import React, { useState } from 'react';
import { portfolioArray } from '../../BLL/PortfolioItems.js';
import PortfolioFramework from './PortfolioFramework';

function SelectionInput() {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [filteredItems, setFilteredItems] = useState(portfolioArray || []);

  const allCategories = Array.from(
    new Set((portfolioArray || []).flatMap(item => item.category))
  );

  const handleChange = (e) => {
    const value = e.target.value;
    setSelectedCategory(value);

    if (!value) {
      setFilteredItems(portfolioArray);
    } else {
      const filtered = portfolioArray.filter(item =>
        item.category?.includes(value) // safe optional chaining
      );
      setFilteredItems(filtered);
    }
  };

  return (
    <div className="portfolio-form">
      <select
        className="category-select"   // ✅ fixed className
        value={selectedCategory}
        onChange={handleChange}
      >
        <option value="">-- All --</option>
        {allCategories.map(cat => (
          <option key={cat} value={cat}>{cat}</option>
        ))}
      </select>

      {/* ✅ Only render framework if we have items */}
      {filteredItems.length > 0 ? (
        <PortfolioFramework items={filteredItems} />
      ) : (
        <p>No portfolio items found for this category.</p>
      )}
    </div>
  );
}

export default SelectionInput;
