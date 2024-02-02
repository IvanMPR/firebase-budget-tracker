import Amount from "./Amount";
import SmallSpinner from "../components/SmallSpinner";
import { useBudgetTrackerContext } from "../contexts/BudgetTrackerContext";

function Amounts() {
  const {
    availableFunds,
    incomeFunds,
    expenseFunds,
    percentage,
    isFetchingEntries,
    roundNumber,
  } = useBudgetTrackerContext();

  return (
    <>
      <Amount bgColor='bg-slate-400' ring='ring-3 ring-slate-400 ring-offset-2'>
        <span className='block text-yellow-400'>Available funds: </span>
        <h3 className='font-bold text-yellow-400'>
          {isFetchingEntries ? <SmallSpinner /> : roundNumber(availableFunds)}
        </h3>
      </Amount>
      <Amount bgColor='bg-stone-700' ring='ring-3 ring-green-400 ring-offset-2'>
        <span className='block text-yellow-400'>Income: </span>
        <h3 className='font-bold text-yellow-400'>
          {isFetchingEntries ? <SmallSpinner /> : roundNumber(incomeFunds)}
        </h3>
      </Amount>
      <Amount bgColor='bg-red-400' ring='ring-3 ring-red-400 ring-offset-2'>
        <span className='block text-yellow-400'>Expense: </span>
        <h3 className='font-bold text-yellow-400'>
          {isFetchingEntries ? <SmallSpinner /> : roundNumber(expenseFunds)}
        </h3>
      </Amount>
      <span className='block text-stone-700 font-bold text-xl'>
        {isFetchingEntries && <SmallSpinner />}
        {isFetchingEntries ||
          `Expenses are ${expenseFunds === 0 ? 0 : percentage}% of income`}
      </span>
    </>
  );
}
export default Amounts;
