import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import toast from "react-hot-toast";

const SignupContext = createContext();

function SignupProvider({ children }) {
  const navigate = useNavigate();

  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");  
  const [isLoading, setIsLoading] = useState(false);

  async function onSubmit(email, password) {
    // e.preventDefault();
    setIsLoading(true);
    await createUserWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        // navigate("/login");
        toast.success("Account created successfully ! Please login. ");
      })
      .catch(error => {
        // const errorCode = error.code;
        // const errorMessage = error.message;
        if (error.code === "auth/email-already-in-use") {
          toast.error("Email already in use. Please login. ");
        }
        toast.error(error.code);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  return (
    <SignupContext.Provider
      value={{
        navigate,
        // email,
        // setEmail,
        // password,
        // setPassword,
        onSubmit,
        isLoading,
      }}
    >
      {children}
    </SignupContext.Provider>
  );
}

function useSignupContext() {
  const context = useContext(SignupContext);
  if (context === undefined) {
    throw new Error("useSignupContext must be used within a SignupProvider");
  }
  return context;
}

export { SignupProvider, useSignupContext };
