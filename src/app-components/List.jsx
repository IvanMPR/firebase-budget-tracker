import ListItem from "./ListItem";

function List(props) {
  return (
    <div className='single-list'>
      <ul className={`list ${props.type}`}>
        {props.entriesType.map(entry => (
          <ListItem
            entry={entry}
            key={entry.id}
            desc={entry.desc}
            amount={entry.amount}
            dispatch={props.dispatch}
            isEditing={props.isEditing}
          />
        ))}
      </ul>
    </div>
  );
}

export default List;
