import Header from "../components/Header";
import Amounts from "../app-components/Amounts";
import Inputs from "../app-components/Inputs";
import ListsParent from "../app-components/ListsParent";
import { useAuthContext } from "../contexts/AuthContext";
import { useEffect } from "react";

function BudgetTracker() {
  const { logOut } = useAuthContext();

  useEffect(() => {
    window.addEventListener("beforeunload", logOut);

    return () => {
      window.removeEventListener("beforeunload", logOut);
    };
  }, [logOut]);
  return (
    <section>
      <Header />
      <div className=' w-screen flex flex-col items-center justify-center'>
        <Amounts />
        <Inputs />
        <ListsParent />
      </div>
    </section>
  );
}

export default BudgetTracker;
