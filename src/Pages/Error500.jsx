import React from 'react';
import c1 from '../assets/cookie2.png';
import c2 from '../assets/cookie1.png';
import five from '../assets/five.png';
import { useNavigate } from "react-router-dom";

const Error500 = () => {
    const navigate = useNavigate(); 
  return (
    <div className='bg-[#ffffff] flex flex-col items-center justify-center min-h-screen'>
      <div className='grid grid-cols-3 w-4/7 gap-0'>
        <img className='mt-30' src={five} alt="404" />
        <img className='mt-30' src={c1} alt="Burger" />
        <img className='mt-30' src={c2} alt="404" />
      </div>
      <div className='flex flex-row gap-0 justify-center mt-10  font-[Playfair] text-3xl font-bold'>
        <h2>Internal Server Error</h2>
      </div>
      <p className='text-center mt-2 font-[Playfair] text-xl font-bold text-slate-500 w-3/6'>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus itaque tempore incidunt distinctio cumque magni ad earum.
      </p>
      <div className='flex flex-row gap-3 justify-center mt-4'>
        <button onClick={() => navigate("/mainpage")} className="cursor-pointer text-white font-sans
         bg-[#ea6a12] rounded-full text-md px-4 py-3 text-center hover:bg-slate-300
          hover:text-orange-500 text-base">
          Back to Home
        </button>
      </div>
    </div>
  );
}

export default Error500;