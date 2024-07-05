import React, { useState } from "react";
import styles from "../styles/Sidebar.module.css";

const Sidebar = ({ categories, onCategorySelect }) => {
  const toggleCategory = (categoryId) => {
    onCategorySelect(categoryId);
  };

  return (
    <div
      className={`${styles.sidebar} border border-black rounded-5 m-2 d-flex flex-row gap-1`}
    >
      {categories.map((category) => (
        <div
          key={category.id}
          className={`${styles.category} p-2 col text-center`}
        >
          <h3 onClick={() => toggleCategory(category.id)}>{category.name}</h3>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
