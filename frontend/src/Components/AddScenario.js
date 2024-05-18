import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AddScenario.css"; // Import the CSS for styling
import scenariosData from "./data/scenarios.json"; // Import scenarios data from JSON file

function AddScenario({ setScenarios }) {
  const [scenarioName, setScenarioName] = useState("");
  const [scenarioTime, setScenarioTime] = useState("");
  const [message, setMessage] = useState(""); // State to manage success message
  const navigate = useNavigate();

  const handleAdd = () => {
    // Check if scenarioName and scenarioTime are not empty
    if (!scenarioName || !scenarioTime) {
      console.error('Scenario name and time are required');
      return;
    }

    // Create a new scenario object
    const newScenario = {
      id: scenariosData.length + 1, // Generate a unique ID
      name: scenarioName,
      time: parseInt(scenarioTime), // Convert to integer
      vehicles: 0, // Initialize vehicles count
    };

    // Add the new scenario to the scenarios array
    scenariosData.push(newScenario);

    // Update the scenarios.json file
    // This step depends on your backend setup. If you're using a server,
    // you would typically make an API call here to update the JSON file.
    // For simplicity, you can write the updated data directly to the file
    // using Node.js file system APIs if you're using a Node.js backend.
    // If you're using a different backend, you'll need to handle the update
    // accordingly.

    // Show success message
    setMessage('Scenario added successfully');

    // Reset input fields
    setScenarioName("");
    setScenarioTime("");
  };

  const handleReset = () => {
    // Reset input fields
    setScenarioName("");
    setScenarioTime("");
  };

  const handleGoBack = () => {
    navigate("/"); // Navigate to the previous page
  };

  return (
    <div className="add-scenario">
      <p>Scenario/Add</p>
      <h2>Add Scenario</h2>
      <div className="scenario-box">
        <div className="input-group">
          <label htmlFor="scenarioName">Scenario Name:</label>
          <input
            type="text"
            id="scenarioName"
            required
            value={scenarioName}
            onChange={(e) => setScenarioName(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label htmlFor="scenarioTime">Scenario Time (seconds):</label>
          <input
            type="number"
            id="scenarioTime"
            required
            value={scenarioTime}
            onChange={(e) => setScenarioTime(e.target.value)}
          />
        </div>
      </div>
      {message && <p className="success-message">{message}</p>} {/* Display success message if available */}
      <div className="button-group">
        <button className="add-button" onClick={handleAdd}>Add</button>
        <button className="reset-button" onClick={handleReset}>Reset</button>
        <button className="go-back-button" onClick={handleGoBack}>Go Back</button>
      </div>
    </div>
  );
}

export default AddScenario;
