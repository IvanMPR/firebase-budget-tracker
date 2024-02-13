import ListItem from "./ListItem";

function List({ type, entriesType }) {
  return (
    <div className='w-full [&>*:last-child]:mb-8'>
      <ul className={`list ${type}`}>
        {entriesType.map(entry => (
          <ListItem entry={entry} key={entry.id} />
        ))}
      </ul>
    </div>
  );
}

export default List;
