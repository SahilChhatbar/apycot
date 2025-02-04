import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import MainContent from './MainContent';

const mainpages = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex">
      <Sidebar open={open} setOpen={setOpen} />
      <div className={`flex-1 transition-all duration-500 ${open ? 'ml-56' : 'ml-30'}`}>
        <Header />
        <MainContent />
      </div>
    </div>
  );
};

export default mainpages;