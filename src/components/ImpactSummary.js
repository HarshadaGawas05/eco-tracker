// ImpactSummary.js
import React from "react";
import Action from "./Action";

const calculateTotalCO2 = (actions) => {
  return actions.reduce(
    (total, action) => total + action.carbonReduction * action.count,
    0
  );
};

const getImpactMessage = (totalCO2) => {
  const trees = Math.floor(totalCO2 / 10);
  return `You've saved the equivalent of ${trees} trees planted!`;
};

const getImpactColor = (totalCO2) => {
  if (totalCO2 < 0.5) return "red";
  if (totalCO2 < 1) return "orange";
  return "green";
};

const ImpactSummary = ({ actions, clearActions, removeAction }) => {
  const totalCO2 = calculateTotalCO2(actions);
  const impactMessage = getImpactMessage(totalCO2);
  const impactColor = getImpactColor(totalCO2);

  return (
    <div className="impact-summary">
      <h2>Impact Summary</h2>
      {actions.length > 0 ? (
        <div>
          <p className={`impact-message ${impactColor}`}>{impactMessage}</p>
          <ul>
            {actions.map((action) => (
              <Action
                key={action.name}
                action={action}
                removeAction={removeAction}
              />
            ))}
          </ul>
          <p>Total CO₂ Reduction: {totalCO2.toFixed(2)} kg</p>
          <button className="clear-button" onClick={clearActions}>
            Clear
          </button>
        </div>
      ) : (
        <p className="impact-message">
          No actions tracked. Start adding eco-friendly actions!
        </p>
      )}
    </div>
  );
};

export default ImpactSummary;
