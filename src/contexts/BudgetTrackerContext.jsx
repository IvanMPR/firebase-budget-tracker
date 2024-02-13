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
import { roundNumber } from "../utils";

const BudgetTrackerContext = createContext();

function BudgetTrackerProvider({ children }) {
  const { user } = useAuthContext();
  const [isFetchingEntries, setIsFetchingEntries] = useState(false);

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
    // const docSnap
    getDoc(docRef)
      .then(doc => {
        if (doc.exists()) {
          dispatch({ type: "loadEntries", payload: doc.data().entries });
          setIsFetchingEntries(false);
        } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
          dispatch({ type: "loadEntries", payload: [] });
          setIsFetchingEntries(false);
        }
      })
      .catch(err => console.log(err.message));
  }, [user]);

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
        roundNumber,
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
