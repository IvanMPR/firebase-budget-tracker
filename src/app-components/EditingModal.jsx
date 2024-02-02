import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { useState, useEffect, useRef } from "react";
import { db } from "../firebase";
import { useAuthContext } from "../contexts/AuthContext";
import { useBudgetTrackerContext } from "../contexts/BudgetTrackerContext";
import toast from "react-hot-toast";

function EditingModal() {
  const { user } = useAuthContext();
  const { descToEdit, amountToEdit, idToEdit, dispatch, roundNumber } =
    useBudgetTrackerContext();

  const [newDesc, setNewDesc] = useState(descToEdit);
  const [newAmount, setNewAmount] = useState(amountToEdit);
  const modalInput = useRef(null);

  async function handleEdit(id) {
    // Get a reference to the user's document
    const userDocRef = doc(db, "users", user.uid);

    // Get the current state of the document
    const userDocSnap = await getDoc(userDocRef);

    if (userDocSnap.exists()) {
      // Get the current entries array
      const entries = userDocSnap.data().entries;

      // Find the index of the entry to update
      const entryIndex = entries.findIndex(entry => entry.id === id);

      if (entryIndex !== -1) {
        // Update the entry
        entries[entryIndex] = {
          ...entries[entryIndex],
          desc: newDesc,
          amount: newAmount,
        };

        // Write the updated entries array back to the document
        await setDoc(userDocRef, { entries }, { merge: true });

        // Dispatch the update action to update local state
        dispatch({ type: "edit", payload: { newDesc, newAmount } });

        toast(`📃 Entry successfully updated`);
      } else {
        toast(`📃 No entry found with id: ${id}`);
      }
    } else {
      toast(`📃 No document found for user with id: ${user.uid}`);
    }
  }

  useEffect(() => {
    modalInput.current.focus();
  }, []);

  return (
    <div className='fixed inset-0 bg-stone-700 bg-opacity-40 backdrop-blur-sm flex items-center justify-center'>
      <div className=' p-4 relative z-[100] w-[27%] h-[23%] border border-stone-700 bg-yellow-400 rounded-xl'>
        <span
          className=' absolute right-4 cursor-pointer transition-all duration-500 ease-in-out hover:text-red-500 font-bold text-xl'
          title='Close editing modal '
          onClick={() => dispatch({ type: "closeModal" })}
        >
          X
        </span>
        <h2 className='text-center text-l uppercase mb-8 font-bold text-xl'>
          Edit entry
        </h2>
        <form className='flex my-4 m-auto w-full '>
          <input
            type='text'
            value={newDesc}
            onChange={e => {
              setNewDesc(e.target.value);
            }}
            ref={modalInput}
            className='mr-2 p-2 border border-slate-700  w-2/3 rounded-md'
            maxLength={30}
          />
          <input
            type='number'
            value={newAmount}
            onChange={e => {
              setNewAmount(roundNumber(Number(e.target.value)));
            }}
            className=' p-2 border border-slate-700 rounded-md'
            max={1000000000}
          />
        </form>
        <button
          type='submit'
          className='block mr-auto mt-10  rounded-full bg-stone-700  font-semibold uppercase tracking-wide text-yellow-400 transition-colors hover:bg-stone-800 active:translate-y-[2px] disabled:cursor-not-allowed disabled:opacity-50 sm:px-6 sm:py-4 px-4 py-2 md:px-5 md:py-2.5 text-xs'
          onClick={e => {
            e.preventDefault();
            handleEdit(idToEdit);
          }}
        >
          <FontAwesomeIcon icon={faCheck} /> Save Changes
        </button>
      </div>
    </div>
  );
}

export default EditingModal;
