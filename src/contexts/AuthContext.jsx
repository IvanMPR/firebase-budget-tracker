import { createContext, useContext, useEffect, useState } from "react";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase";
import { auth } from "../firebase";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const createUser = (email, password) => {
    setIsLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const loginUser = (email, password) => {
    setIsLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    setIsLoading(true);
    return signOut(auth);
  };

  const pushEntryToFirestore = newEntry => {
    // Update the entries field of the currently logged in user's document
    const userDoc = doc(db, "users", user.uid); // replace "authUser.uid" with the ID of the currently logged in user
    console.log(user.uid, "from user uid");
    updateDoc(userDoc, {
      entries: arrayUnion(newEntry),
    })
      .then(() => {
        console.log("Document successfully updated!");
      })
      .catch(error => {
        console.error("Error updating document: ", error);
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser);
      setIsLoading(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        createUser,
        loginUser,
        logOut,
        isLoading,
        setIsLoading,
        pushEntryToFirestore,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function useAuthContext() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuthContext must be used within a AuthProvider");
  }
  return context;
}

export { AuthProvider, useAuthContext };
