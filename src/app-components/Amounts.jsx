import Amount from "./Amount";
import SmallSpinner from "../components/SmallSpinner";
import { useBudgetTrackerContext } from "../contexts/BudgetTrackerContext";
import { CURRENCY_SYMBOL, roundNumber } from "../utils";
import ContentWrapper from "../components/ContentWrapper";

function Amounts() {
  const {
    availableFunds,
    incomeFunds,
    expenseFunds,
    percentage,
    isFetchingEntries,
  } = useBudgetTrackerContext();

  return (
    <ContentWrapper>
      <div className=' w-full px-4 xl:w-[50%] xl:m-auto xl:justify-center'>
        <div className='xl:w-[80%] xl:m-auto'>
          <Amount ring='ring-3 ring-slate-400 ring-offset-2'>
            <span className='block text-stone-700 font-bold'>
              Available funds:
            </span>
            <h3 className='font-bold text-yellow-400 text-xl bg-stone-700 px-2'>
              {isFetchingEntries ? (
                <SmallSpinner />
              ) : (
                `${CURRENCY_SYMBOL}${roundNumber(availableFunds)}`
              )}
            </h3>
          </Amount>
        </div>
        <div className='flex flex-col xl:flex-row w-full   justify-between '>
          <div className='  sm:mr-0 xl:w-[40%] '>
            <Amount ring='ring-3 ring-green-400 ring-offset-2'>
              <span className='block text-slate-700 font-bold'>Income: </span>
              <h3 className='font-bold text-slate-700 text-xl bg-green-200 px-2'>
                {isFetchingEntries ? (
                  <SmallSpinner />
                ) : (
                  `${CURRENCY_SYMBOL}${roundNumber(incomeFunds)}`
                )}
              </h3>
            </Amount>
          </div>
          <div className='  sm:ml-0 xl:w-[40%] '>
            <Amount ring='ring-3 ring-red-400 ring-offset-2'>
              <span className='block text-slate-700 font-bold'>Expense: </span>
              <h3 className='font-bold text-slate-700 text-xl bg-rose-200 px-2'>
                {isFetchingEntries ? (
                  <SmallSpinner />
                ) : (
                  `${CURRENCY_SYMBOL}${roundNumber(expenseFunds)}`
                )}
              </h3>
            </Amount>
          </div>
        </div>
        <span
          className=' m-auto mt-1 text-stone-700 text-l uppercase font-bold p-2 w-full flex items-center justify-center'
          title='Expense / Income ratio'
        >
          {isFetchingEntries && <SmallSpinner />}
          {isFetchingEntries || (
            <span>
              Your expenses are
              <span className=' bg-stone-700 text-yellow-400 py-1 px-2 text-xl mx-2'>
                {percentage}%
              </span>
              of your income
            </span>
          )}
        </span>
      </div>
    </ContentWrapper>
  );
}
export default Amounts;
