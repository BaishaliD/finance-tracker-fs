import React from "react";

const cardStyles = {
  display: "flex",
  padding: "1rem",
  margin: "1rem",
  border: "1px solid #f6f7fb",
  boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
  transition: "all 0.2s ease-in-out",
  borderRadius: "5px",
  "&:hover": {
    transform: "scale(1.05)",
  },
};

const infoStyles = {
  textAlign: "left",
};

const h2Styles = {
  color: "#455af7",
};

const h1Styles = {
  color: "#9d9d9d",
};

export default function StatsCard({ title, value, icon }) {
  return (
    <div style={cardStyles}>
      <div style={infoStyles}>
        <h2 styke={h2Styles}>{title}</h2>
        <h1 style={h1Styles}>Rs. {value}</h1>
      </div>
      <div>
        <img src={icon} alt={title} height={70} width={70} />
      </div>
    </div>
  );
}
