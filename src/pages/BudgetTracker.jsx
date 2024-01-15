import React, { useEffect, useReducer } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";

import Header from "../components/Header";

import Loader from "../components/Loader";
import { useAuthContext } from "../contexts/AuthContext";

import Amounts from "../app-components/Amounts";
import FormInputs from "../app-components/FormInputs";
import Inputs from "../app-components/Inputs";
import ListsParent from "../app-components/ListsParent";
import RadioInputs from "../app-components/RadioInputs";

const initialState = {
  entries: JSON.parse(localStorage.getItem("entries")) || [],
  type: "inc",
  desc: "",
  amount: 0,
  isEditing: false,
  idToEdit: null,
  descToEdit: "",
  amountToEdit: 0,
};

function reducer(state, { type, payload }) {
  switch (type) {
    case "type":
      return { ...state, type: payload };
    case "desc":
      return { ...state, desc: payload };
    case "value":
      return { ...state, amount: payload };
    case "addEntry":
      const newEntry = {
        id: crypto.randomUUID(),
        type: state.type,
        desc: state.desc,
        amount: state.amount,
        time: new Date().toLocaleString("en-us", {
          day: "2-digit",
          month: "2-digit",
          year: "2-digit",
          hour: "2-digit",
          minute: "2-digit",
        }),
      };
      if (newEntry.desc === "" || newEntry.amount === 0) {
        alert("Please fill in all fields");
        return state;
      }
      return {
        ...state,
        entries: [...state.entries, newEntry],
        desc: "",
        amount: 0,
      };
    case "deleteEntry":
      // prevent deleting entry while editing
      if (state.isEditing) return state;
      return {
        ...state,
        entries: state.entries.filter(entry => entry.id !== payload),
      };
    case "openEditMode":
      // prevent opening editing modal while already editing
      if (state.isEditing) return state;
      return {
        ...state,
        isEditing: true,
        idToEdit: payload.id,
        descToEdit: payload.oldDesc,
        amountToEdit: payload.oldVal,
      };
    case "edit":
      // prevent empty input fields in editing modal
      if (payload.newDesc === "" || payload.newAmount === 0) {
        alert("Please fill in all fields");
        return state;
      }
      return {
        ...state,
        entries: state.entries.map(entry => {
          if (entry.id !== state.idToEdit) return entry;

          return {
            ...entry,
            desc: payload.newDesc,
            amount: payload.newAmount,
          };
        }),
        isEditing: false,
        idToEdit: null,
        descToEdit: "",
        amountToEdit: 0,
      };
    case "closeModal":
      return {
        ...state,
        isEditing: false,
        idToEdit: null,
        descToEdit: "",
        amountToEdit: 0,
      };
    default:
      throw new Error("Invalid action type");
  }
}

function Home() {
  const { isLoading } = useAuthContext();
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

  const percentage = Math.round((expenseFunds / incomeFunds) * 100);
  // effects
  useEffect(() => {
    localStorage.setItem("entries", JSON.stringify(entries));
  }, [entries]);
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
