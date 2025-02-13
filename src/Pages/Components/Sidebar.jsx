import React, { useState } from 'react';
import logo from '../../assets/Logo.svg';  
import side from '../../assets/Sidebar 1.svg';  
import dash from '../../assets/Category.svg'; 
import comp from '../../assets/Wallet.svg';
import tick from '../../assets/Ticket Star.svg';
import shape from '../../assets/Dropdown.svg';
import game from '../../assets/Game.svg';
import shield from '../../assets/Shield Done.svg';
import users from '../../assets/3 User.png';
import book from '../../assets/Bookmark.svg';

const Sidebar = ({ open, setOpen }) => {
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);
  const Menus = [
    { title: "Dashboard", src: dash, category: "Home" },
    { title: "Special Pages", src: game, category: "Pages" },
    { title: "Authentication", src: shield, category: "Pages" },
    { title: "Users", src: users, category: "Pages" },
    { title: "Utilities", src: book, category: "Pages" },
    { title: "Components", src: comp, category: "Elements" },
    { title: "Widgets", src: tick, category: "Elements" }
  ];

  const categories = [...new Set(Menus.map(menu => menu.category))];
  return (
    <div 
      className={`${open ? "w-60" : "w-[120px]"} fixed top-0 left-0 h-screen
       duration-250 sidebar transition-all ease-in-out`} 
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      {!open && (
        <img
          src={side}
          className='absolute cursor-pointer top-0 left-0 hover-bg-white'
          onClick={(e) => { e.stopPropagation(); setOpen(!open); }}
          alt="Toggle"
        />
      )}
      <div className='flex flex-col items-start top-0 mt-0 pt-0 '>
        <img
          src={logo}
          className={`cursor-pointer duration-300 ${!open && "hidden"} w-66 h-[65px]
           border-b-2 border-gray-200 top-0`}
          alt="Logo"
        />
      </div>
      {categories.map((category, catIndex) => (
        <div key={catIndex} className="pt-3 px-6">
          <h2 className={`text-[#959895] text-base  ${!open && "hidden"} content-start`}>
            {category}
          </h2>
          <ul className="pt-2">
            {Menus.filter(menu => menu.category === category).map((menu, index) => {
              if (menu.title === "Users") {
                return (
                  <div
                    key={index}
                    onMouseEnter={() => setUserDropdownOpen(true)}
                    onMouseLeave={() => setUserDropdownOpen(false)}
                  >
                    <li
                      className={`group text-[#959895] leading-[28px] text-base flex items-center justify-between cursor-pointer w-full 
                        p-2 rounded-md transition-all duration-50 hover:bg-[#ea6a12] hover:rounded-full hover:text-white`}
                    >
                      <div className="flex items-center">
                        <img 
                          src={menu.src} 
                          alt={menu.title} 
                          className="w-6 h-6 transition duration-200 group-hover:brightness-0 group-hover:invert" 
                        />
                        <span className={` ${!open && "hidden"} origin-left duration-200 pl-11`}>
                          {menu.title}
                        </span>
                      </div>
                      {open && (
                        <img 
                          className={`ml-4 transition-transform duration-300 ${userDropdownOpen ? "rotate-90" : ""} group-hover:brightness-0 group-hover:invert`} 
                          src={shape} 
                          alt="dropdown" 
                        />
                      )}
                    </li>
                    {userDropdownOpen && open && (
                      <ul className="pl-8 ">
                        <li className="text-[#959895] leading-[28px] text-base cursor-pointer p-2 rounded-md hover:bg-[#ea6a12] hover:text-white transition-all duration-50 hover:rounded-full">
                        ●  User List
                        </li>
                        <li className="text-[#959895] leading-[28px] text-base cursor-pointer p-2 rounded-md hover:bg-[#ea6a12] hover:text-white transition-all duration-50 hover:rounded-full">
                        ●  Add User
                        </li>
                        <li className="text-[#959895] leading-[28px] text-base cursor-pointer p-2 rounded-md hover:bg-[#ea6a12] hover:text-white transition-all duration-50 hover:rounded-full">
                        ●  User Settings
                        </li>
                      </ul>
                    )}
                  </div>
                );
              } else {
                return (
                  <li
                    key={index}
                    className={`group text-[#959895] leading-[28px] text-base flex items-start justify-between cursor-pointer w-full 
                      p-2 rounded-md transition-all duration-50 hover:bg-[#ea6a12] hover:text-white hover:rounded-full`}
                  >
                    <img 
                      src={menu.src} 
                      alt={menu.title} 
                      className="w-6 h-6 transition duration-200 group-hover:brightness-0 group-hover:invert" 
                    />
                    <span className={` ${!open && "hidden"}  duration-200`}>
                      {menu.title}
                    </span>
                    {open && (
                      <img 
                        className="ml-4 group-hover:brightness-0 group-hover:invert" 
                        src={shape} 
                        alt="shape" 
                      />
                    )}
                  </li>
                );
              }
            })}
          </ul>
          <div className={`border-b-2 border-gray-200 mt-2 ${!open && "hidden"} w-full`}></div>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
