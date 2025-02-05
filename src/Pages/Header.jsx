import React from 'react';
import searchIcon from '../assets/search.png';
import notification from '../assets/Notification.svg';
import group from '../assets/Group.svg';
import buy from '../assets/Buy.svg';
import person from '../assets/Person.svg';

const Header = ({ open }) => {
  return (
    <header
      className={`sticky top-0 bg-white shadow-sm h-16 flex items-center justify-between px-10 z-50 
      transition-all duration-500 ${open ? "ml-56 w-full" : "ml-0 w-full"}`}
    >
      <div className="relative flex items-center w-64 h-10 border border-gray-200 rounded-full px-4">
        <img src={searchIcon} alt="Search" className="w-4 h-4 mr-2" />
        <input type="text" placeholder="Search..." className="flex-1 outline-none" />
      </div>
      <div className="flex items-center gap-x-4">
        <button className="cursor-pointer">
          <img src={notification} className="w-6 h-6" alt="Notification" />
        </button>
        <button className="cursor-pointer">
          <img src={group} className="w-6 h-6" alt="Group" />
        </button>
        <button className="cursor-pointer">
          <img src={buy} className="w-6 h-6" alt="Buy" />
        </button>
        <button className="cursor-pointer">
          <img src={person} className="w-10 h-10" alt="Person" />
        </button>
        <div className="flex flex-col">
          <h3 className="text-sm font-semibold">Sahil Chhatbar</h3>
          <h3 className="text-xs text-gray-500">Intern</h3>
        </div>
      </div>
    </header>
  );
};

export default Header;
