import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightToBracket } from "@fortawesome/free-solid-svg-icons";
import { useForm } from "react-hook-form";
import { useAuthContext } from "../contexts/AuthContext";
import { useBudgetTrackerContext } from "../contexts/BudgetTrackerContext";

import Loader from "../components/Loader";
import toast from "react-hot-toast";

function Login() {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const { isLoading, loginUser, setIsLoading } = useAuthContext();
  const { isSmallScreen } = useBudgetTrackerContext();

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
    <form
      onSubmit={handleSubmit(onUserLogin)}
      className='flex items-center w-full'
    >
      <div className=' flex w-full xl:justify-end'>
        <div>
          <input
            {...register("email", { required: true })}
            id='email-address'
            type='email'
            placeholder='Email'
            className='w-[95%] md:w-full rounded-full block bg-yellow-100 px-4 py-2 text-sm transition-all duration-300 placeholder:text-stone-400 focus:outline-none focus:ring focus:ring-yellow-500 focus:ring-opacity-50 xl:focus:w-[101%]'
            required
          />
          {/* sm:w-64 sm:focus:w-72 */}
        </div>

        <div>
          <input
            {...register("password", { required: true })}
            id='password'
            type='password'
            placeholder='Password'
            className='w-[75%] md:[w-85%] md:ml-2 rounded-full block bg-yellow-100 px-4 py-2 text-sm transition-all duration-300 placeholder:text-stone-400 focus:outline-none focus:ring focus:ring-yellow-500 focus:ring-opacity-50 xl:focus:w-[76%]'
            required
          />
          {/* sm:w-48 sm:focus:w-56 */}
        </div>
      </div>
      <div className=' w-1/5'>
        <button
          type='submit'
          className='inline-block  rounded-full bg-stone-700  font-semibold uppercase tracking-normal md:tracking-wide text-yellow-400 transition-colors hover:bg-stone-800 active:translate-y-[2px] disabled:cursor-not-allowed disabled:opacity-50 py-2.5 px-3  text-xs xl:px-6'
        >
          {/* md:px-5 md:py-2.5  */}
          {/* sm:px-6 sm:py-4 */}
          {/* md:px-5 md:py-2.5 */}
          {isSmallScreen && (
            <FontAwesomeIcon icon={faArrowRightToBracket} />
          )}{" "}
          Login
        </button>
      </div>
    </form>
  );
}

export default Login;
