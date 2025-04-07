import React, { useState } from 'react';

const UserProfileForm = ({ userProfile, setUserProfile }) => {
  
  const [submissionStatus, setSubmissionStatus] = useState(null);

  const handleSubmit = async () => {
    const { name, email, weightLbs, gender } = userProfile;

    if (!name || !email.includes('@')) {
      setSubmissionStatus('Invalid name or email');
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/api/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          email,
          weight: weightLbs,
          gender,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setSubmissionStatus(data.error || 'Failed to submit');
      } else {
        setSubmissionStatus('User submitted successfully!');
      }
    } catch (error) {
      setSubmissionStatus('Network error');
    }
  };

  return (
    <div className="user-form">
      <h3>User Profile</h3>
      <input 
      type="text"
      placeholder="Name"
      value={userProfile.name || ''}
      onChange={(e) => setUserProfile({ ...userProfile, name: e.target.value })}
      />
      <input
      type="email"
      placeholder="Email"
      value={userProfile.email || ''}
      onChange={(e) => setUserProfile({ ...userProfile, email: e.target.value })}
      />
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
      
      <button onClick={handleSubmit}>Submit Profile</button>
      {submissionStatus && <p>{submissionStatus}</p>}

    </div>
  );
};

export default UserProfileForm;
