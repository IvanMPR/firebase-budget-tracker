import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightToBracket } from "@fortawesome/free-solid-svg-icons";
import { useForm } from "react-hook-form";
import { useAuthContext } from "../contexts/AuthContext";
import Loader from "../components/Loader";
import { db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";
import { useEffect } from "react";

function loadUserEntries(result) {
  const docRef = doc(db, "users", result.user.uid);
  const docSnap = getDoc(docRef).then(doc => {
    if (doc.exists()) {
      console.log("Document data:", JSON.parse(doc.data().entries.at(0)));
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
  });
}

function Login() {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const { isLoading, loginUser, setIsLoading, user } = useAuthContext();

  function onUserLogin({ email, password }) {
    loginUser(email, password)
      .then(result => {
        // console.log(result, "from login");
        navigate("/budget-tracker");
        loadUserEntries(result);
      })
      .catch(error => {
        toast.error(error.message);
        setIsLoading(false);
      });
    // if (user) ;
  }

  // useEffect(() => {
  //   console.log("User:", user);
  //   console.log("User ID:", user && user.uid);
  //   if (user) {
  //     console.log(user, "from login");

  //     getUserData(user);
  //   }
  // }, [user]);
  // getUserData(result.user.uid);
  //  const docRef = doc(db, "users", result.user.uid);
  //  const docSnap = getDoc(docRef).then(doc => {
  //    if (doc.exists()) {
  //      console.log("Document data:", doc.data());
  //    } else {
  //      // doc.data() will be undefined in this case
  //      console.log("No such document!");
  //    }
  //  });
  //  console.log(docRef, "from login - docRef");
  //  console.log(docSnap, "from login - docSnap");

  return isLoading ? (
    <Loader />
  ) : (
    <form onSubmit={handleSubmit(onUserLogin)} className='flex items-center'>
      <div>
        <label
          htmlFor='email-address'
          className='mx-1 my-0 text-left italic'
        ></label>
        <input
          {...register("email", { required: true })}
          id='email-address'
          type='email'
          placeholder='Email'
          className='w-28 rounded-full bg-yellow-100 px-4 py-2 text-sm transition-all duration-300 placeholder:text-stone-400 focus:outline-none focus:ring focus:ring-yellow-500 focus:ring-opacity-50 sm:w-64 sm:focus:w-72'
          required
        />
        {/* {errors.email && <p>Email is required</p>} */}
      </div>

      <div>
        <label htmlFor='password' className='mx-1 my-0 italic'></label>
        <input
          {...register("password", { required: true })}
          id='password'
          type='password'
          placeholder='Password'
          className='w-16 rounded-full bg-yellow-100 px-4 py-2 text-sm transition-all duration-300 placeholder:text-stone-400 focus:outline-none focus:ring focus:ring-yellow-500 focus:ring-opacity-50 sm:w-48 sm:focus:w-56'
          required
        />
        {/* {errors.password && <p>Password is required</p>} */}
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
