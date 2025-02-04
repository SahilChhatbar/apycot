import React from 'react';

const Card = ({ title, src }) => {
  return (
    <div className="bg-white shadow-lg rounded-2xl overflow-hidden w-[110px] flex flex-col items-center hover:bg-[#ea6a12] transition-colors duration-300 p-1.5">
      <img src={src} alt="Card image" className="w-[64px] h-[64px]" />
      <div className="flex flex-col justify-start p-2">
        <h3 className="text-xl font-semibold">{title}</h3>
        <div className="border-t-2 border-gray-400 hover:border-[#ea6a12] transition-all duration-300 mt-6"></div>
      </div>
    </div>
  );
};

export default Card;
