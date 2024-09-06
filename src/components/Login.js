// rafce == react arrow function component export
import Header from "./Header";
import { useState } from "react";


const Login = () => {

const [previousName , setNewName]  =  useState(true);

const togglepage = ()=>{

  setNewName(!previousName );
  
  // use not equal sign that makes it working as a toogle that if name is setname == previous name makes is setname or vvice versa
}



  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          className="  "
          src="https://assets.nflxext.com/ffe/siteui/vlv3/04bef84d-51f6-401e-9b8e-4a521cbce3c5/null/IN-en-20240903-TRIFECTA-perspective_0d3aac9c-578f-4e3c-8aa8-bbf4a392269b_large.jpg"
          alt="dp"
        />
      </div>
      <div className="">
        <form className="absolute p-12 bg-black bg-opacity-85 w-3/12 mt-36 mx-auto right-0 left-0 text-white">
          <label className=" font-bold text-3xl py-4 leading-[80px] ">
              {previousName ? "Sign in" : "Sign up"}
          </label>

          {/* if my previous name is false than show this input field */}
          {(!previousName && <input
            type="text"
            placeholder="Full Name"
            className="p-2 my-2 w-full bg-slate-900 rounded-md"
          />)}
          <input
            type="text"
            placeholder="Email or phone number "
            className="p-2 my-2 w-full bg-slate-900 rounded-md"
          />
          <input
            type="password"
            placeholder="Password"
            className="p-2 my-2 w-full bg-slate-900 rounded-md"
          />
          <button className="py-2 my-6 bg-red-600 w-full font-bold rounded-md ">
            {previousName ? "Sign in " : "Signup"}
          </button>
          <input
            checked
            id="checked-checkbox"
            type="checkbox"
            value=""
            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 "
          />
          <label
            for="checked-checkbox"
            class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Remember me
          </label>
          <button className="ml-[85px]">Need help?</button>
          <div className="my-20">
            <label className="font-thin">{previousName ? "New to Netflix!":"Already Registered"}</label>
            <span className="font-extrabold my-4 cursor-pointer"onClick={togglepage} >{previousName ? "Sign up now " : "Sign in now"}</span>
            <p className="text-xs">
              This page is protected by Google reCAPTCHA to{" "}
            </p>
            <span className="text-xs">ensure you're not a bot.</span>
            <button className="text-blue-600">Learn more.</button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Login;
