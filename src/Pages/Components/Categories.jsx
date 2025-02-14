import React from 'react';
import { Navigate, useNavigate } from 'react-router';

const Categories = () => {
  const navigate=useNavigate();
  const categories = [
    "Burgers",
    "Pizza",
    "Dessert",
    "Dessert",
    "Biscuits",
    "Grilled cheese",
    "Grilled cheese",
    "Tomato soup",
    "Chicken fingers",
    "Chicken",
    "nuggets",
    "Flatbread pizza",
    "Flatbread pizza",
    "Mac & cheese",
    "Mini burgers",
    "Mini burgers",
    "Mini pizzas",
    "Grilled Cheese",
    "Grilled",
    "Veggie Grill's",
    "Sandwich",
    "Soup"
  ];

  return (
    <div className="p-1">
      <div className="flex items-center justify-between mb-3">
        
      </div>

      <div className="flex flex-wrap gap-4">
        {categories.map((category, index) => (
          <button onClick={()=>navigate("/500")}
            key={`${category}-${index}`}
            className="cursor-pointer px-3 py-2 rounded-full border border-orange-500 text-orange-500
             hover:bg-orange-500 hover:text-white transition-colors duration-200 text-base "
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Categories;