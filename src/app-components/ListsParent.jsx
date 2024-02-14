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
import ListHeader from "./ListHeader";
import SortOptions from "./SortOptions";

function ListsParent() {
  const { isFetchingEntries, incomeEntries, expenseEntries, isEditing } =
    useBudgetTrackerContext();
  return (
    <ContentWrapper>
      <div className='w-full flex flex-col m-auto'>
        <div className=' mb-2'>
          <SortOptions listType=' income' />
        </div>
        <div className=' flex'>
          <div className='w-full mx-2'>
            <ListHeader
              icon={
                <FontAwesomeIcon
                  icon={faArrowUpRightDots}
                  className=' text-green-500'
                />
              }
              h2Text=' income'
            />
            {isFetchingEntries && <Spinner />}
            {incomeEntries.length === 0 && !isFetchingEntries && (
              <p>No income entries</p>
            )}

            <List type='inc-list' entriesType={incomeEntries} />
          </div>
          <div className='w-full mx-2'>
            <ListHeader
              icon={
                <FontAwesomeIcon
                  icon={faArrowDownShortWide}
                  className=' text-red-500'
                />
              }
              h2Text=' expense'
            />

            {isFetchingEntries && <Spinner />}
            {expenseEntries.length === 0 && !isFetchingEntries && (
              <p>No expense entries</p>
            )}

            <List type='exp-list' entriesType={expenseEntries} />
          </div>
        </div>

        {isEditing && <EditingModal />}
      </div>
    </ContentWrapper>
  );
}
export default ListsParent;
