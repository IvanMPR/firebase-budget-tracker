function SortOptions() {
  return (
    <div>
      <label htmlFor='sortOptions'>Sort by: </label>
      <select id='sortOptions'>
        <option value='month'>Month</option>
        <option value='date-asc'>Date - Oldest First</option>
        <option value='date-desc'>Date - Newest First</option>
        <option value='amount'>Amount</option>
      </select>
    </div>
  );
}
export default SortOptions;
