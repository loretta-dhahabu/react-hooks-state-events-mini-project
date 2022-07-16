import React from "react";

function CategoryFilter({ categories, handleCategoryChange }) {
  const categoryButtons = categories.map((category) => {
    return (
      <button key={category} onClick={handleCategoryChange}>
        {category}
      </button>
    );
  });

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categoryButtons}
    </div>
  );
}

export default CategoryFilter;

// function CategoryFilter({ categories, selectedCategory, onSelectCategory }) {
//   return (
//     <div className="categories">
//       <h5>Category filters</h5>
//       {/* render <button> elements for each category here */}
//       {categories.map((category) => {
//         return (
//           <button
//             key={category}
//             className={category === selectedCategory ? "selected" : null}
//             onClick={() => onSelectCategory(category)}
//           >
//             {category}
//           </button>
//         );
//       })}
//     </div>
//   );
// }

// export default CategoryFilter;
