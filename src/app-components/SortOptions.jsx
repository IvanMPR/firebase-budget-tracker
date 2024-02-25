import { useState } from "react";
import { useBudgetTrackerContext } from "../contexts/BudgetTrackerContext";

function SortOptions() {
  const [sort, setSort] = useState("date-asc");
  const [month, setMonth] = useState("");

  const { dispatch } = useBudgetTrackerContext();

  function handleSortChange(e) {
    setSort(e.target.value);
    dispatch({
      type: "sortOption",
      payload: e.target.value,
    });
  }

  function handleMonthChange(e) {
    setMonth(e.target.value);
    dispatch({
      type: "monthSort",
      payload: e.target.value,
    });
  }
  return (
    <div className='flex mb-2 flex-col xl:flex-row'>
      <div className=' mr-1'>
        <label htmlFor='sortOptions'>Sort entries: </label>
        <select
          className=' pl-1 py-1 mb-4'
          id='sortOptions'
          value={sort}
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
          className=' pl-14 py-1'
          id='monthSorting'
          value={month}
          onChange={handleMonthChange}
        >
          <option value=''>Choose by month - All</option>
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
