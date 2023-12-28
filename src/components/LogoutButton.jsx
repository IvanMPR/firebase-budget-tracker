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
    <button onClick={handleLogout} className=' text-stone-700 '>
      <FontAwesomeIcon icon={faArrowRightFromBracket} /> Logout
    </button>
  );
}

export default LogoutButton;
