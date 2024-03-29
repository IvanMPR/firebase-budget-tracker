import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { initialState } from "../reducer";
import reducer from "../reducer";
import { db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";
import { useAuthContext } from "./AuthContext";

const BudgetTrackerContext = createContext();

function BudgetTrackerProvider({ children }) {
  const { user } = useAuthContext();
  const [isFetchingEntries, setIsFetchingEntries] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [
    {
      entries,
      filteredEntries,
      type,
      desc,
      amount,
      isEditing,
      idToEdit,
      descToEdit,
      amountToEdit,
    },
    dispatch,
  ] = useReducer(reducer, initialState);

  // derived state
  const incomeEntries = [...filteredEntries].filter(
    entry => entry.type === "inc"
  );
  const expenseEntries = [...filteredEntries].filter(
    entry => entry.type === "exp"
  );

  const incomeFunds = incomeEntries
    .map(entry => Number(entry.amount))
    .reduce((acc, curr) => acc + curr, 0);

  const expenseFunds = expenseEntries
    .map(entry => Number(entry.amount))
    .reduce((acc, curr) => acc + curr, 0);

  const availableFunds = incomeFunds - expenseFunds;

  const percentage = Math.round((expenseFunds / incomeFunds) * 100) || "";

  useEffect(() => {
    if (!user) return;
    setIsFetchingEntries(true);
    const docRef = doc(db, "users", user.uid);

    getDoc(docRef)
      .then(doc => {
        if (doc.exists()) {
          dispatch({ type: "loadEntries", payload: doc.data().entries });
          setIsFetchingEntries(false);
        } else {
          // doc.data() will be undefined in this case
          dispatch({ type: "loadEntries", payload: [] });
          setIsFetchingEntries(false);
        }
      })
      .catch(err => console.log(err.message));
  }, [user]);
  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 640px)");
    mediaQuery.addListener(handleMediaQueryChange);
    handleMediaQueryChange(mediaQuery);

    return () => {
      mediaQuery.removeListener(handleMediaQueryChange);
    };
  }, []);

  const handleMediaQueryChange = mediaQuery => {
    setIsSmallScreen(mediaQuery.matches);
  };

  return (
    <BudgetTrackerContext.Provider
      value={{
        entries,
        type,
        desc,
        amount,
        isEditing,
        idToEdit,
        descToEdit,
        amountToEdit,
        dispatch,
        incomeEntries,
        expenseEntries,
        incomeFunds,
        expenseFunds,
        availableFunds,
        percentage,
        isFetchingEntries,
        isSmallScreen,
      }}
    >
      {children}
    </BudgetTrackerContext.Provider>
  );
}
function useBudgetTrackerContext() {
  const context = useContext(BudgetTrackerContext);
  if (context === undefined) {
    throw new Error("useAuthContext must be used within a AuthProvider");
  }
  return context;
}

export { BudgetTrackerProvider, useBudgetTrackerContext };
