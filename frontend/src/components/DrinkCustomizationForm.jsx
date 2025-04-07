import React, { useState } from 'react';

const DrinkCustomizationForm = ({ addDrinkToSession }) => {
  const [drinkDetails, setDrinkDetails] = useState({
    drinkName: '',
    alcoholByVolume: '',
    servingVolumeOz: '',
  });

  const handleAdd = () => {
    if (!drinkDetails.drinkName) return;
    addDrinkToSession({ ...drinkDetails, id: Date.now() });
    setDrinkDetails({ drinkName: '', alcoholByVolume: '', servingVolumeOz: '' });
  };

  return (
    <div className="drink-form">
      <h3>Add Custom Drink</h3>
      <input
        type="text"
        placeholder="Drink Name"
        value={drinkDetails.drinkName}
        onChange={(e) => setDrinkDetails({ ...drinkDetails, drinkName: e.target.value })}
      />
      <input
        type="number"
        placeholder="ABV %"
        value={drinkDetails.alcoholByVolume}
        onChange={(e) => setDrinkDetails({ ...drinkDetails, alcoholByVolume: e.target.value })}
      />
      <input
        type="number"
        placeholder="Serving Size (oz)"
        value={drinkDetails.servingVolumeOz}
        onChange={(e) => setDrinkDetails({ ...drinkDetails, servingVolumeOz: e.target.value })}
      />
      <button onClick={handleAdd}>Add Drink</button>
    </div>
  );
};

export default DrinkCustomizationForm;
