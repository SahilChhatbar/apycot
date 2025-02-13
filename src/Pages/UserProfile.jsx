import React, { useState } from 'react';
import Sidebar from './Components/Sidebar';
import Header from './Components/Header';
import UserProfileContent from './Components/UserProfileContent';
import Footer from './Components/Footer';

const UserProfile = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex">
      <Sidebar open={open} setOpen={setOpen} />
      <div className={`flex-1 transition-all duration-500 ${open ? 'ml-60' : 'ml-24'}`}>
        <Header />
        <UserProfileContent />
        <Footer />
      </div>
    </div>
    
  );
};

export default UserProfile;
