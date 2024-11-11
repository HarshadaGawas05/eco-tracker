import React, { useState, useEffect } from "react";

function DailyChallenge({ addAction }) {
  const [challenge, setChallenge] = useState("");
  const challenges = [
    "Log at least 3 eco-friendly actions today",
    "Reduce 0.5kg of CO₂ today by cycling instead of driving",
    "Recycle at least one item",
  ];

  useEffect(() => {
    const today = new Date().toDateString();
    const savedDate = localStorage.getItem("challengeDate");

    if (savedDate !== today) {
      const randomChallenge =
        challenges[Math.floor(Math.random() * challenges.length)];
      setChallenge(randomChallenge);
      localStorage.setItem("challengeDate", today);
    }
  }, [challenges]);

  const completeChallenge = () => {
    addAction({ name: "Daily Challenge", co2Reduction: 0.5 });
    alert("Challenge Completed!");
  };

  return (
    <div className="daily-challenge">
      <h2>Daily Challenge</h2>
      <p>{challenge}</p>
      <button onClick={completeChallenge}>Complete Challenge</button>
    </div>
  );
}

export default DailyChallenge;
