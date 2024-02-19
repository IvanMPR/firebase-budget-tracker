import {
  faCircleInfo,
  faPenToSquare,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import toast from "react-hot-toast";
import { useAuthContext } from "../contexts/AuthContext";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../firebase";
import { useBudgetTrackerContext } from "../contexts/BudgetTrackerContext";

function ListItem({ entry }) {
  const { user } = useAuthContext();
  const { dispatch } = useBudgetTrackerContext();

  function handleInfo() {
    toast(`📃 Entry created at ${entry.time}`);
  }

  async function handleDelete() {
    try {
      // Get a reference to the user's document
      const userDocRef = doc(db, "users", user.uid);

      // Get the current state of the document
      const userDocSnap = await getDoc(userDocRef);

      if (userDocSnap.exists()) {
        // Get the current entries array
        const entries = userDocSnap.data().entries;

        // Filter out the entry to delete
        const updatedEntries = entries.filter(
          current => current.id !== entry.id
        );
        // Write the updated entries array back to the document
        await setDoc(userDocRef, { entries: updatedEntries }, { merge: true });

        // Dispatch the delete action to update local state
        dispatch({ type: "deleteEntry", payload: entry.id });

        toast(`📃 Entry successfully deleted`);
      } else {
        const username = user.email.split("@")[0];
        toast(`📃 No document found for user: ${username}`);
      }
    } catch (error) {
      toast.error(`📃 ${error.message}`);
    }
  }

  return (
    <li className='py-2 px-4 mb-2 w-full flex justify-between items-center border-y-2 border-slate-700 odd:bg-yellow-200 even:bg-stone-300'>
      <span className=' w-52 block'>{entry.desc}</span>

      <div>
        <span className=' w-48'>{entry.amount}</span>
      </div>
      <div className='flex items-center justify-center gap-2'>
        <span
          className='btn-info text-slate-700  hover:text-slate-800 cursor-pointer'
          onClick={handleInfo}
        >
          <FontAwesomeIcon
            icon={faCircleInfo}
            title='Click for date/time info'
          />
        </span>
        <span
          className='btn-edit  text-slate-700  hover:text-slate-800 cursor-pointer'
          onClick={() => {
            dispatch({
              type: "openEditMode",
              payload: {
                id: entry.id,
                oldDesc: entry.desc,
                oldVal: entry.amount,
              },
            });
          }}
        >
          <FontAwesomeIcon icon={faPenToSquare} title='Edit entry' />
        </span>
        <span
          className='btn-delete  text-slate-700 cursor-pointer hover:text-slate-800'
          onClick={() => handleDelete()}
        >
          <FontAwesomeIcon icon={faTrash} title='Delete entry' />
        </span>
      </div>
    </li>
  );
}

export default ListItem;
