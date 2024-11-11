import React from "react";

const Action = ({ action, removeAction }) => (
  <li className="action-item">
    <span>
      {action.name}: {action.carbonReduction * action.count} kg CO₂
    </span>
    <button onClick={() => removeAction(action.name)}>Delete</button>
  </li>
);

export default Action;
