import React, { useState } from 'react';
import { portfolioArray } from '../../BLL/PortfolioItems.js';
import PortfolioFramework from './PortfolioFramework';
import '../../css/portfolio.css';
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
        item.category.includes(value)
      );
      setFilteredItems(filtered);
    }
  };

  return (
    <div className="portfolio-form">
      <label htmlFor="categorySelect">Filter by Category: </label>
      <select class="category-select" value={selectedCategory} onChange={handleChange}>
        <option value="">-- All --</option>
        {allCategories.map(cat => (
          <option key={cat} value={cat}>{cat}</option>
        ))}
      </select>

      <PortfolioFramework items={filteredItems} />
    </div>
  );
}

export default SelectionInput;
