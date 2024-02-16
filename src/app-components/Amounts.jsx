import Amount from "./Amount";
import SmallSpinner from "../components/SmallSpinner";
import { useBudgetTrackerContext } from "../contexts/BudgetTrackerContext";
import { CURRENCY_SYMBOL, roundNumber } from "../utils";

function Amounts() {
  const {
    availableFunds,
    incomeFunds,
    expenseFunds,
    percentage,
    isFetchingEntries,
  } = useBudgetTrackerContext();

  return (
    <div>
      <div>
        <Amount
          bgColor='bg-stone-700'
          ring='ring-3 ring-slate-400 ring-offset-2'
        >
          <span className='block text-yellow-400 '>Available funds: </span>
          <h3 className='font-bold text-yellow-400 text-xl'>
            {isFetchingEntries ? (
              <SmallSpinner />
            ) : (
              `${CURRENCY_SYMBOL} ${roundNumber(availableFunds)}`
            )}
          </h3>
        </Amount>
      </div>
      <div className=' flex w-full'>
        <div className=' mr-4'>
          <Amount
            bgColor='bg-green-200'
            ring='ring-3 ring-green-400 ring-offset-2'
          >
            <span className='block text-slate-700'>Income: </span>
            <h3 className='font-bold text-slate-700 text-xl'>
              {isFetchingEntries ? (
                <SmallSpinner />
              ) : (
                `${CURRENCY_SYMBOL} ${roundNumber(incomeFunds)}`
              )}
            </h3>
          </Amount>
        </div>
        <div className=' ml-4'>
          <Amount
            bgColor='bg-rose-200'
            ring='ring-3 ring-red-400 ring-offset-2'
          >
            <span className='block text-slate-700'>Expense: </span>
            <h3 className='font-bold text-slate-700 text-xl'>
              {isFetchingEntries ? (
                <SmallSpinner />
              ) : (
                `${CURRENCY_SYMBOL} ${roundNumber(expenseFunds)}`
              )}
            </h3>
          </Amount>
        </div>
      </div>
      <span
        className=' m-auto mt-1 bg-stone-700 text-yellow-400 text-l p-2 w-1/2 flex items-center justify-center'
        title='Expense / Income ratio'
      >
        {isFetchingEntries && <SmallSpinner />}
        {isFetchingEntries ||
          `Your expenses are ${
            expenseFunds === 0 ? 0 : percentage
          } % of your income.`}
      </span>
    </div>
  );
}
export default Amounts;
