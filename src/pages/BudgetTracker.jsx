import React, { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import LogoutButton from "../components/LogoutButton";
import Header from "../components/Header";
import Main from "../components/Main";

function Home() {
  useEffect(() => {
    onAuthStateChanged(auth, user => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        // ...
        console.log("uid", uid);
      } else {
        // User is signed out
        // ...
        console.log("user is logged out");
      }
    });
  }, []);

  return (
    <section>
      <Header />
      <Main />
      <h1>Budget Tracker Main Window</h1> <LogoutButton />
    </section>
  );
}

export default Home;
