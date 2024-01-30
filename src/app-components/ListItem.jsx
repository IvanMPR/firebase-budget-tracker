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

function ListItem(props) {
  const { user } = useAuthContext();

  function handleInfo() {
    if (props.isEditing) return;
    toast(`📃 Entry created at ${props.entry.time}`);
  }

  async function handleDelete() {
    // Get a reference to the user's document
    const userDocRef = doc(db, "users", user.uid);

    // Get the current state of the document
    const userDocSnap = await getDoc(userDocRef);

    if (userDocSnap.exists()) {
      // Get the current entries array
      const entries = userDocSnap.data().entries;

      // Filter out the entry to delete
      const updatedEntries = entries.filter(
        entry => entry.id !== props.entry.id
      );
      // Write the updated entries array back to the document
      await setDoc(userDocRef, { entries: updatedEntries }, { merge: true });

      // Dispatch the delete action to update local state
      props.dispatch({ type: "deleteEntry", payload: props.entry.id });

      toast(`📃 Entry successfully deleted`);
    } else {
      toast(`📃 No document found for user with id: ${props.user.uid}`);
    }
  }

  return (
    <li className='py-2 px-4 mb-2 w-full flex justify-between items-center border-y-2 border-slate-700 odd:bg-yellow-400'>
      {props.entry.desc}

      <div>
        <span className='item-amount'>{props.entry.amount}</span>
      </div>
      <div className='flex items-center justify-center gap-2'>
        <span
          className='btn-info text-slate-700  hover:text-slate-800 cursor-pointer'
          onClick={handleInfo}
        >
          <FontAwesomeIcon
            icon={faCircleInfo}
            title={
              props.isEditing
                ? "Can't open more info while editing"
                : "Click for date/time info"
            }
          />
        </span>
        <span
          className='btn-edit  text-slate-700  hover:text-slate-800 cursor-pointer'
          onClick={() => {
            props.dispatch({
              type: "openEditMode",
              payload: {
                id: props.entry.id,
                oldDesc: props.entry.desc,
                oldVal: props.entry.amount,
              },
            });
          }}
        >
          <FontAwesomeIcon
            icon={faPenToSquare}
            title={
              props.isEditing ? "Can't edit while modal is open" : "Edit entry"
            }
          />
        </span>
        <span
          className='btn-delete  text-slate-700 cursor-pointer hover:text-slate-800'
          onClick={() => handleDelete()}
        >
          <FontAwesomeIcon
            icon={faTrash}
            title={
              props.isEditing
                ? "Can't delete entry while modal is open"
                : "Delete entry"
            }
          />
        </span>
      </div>
    </li>
  );
}

export default ListItem;
