import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-hot-toast";
import { useAuthContext } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

function LogoutButton() {
  const navigate = useNavigate();
  const { logOut } = useAuthContext();

  function handleLogout() {
    logOut()
      .then(() => {
        navigate("/");
        toast.success("Logged out successfully");
      })
      .catch(error => {
        toast.error(error.message);
      });
  }
  return (
    <button
      onClick={handleLogout}
      className='inline-block  rounded-full bg-stone-700  font-semibold uppercase tracking-normal md:tracking-wide text-yellow-400 transition-colors hover:bg-stone-800 active:translate-y-[2px] disabled:cursor-not-allowed disabled:opacity-50  px-2 py-2  text-xs md:px-5 md:py-2.5'
    >
      <FontAwesomeIcon icon={faArrowRightFromBracket} /> Logout
    </button>
  );
}

export default LogoutButton;
