import React from 'react';
import logo from '../assets/Logo.svg';  
import side from '../assets/Sidebar 1.svg';  
import dash from '../assets/Category.svg'; 
import comp from '../assets/Wallet.svg';
import tick from '../assets/Ticket Star.svg';
import shape from '../assets/Shape.png';
import game from '../assets/Game.svg';
import shield from '../assets/Shield Done.svg';
import users from '../assets/3 User.png';
import book from '../assets/Bookmark.svg';

const Sidebar = ({ open, setOpen }) => {
  const Menus = [
    { title: "Dashboard", src: dash, category: "Home" },
    { title: "SpecialPages", src: game, category: "Pages" },
    { title: "Authentication", src: shield, category: "Pages" },
    { title: "Users", src: users, category: "Pages" },
    { title: "Utilities", src: book, category: "Pages"},
    { title: "Components", src: comp, category: "Elements" },
    { title: "Widgets", src: tick, category: "Elements" }
  ];

  const categories = [...new Set(Menus.map(menu => menu.category))];

  return (
    <div 
      className={`${open ? "w-56" : "w-32"} fixed top-0 left-0 h-screen
       duration-250 p-3 bg-white sidebar shadow-md transition-all ease-in-out`} 
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      {!open && (
        <img
          src={side}
          className='absolute cursor-pointer top-0 left-4'
          onClick={(e) => { e.stopPropagation(); setOpen(!open); }}
          alt="Toggle"
        />
      )}
      <div className='flex flex-col items-start'>
        <img
          src={logo}
          className={`cursor-pointer duration-300 ${!open && "hidden"} w-66 border-b-2 border-gray-200 top-0`}
          alt="Logo"
        />
      </div>
      {categories.map((category, index) => (
        <div key={index} className="mt-6">
          <h2 className={`text-gray-500 text-sm font-semibold ${!open && "hidden"}`}>{category}</h2>
          <ul className="pt-2">
            {Menus.filter(menu => menu.category === category).map((menu, index) => (
              <li
                key={index}
                className={`text-gray-700 text-sm flex items-center gap-x-4 cursor-pointer w-full 
                     p-2 rounded-md transition-all duration-50 hover:bg-[#FFA53f] hover:text-white`}
              >
                <img src={menu.src} alt={menu.title} className="w-6 h-6" />
                <span className={`font-semibold ${!open && "hidden"} origin-left duration-200`}>
                  {menu.title}
                </span>
                {open && <img className="ml-4" src={shape} alt="shape" />}
              </li>
            ))}
          </ul>
          <div className={`border-b-2 border-gray-200 mt-2 ${!open && "hidden"}`}></div>
        </div>
      ))}
    </div>
  );
};
export default Sidebar;