import { useForm } from "react-hook-form";
import { useAuthContext } from "../contexts/AuthContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-hot-toast";
import { db } from "../firebase";

import { doc, setDoc } from "firebase/firestore";

function SignupForm() {
  const { createUser, setIsLoading } = useAuthContext();
  const { register, handleSubmit } = useForm();

  function onCreateUser({ email, password }) {
    createUser(email, password)
      .then(userCredential => {
        const user = userCredential.user;
        console.log(user);
        const userRef = doc(db, "users/", user.uid);
        setDoc(userRef, {
          email: user.email,
          uid: user.uid,
          entries: [],
        });
        toast.success("Account created successfully ! Please login. ");
        // setUser(user);
      })
      .catch(error => {
        // const errorCode = error.code;
        // const errorMessage = error.message;
        if (error.code === "auth/email-already-in-use") {
          toast.error("Email already in use. Please login. ");
          setIsLoading(false);
        } else {
          toast.error(error.code);
          setIsLoading(false);
        }
      });
  }

  function onError(errors) {
    console.log(errors);
  }

  return (
    <div className='flex flex-col items-center justify-center bg-yellow-400 w-96 m-auto mb-20  p-2 border-solid border-2 border-stone-700 rounded-2xl '>
      <h2 className=' uppercase text-stone-700 text-lg tracking-widest p-4 font-bold text-center'>
        Create Account
      </h2>
      <form onSubmit={handleSubmit(onCreateUser, onError)}>
        <div className=' flex flex-col justify-center mb-2'>
          {/* {errors?.email?.message && (
          <p className='text-sm italic'>{errors.email.message}</p>
        )} */}
          <input
            type='email'
            // label='Email address'
            id='email'
            // value={email}
            // onChange={e => setEmail(e.target.value)}
            required
            placeholder='Enter your email address'
            className=' w-28 rounded-full bg-yellow-100 px-4 py-2 text-sm transition-all duration-300 placeholder:text-stone-400 focus:outline-none focus:ring focus:ring-yellow-500 focus:ring-opacity-50 sm:w-64 sm:focus:w-72'
            {...register("email", { required: true })}
          />
        </div>

        <div className=' flex flex-col justify-center text-left '>
          {/* {errors?.password?.message && <p>{errors.password.message}</p>} */}
          <input
            type='password'
            id='password'
            // label='Create password'
            // value={password}
            // onChange={e => setPassword(e.target.value)}
            required
            placeholder='Type in your password'
            className=' w-28 rounded-full bg-yellow-100 px-4 py-2 text-sm transition-all duration-300 placeholder:text-stone-400 focus:outline-none focus:ring focus:ring-yellow-500 focus:ring-opacity-50 sm:w-64 sm:focus:w-72'
            {...register("password", { required: true })}
          />
        </div>
        <div className='mt-5 px-1'>
          <button
            type='submit'
            className=' inline-block w-full  rounded-full bg-stone-700  font-semibold uppercase tracking-wide text-yellow-400 transition-colors hover:bg-stone-800 active:translate-y-[2px] disabled:cursor-not-allowed disabled:opacity-50 sm:px-6 sm:py-4 px-4 py-2 md:px-5 md:py-2.5 text-xs'
            // onClick={onSubmit}
          >
            <FontAwesomeIcon icon={faUserPlus} /> Sign up
          </button>
        </div>
      </form>
    </div>
  );
}

export default SignupForm;
