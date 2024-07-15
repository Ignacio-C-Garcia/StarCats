/* eslint-disable react/prop-types */
import styles from "../styles/Products.module.css";

const Sidebar = ({ categories, onCategorySelect }) => {
  const toggleCategory = (categoryId) => {
    onCategorySelect(categoryId);
  };

  return (
    <div
      className={`${styles.sidebar} row border border-black rounded-5 m-2 d-flex flex-row gap-1`}
    >
      {categories.map((category) => (
        <div
          key={category.id}
          onClick={() => toggleCategory(category.id)}
          className={`${styles.category} col p-2  text-center`}
        >
          <span>{category.name}</span>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
