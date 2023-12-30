import List from "./List";
import EditingModal from "./EditingModal";
import ContentWrapper from "../components/ContentWrapper";

function ListsParent(props) {
  return (
    <ContentWrapper>
      <div className='w-full flex justify-between items-top my-4 m-auto'>
        <div className='w-full mx-2'>
          <h2>Income</h2>
          {props.incomeEntries.length === 0 ? (
            <p>No income entries</p>
          ) : (
            <List
              type='inc-list'
              entriesType={props.incomeEntries}
              dispatch={props.dispatch}
              isEditing={props.isEditing}
            />
          )}
        </div>
        <div className='w-full mx-2'>
          <h2>Expense</h2>
          {props.expenseEntries.length === 0 ? (
            <p>No expense entries</p>
          ) : (
            <List
              type='exp-list'
              entriesType={props.expenseEntries}
              dispatch={props.dispatch}
              isEditing={props.isEditing}
            />
          )}
        </div>
        {props.isEditing && (
          <EditingModal
            descToEdit={props.descToEdit}
            amountToEdit={props.amountToEdit}
            dispatch={props.dispatch}
          />
        )}
      </div>
    </ContentWrapper>
  );
}
export default ListsParent;
