import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightToBracket } from "@fortawesome/free-solid-svg-icons";
import { useForm } from "react-hook-form";
import { useAuthContext } from "../contexts/AuthContext";

import Loader from "../components/Loader";
import toast from "react-hot-toast";

function Login() {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const { isLoading, loginUser, setIsLoading } = useAuthContext();

  function onUserLogin({ email, password }) {
    loginUser(email, password)
      .then(() => {
        navigate("/budget-tracker");
      })
      .catch(error => {
        toast.error(error.message);
        setIsLoading(false);
      });
  }

  return isLoading ? (
    <Loader />
  ) : (
    <form onSubmit={handleSubmit(onUserLogin)} className='flex  items-center'>
      <div>
        {/* <label
          htmlFor='email-address'
          className='mx-1 my-0 text-left italic'
        ></label> */}
        <input
          {...register("email", { required: true })}
          id='email-address'
          type='email'
          placeholder='Email'
          className='w-28 rounded-full block bg-yellow-100 px-4 py-2 text-sm transition-all duration-300 placeholder:text-stone-400 focus:outline-none focus:ring focus:ring-yellow-500 focus:ring-opacity-50 sm:w-64 sm:focus:w-72'
          required
        />
      </div>

      <div>
        {/* <label htmlFor='password' className='mx-1 my-0 italic'></label> */}
        <input
          {...register("password", { required: true })}
          id='password'
          type='password'
          placeholder='Password'
          className='w-16 rounded-full block bg-yellow-100 px-4 py-2 text-sm transition-all duration-300 placeholder:text-stone-400 focus:outline-none focus:ring focus:ring-yellow-500 focus:ring-opacity-50 sm:w-48 sm:focus:w-56'
          required
        />
      </div>
      <div className='mx-2'>
        <button
          type='submit'
          className='inline-block  rounded-full bg-stone-700  font-semibold uppercase tracking-wide text-yellow-400 transition-colors hover:bg-stone-800 active:translate-y-[2px] disabled:cursor-not-allowed disabled:opacity-50 sm:px-6 sm:py-4 px-4 py-2 md:px-5 md:py-2.5 text-xs'
        >
          <FontAwesomeIcon icon={faArrowRightToBracket} /> Login
        </button>
      </div>
    </form>
  );
}

export default Login;
