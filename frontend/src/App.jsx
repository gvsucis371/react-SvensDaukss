import React, { useState } from 'react';
import UserProfileForm from './components/UserProfileForm';
import DrinkSelector from './components/DrinkSelector';
import DrinkCustomizationForm from './components/DrinkCustomizationForm';
import DrinkList from './components/DrinkList';

const BloodAlcoholConcentrationCalculatorApp = () => {
  const [userProfile, setUserProfile] = useState({});
  const [sessionDrinks, setSessionDrinks] = useState([]);

  const addDrinkToSession = (drink) => {
    const uniqueDrink = { ...drink, uniqueId: crypto.randomUUID() };
    setSessionDrinks([...sessionDrinks, uniqueDrink]);
  };

  const removeDrink = (idToRemove) => {
    setSessionDrinks(prevDrinks => prevDrinks.filter(d => d.uniqueId !== idToRemove));
  };

  return (
    <div className="container">
      <h1>Blood Alcohol Concentration Calculator</h1>
      <UserProfileForm userProfile={userProfile} setUserProfile={setUserProfile} />
      <DrinkSelector onDrinkSelect={addDrinkToSession} />
      <DrinkCustomizationForm addDrinkToSession={addDrinkToSession} />
      <DrinkList sessionDrinks={sessionDrinks} removeDrink={removeDrink} />
    </div>
  );
};

export default BloodAlcoholConcentrationCalculatorApp;
