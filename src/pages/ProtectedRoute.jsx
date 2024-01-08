import { auth } from "../firebase";

function ProtectedRoute({ children }) {
  const { user } = auth;
  //   const navigate = useNavigate();
  console.log(user);
  //   useEffect(() => {
  //     console.log(user);
  //     if (!user) navigate("/login");
  //   }, [user, navigate]);

  return children;
}

export default ProtectedRoute;
