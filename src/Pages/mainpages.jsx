import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import MainContent from './MainContent';
import Footer from './Footer';

const mainpages = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex">
      <Sidebar open={open} setOpen={setOpen} />
      <div className={`flex-1 transition-all duration-500 ${open ? 'ml-56' : 'ml-30'}`}>
        <Header />
        <MainContent />
        <Footer />
      </div>
    </div>
    
  );
};

export default mainpages;