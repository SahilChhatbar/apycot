import React from 'react';

const Card = ({ title, src }) => {
  return (
    <div className="group bg-white  rounded-2xl w-[82px] overflow-hidden flex
     flex-col items-center hover:bg-[#ea6a12] hover:text-slate-200 transition-colors
      duration-300 pt-3 p-1 pb-4">
      <img src={src} alt="Card image" className="w-[60px] h-[60px]" />
      <div className="flex flex-col justify-start p-2">
        <h3 className="text-lg font-semibold">{title}</h3> 
        <div className="border-t-2 border-orange-500  group-hover:border-slate-300 transition-all
         duration-300 mt-5">
          </div>
      </div><button className="group-hover:bg-slate-200 group-hover:text-[#ea6a12]
       text-white bg-[#ea6a12] rounded-full text-xs px-2 py-1 
            text-center hover:bg-slate-300 hover:text-orange-500 mt-3">
               >
              </button>
    </div>
  );
};

export default Card;
