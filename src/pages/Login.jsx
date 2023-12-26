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
    <div className=' p-2 border-solid border-2 border-blue flex flex-col text-center w-96 m-auto mt-5 rounded-md'>
      {/* <h2 className=' text-2xl p-4 '> Account Login</h2> */}

      <form className='flex'>
        <div className=' flex flex-col justify-center mb-2'>
          <label
            htmlFor='email-address'
            className='  mx-1 my-0 text-left italic'
          >
            Email
          </label>
          <input
            id='email-address'
            name='email'
            type='email'
            required
            placeholder='Email address'
            onChange={e => setEmail(e.target.value)}
            className=' m-1 p-1 border-solid border-2 border-indigo-600 rounded'
          />
        </div>

        <div className=' flex flex-col justify-center text-left '>
          <label htmlFor='password' className='mx-1 my-0 italic'>
            Password
          </label>
          <input
            id='password'
            name='password'
            type='password'
            required
            placeholder='Password'
            onChange={e => setPassword(e.target.value)}
            className=' m-1 p-1 border-solid border-2 border-indigo-600 rounded'
          />
        </div>
        <div className='mt-5 px-1'>
          <button
            className=' text-center p-1  text-xl hover:text-white bg-blue hover:bg-blue-dark rounded size-full transition'
            onClick={onLogin}
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
