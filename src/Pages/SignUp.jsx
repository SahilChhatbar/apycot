import React from "react";
import { useNavigate } from "react-router-dom";
import logo from '../assets/Logo.svg';
import signup from '../assets/signup.png';
import socials from '../assets/Socail Links.png';
import signup1 from '../assets/signup1.png';

const Sign = () => {
  const navigate = useNavigate(); 
  return (
    <div className="h-screen flex bg-gradient-to-br from-orange-50 to-white ">
      <div className="flex flex-col items-left ml-20 mt-30 w-1/2">
        <img className="w-50 mr-130" src={logo} />
        <div className="flex flex-col items-center">
  <div className="flex flex-col items-center w-full max-w-md">
    <h2 className="text-2xl font-bold font-[Playfair_Display]">Sign Up</h2>
    <p className="text-slate-500">Create your Hope UI account</p>
    <div className="flex flex-row gap-6 mt-4 w-full">
      <div className="flex flex-col w-full">
        <label className="text-slate-500">First Name</label>
        <input className="w-full h-8 border border-orange-500 rounded-full px-2" type="text" />
      </div>
      <div className="flex flex-col w-full">
        <label className="text-slate-500">Last Name</label>
        <input className="w-full h-8 border border-orange-500 rounded-full px-2" type="text" />
      </div>
    </div>
    <div className="flex flex-row gap-6 mt-4 w-full">
      <div className="flex flex-col w-full">
        <label className="text-slate-500">Email</label>
        <input className="w-full h-8 border border-orange-500 rounded-full px-2" type="text" />
      </div>
      <div className="flex flex-col w-full">
        <label className="text-slate-500">Phone No.</label>
        <input className="w-full h-8 border border-orange-500 rounded-full px-2" type="text" />
      </div>
    </div>
    <div className="flex flex-row gap-6 mt-4 w-full">
      <div className="flex flex-col w-full">
        <label className="text-slate-500">Password</label>
        <input className="w-full h-8 border border-orange-500 rounded-full px-2" type="password" />
      </div>
      <div className="flex flex-col w-full">
        <label className="text-slate-500">Confirm Password</label>
        <input className="w-full h-8 border border-orange-500 rounded-full px-2" type="password" />
      </div>
    </div>

    <div className="flex items-center gap-2 mt-4">
      <input type="checkbox" />
      <p className="text-slate-500">I agree with the terms of use</p>
    </div>
  </div>
</div>
        <button className="ml-33 mt-4 text-white bg-[#ea6a12] rounded-full text-md px-4 py-2 text-center
         hover:bg-slate-300 hover:text-orange-500 w-3/6 " onClick={() => navigate("/success")}>
          Sign Up
        </button>
        <p className="w-full text-center mt-3 ml-3">or sign in with other accounts?</p>
        <img className="w-40 ml-47 mt-2 cursor-pointer" src={socials} /> 
        <p className="ml-26">Already have an account?<span onClick={()=>navigate("/signin")} 
        className="cursor-pointer text-orange-500">
          Click here to sign in.</span></p>
      </div>
      <div className="flex flex-col align-center w-1/2"></div>
      <div className="flex flex-col">
        <img className="w-full self-left mt-20 mr-170" src={signup} />
        <img className="w-[300px] h-[300px] -translate-y-30 ml-45" src={signup1} />
      </div>
    </div>
  );
};

export default Sign;