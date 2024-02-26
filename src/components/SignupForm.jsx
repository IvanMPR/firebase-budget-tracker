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

  function connectUserToFirestore(user, collection, id) {
    const userRef = doc(db, collection, id);
    setDoc(userRef, {
      email: user.email,
      uid: user.uid,
      entries: [],
    });
  }
  function onCreateUser({ email, password }) {
    createUser(email, password)
      .then(userCredential => {
        connectUserToFirestore(
          userCredential.user,
          "users",
          userCredential.user.uid
        );

        toast.success("Account created successfully ! Please login. ");
      })
      .catch(error => {
        if (error.code === "auth/email-already-in-use") {
          toast.error("📃 Email already in use. Please login. ");
          setIsLoading(false);
        } else {
          toast.error(`📃 ${error.code}`);
          setIsLoading(false);
        }
      });
  }

  function onError(errors) {
    console.log(errors);
  }

  return (
    <div className='flex flex-col items-center justify-center bg-yellow-400 w-[140%] m-auto mb-20  p-2 border-solid border-2 border-stone-700 rounded-2xl opacity-90  md:w-[130%] xl:w-[150%]'>
      <h2 className=' uppercase text-stone-700 text-lg tracking-widest p-4 font-bold text-center'>
        Create Account
      </h2>
      <form onSubmit={handleSubmit(onCreateUser, onError)} className=' w-full '>
        <div className=' flex flex-col justify-center mb-2'>
          <input
            type='email'
            id='email'
            required
            placeholder='Enter your email address'
            className=' w-[80%] m-auto rounded-full bg-yellow-100 px-4 py-2 text-sm transition-all duration-300 placeholder:text-stone-400 focus:outline-none focus:ring focus:ring-yellow-500 focus:ring-opacity-50 '
            {...register("email", { required: true })}
            // md:w-64 md:focus:w-72
          />
        </div>

        <div className=' flex flex-col w-full justify-center text-left '>
          <input
            type='password'
            id='password'
            required
            placeholder='Type in your password'
            className=' w-[80%] m-auto rounded-full bg-yellow-100 px-4 py-2 text-sm transition-all duration-300 placeholder:text-stone-400 focus:outline-none focus:ring focus:ring-yellow-500 focus:ring-opacity-50 '
            // md:w-64 md:focus:w-72
            {...register("password", { required: true })}
          />
        </div>
        <div className='mt-5 px-1'>
          <button
            type='submit'
            className=' block w-[80%] m-auto rounded-full bg-stone-700  font-semibold uppercase tracking-wide text-yellow-400 transition-colors hover:bg-stone-800 active:translate-y-[2px] disabled:cursor-not-allowed disabled:opacity-50 sm:px-6 sm:py-4 px-4 py-2 md:px-5 md:py-2.5 text-xs'
          >
            <FontAwesomeIcon icon={faUserPlus} /> Sign up
          </button>
        </div>
      </form>
    </div>
  );
}

export default SignupForm;
