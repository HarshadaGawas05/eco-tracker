import React, { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import ActionList from "./components/ActionList";
import ImpactSummary from "./components/ImpactSummary";
import Dashboard from "./components/Dashboard";
import ProgressOverview from "./components/ProgressOverview"; // Import the new component
import "./App.css";

function App() {
  const [actions, setActions] = useState([]);
  const [totalCO2, setTotalCO2] = useState(0); // State to track total CO2 reduction
  const navigate = useNavigate(); // Initialize navigate

  const addAction = (action) => {
    setActions((prevActions) => {
      const existingAction = prevActions.find((a) => a.name === action.name);
      if (existingAction) {
        return prevActions.map((a) =>
          a.name === action.name ? { ...a, count: a.count + 1 } : a
        );
      }
      return [...prevActions, { ...action, count: 1 }];
    });
  };

  const removeAction = (name) => {
    setActions((prevActions) => prevActions.filter((a) => a.name !== name));
  };

  const clearActions = () => setActions([]);

  useEffect(() => {
    const total = actions.reduce((acc, action) => acc + action.count * 0.1, 0);
    setTotalCO2(total);
  }, [actions]); // Recalculate whenever actions change

  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className="app-container">
            <header className="app-header">
              <h1>Eco-Friendly Action Tracker</h1>
              <button
                className="progress-button"
                onClick={() => navigate("/progress-overview")} // Navigate to the new Progress Overview page
              >
                📊 View Progress Overview
              </button>
            </header>
            <div className="content">
              <div className="tracker-column">
                <ActionList addAction={addAction} />
                <ImpactSummary
                  actions={actions}
                  clearActions={clearActions}
                  removeAction={removeAction}
                />
              </div>
              <div className="graph-column">
                <Dashboard totalCO2={totalCO2} />
              </div>
            </div>
          </div>
        }
      />
      <Route
        path="/progress-overview"
        element={<ProgressOverview totalCO2={totalCO2} />}
      />{" "}
      {/* New page for Progress Overview */}
    </Routes>
  );
}

export default App;
