import {
  faCircleInfo,
  faPenToSquare,
  faT,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

function ListItem(props) {
  const [showInfo, setShowInfo] = useState(false);

  function handleInfo() {
    if (props.isEditing) return;
    setShowInfo(!showInfo);
  }

  return (
    <li className='py-2 px-4 mb-2 w-full flex justify-between items-center border-y-2 border-slate-700 odd:bg-yellow-400'>
      {props.entry.desc}
      {showInfo && <span className='created-at'>{props.entry.time}</span>}
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
          onClick={() => {
            props.dispatch({ type: "deleteEntry", payload: props.entry.id });
          }}
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
