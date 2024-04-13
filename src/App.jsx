// src/App.jsx
import React, { useState } from 'react';
import './App.css';
import Welcome from './components/Welcome';

function App() {
  const [crewmateName, setCrewmateName] = useState('');
  const [crewmateColor, setCrewmateColor] = useState('');
  const [crewmateAttributes, setCrewmateAttributes] = useState([]);
  const [crewmateList, setCrewmateList] = useState([]);

  const handleNameChange = (e) => {
    setCrewmateName(e.target.value);
  };

  const handleColorChange = (color) => {
    setCrewmateColor(color);
  };

  const handleAttributeChange = (e) => {
    const attribute = e.target.value;
    if (e.target.checked) {
      setCrewmateAttributes([...crewmateAttributes, attribute]);
    } else {
      setCrewmateAttributes(crewmateAttributes.filter((attr) => attr !== attribute));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newCrewmate = {
      name: crewmateName,
      color: crewmateColor,
      attributes: crewmateAttributes,
    };
    setCrewmateList([...crewmateList, newCrewmate]);
    // Reset form fields after submitting
    setCrewmateName('');
    setCrewmateColor('');
    setCrewmateAttributes([]);
  };

  const handleDelete = (index) => {
    setCrewmateList(crewmateList.filter((_, i) => i !== index));
  };

  return (
    <div className="App">
      <Welcome />
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={crewmateName} onChange={handleNameChange} />
        </label>
        <label>
          Color:
          <select value={crewmateColor} onChange={(e) => handleColorChange(e.target.value)}>
            <option value="">Select color</option>
            <option value="red">Red</option>
            <option value="blue">Blue</option>
            <option value="green">Green</option>
            <option value="yellow">Yellow</option>
            <option value="orange">Orange</option>
            <option value="purple">Purple</option>
            {/* Add more options as needed */}
          </select>
        </label>
        <label>
          Attributes:
          <div>
            <input type="checkbox" value="Healer" onChange={handleAttributeChange} /> Healer
            <input type="checkbox" value="Imposter" onChange={handleAttributeChange} /> Imposter
            <input type="checkbox" value="Fixer" onChange={handleAttributeChange} /> Fixer
            <input type="checkbox" value="Pilot" onChange={handleAttributeChange} /> Pilot
            <input type="checkbox" value="Voyager" onChange={handleAttributeChange} /> Voyager
            <input type="checkbox" value="Hero" onChange={handleAttributeChange} /> Hero
            <input type="checkbox" value="Dead" onChange={handleAttributeChange} /> Dead
            <input type="checkbox" value="NPC" onChange={handleAttributeChange} /> NPC
            {/* Add more attributes as needed */}
          </div>
        </label>
        <button type="submit">Create Crewmate</button>
      </form>
      <div className="CrewmateGallery">
        <h2>Crewmate Gallery</h2>
        <ul>
          {crewmateList.map((crewmate, index) => (
            <li key={index}>
              <span style={{ color: crewmate.color }}>{crewmate.color}</span> {crewmate.name} who is a {crewmate.attributes.join(', ')}
              <button onClick={() => handleDelete(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
