import React from 'react'
import Header from './Header';
import Footer from './Footer';

const Login = () => {
  return (
    <div>
      <Header/>
      <form className="bg-black absolute w-[450px] h-[717.5px] top-1/2 left-1/2  transform -translate-x-1/2 -translate-y-[330px] bg-opacity-70 rounded-lg px-[48px] py-[68px] flex flex-col items-center">
        
          <div className="w-[314px] h-[56px] m-2">
           <h3 className='text-left text-3xl text-white font-bold mb-[28px]'>Sign In</h3>
          </div>
          <div className="w-[314px] h-[56px] m-2 items-center">
           <input className='w-full h-[56px] mx-auto border border-gray-600 rounded-md bg-transparent my-2 p-2 text-white ' placeholder='Email or mobile number'></input>
          </div>
          <div className="w-[314px] h-[56px] m-2 items-center">
           <input className='w-full h-[56px] mx-auto border border-gray-600 rounded-md bg-transparent my-2 p-2 text-white' placeholder='Password'></input>
          </div>
          <div className="w-[314px] h-[56px] mt-2">
           <button className='w-full h-[40px] mx-auto   rounded-md bg-red-600 my-2 p-2 text-white'>Sign In</button>
          </div>
          <div className="w-[314px] h-[24px]">
          <h3 className='text-center text-md text-gray-400'>OR</h3>
          </div>
          <div className="w-[314px] h-[56px]">
           <button className='w-full h-[40px] mx-auto   rounded-md bg-gray-600 bg-opacity-45 my-2 p-2 text-white hover:bg-opacity-30'>Use a sign-in code</button>
          </div>
          <div className="w-[314px] h-[28px] py-2">
          <h3 className='text-center text-sm text-white'>Forgot password?</h3>
          </div>
          <div className="w-[314px] h-[28px] py-2 flex items-center">
          <input type='checkbox' className='w-[13px] h-[13px] mr-[8px]'></input>
          <h3 className='text-left text-sm text-white'>Remember me</h3>
          </div>
          <div className="w-[314px] h-[28px] flex py-2">
           <h3 className='text-center text-sm text-gray-400 mr-[4px]'>New to Netflix? </h3>
           <h3 className='text-center text-sm text-white'>Sign up now. </h3>
          </div>
         
        
      </form>
      <div>
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/8728e059-7686-4d2d-a67a-84872bd71025/e90516bd-6925-4341-a6cf-0b9f3d0c140a/IN-en-20240708-POP_SIGNUP_TWO_WEEKS-perspective_WEB_34324b52-d094-482b-8c2a-708dc64c9065_large.jpg"
          alt=""
        />
      </div>
      <Footer/>
    </div>
  );
}

export default Login