import React from 'react'
import s1 from '../assets/s1.png'
import s2 from '../assets/s2.png'
import s3 from '../assets/s3.png'
import s4 from '../assets/s4.png'
import s5 from '../assets/s5.png'
import s6 from '../assets/s6.png'
import s7 from '../assets/s7.png'
import s8 from '../assets/s8.png'

const SignUpSuccess = () => {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-orange-50 to-white p-6">
      <div className="bg-white shadow-lg rounded-2xl p-8 max-w-lg text-center relative z-10">
        <h1 className="text-3xl font-bold text-orange-600">Success!</h1>
        <p className="text-gray-700 mt-4">
          An email has been sent to <strong>your email address</strong>. Please check your inbox and click on the included link to reset your password.
        </p>
        <button className="mt-6 px-6 py-3 bg-orange-500 text-white font-semibold rounded-3xl hover:bg-orange-600 transition">
          Back to home
        </button>
      </div>
      
      <div className="absolute w-full h-full flex flex-wrap items-center justify-center gap-6 z-10">
        <img src={s1} alt="s1" className="absolute top-10 left-20 w-40  rounded-full shadow-md" />
        <img src={s2} alt="s2" className="absolute top-10 right-20 w-40 rounded-full shadow-md" />
        <img src={s3} alt="s3" className="absolute top-1/4 left-10 w-40 rounded-full shadow-md" />
        <img src={s4} alt="s4" className="absolute top-1/4 right-10 w-40 rounded-full shadow-md" />
        <img src={s5} alt="s5" className="absolute bottom-1/4 left-10 w-40 rounded-full shadow-md" />
        <img src={s6} alt="s6" className="absolute bottom-1/4 right-10 w-40 rounded-full shadow-md" />
        <img src={s7} alt="s7" className="absolute bottom-10 left-20 w-40 rounded-full shadow-md" />
        <img src={s8} alt="s8" className="absolute bottom-10 right-20 w-40 rounded-full shadow-md" />
      </div>
    </div>
  );
};

export default SignUpSuccess;
