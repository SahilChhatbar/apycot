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
import todaysp from '../../assets/todayspecial.png';
import fifty from '../../assets/50today.png';

const UserProfileContent = () => {
  const navigate = useNavigate();
  return (
    <div>
      <main className='bg-[#fff6d8] min-h-screen flex-shrink-0 p-4 relative'>
        <div className="relative w-full">
          <img src={userbanner} className="w-full h-auto rounded-2xl" alt="Banner" />
          <div className="absolute bottom-0 w-full h-1/4 bg-gradient-to-t from-slate-200
           via-transparent to-slate-200 backdrop-blur-xl   flex items-center
            justify-between text-black p-4">
            <div className="relative w-40 mb-20 ml-10 overflow-hidden">
              <img src={prof} className="w-full h-full object-cover" alt="Profile" />
            </div>
            <div className='flex gap-4 w-full justify-left ml-6'>
              <div className='flex flex-col items-start'>
                <div className='flex flex-col items-start mb-0'>
                  <div className='flex items-center'>
                    <div className='flex flex-col pb-8'><h2 className='text-2xl font-[Playfair_Display]
                     text-[#ea6a12] font-bold pb-1 '>Sahil Chhatbar</h2>
                    <div className='flex flex-row gap-2 align-center'>
                    <img src={nav} alt="Location" />
                    <p className='font-[Poppins] text-base text-black'>Gujarat, India</p>
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
                  <div className='border-t-1 border-orange-200 py-2 mt-6 w-full'></div>
                  <div className='flex flex-row gap-4'>
                    <img src={i2} alt="News 2" />
                    <div className='flex flex-col cursor-pointer'>
                      <h2 className='font-bold'>Burger</h2>
                      <p className='text-slate-500'>Lorem ipsum dolor sit amet consectetur,
                         adipisicing elit.</p>
                    </div>
                  </div>
                  <div className='border-t-1 border-orange-200 py-2 mt-6 w-full'></div>
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
                <div className='flex flex-row px-3 gap-6 '>
                  <img src={wade} />
                  <div className='flex flex-row  gap-70  items-center '>
                  <div className='flex flex-col'>
                    <h3 className=' font-bold font-[Poppins] w-full text-base'>Wade Warren</h3>
                    <h3 className=' text-orange-500 text-sm font-[Poppins]'>colleages</h3>
                  </div>
                  <div className='flex flex-row  '><p className=''>29 mins </p>
                  <IoMdArrowDropdown  size={25} className='cursor-pointer'/></div></div>
                </div>
              </div>
              <div className='py-4 px-2'><img src={salad1} /> </div>
              <div className='flex flex-row gap-4 px-3'>
                <span><FaHeart size={22} className='cursor-pointer'/></span><p>Like</p>
                <span><FaComment size={22} className='cursor-pointer'/></span><p>140</p>
                <p className='ml-75 flex flex-row gap-3 text-orange-500 cursor-pointer'>
                  <FaShare size={22} />
                99 Share</p>
              </div>
              <div className='border-t-1 border-orange-200 py-2 mt-6 w-full'></div>
              <div className='px-3'>
                <p className='text-sm text-slate-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Illo corrupti quasi iusto minima laborum similique doloremque dolorum sint placeat,
                     consequatur atque beatae delectus soluta, unde sit architecto sunt officiis itaque!</p>
              </div>
              <div className='border-t-1 border-orange-200 py-2 mt-6 w-full'></div>
              <div className='flex flex-col gap-10'>
              <div className='flex flex-row px-3 gap-6'>
                  <img src={wade} className='w-13 h-13'/>
                  <div className='flex flex-col'>
                    <h3 className='mt-3 font-bold font-[Poppins]'>Wade Warren</h3>
                    <h3 className='mt-1 text-slate-500 text-sm font-[Poppins]'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
                        <div className='flex flex-row gap-3 mt-1'>
                <span><FaHeart size={16} className='cursor-pointer text-orange-500'/>
                </span><p className='text-xs text-orange-500 cursor-pointer'>Like</p>
                <span><FaReply size={16} className='cursor-pointer text-orange-500'/>
                </span><p className='text-xs text-orange-500 cursor-pointer'>Reply</p>
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
                <span><FaHeart size={16} className='text-orange-500 cursor-pointer'/></span>
                <p className='text-xs text-orange-500 cursor-pointer'>Like</p>
                <span><FaReply size={16} className='text-orange-500 cursor-pointer'/></span>
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
                  <div className='flex flex-row  gap-65  items-center '>
                  <div className='flex flex-col'>
                    <h3 className=' font-bold font-[Poppins] text-base'>Wade Warren</h3>
                    <h3 className=' text-orange-500 text-sm font-[Poppins]'>colleages</h3>
                  </div>
                  <div className='flex flex-row  '><p className=''>29 mins </p>
                  <IoMdArrowDropdown  size={25} className='cursor-pointer'/></div></div>
                </div>
              </div>
              <div className='px-3 pt-5'>
                <p className='text-sm text-slate-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Illo corrupti quasi iusto minima laborum similique doloremque dolorum sint placeat,
                     consequatur atque beatae delectus soluta, unde sit architecto sunt officiis itaque!</p>
              </div>
              <div className='border-t-1 border-orange-200 py-2 mt-6 w-full'></div>
              <div className='flex flex-row gap-4 px-3 pb-3'>
                <span><FaHeart size={22} className='cursor-pointer'/></span><p>Like</p>
                <span><FaComment size={22} className='cursor-pointer'/></span><p>140</p>
                <p className='ml-76 flex flex-row gap-3 text-orange-500 cursor-pointer'>
                  <FaShare size={22}/>99 Share</p>
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
          <div className='flex flex-col w-5/17'>
          <div className='flex flex-col bg-[#ffffff] rounded-2xl p-4 w-full py-5 mt-6'>
      <div className='font-bold font-[Playfair_Display] text-2xl'>About</div>
      <div className='border-t-2 border-slate-200 py-2 mt-6 w-full'></div>
      <div className=' text-slate-400 text-base pb-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Ad nisi fugit molestias voluptatem unde, totam vero numquam.</div>
        <div className=' text-slate-400 text-base pb-3'>Email: <span className='text-orange-500 cursor-pointer'>
        nikjone@demoo.com </span></div>
        <div className=' text-slate-400 text-base pb-3'>Phone: <span className='text-orange-500 cursor-pointer'>
        001235125612</span></div>
        <div className=' text-slate-400 text-base '>Location: <span className='text-orange-500 cursor-pointer'>
        USA</span></div>
        </div>
            <div className='flex flex-col bg-[#ffffff] rounded-2xl p-4 w-full py-5 mt-6'>
      <Suggestions />
            </div>
            <div className='relative flex flex-col bg-[#ffffff] rounded-2xl p-4 w-full py-5 mt-6'>
  <div className="absolute -top-4 left-6 w-14 h-14 bg-yellow-400 rounded-full opacity-30"></div>
  <div className="absolute top-10 right-10 w-10 h-10 bg-blue-500 rounded-lg rotate-45 opacity-40"></div>
  <div className="absolute bottom-10 left-4 w-12 h-12 bg-green-400 rounded-full opacity-30"></div>
  <div className="absolute bottom-0 right-0 w-20 h-20 bg-pink-500 rounded-lg opacity-20 blur-lg"></div>
  <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-24 h-24 bg-purple-400
   rounded-full opacity-20 blur-xl"></div>
  <div className='flex flex-col'>
    <div className='-rotate-15 px-6 py-0 font-bold text-3xl font-[Playfair_Display] text-[#ea6a12]'>
      Today’s<br></br>
      Special <br></br>
      Menu
    </div>
    <div className='flex flex-row self-end'>
      <div className='py-10 text-slate-400 text-base self-end'>
        <img src={todaysp} />
      </div>
      <div className='text-slate-400 text-base self-end pb-5'>
        <img src={fifty} />
      </div>
    </div>
    <button onClick={() => navigate("/404")} type="button" className="cursor-pointer text-white
       bg-[#ea6a12] rounded-full text-base leading-[28px] px-0 w-[155px] py-2 text-center me-2
       hover:bg-slate-300 hover:text-orange-500 mb-2 self-center font-bold">
      Order Now!
    </button>
  </div>
</div>    
          </div>
        </div>
      </main>
    </div>
  );
};
export default UserProfileContent;    