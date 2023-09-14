// DynamicIconExpenseCategoryDropdown.js
import React, { useState } from "react";
import "./Dropdown.scss"; // Import the CSS for styling
import DeleteIcon from "../../assets/icons/delete.png";
import MoneyIcon from "../../assets/icons/dollar-symbol.png";
import CommentIcon from "../../assets/icons/chat-bubble.png";
import CalendarIcon from "../../assets/icons/calendar.png";

const categoryData = [
  { name: "Food", icon: DeleteIcon },
  { name: "Travel", icon: MoneyIcon },
  { name: "Rent", icon: CommentIcon },
  { name: "Other", icon: CalendarIcon },
  { name: "Food", icon: DeleteIcon },
  { name: "Travel", icon: MoneyIcon },
  { name: "Rent", icon: CommentIcon },
  { name: "Other", icon: CalendarIcon },
  { name: "Food", icon: DeleteIcon },
  { name: "Travel", icon: MoneyIcon },
  { name: "Rent", icon: CommentIcon },
  { name: "Other", icon: CalendarIcon },
  // Add more categories and icons as needed
];

const DropdownWithIcons = ({ setFormData, setCategory }) => {
  const handleCategoryChange = (item) => {
    // setFormData((prev) => {
    //   return { ...prev, category: item };
    // });
    setCategory(item);
  };

  return (
    <div className="menu-container">
      <div className="dropdown-menu">
        <ul>
          {categoryData.map((item) => (
            <DropdownItem
              icon={item.icon}
              name={item.name}
              onClick={() => handleCategoryChange(item.name)}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

const DropdownItem = ({ icon, name }) => {
  return (
    <li className="dropdown-item">
      <img src={icon} alt={name} height={20} width={20} />
      <span>{name}</span>
    </li>
  );
};

export default DropdownWithIcons;
