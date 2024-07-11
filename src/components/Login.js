import React from 'react'
import Header from './Header';

const Login = () => {
  return (
    <div>
      <Header/>
      <div className="bg-black absolute w-[380px] h-[650px] top-1/2 left-1/2  transform -translate-x-1/2 -translate-y-1/2 bg-opacity-50 py-2">
        <div className='flex flex-col items-center justify-center h-full'>
          <h3 className='left'>Sign In</h3>
          <input className='w-3/4 h-[25px] mx-auto border border-gray-600 rounded-md bg-transparent my-2' placeholder='Email'></input>
          <input className='w-3/4 h-[25px] mx-auto border border-gray-600 rounded-md bg-transparent my-2' placeholder='Password'></input>
        </div>
      </div>
      <div>
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/8728e059-7686-4d2d-a67a-84872bd71025/e90516bd-6925-4341-a6cf-0b9f3d0c140a/IN-en-20240708-POP_SIGNUP_TWO_WEEKS-perspective_WEB_34324b52-d094-482b-8c2a-708dc64c9065_large.jpg"
          alt=""
        />
      </div>
    </div>
  );
}

export default Login