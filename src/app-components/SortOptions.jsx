import { useState } from "react";
import { useBudgetTrackerContext } from "../contexts/BudgetTrackerContext";

function SortOptions({ listType }) {
  const [incSort, setIncSort] = useState("date-asc");
  const [expSort, setExpSort] = useState("date-asc");

  const [incMonth, setIncMonth] = useState("");
  const [expMonth, setExpMonth] = useState("");

  const { dispatch } = useBudgetTrackerContext();

  function handleSortChange(e) {
    if (listType === " income") {
      setIncSort(e.target.value);
      dispatch({
        type: "sortOption",
        payload: { type: listType, sort: e.target.value, month: incMonth },
      });
    } else {
      setExpSort(e.target.value);
      dispatch({
        type: "sortOption",
        payload: { type: listType, sort: e.target.value, month: expMonth },
      });
    }
  }

  function handleMonthChange(e) {
    if (listType === " income") {
      setIncMonth(e.target.value);
      dispatch({
        type: "sortOption",
        payload: { type: listType, sort: incSort, month: e.target.value },
      });
    } else {
      setExpMonth(e.target.value);
      dispatch({
        type: "sortOption",
        payload: { type: listType, sort: expSort, month: e.target.value },
      });
    }
  }
  return (
    <div className=' mb-2 flex'>
      <div className=' mr-1'>
        <label htmlFor='sortOptions'>Sort entries: </label>
        <select
          id='sortOptions'
          value={listType === " income" ? incSort : expSort}
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
          value={listType === " income" ? incMonth : expMonth}
          onChange={handleMonthChange}
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
