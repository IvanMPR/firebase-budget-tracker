import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef, useEffect } from "react";

function FormInputs({ dispatch, desc, amount, entries, type }) {
  const descriptionInput = useRef(null);

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
      />
      <input
        type='number'
        placeholder='Add amount'
        className='py-2 px-4 mr-4'
        onChange={e =>
          dispatch({ type: "value", payload: Number(e.target.value) })
        }
        value={amount}
      />
      <button
        type='submit'
        className='inline-block  rounded-full bg-stone-700  font-semibold uppercase tracking-wide text-yellow-400 transition-colors hover:bg-stone-800 active:translate-y-[2px] disabled:cursor-not-allowed disabled:opacity-50 sm:px-6 sm:py-4 px-4 py-2 md:px-5 md:py-2.5 text-xs'
        onClick={e => {
          e.preventDefault();
          dispatch({ type: "addEntry" });
        }}
      >
        <FontAwesomeIcon icon={faPlus} /> Add entry
      </button>
    </form>
  );
}

export default FormInputs;
