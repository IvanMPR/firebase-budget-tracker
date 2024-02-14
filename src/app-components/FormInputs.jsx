import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef, useEffect } from "react";
import { useAuthContext } from "../contexts/AuthContext";

import { db } from "../firebase";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import { useBudgetTrackerContext } from "../contexts/BudgetTrackerContext";
import { roundNumber } from "../utils";
function FormInputs() {
  const { user } = useAuthContext();
  const { dispatch, desc, amount, entries, type } = useBudgetTrackerContext();
  const descriptionInput = useRef(null);

  const handleAddEntry = async () => {
    try {
      const newEntry = {
        id: crypto.randomUUID(),
        type,
        desc,
        amount,
        time: new Date().toLocaleString("en-us", {
          day: "2-digit",
          month: "2-digit",
          year: "2-digit",
          hour: "2-digit",
          minute: "2-digit",
        }),
      };

      if (newEntry.desc === "") {
        alert("Please fill in description field");
        return;
      }
      if (newEntry.amount <= 0) {
        alert("Amount field must not be empty or less than 0");
        return;
      }
      // update local state
      dispatch({ type: "addEntry", payload: newEntry });
      // Get a reference to the user's document in the database
      const userDoc = doc(db, "users", user.uid);
      // Update the user's entries array in the database
      await updateDoc(userDoc, {
        entries: arrayUnion(newEntry),
      });
    } catch (error) {
      console.log(error.message, "Error adding entry to array");
    }
  };

  useEffect(() => {
    descriptionInput.current.focus();
  }, [type, entries]);

  return (
    <form className='flex justify-between items-center w-2/3'>
      <input
        type='text'
        placeholder='Add description'
        className='py-2 px-4 mr-4'
        onChange={e => dispatch({ type: "desc", payload: e.target.value })}
        value={desc}
        ref={descriptionInput}
        maxLength={30}
      />
      <input
        type='number'
        placeholder='Add amount'
        className='py-2 px-4 mr-4'
        onChange={e =>
          dispatch({
            type: "value",
            payload: roundNumber(Number(e.target.value)),
          })
        }
        value={amount}
        max={1000000000}
      />
      <button
        type='submit'
        className='inline-block  rounded-full bg-stone-700  font-semibold uppercase tracking-wide text-yellow-400 transition-colors hover:bg-stone-800 active:translate-y-[2px] disabled:cursor-not-allowed disabled:opacity-50 sm:px-6 sm:py-4 px-4 py-2 md:px-5 md:py-2.5 text-xs'
        onClick={e => {
          e.preventDefault();
          handleAddEntry();
        }}
      >
        <FontAwesomeIcon icon={faPlus} /> Add entry
      </button>
    </form>
  );
}

export default FormInputs;
