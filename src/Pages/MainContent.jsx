import React from 'react';
import banner from '../assets/Banner image.png';
import coupon from '../assets/Coupon Card.png';
import deal from '../assets/deal.png';
import Card from './Card';
import pizza from '../assets/Pizza icon.png';
import veg from '../assets/Veggies icon.png';
import hotdog from '../assets/Hotdog icon.png';
import fruits from '../assets/Fruits icon.png';
import coke from '../assets/Coke icon.png';
import burger from '../assets/Burger icon.png';
import snacks from '../assets/Snacks icon.png';
import spaghetti from '../assets/Spaghetti.png'
import Card2 from './Card2'
import vegpizza from '../assets/Vegetable Pizza.png'
import mushpizza from '../assets/Mushroom Pizza.png'
import sweets from '../assets/Sweets.png'
import mpizza from '../assets/Cart image 1.png'
import ipizza from '../assets/Cart iamge 2.png'
import sausage from '../assets/Cart image 3.png'
import cheese from '../assets/Cart image 4.png'
import CartItem from './CartItem';
import TrendingItems from './TrendingItems'; 
import t1 from '../assets/Trending image 1.png' 
import t2 from '../assets/Trending image 2.png' 
import t3 from '../assets/Trending image 3.png' 
import t4 from '../assets/Trending image 4.png' 
import t5 from '../assets/Trending image 5.png' 
import t6 from '../assets/Trending image 6.png' 
import Categories from './Categories';

const MainContent = () => {
  return (
    <main className='bg-[#fff6d8] h-full p-4 relative'>
    <div className='flex gap-0 relative'>
    <div className='relative w-5/8'>
        <img src={banner} className='rounded-4xl mt-3.5 p-4 w-full'/>
        <div className='absolute top-3/5 left-2/9 transform -translate-x-1/2 -translate-y-1/2 
                        space-y-2'>
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
    <div className="flex py-8 gap-0"> 
      <div className="flex flex-col w-2/3">
        <div className="flex items-center mb-4">
          <h2 className="text-black text-xl font-bold font-[Playfair_Display] ml-5">Menu Category</h2>
          <p className="ml-140 flex items-center text-sm">
            View All
            <button className="text-white bg-[#ea6a12] rounded-full text-xs px-2 py-1 text-center 
            hover:bg-slate-300 hover:text-orange-500 ml-2">
            >
            </button>
          </p>
        </div>
        <div className="flex gap-4 flex-wrap mt-4 ml-6">
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
          </div>
          <div className="p-2">
            <Card title="Hotdog" src={hotdog} />
          </div>
          <div className="p-2">
            <Card title="Burger" src={burger} />
          </div>
          <div className="p-2">
            <Card title="Coke" src={coke} />
          </div>
        </div>
        <div>
          <div className="flex gap-6 mt-4 ml-4">
            <div className="flex justify-center items-center bg-[#fef8f1] mt-15">
              <Card2 image={spaghetti} title="Spaghetti" rating={3} price="7.29" />
            </div>
            <div className="flex justify-center items-center bg-[#fef8f1] mt-15">
              <Card2 image={vegpizza} title="Vegetable Pizza" rating={3} price="5.49" />
            </div>
            <div className="flex justify-center items-center bg-[#fef8f1] mt-15">
              <Card2 image={mushpizza} title="Mushroom Pizza" rating={3} price="7.49" />
            </div>
            <div className="flex justify-center items-center bg-[#fef8f1] mt-15">
              <Card2 image={sweets} title="Sweets" rating={3} price="6.49" />
            </div>
          </div>
        </div>
      </div>
      <div className='flex flex-col bg-[#ffffff] rounded-2xl p-4 w-3/9 mr-3 transform -translate-y-6 py-5'>
        <h2 className="text-black text-lg font-bold font-[Playfair_Display] text-left">My Cart</h2>
        <div className='border-t-2 border-slate-300 py-2 mt-6 w-full'></div>
        <div className='space-y-8 flex flex-col items-center mt-4'>
        <CartItem image={mpizza} title="Mushroom Pizza" quantity={1} price="7.49" />
        <CartItem image={ipizza} title="Italian Pizza" quantity={1} price="7.49" />
        <CartItem image={sausage} title="Sausage Pizza" quantity={1} price="7.49" /> 
        <CartItem image={cheese} title="Cheese Pizza" quantity={1} price="7.49" /> 
        <button type="button" className="text-white bg-[#ea6a12] rounded-full text-md px-6 
        py-2 text-center hover:bg-slate-300 hover:text-orange-500  ">Checkout</button>
        </div>
      </div>
    </div>
    
    <div className="flex items-center mb-2">
          <h2 className="text-black text-xl font-bold font-[Playfair_Display] ml-5">Trending Orders</h2>
          <p className="ml-140 flex items-center text-sm">
            View All
            <button className="text-white bg-[#ea6a12] rounded-full text-xs px-2 py-1 text-center 
            hover:bg-slate-300 hover:text-orange-500 ml-2">
            >
            </button>
          </p>
        </div>
        <div className="flex gap-15 flex-wrap mt-4 ml-2">
  <TrendingItems
    title="Italian Salad"
    calories={100}
    persons={4}
    price="7.49"
    image={t1}
  /> <TrendingItems
  title="Italian Salad"
  calories={50}
  persons={4}
  price="7.49"
  image={t2}
/>
 <TrendingItems
    title="Italian Salad"
    calories={90}
    persons={3}
    price="7.49"
    image={t3}
  />
  </div>
  <div className="flex gap-15 flex-wrap mt-4 ml-2">
  <TrendingItems
    title="Italian Salad"
    calories={50}
    persons={5}
    price="7.49"
    image={t4}
  /> 
  <TrendingItems
  title="Italian Salad"
  calories={70}
  persons={6}
  price="7.49"
  image={t5}
/>
 <TrendingItems
    title="Italian Salad"
    calories={80}
    persons={4}
    price="7.49"
    image={t6}
  />
       <div className='flex flex-col bg-[#ffffff] rounded-2xl p-3 w-3/9 
        transform -translate-y-135 ml-220'> 
         <div className="flex items-center mb-2"><h2 className="text-black text-lg 
         font-bold font-[Playfair_Display]
          text-left">Categories</h2><p className="ml-60 flex items-center text-sm">
          View All
          <button className="text-white bg-[#ea6a12] rounded-full text-xs px-2 py-1 text-center 
          hover:bg-slate-300 hover:text-orange-500 ml-2">
          >
          </button>
        </p> </div>
        <div className='border-t-2 border-slate-300 py-2 mt-4 w-full'></div>
        <Categories />
        </div> </div>
        
  </main>
  );
};
export default MainContent;
