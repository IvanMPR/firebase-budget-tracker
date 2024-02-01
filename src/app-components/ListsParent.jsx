import List from "./List";
import EditingModal from "./EditingModal";
import ContentWrapper from "../components/ContentWrapper";
import {
  faArrowDownShortWide,
  faArrowUpRightDots,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Spinner from "../components/Spinner";
import { useBudgetTrackerContext } from "../contexts/BudgetTrackerContext";

function ListsParent() {
  const { isFetchingEntries, incomeEntries, expenseEntries, isEditing } =
    useBudgetTrackerContext();
  return (
    <ContentWrapper>
      <div className='w-full flex justify-between items-top my-4 m-auto'>
        <div className='w-full mx-2'>
          <h2 className='uppercase font-semibold mb-2 text-stone-700'>
            <FontAwesomeIcon
              icon={faArrowUpRightDots}
              className=' text-green-500'
            />
            Income
          </h2>
          {isFetchingEntries && <Spinner />}
          {incomeEntries.length === 0 && !isFetchingEntries && (
            <p>No income entries</p>
          )}

          <List type='inc-list' entriesType={incomeEntries} />
        </div>
        <div className='w-full mx-2'>
          <h2 className='mb-2 uppercase font-semibold text-stone-700'>
            <FontAwesomeIcon
              icon={faArrowDownShortWide}
              className=' text-red-500'
            />
            Expense
          </h2>
          {isFetchingEntries && <Spinner />}
          {expenseEntries.length === 0 && !isFetchingEntries && (
            <p>No expense entries</p>
          )}

          <List type='exp-list' entriesType={expenseEntries} />
        </div>
        {isEditing && <EditingModal />}
      </div>
    </ContentWrapper>
  );
}
export default ListsParent;
