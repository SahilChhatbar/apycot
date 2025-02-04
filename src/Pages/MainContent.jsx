import React from 'react';
import banner from '../assets/Banner image.png';
import coupon from '../assets/Coupon Card.png';
import deal from '../assets/deal.png';
import arr from '../assets/Arrow - Right 2.png';
import Card from './Card';
import pizza from '../assets/Pizza icon.png';
import veg from '../assets/Veggies icon.png';
import hotdog from '../assets/Hotdog icon.png';
import fruits from '../assets/Fruits icon.png';
import coke from '../assets/Coke icon.png';
import burger from '../assets/Burger icon.png';
import snacks from '../assets/Snacks icon.png';


const MainContent = () => {
  return (
    <main className='bg-[#fff6d8] h-full p-4 relative'>
    <div className='flex gap-x-2 relative'>
    <div className='relative w-5/8'>
        <img src={banner} className='rounded-4xl mt-3.5 p-4 w-full'/>
        <div className='absolute top-3/5 left-2/9 transform -translate-x-1/2 -translate-y-1/2 
                        space-y-4'>
                          <img src={deal} />
          <h2 className="text-black text-xl font-bold font-[Playfair_Display]">Hello, Sahil Chhatbar</h2>
<p className='font-[Poppins] font-semibold text-slate-500 text-sm'>Get <span className='text-orange-500'>FREE delivery</span> on every weekend</p>
<button type="button" className="text-white bg-[#ea6a12] rounded-full text-xs px-2 
py-2 text-center me-2 hover:bg-slate-300 hover:text-orange-500 mb-2 ">Check Menu</button>
        </div>
      </div>
      <div className='relative w-3/8'>
        <img src={coupon} className='rounded-4xl mt-3 p-3 w-full'/>
      </div>
    </div>
    <div className="flex flex-col py-3">
  {/* Menu Category Title and View All Button */}
  <div className="flex items-center mb-4">
    <h2 className="text-black text-xl font-bold font-[Playfair_Display] ml-5">Menu Category</h2>
    <p className="ml-140 flex items-center">
      View All
      <button className="text-white bg-[#ea6a12] rounded-full text-xs px-2 py-2 text-center hover:bg-slate-300 hover:text-orange-500 ml-2">
        <img src={arr} alt="arrow" />
      </button>
    </p>
  </div>
  <div className="flex gap-4 flex-wrap mt-4 ml-8">
  <div className="p-2">
    <Card title="Pizza" src={pizza} />
  </div>
  <div className="p-2">
    <Card title="Fruits" src={fruits} />
  </div>
  <div className="p-2">
    <Card title="Snacks" src={snacks} />
  </div>
  <div className="p-2">
    <Card title="Veggies" src={veg} />
  </div> <div className="p-2">
    <Card title="Hotdog" src={hotdog} />
  </div>
  <div className="p-2">
    <Card title="Burger" src={burger} />
  </div>
  <div className="p-2">
    <Card title="Coke" src={coke} />
  </div>
</div>
</div>
  </main>
  );
};
export default MainContent;