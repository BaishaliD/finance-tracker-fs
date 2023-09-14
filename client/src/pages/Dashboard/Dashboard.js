import React from "react";
import StatsCard from "./StatsCard";

const cardContainerStyles = {
  display: "flex",
  justifyContent: "space-around",
};

export default function Dashboard({ income, expense, balance }) {
  return (
    <div>
      <a href="/insights">
        <button>Go Back to the APP</button>
      </a>
      <div style={cardContainerStyles}>
        <StatsCard title={"Total Income"} value={income} />
        <StatsCard title={"Total Expense"} value={expense} />
        <StatsCard title={"Balance"} value={balance} />
      </div>
    </div>
  );
}
