import React, { useState } from 'react';
import { predefinedDrinks } from '../data/drinks';

const DrinkSelector = ({ onDrinkSelect }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const filteredDrinks = predefinedDrinks.filter(drink =>
    drink.drinkName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="drink-search">
      <input
        type="text"
        placeholder="Search for a drink..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      {searchQuery && (
        <ul>
          {filteredDrinks.map((drink) => (
            <li key={drink.id}>
              <span>{drink.drinkName}</span>
              <button className="add-btn" onClick={() => onDrinkSelect(drink)}>Add</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DrinkSelector;
