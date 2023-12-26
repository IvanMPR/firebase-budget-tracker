import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { NavLink, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function onLogin(e) {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        // Signed in
        //   console.log(userCredential, "from login");
        const user = userCredential.user;
        navigate("/budget-tracker");
        console.log(user);
      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  }

  return (
    <form className='flex items-center'>
      <div>
        <label
          htmlFor='email-address'
          className='mx-1 my-0 text-left italic'
        ></label>
        <input
          id='email-address'
          name='email'
          type='email'
          required
          placeholder='Email'
          onChange={e => setEmail(e.target.value)}
          className='w-28 rounded-full bg-yellow-100 px-4 py-2 text-sm transition-all duration-300 placeholder:text-stone-400 focus:outline-none focus:ring focus:ring-yellow-500 focus:ring-opacity-50 sm:w-64 sm:focus:w-72'
        />
      </div>

      <div>
        <label htmlFor='password' className='mx-1 my-0 italic'></label>
        <input
          id='password'
          name='password'
          type='password'
          required
          placeholder='Password'
          onChange={e => setPassword(e.target.value)}
          className='w-16 rounded-full bg-yellow-100 px-4 py-2 text-sm transition-all duration-300 placeholder:text-stone-400 focus:outline-none focus:ring focus:ring-yellow-500 focus:ring-opacity-50 sm:w-48 sm:focus:w-56'
        />
      </div>
      <div>
        <button
          className='text-center p-1 text-xl hover:text-white bg-blue hover:bg-blue-dark rounded size-full transition'
          onClick={onLogin}
        >
          Login
        </button>
      </div>
    </form>
  );
}

export default Login;
