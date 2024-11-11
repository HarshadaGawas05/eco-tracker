import React from "react";

function Badge({ totalCO2 }) {
  const getBadge = () => {
    if (totalCO2 >= 10) return "Eco Warrior";
    if (totalCO2 >= 5) return "Eco Enthusiast";
    if (totalCO2 >= 1) return "Eco Beginner";
    return "No Badge";
  };

  return (
    <div className="badge">
      <h2>Your Badge: {getBadge()}</h2>
      <p>Keep going to earn more badges!</p>
    </div>
  );
}

export default Badge;
