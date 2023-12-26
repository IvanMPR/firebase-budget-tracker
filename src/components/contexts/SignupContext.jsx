import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";

const SignupContext = createContext();

function SignupProvider({ children }) {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function onSubmit(e) {
    e.preventDefault();

    await createUserWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        navigate("/login");
      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  }

  return (
    <SignupContext.Provider
      value={{
        navigate,
        email,
        setEmail,
        password,
        setPassword,
        onSubmit,
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
