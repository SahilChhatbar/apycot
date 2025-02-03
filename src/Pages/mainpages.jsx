import React, { useState } from 'react';
import logo from '../assets/Main Logo.png';
const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const Menus = [
    { title: "Dashboard", src: "Chart_fill" },
    { title: "Inbox", src: "Chat" },
    { title: "Accounts", src: "User", gap: true },
    { title: "Schedule", src: "Calender" },
    { title: "Search", src: "Search" },
    { title: "Analytics", src: "Chart" },
    { title: "Files", src: "Folder", gap: true },
    { title: "Setting", src: "Setting" }
  ];

  return (
    <div className='flex'>
      <div className={`${open ? "w-72" : "w-20"} duration-300 h-screen p-5 pt-8 bg-white relative`}>
        <img
          src={logo}
          className={`absolute cursor-pointer right-3 top-9 w-7  ${!open && "rotate-360"}`}
          onClick={() => setOpen(!open)}
          alt="Toggle"
        />
        <div className='flex flex-col items-center'>
          <img
            src='https://i.postimg.cc/VkdSPWd5/Logo.png'
            className={`cursor-pointer duration-500 ${!open && "hidden"} w-257px h-76px`}
            alt="Logo"
          />
          <h1 className={`text-black origin-left font-medium text-xl duration-300 mt-4 ${!open && "scale-0"}`}>Home</h1>
        </div>
        <ul className={`pt-6 ${!open && "hidden"}`}>
          {Menus.map((menu, index) => (
            <li key={index} className="text-gray-700 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-gray-200 rounded-md">
              <span className="material-icons">{menu.src}</span>
              <span className={`${!open && "hidden"} origin-left duration-200`}>{menu.title}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className='p-7 text-2xl font-semibold flex-1 h-screen'><h1>Home</h1></div>
    </div>
  );
};

export default Sidebar;