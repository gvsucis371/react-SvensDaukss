import React from 'react';

const DrinkList = ({ sessionDrinks, removeDrink }) => (
  <div className="drink-list">
    <h3>Drinks Added</h3>
    {sessionDrinks.map((drink, index) => (
      <div key={drink.uniqueId} className="drink-item">
        <span>{drink.drinkName} - {drink.alcoholByVolume}% ABV - {drink.servingVolumeOz} oz</span>
        <button onClick={() => removeDrink(drink.uniqueId)}>✕</button>
      </div>
    ))}
  </div>
);

export default DrinkList;
