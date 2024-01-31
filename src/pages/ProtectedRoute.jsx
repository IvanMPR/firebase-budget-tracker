import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useAuthContext } from "../contexts/AuthContext";

function ProtectedRoute({ children }) {
  const { user } = useAuthContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) navigate("/");
  }, [user, navigate]);

  return children;
}

export default ProtectedRoute;
