import React, { useState } from 'react';
import {portfolioItems} from '../../BLL/PortfolioItems.js';
import PortfolioFramework from './PortfolioFramework';
function SelectionInput() {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [filteredItems, setFilteredItems] = useState(portfolioItems);

  // Get unique categories
  const allCategories = Array.from(
    new Set(portfolioItems.flatMap(item => item.category))
  );

  const handleChange = (e) => {
    const value = e.target.value;
    setSelectedCategory(value);
    const filtered = portfolioItems.filter(item =>
      item.category.includes(value)
    );
    setFilteredItems(filtered);
  };

  return (
    <div>
      <label htmlFor="categorySelect">Filter by Category: </label>
      <select id="categorySelect" value={selectedCategory} onChange={handleChange}>
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