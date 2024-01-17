// import { auth } from "../firebase";

import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../contexts/AuthContext";
import { useEffect } from "react";

function ProtectedRoute({ children }) {
  const { user } = useAuthContext();
  const navigate = useNavigate();

  useEffect(() => {
    // console.log(user);
    if (!user) navigate("/");
  }, [user, navigate]);

  return children;
}

export default ProtectedRoute;
