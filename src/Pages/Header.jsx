import React from 'react';
import searchIcon from '../assets/search.png';
import notification from '../assets/Notification.svg';
import group from '../assets/Group.svg';
import buy from '../assets/Buy.svg';
import person from '../assets/Person.svg';

const Header = () => {
  return (
    <header className='sticky top-0 w-full h-16 bg-white shadow-sm flex items-center justify-between'>
      <div className='relative flex items-center w-66 h-10 border border-gray-200 rounded-full px-4 ml-10'>
        <img src={searchIcon} alt="Search" className='w-4 h-4 mr-2' />
        <input type='text' placeholder='Search...' className='flex-1 outline-none' />
      </div>
      <div className='flex items-right gap-x-4 mr-10'>
       <button className='cursor-pointer'><img src={notification} className='w-24px h-24px' alt="Notification" /></button> 
        <button className='cursor-pointer'><img src={group} className='w-24px h-24px' alt="Group" /></button>
        <button className='cursor-pointer'><img src={buy} className='w-24px h-24px' alt="Buy" /></button>
        <button className='cursor-pointer'><img src={person} className='w-40px h-40px' alt="Person" /></button>
        <div>
          <h3>Sahil Chhatbar</h3>
          <h3>Intern</h3>
        </div>
      </div>
    </header>
  );
};
export default Header;
