import React from 'react';

const TrendingItems = ({ 
  title, 
  calories, 
  persons, 
  price, 
  image,
}) => {
  return (
    <div className="bg-white p-3 rounded-3xl w-[210px] relative h-[200px]">
      <div className="flex items-center gap-2 mb-2">
        <span className="text-sm">👑</span>
        <span className="text-orange-500 text-base font-medium">Top of the week</span>
      </div>
      <div className="flex justify-between items-start">
        <div className="flex flex-col gap-4">
          <h2 className="text-md font-bold text-gray-900">{title}</h2>
          <div className="space-y-2">
            <p className="text-gray-500 text-sm">{calories} Calories</p>
            <div className='border-t-1 border-slate-300 mt-0 w-8'></div>
            <p className="text-gray-500 text-sm">{persons} persons</p>
          </div>
          <div className="flex items-center gap-6 mt-0">
            <span className="text-orange-500 text-sm font-bold">${price}</span>
            <button  
              className="cursor-pointer bg-orange-500 text-white p-1 hover:text-[#ea6a12] 
              rounded-full hover:bg-slate-200 transition-colors"
            >
              <svg 
                width="15" 
                height="15" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="M12 5v14M5 12h14" />
              </svg>
            </button>
          </div>
        </div>
        <div className="absolute -right-10 top-1/2 -translate-y-1/2">
          <div className="w-30 h-30 rounded-full overflow-hidden shadow-xl">
            <img 
              src={image} 
              alt={title} 
              className="w-full h-full object-cover shadow-3xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendingItems;