import React, { useEffect, useReducer } from "react";

import { initialState } from "../reducer";
import reducer from "../reducer";
import { db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";
import Header from "../components/Header";

import Amounts from "../app-components/Amounts";
import FormInputs from "../app-components/FormInputs";
import Inputs from "../app-components/Inputs";
import ListsParent from "../app-components/ListsParent";
import RadioInputs from "../app-components/RadioInputs";

import { useAuthContext } from "../contexts/AuthContext";

function Home() {
  const { user } = useAuthContext();

  const [
    { entries, type, desc, amount, isEditing, descToEdit, amountToEdit },
    dispatch,
  ] = useReducer(reducer, initialState);

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
    const docRef = doc(db, "users", user.uid);
    // const docSnap
    getDoc(docRef)
      .then(doc => {
        if (doc.exists()) {
          console.log("Document data:", doc.data().entries);
          dispatch({ type: "loadEntries", payload: doc.data().entries });
        } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
          dispatch({ type: "loadEntries", payload: [] });
        }
      })
      .catch(err => console.log(err.message));
  }, [user]);

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
