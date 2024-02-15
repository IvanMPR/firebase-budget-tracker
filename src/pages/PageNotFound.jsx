import { Link } from "react-router-dom";
import Header from "../components/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouseUser } from "@fortawesome/free-solid-svg-icons";

function PageNotFound() {
  return (
    <div>
      <Header />
      <div className='flex items-center justify-center h-screen'>
        <h2 className='text-4xl text-stone-700 font-bold'>Page Not Found</h2>
        <Link to='/'>
          <button className='inline-block ml-4  rounded-full bg-stone-700  font-semibold uppercase tracking-wide text-yellow-400 transition-colors hover:bg-stone-800 active:translate-y-[2px] disabled:cursor-not-allowed disabled:opacity-50 sm:px-6 sm:py-4 px-4 py-2 md:px-5 md:py-2.5 text-xs'>
            <FontAwesomeIcon icon={faHouseUser} /> Back to Home
          </button>
        </Link>
      </div>
    </div>
  );
}

export default PageNotFound;
