import { useBudgetTrackerContext } from "../contexts/BudgetTrackerContext";

function RadioInputs() {
  const { dispatch } = useBudgetTrackerContext();
  return (
    <div className='flex justify-between items-center my-4 mx-auto w-full py-2 px-4'>
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
    </div>
  );
}
export default RadioInputs;
