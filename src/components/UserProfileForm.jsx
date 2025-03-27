import React from 'react';

const UserProfileForm = ({ userProfile, setUserProfile }) => {
  return (
    <div className="user-form">
      <h3>User Profile</h3>
      <select value={userProfile.country} onChange={(e) => setUserProfile({ ...userProfile, country: e.target.value })}>
        <option value="">Select Country</option>
        <option value="usa">United States of America</option>
        <option value="mexico">Mexico</option>
        <option value="canada">Canada</option>
        <option value="uk">United Kingdom</option>
        <option value="lv">Latvia</option>
        <option value="se">Sweden</option>
      </select>
      <input
        type="number"
        placeholder="Age"
        value={userProfile.age || ''}
        onChange={(e) => setUserProfile({ ...userProfile, age: e.target.value })}
      />
      <div className="gender-group">
        <button onClick={() => setUserProfile({ ...userProfile, gender: 'male' })} className={userProfile.gender === 'male' ? 'active' : ''}>Male</button>
        <button onClick={() => setUserProfile({ ...userProfile, gender: 'female' })} className={userProfile.gender === 'female' ? 'active' : ''}>Female</button>
      </div>
      <input
        type="number"
        placeholder="Weight (lbs)"
        value={userProfile.weightLbs || ''}
        onChange={(e) => setUserProfile({ ...userProfile, weightLbs: e.target.value })}
      />
      <div style={{ display: 'flex', gap: '10px' }}>
        <input
          type="number"
          placeholder="Height (ft)"
          value={userProfile.heightFeet || ''}
          onChange={(e) => setUserProfile({ ...userProfile, heightFeet: e.target.value })}
        />
        <input
          type="number"
          placeholder="Height (in)"
          value={userProfile.heightInches || ''}
          onChange={(e) => setUserProfile({ ...userProfile, heightInches: e.target.value })}
        />
      </div>
      <input
        type="time"
        value={userProfile.startTime || ''}
        onChange={(e) => setUserProfile({ ...userProfile, startTime: e.target.value })}
      />
    </div>
  );
};

export default UserProfileForm;
