import React from "react";
import { useNavigate } from "react-router-dom";
import logo from '../assets/Logo.svg'
import sign from '../assets/sign.png'
import socials from '../assets/Socail Links.png'

const Login = () => {
  const navigate = useNavigate(); 

  return (
    <div className="flex  bg-[#ffffff] ml-30">
    <div className="flex flex-col items-left ml-20 mt-40 w-1/2">
      <img className="w-50 ml-0" src={logo} />
      <div className="flex flex-col ml-35 mt-5"><h2 className="text-3xl font-bold font-[Playfair]">
        Sign In</h2></div>
        <p className="ml-22 text-slate-500 mt-4">Sign in and stay connected</p>
      <div className="ml-6"><label className="text-slate-500">Email</label>
      <input className="w-full h-8 border b-t-2 border-orange-500 rounded-full" type="text"/>
      <label className="text-slate-500">Password</label>
      <input className="w-full h-8 border b-t-2 border-orange-500 rounded-full" type="password"/>
      <div className="flex gap-2">
        <input type="checkbox" /><p className="text-slate-500 w-full">Remember me</p>
         <div className="ml-40 text-orange-500 w-full"><button className="cursor-pointer">
          <p>Forgot Password</p></button></div>
      </div>
      </div>
      <button className="ml-25 mt-4 text-white bg-[#ea6a12] rounded-full text-md px-4 py-2 text-center
       hover:bg-slate-300 hover:text-orange-500 w-3/6 " onClick={() => navigate("/mainpage")}>
        Sign in</button>
       <p className="w-full text-center mt-3 ml-3">or sign in with other accounts?</p>
       <img className="w-40 ml-26 mt-2 cursor-pointer" src={socials} /> 
       <p className="ml-6">Don’t have an account?<span className="cursor-pointer text-orange-500">Click here to sign up.</span></p>
    </div>
    <div className="flex flex-col items-right w-1/2"></div>
    <img className="w-[700px] h-[600px] mt-15 mr-50" src={sign} />
    
    </div>
  );
};

export default Login;
