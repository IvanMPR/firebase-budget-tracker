import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-hot-toast";
function LogoutButton() {
  const navigate = useNavigate();

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
        toast.success("Logged out successfully");
      })
      .catch(error => {
        // An error happened.
        toast.error(error.message);
      });
  };
  return (
    <button
      onClick={handleLogout}
      className='inline-block  rounded-full bg-stone-700  font-semibold uppercase tracking-wide text-yellow-400 transition-colors hover:bg-stone-800 active:translate-y-[2px] disabled:cursor-not-allowed disabled:opacity-50 sm:px-6 sm:py-4 px-4 py-2 md:px-5 md:py-2.5 text-xs'
    >
      <FontAwesomeIcon icon={faArrowRightFromBracket} /> Logout
    </button>
  );
}

export default LogoutButton;
