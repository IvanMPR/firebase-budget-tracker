import React, { useState, useEffect, useReducer } from "react";
// import { onAuthStateChanged } from "firebase/auth";
// import { auth } from "../firebase";
import { initialState } from "../reducer";
import reducer from "../reducer";
import { db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";
import Header from "../components/Header";

// import { useAuthContext } from "../contexts/AuthContext";

import Amounts from "../app-components/Amounts";
import FormInputs from "../app-components/FormInputs";
import Inputs from "../app-components/Inputs";
import ListsParent from "../app-components/ListsParent";
import RadioInputs from "../app-components/RadioInputs";

// import Loader from "../components/Loader";
// import { db } from "../firebase";
// import { doc, getDoc } from "firebase/firestore";
import { useAuthContext } from "../contexts/AuthContext";

function Home() {
  const { user } = useAuthContext();
  const [state, setState] = useState(initialState);
  const [
    { entries, type, desc, amount, isEditing, descToEdit, amountToEdit },
    dispatch,
  ] = useReducer(reducer, initialState);
  // ovde dodati inital state u state i onda svaku promenu u stateu sacuvati u firestore
  // derived state
  const incomeEntries = entries.filter(entry => entry.type === "inc");
  const expenseEntries = entries.filter(entry => entry.type === "exp");

  const incomeFunds = incomeEntries
    .map(entry => Number(entry.amount))
    .reduce((acc, curr) => acc + curr, 0);

  const expenseFunds = expenseEntries
    .map(entry => Number(entry.amount))
    .reduce((acc, curr) => acc + curr, 0);

  const availableFunds = incomeFunds - expenseFunds;

  const percentage = Math.round((expenseFunds / incomeFunds) * 100) || "";

  useEffect(() => {
    function loadUserEntries(user, setState) {
      const docRef = doc(db, "users", user.uid);
      const docSnap = getDoc(docRef)
        .then(doc => {
          if (doc.exists()) {
            console.log("Document data:", doc.data().entries);
            setState(prevState => ({
              ...prevState,
              entries: doc.data().entries,
            }));
            // console.log(doc.data().entries.forEach(entry => console.log(entry)));
            // initialState.entries = doc.data().entries;
            console.log(state, "from login - initialState.entries");
          } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
          }
        })
        .catch(err => console.log(err.message));
    }
  }, [user, state]);

  return (
    <section>
      <Header />
      <div className=' w-screen flex flex-col items-center justify-center'>
        {/* <h2 className='uppercase text-xl text-yellow-500 my-4 tracking-wide'>
          Budget Summary
        </h2> */}
        <Amounts
          availableFunds={availableFunds}
          incomeFunds={incomeFunds}
          expenseFunds={expenseFunds}
          percentage={percentage}
        />
        <Inputs>
          <RadioInputs>
            <label className=' uppercase'>Income</label>
            <input
              type='radio'
              name='inputs'
              defaultChecked
              onChange={() => dispatch({ type: "type", payload: "inc" })}
            />
            <label className=' uppercase'>Expense</label>
            <input
              type='radio'
              name='inputs'
              onChange={() => dispatch({ type: "type", payload: "exp" })}
            />
          </RadioInputs>
          <FormInputs
            dispatch={dispatch}
            desc={desc}
            amount={amount}
            entries={entries}
            type={type}
          />
        </Inputs>
        <ListsParent
          incomeEntries={incomeEntries}
          expenseEntries={expenseEntries}
          dispatch={dispatch}
          isEditing={isEditing}
          descToEdit={descToEdit}
          amountToEdit={amountToEdit}
        />
      </div>
    </section>
  );
}

export default Home;
