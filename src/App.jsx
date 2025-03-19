import React from 'react';

const drinkSamples = [
  { id: 1, drinkName: 'Modelo Especial', alcoholByVolume: 4.4, servingVolumeOz: 12 },
  { id: 2, drinkName: 'Kirkland Signature Vodka', alcoholByVolume: 40, servingVolumeOz: 1.5 },
  { id: 3, drinkName: 'Pilsner Urquell', alcoholByVolume: 4.45, servingVolumeOz: 16},
];

const DrinkCard = ({ drinkName, alcoholByVolume, servingVolumeOz }) => (
  <div style={{ border: '1px solid #ccc', padding: '12px', margin: '10px 0' }}>
    <h2>{drinkName}</h2>
    <p><strong>Alcohol By Volume (ABV):</strong> {alcoholByVolume}%</p>
    <p><strong>Serving Size:</strong> {servingVolumeOz} oz</p>
  </div>
);

const BloodAlcoholContentCalculatorApp = () => (
  <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
    <h1>Blood Alcohol Content Calculator (BACC)</h1>
    {drinkSamples.map((drinkItem) => (
      <DrinkCard
        key={drinkItem.id}
        drinkName={drinkItem.drinkName}
        alcoholByVolume={drinkItem.alcoholByVolume}
        servingVolumeOz={drinkItem.servingVolumeOz}
      />
    ))}
  </div>
);

export default BloodAlcoholContentCalculatorApp;
