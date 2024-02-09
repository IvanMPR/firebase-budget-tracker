import { useBudgetTrackerContext } from "../contexts/BudgetTrackerContext";

function SortOptions({ type }) {
  const { incSort, setIncSort, expSort, setExpSort } =
    useBudgetTrackerContext();

  function handleSortChange(e) {
    return type === " income"
      ? setIncSort(e.target.value)
      : setExpSort(e.target.value);
  }
  return (
    <div className=' mb-2'>
      <label htmlFor='sortOptions'>Sort entries: </label>
      <select
        id='sortOptions'
        value={type === " income" ? incSort : expSort}
        onChange={handleSortChange}
      >
        <option value='date-asc'>Oldest First</option>
        <option value='date-desc'>Newest First</option>
        <option value='month'>Month</option>
        <option value='amount'>Amount</option>
      </select>
    </div>
  );
}
export default SortOptions;
