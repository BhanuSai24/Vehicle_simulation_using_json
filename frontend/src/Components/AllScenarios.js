import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import "./AllScenarios.css"; // Import the CSS for styling
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faEdit, faTrash, faSave, faTimes } from "@fortawesome/free-solid-svg-icons";
import scenariosData from "./data/scenarios"; // Import the scenarios data directly

function AllScenarios() {
  const [scenarios, setScenarios] = useState(scenariosData); // Define scenarios state
  const [editingScenario, setEditingScenario] = useState(null);
  const [editForm, setEditForm] = useState({ name: "", time: "", vehicles: 0 });
  const navigate = useNavigate();

  const handleAddScenario = () => {
    navigate('/add-scenario');
  };

  const handleAddVehicle = () => {
    navigate('/add-vehicle');
  };

  const handleEditScenario = (scenario) => {
    setEditingScenario(scenario.id);
    setEditForm({ name: scenario.name, time: scenario.time, vehicles: scenario.vehicles });
  };

  const handleCancelEdit = () => {
    setEditingScenario(null);
  };

  const handleSaveEdit = (scenarioId) => {
    const updatedScenarios = scenarios.map(scenario => {
      if (scenario.id === scenarioId) {
        return { ...scenario, ...editForm };
      } else {
        return scenario;
      }
    });
    // Update the scenarios data
    setScenarios(updatedScenarios);
    // Reset editing state
    setEditingScenario(null);
  };

  const handleDeleteScenario = (scenarioId) => {
    // Filter out the deleted scenario
    const filteredScenarios = scenarios.filter(scenario => scenario.id !== scenarioId);
    // Update the scenarios data
    setScenarios(filteredScenarios);
  };

  const handleDeleteAllScenario = () => {
    const confirmDelete = window.confirm("Are you sure you want to delete all scenarios? This action cannot be undone.");
    if (confirmDelete) {
      // Clear all scenarios
      setScenarios([]);
    }
  };

  return (
    <div className="all-scenarios">
      <div className="header">
        <h2>All Scenarios</h2>
        <div className="button-group">
          <button onClick={handleAddScenario} className="new-scenario">New Scenario</button>
          <button onClick={handleAddVehicle} className="add-vehicle">Add Vehicle</button>
          <button onClick={handleDeleteAllScenario} className="delete-all">Delete All</button>
        </div>
      </div>
      <table>
        <thead>
          <tr>
            <th>Scenario ID</th>
            <th>Scenario Name</th>
            <th>Scenario Time</th>
            <th>Number of Vehicles</th>
            <th>Add Vehicle</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {scenarios.map((scenario) => (
            <tr key={scenario.id}>
              {editingScenario === scenario.id ? (
                <>
                  <td>{scenario.id}</td>
                  <td>
                    <input
                      type="text"
                      value={editForm.name}
                      onChange={(e) => setEditForm({ ...editForm, name: e.target.value })}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      value={editForm.time}
                      onChange={(e) => setEditForm({ ...editForm, time: e.target.value })}
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      value={editForm.vehicles}
                      onChange={(e) => setEditForm({ ...editForm, vehicles: parseInt(e.target.value) })}
                    />
                  </td>
                  <td>
                    <FontAwesomeIcon icon={faSave} onClick={() => handleSaveEdit(scenario.id)} className="action-icon save-icon" />
                    <FontAwesomeIcon icon={faTimes} onClick={handleCancelEdit} className="action-icon cancel-icon" />
                  </td>

                </>
              ) : (
                <>
                  <td>{scenario.id}</td>
                  <td>{scenario.name}</td>
                  <td>{scenario.time}</td>
                  <td>{scenario.vehicles}</td>
                  <td>
                    <FontAwesomeIcon icon={faPlus} className="add-vehicle-symbol" onClick={handleAddVehicle} />
                  </td>
                  <td>
                    <FontAwesomeIcon icon={faEdit} onClick={() => handleEditScenario(scenario)} className="table-symbol" />
                  </td>
                  <td>
                    <FontAwesomeIcon icon={faTrash} onClick={() => handleDeleteScenario(scenario.id)} className="table-symbol" />
                  </td>
                </>
              )}
            </tr>
          ))}
          {scenarios.length === 0 && (
            <tr>
              <td colSpan="7">No scenarios available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default AllScenarios;