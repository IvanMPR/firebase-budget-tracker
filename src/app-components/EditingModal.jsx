import { useState, useEffect, useRef } from "react";

function EditingModal({ descToEdit, amountToEdit, dispatch }) {
  const [newDesc, setNewDesc] = useState(descToEdit);
  const [newAmount, setNewAmount] = useState(amountToEdit);
  const modalInput = useRef(null);

  useEffect(() => {
    modalInput.current.focus();
  }, []);

  return (
    <div className=' p-6 absolute top-80 left-80 translate-x-80  z-[100] w-[30%] h-[30%] border border-slate-700  bg-yellow-100  '>
      <span
        className='ml-auto cursor-pointer  mt-4 transition-all duration-500 ease-in-out hover:text-red-500'
        title='Close window'
        onClick={() => dispatch({ type: "closeModal" })}
      >
        X
      </span>
      <h2 className='text-center uppercase'>Edit entry</h2>
      <form className='flex column justify-between items-center my-4 m-auto w-full py-2 px-4'>
        <input
          type='text'
          value={newDesc}
          onChange={e => {
            setNewDesc(e.target.value);
          }}
          ref={modalInput}
          className='w-full p-2 border border-slate-700  bg-yellow-100'
        />
        <input
          type='number'
          value={newAmount}
          onChange={e => {
            setNewAmount(Number(e.target.value));
          }}
          className='w-full p-2 border border-slate-700  bg-yellow-100'
        />
        <button
          type='submit'
          className='btn'
          onClick={e => {
            e.preventDefault();
            dispatch({ type: "edit", payload: { newDesc, newAmount } });
          }}
        >
          Save Changes
        </button>
      </form>
    </div>
  );
}

export default EditingModal;
