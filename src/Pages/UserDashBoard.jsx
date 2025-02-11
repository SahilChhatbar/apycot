import React, { useState } from 'react';
import Sidebar from './Components/Sidebar';
import Header from './Components/Header';
import Footer from './Components/Footer';
import UserDashBoardContent from './Components/UserDashboardContent';


const UserDashBoard = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex">
      <Sidebar open={open} setOpen={setOpen} />
      <div className={`flex-1 transition-all duration-500 ${open ? 'ml-56' : 'ml-24'}`}>
        <Header />
        <UserDashBoardContent />
        <Footer />
      </div>
    </div>
    
  );
};

export default UserDashBoard;