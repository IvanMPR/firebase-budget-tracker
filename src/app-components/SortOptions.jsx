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
    <div className=' mb-2 flex'>
      <div className=' mr-1'>
        <label htmlFor='sortOptions'>Sort entries: </label>
        <select
          id='sortOptions'
          value={type === " income" ? incSort : expSort}
          onChange={handleSortChange}
        >
          <option value='date-asc'>Oldest First</option>
          <option value='date-desc'>Newest First</option>
          <option value='amount-h'>Amount Highest</option>
          <option value='amount-l'>Amount Lowest</option>
        </select>
      </div>

      <div>
        <label htmlFor='month'>&nbsp;</label>
        <select
          id='monthSorting'
          // value={type === " income" ? incSort : expSort}
          // onChange={handleSortChange}
        >
          <option value=''>Choose by month</option>
          <option value='01'>January</option>
          <option value='02'>February</option>
          <option value='03'>March</option>
          <option value='04'>April</option>
          <option value='05'>May</option>
          <option value='06'>June</option>
          <option value='07'>July</option>
          <option value='08'>August</option>
          <option value='09'>September</option>
          <option value='10'>October</option>
          <option value='11'>November</option>
          <option value='12'>December</option>
        </select>
      </div>
    </div>
  );
}
export default SortOptions;
