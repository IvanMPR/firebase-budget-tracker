export const initialState = {
  entries: [],
  type: "inc",
  desc: "",
  amount: 0,
  isEditing: false,
  idToEdit: null,
  descToEdit: "",
  amountToEdit: 0,
};

function convertToMilliseconds(dateString) {
  // Split the date and time parts
  const [datePart, timePart] = dateString.split(", ");

  // Split the date into month, day, and year
  const [month, day, year] = datePart.split("/");

  // Convert the year to 4 digits
  const fullYear = "20" + year;

  // Combine the date and time parts into a new date string
  const newDateString = `${month}/${day}/${fullYear}, ${timePart}`;

  // Parse the new date string and return the result
  return Date.parse(newDateString);
}

export default function reducer(state, { type, payload }) {
  switch (type) {
    case "type":
      return { ...state, type: payload };
    case "desc":
      return { ...state, desc: payload };
    case "value":
      return { ...state, amount: payload };
    case "loadEntries":
      return { ...state, entries: payload };
    case "addEntry":
      return {
        ...state,
        entries: [...state.entries, payload],
        desc: "",
        amount: 0,
      };
    case "deleteEntry":
      // prevent deleting entry while editing
      if (state.isEditing) return state;
      return {
        ...state,
        entries: state.entries.filter(entry => entry.id !== payload),
      };
    case "openEditMode":
      // prevent opening editing modal while already editing
      if (state.isEditing) return state;

      return {
        ...state,
        isEditing: true,
        idToEdit: payload.id,
        descToEdit: payload.oldDesc,
        amountToEdit: payload.oldVal,
      };
    case "edit":
      // prevent empty input fields in editing modal
      if (payload.newDesc === "" || payload.newAmount === 0) {
        alert("Please fill in all fields");
        return state;
      }
      return {
        ...state,
        entries: state.entries.map(entry => {
          if (entry.id !== state.idToEdit) return entry;

          return {
            ...entry,
            desc: payload.newDesc,
            amount: payload.newAmount,
          };
        }),
        isEditing: false,
        idToEdit: null,
        descToEdit: "",
        amountToEdit: 0,
      };
    case "closeModal":
      return {
        ...state,
        isEditing: false,
        idToEdit: null,
        descToEdit: "",
        amountToEdit: 0,
      };
    case "sortOption":
      const { type, sort, month } = payload;
      console.log(type, sort, month, "reducer");
      if (type === " income") {
        if (sort === "date-asc") {
          return {
            ...state,
            entries: state.entries.sort(
              (a, b) =>
                convertToMilliseconds(a.time) - convertToMilliseconds(b.time)
            ),
          };
        }
        if (sort === "date-desc") {
          return {
            ...state,
            entries: state.entries.sort(
              (a, b) =>
                convertToMilliseconds(b.time) - convertToMilliseconds(a.time)
            ),
          };
        }
        if (sort === "amount-h") {
          return {
            ...state,
            entries: state.entries.sort((a, b) => b.amount - a.amount),
          };
        }
        if (sort === "amount-l") {
          return {
            ...state,
            entries: state.entries.sort((a, b) => a.amount - b.amount),
          };
        }
      }
      // console.log(payload.type, "reducer");
      return state;

    default:
      throw new Error("Invalid action type");
  }
}
