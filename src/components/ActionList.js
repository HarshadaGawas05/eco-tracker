// ActionList.js
import React from "react";

const predefinedActions = [
  { name: "Use reusable bags", carbonReduction: 0.1 },
  { name: "Bike to work", carbonReduction: 0.5 },
  { name: "Reduce meat consumption", carbonReduction: 0.3 },
  { name: "Use public transport", carbonReduction: 0.2 },
];

const ActionList = ({ addAction }) => {
  return (
    <div>
      <h2>Eco-Friendly Actions</h2>
      <ul>
        {predefinedActions.map((action) => (
          <li key={action.name}>
            {action.name} - {action.carbonReduction} kg CO₂ saved
            <button onClick={() => addAction(action)}>Add</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ActionList;
