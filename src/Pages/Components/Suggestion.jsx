import React from "react";
import pizza from "../../assets/pizza.png";
import burger2 from "../../assets/burger2.png";
import pizza2 from "../../assets/pizza2.png";
import pastas from "../../assets/pastas.png";

const suggestions = [
  { name: "Pizza", options: "345+ Options", image: pizza },
  { name: "Pizza", options: "345+ Options", image: pizza2 },
  { name: "Burger", options: "260+ Options", image: burger2 },
  { name: "Pasta", options: "250+ Options", image: pastas },
];

const Suggestions = () => {
  return (
    <div>
      <h2 className="text-2xl font-[Playfair-Display] font-bold mb-4">Suggestions</h2>
      <div className="border-t-2 border-slate-200 py-2 mt-6 w-full"></div>
      {suggestions.map((item, index) => (
        <div key={index}>
          <div className="cursor-pointer flex items-center space-x-4 bg-white p-3 py-4 rounded-lg">
            <img
              src={item.image}
              alt={item.name}
              className="w-27 h-27 rounded-lg object-cover"
            />
            <div>
              <h3 className="font-medium">{item.name}</h3>
              <p className="text-gray-500 text-sm">{item.options}</p>
            </div>
          </div>
          {index !== suggestions.length - 1 && (
            <div className="border-t-1 border-orange-200 py-1 mt-3 w-full"></div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Suggestions;
