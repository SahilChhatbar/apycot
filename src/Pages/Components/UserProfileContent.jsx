import React from 'react';
import userbanner from '../../assets/userbanner.png';
import prof from '../../assets/prof.png';
import nav from '../../assets/Navigation.png';
import img1 from '../../assets/Reviews.png'; 
import img2 from '../../assets/Followers.png';
import img3 from '../../assets/Photos.png'; 
import i1 from '../../assets/News image 1.png';
import i2 from '../../assets/News image 2.png';
import i3 from '../../assets/News image 3.png';
import { useNavigate } from 'react-router';
import salad1 from '../../assets/salad1.png'
import wade from '../../assets/wade.png'
import { IoMdArrowDropdown } from 'react-icons/io';
import { FaHeart } from 'react-icons/fa';
import { FaComment } from 'react-icons/fa';
import { FaShare } from 'react-icons/fa';
import { FaReply } from 'react-icons/fa';
import comment1 from '../../assets/comment1.png'
import { FaSmile } from 'react-icons/fa';
import { FaCamera } from 'react-icons/fa';
import OrderOnline from '../../OrderOnline.json'
import Suggestions from './Suggestion';
import offercard from '../../assets/Offer Card.png'

const UserProfileContent = () => {
  const navigate = useNavigate();
  return (
    <div>
      <main className='bg-[#fff6d8] min-h-screen flex-shrink-0 p-4 relative'>
        <div className="relative w-full">
          <img src={userbanner} className="w-full h-auto rounded-2xl" alt="Banner" />
          <div className="absolute bottom-0 w-full h-1/4 bg-gradient-to-t from-slate-100
           via-transparent to-slate-100 backdrop-blur-xs  bg-opacity-30 flex items-center
            justify-between text-black p-4">
            <div className="relative w-40 mb-20 ml-10 overflow-hidden">
              <img src={prof} className="w-full h-full object-cover" alt="Profile" />
            </div>
            <div className='flex gap-4 w-full justify-left ml-6'>
              <div className='flex flex-col items-start'>
                <div className='flex flex-col items-start mb-0'>
                  <div className='flex items-center'>
                    <div className='flex flex-col'><h2 className='text-2xl font-[Playfair]
                     text-[#EA6A12] mb-10'>Sahil Chhatbar</h2>
                    <div className='flex flex-row gap-2'>
                    <img src={nav} alt="Location" />
                    <p className='font-[Poppins] text-base'>Gujarat, India</p>
                  </div>
                    </div>
                    <div className='ml-4 space-y-2'>
                      <p className='font-[Poppins] text-base'>UI/UX Designer</p>
                      <p className='font-[Poppins] text-base'>Hello@gmail.com</p>
                      <p className='font-[Poppins] text-base'>Email</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='flex gap-2 mr-11 mt-6 cursor-pointer'>
              <img src={img1} alt="Image 1" className="w-16 h-16" />
              <img src={img2} alt="Image 2" className="w-16 h-16" />
              <img src={img3} alt="Image 3" className="w-16 h-16" />
            </div>
          </div>
        </div>
        <div className='flex gap-5'>
          <div className='flex flex-col w-3/10 items-left gap-10'>
            <div className='flex flex-col bg-[#ffffff] rounded-2xl p-4 w-full  py-5 mt-6'>
              <h2 className="text-black text-2xl font-bold font-[Playfair_Display] text-left">News</h2>
              <div className='border-t-2 border-slate-300 py-2 mt-6 w-full'></div>
              <div className='space-y-8 flex flex-col items-center mt-4'>
                <div className='flex flex-col gap-2'>
                  <div className='flex flex-row gap-4'>
                    <img src={i1} alt="News 1" />
                    <div className='flex flex-col cursor-pointer'>
                      <h2 className='font-bold'>Pizza</h2>
                      <p className='text-slate-500'>Lorem ipsum dolor sit amet consectetur,
                         adipisicing elit.</p>
                    </div>
                  </div>
                  <div className='border-t-2 border-slate-300 py-2 mt-6 w-full'></div>
                  <div className='flex flex-row gap-4'>
                    <img src={i2} alt="News 2" />
                    <div className='flex flex-col cursor-pointer'>
                      <h2 className='font-bold'>Burger</h2>
                      <p className='text-slate-500'>Lorem ipsum dolor sit amet consectetur,
                         adipisicing elit.</p>
                    </div>
                  </div>
                  <div className='border-t-2 border-slate-300 py-2 mt-6 w-full'></div>
                  <div className='flex flex-row gap-4'>
                    <img src={i3} alt="News 3" />
                    <div className='flex flex-col cursor-pointer'>
                      <h2 className='font-bold'>Pasta</h2>
                      <p className='text-slate-500'>Lorem ipsum dolor sit amet consectetur,
                         adipisicing elit.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          <div className='flex flex-col bg-[#ffffff] rounded-2xl p-4 w-full px-5'>
              <h2 className="text-black text-2xl font-bold font-[Playfair_Display] text-left pb-4">
                Order Online</h2>  
              <ul>
        {OrderOnline.map((item) => (
          <li key={item.id} className="order-item">
            <span>{item.name}</span>
            <span className="badge">{item.count}</span>
          </li>
        ))}
      </ul> 
       </div>
            <div className='flex flex-col bg-[#ffffff] rounded-2xl p-4 w-full px-5'>
              <h2 className="text-black text-2xl font-bold font-[Playfair_Display] text-left pb-4">
                Order Online</h2>  
              <ul>
          <li className="order-item cursor-pointer">
            <span>Favourite order</span>
          </li>
          <li className="order-item cursor-pointer">
            <span>Order history</span>
          </li>
          <li className="order-item cursor-pointer">
            <span>My address</span>
          </li>
      </ul>
            </div>
          </div>
          <div className='flex flex-col w-5/10 items-center pt-6'> 
            <div className='flex flex-col bg-[#ffffff] rounded-2xl p-4 w-full py-5 '>
              <div className='flex flex-col gap-10'>
                <div className='flex flex-row px-6 gap-6 '>
                  <img src={wade} />
                  <div className='flex flex-row  gap-73  items-center '>
                  <div className='flex flex-col'>
                    <h3 className=' font-bold font-[Poppins]'>Wade Warren</h3>
                    <h3 className=' text-orange-500 text-sm font-[Poppins]'>colleages</h3>
                  </div>
                  <div className='flex flex-row  '><p className=''>29 mins </p>
                  <IoMdArrowDropdown  size={25} /></div></div>
                </div>
              </div>
              <div className='py-4 px-2'><img src={salad1} /> </div>
              <div className='flex flex-row gap-4 px-3'>
                <span><FaHeart size={22} className='cursor-pointer'/></span><p>Like</p>
                <span><FaComment size={22} className='cursor-pointer'/></span><p>140</p>
                <p className='ml-79 flex flex-row gap-3 text-orange-500 cursor-pointer'><FaShare size={22} />
                99 Share</p>
              </div>
              <div className='border-t-2 border-slate-300 py-2 mt-6 w-full'></div>
              <div className='px-3'>
                <p className='text-sm text-slate-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Illo corrupti quasi iusto minima laborum similique doloremque dolorum sint placeat,
                     consequatur atque beatae delectus soluta, unde sit architecto sunt officiis itaque!</p>
              </div>
              <div className='border-t-2 border-slate-300 py-2 mt-6 w-full'></div>
              <div className='flex flex-col gap-10'>
              <div className='flex flex-row px-3 gap-6'>
                  <img src={wade} className='w-13 h-13'/>
                  <div className='flex flex-col'>
                    <h3 className='mt-3 font-bold font-[Poppins]'>Wade Warren</h3>
                    <h3 className='mt-1 text-slate-500 text-sm font-[Poppins]'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
                        <div className='flex flex-row gap-3 mt-1'>
                <span><FaHeart size={16} className='cursor-pointer text-orange-500'/>
                </span><p className='text-xs text-orange-500'>Like</p>
                <span><FaReply size={16} className='cursor-pointer text-orange-500'/>
                </span><p className='text-xs text-orange-500'>Reply</p>
                <p className='text-xs text-orange-500 cursor-pointer'>Translate</p>
                <p className='text-xs text-slate-500'>5 min</p>
              </div>
                  </div>
                </div>
                <div className='flex flex-row px-3 gap-6'>
                  <img src={comment1} className='w-13 h-13'/>
                  <div className='flex flex-col'>
                    <h3 className='mt-3 font-bold font-[Poppins]'>Paul Molive</h3>
                    <h3 className='mt-1 text-slate-500 text-sm font-[Poppins]'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
                        <div className='flex flex-row gap-3 mt-1'>
                <span><FaHeart size={16} className='text-orange-500'/></span>
                <p className='text-xs text-orange-500 cursor-pointer'>Like</p>
                <span><FaReply size={16} className='text-orange-500'/></span>
                <p className='text-xs text-orange-500 cursor-pointer'>Reply</p>
                <p className='text-xs text-orange-500 cursor-pointer'>Translate</p>
                <p className='text-xs text-slate-500'>5 min</p>
              </div>
                  </div>
                </div>
                 <div className="relative flex items-center w-full h-10 border border-gray-200
                  rounded-full px-4 gap-5 mb-4">
                        <input type="text" placeholder="Lovely!" className="flex-1 outline-none w-full" />
                        <FaSmile className='cursor-pointer'/>
                        <FaCamera className='cursor-pointer'/>
                      </div>
              </div>
            </div>
            <div className='flex flex-col bg-[#ffffff] rounded-2xl p-4 w-full py-5 mt-6 '>
              <div className='flex flex-col gap-10'>
                <div className='flex flex-row px-6 gap-6'>
                  <img src={wade} />
                  <div className='flex flex-col'>
                    <h3 className='pt-3 font-bold font-[Poppins]'>Wade Warren</h3>
                    <h3 className='pt-1 text-orange-500 text-sm font-[Poppins]'>colleages</h3>
                  </div>
                  <p className='pt-3 px-35'>29 mins </p>
                  
                </div>
              </div>
              <div className='px-3 pt-5'>
                <p className='text-sm text-slate-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Illo corrupti quasi iusto minima laborum similique doloremque dolorum sint placeat,
                     consequatur atque beatae delectus soluta, unde sit architecto sunt officiis itaque!</p>
              </div>
              <div className='border-t-2 border-[#FBE1D0] py-2 mt-6 w-full'></div>
              <div className='flex flex-row gap-4 px-3 pb-3'>
                <span><FaHeart size={22} className='cursor-pointer'/></span><p>Like</p>
                <span><FaComment size={22} className='cursor-pointer'/></span><p>140</p>
                <p className='ml-79 flex flex-row gap-3 text-orange-500 cursor-pointer'><FaShare size={22}/>99 Share</p>
              </div>
              <div className='flex flex-col gap-10'>
                 <div className="relative flex items-center w-full h-10 border border-gray-200
                  rounded-full px-4 gap-5 mb-4">
                        <input type="text" placeholder="Lovely!" className="flex-1 outline-none w-full" />
                        <FaSmile className='cursor-pointer'/>
                        <FaCamera className='cursor-pointer'/>
                      </div>
              </div>
            </div>
          </div>
          <div className='flex flex-col w-4/17'>
          <div className='flex flex-col bg-[#ffffff] rounded-2xl p-4 w-full py-5 mt-6'>
      <div className='font-bold font-[Playfair_Display] text-2xl'>About</div>
      <div className='border-t-2 border-slate-200 py-2 mt-6 w-full'></div>
      <div className=' text-slate-400 text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Ad nisi fugit molestias voluptatem unde, totam vero numquam.</div>
        <div className=' text-slate-400 text-base'>Email:<span className='text-orange-500'>
        nikjone@demoo.com </span></div>
        <div className=' text-slate-400 text-base'>Phone:<span className='text-orange-500'>
        001235125612</span></div>
        <div className=' text-slate-400 text-base'>Location:<span className='text-orange-500'>
        USA</span></div>
        </div>
            <div className='flex flex-col bg-[#ffffff] rounded-2xl p-4 w-full py-5 mt-6'>
      <Suggestions />
            </div>
          
          </div>
        </div>
      </main>
    </div>
  );
};
export default UserProfileContent;    