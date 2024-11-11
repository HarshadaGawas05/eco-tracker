import React, { useState, useEffect } from "react";
import "./ProgressOverview.css";

function ProgressOverview({ totalCO2 }) {
  const [percentage, setPercentage] = useState(0);

  // Update the percentage dynamically based on totalCO2
  useEffect(() => {
    const newPercentage = (totalCO2 / 5) * 100; // Assuming goal is 5 kg CO₂
    setPercentage(newPercentage > 100 ? 100 : newPercentage);
  }, [totalCO2]);

  return (
    <div className="progress-overview">
      <h2>Progress Overview</h2>
      <div className="progress-stats">
        <h3>Total CO₂ Reduced: {totalCO2.toFixed(2)} kg</h3>
        {/* Add more stats or comparisons here */}
        <div className="streak">
          <h4>Your Current Streak: 4 Days</h4> {/* Example static streak */}
        </div>
        <div className="goal">
          <h4>Goal: Reduce 5 kg CO₂</h4>
          <div className="progress-circle">
            <svg
              width="120"
              height="120"
              viewBox="0 0 120 120"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="60"
                cy="60"
                r="54"
                stroke="lightgray"
                strokeWidth="10"
                fill="none"
              />
              <circle
                cx="60"
                cy="60"
                r="54"
                stroke="green"
                strokeWidth="10"
                fill="none"
                strokeDasharray="339.292"
                strokeDashoffset={339.292 - (339.292 * percentage) / 100}
                strokeLinecap="round"
                transform="rotate(-90 60 60)"
              />
            </svg>
            <div className="progress-percentage">{percentage.toFixed(0)}%</div>
          </div>
        </div>
      </div>
      {/* Add more interactive stats or visualizations */}
    </div>
  );
}

export default ProgressOverview;
