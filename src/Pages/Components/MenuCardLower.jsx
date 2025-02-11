import React from "react";
import { FaStar, FaRegStar } from "react-icons/fa";
import { IoIosAdd } from "react-icons/io";

const Card2 = ({ image, title, rating, price }) => {
  return (
    <div className="group w-[180px] h-[240px] bg-white rounded-3xl p-4 
    relative hover:bg-[#ea6a12] hover:text-slate-200">
    <div className="w-[120px] h-[120px] absolute -top-12 left-1/2 transform -translate-x-1/2
     rounded-full overflow-hidden shadow-lg">
      <img src={image} alt={title} className="w-full h-full object-cover" />
    </div>
    <div className="mt-16 text-start">
      <h3 className="text-lg font-semibold pt-4">{title}</h3>
      <div className="flex justify-start mt-4 text-orange-400 group-hover:text-slate-200">
        {[...Array(5)].map((_, index) =>
          index < rating ? <FaStar key={index} /> : <FaRegStar key={index} />
        )}
      </div>
      <p className="text-md font-bold text-orange-500 mt-8 group-hover:text-slate-200">${price}</p>
    </div>
    <button className=" cursor-pointer absolute bottom-4 right-4 bg-orange-500 text-white w-6 h-6 rounded-full 
    flex items-center justify-center shadow-md group-hover:bg-slate-200 group-hover:text-[#ea6a12]">
      <IoIosAdd size={18} />
    </button>
  </div>
  );
};

export default Card2    ;
