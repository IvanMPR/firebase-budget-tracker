import { convertToMilliseconds } from "./utils";

export const initialState = {
  entries: [],
  filteredEntries: [],
  type: "inc",
  desc: "",
  amount: 0,
  isEditing: false,
  idToEdit: null,
  descToEdit: "",
  amountToEdit: 0,
};

export default function reducer(state, { type, payload }) {
  switch (type) {
    case "type":
      return { ...state, type: payload };
    case "desc":
      return { ...state, desc: payload };
    case "value":
      return { ...state, amount: payload };
    case "loadEntries":
      return { ...state, entries: payload, filteredEntries: payload };
    case "addEntry":
      return {
        ...state,
        entries: [...state.entries, payload],
        filteredEntries: [...state.filteredEntries, payload],
        desc: "",
        amount: 0,
      };
    case "deleteEntry":
      // prevent deleting entry while editing
      if (state.isEditing) return state;
      return {
        ...state,
        entries: state.entries.filter(entry => entry.id !== payload),
        filteredEntries: state.filteredEntries.filter(
          entry => entry.id !== payload
        ),
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
        filteredEntries: state.filteredEntries.map(entry => {
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
      if (payload === "date-asc") {
        return {
          ...state,
          entries: state.entries.sort(
            (a, b) =>
              convertToMilliseconds(a.time) - convertToMilliseconds(b.time)
          ),
          filteredEntries: state.filteredEntries.sort(
            (a, b) =>
              convertToMilliseconds(a.time) - convertToMilliseconds(b.time)
          ),
        };
      }
      if (payload === "date-desc") {
        return {
          ...state,
          entries: state.entries.sort(
            (a, b) =>
              convertToMilliseconds(b.time) - convertToMilliseconds(a.time)
          ),
          filteredEntries: state.filteredEntries.sort(
            (a, b) =>
              convertToMilliseconds(b.time) - convertToMilliseconds(a.time)
          ),
        };
      }
      if (payload === "amount-h") {
        return {
          ...state,
          entries: state.entries.sort((a, b) => b.amount - a.amount),
          filteredEntries: state.filteredEntries.sort(
            (a, b) => b.amount - a.amount
          ),
        };
      }
      if (payload === "amount-l") {
        return {
          ...state,
          entries: state.entries.sort((a, b) => a.amount - b.amount),
          filteredEntries: state.filteredEntries.sort(
            (a, b) => a.amount - b.amount
          ),
        };
      }

      return state;

    case "monthSort":
      if (payload === "")
        return { ...state, filteredEntries: [...state.entries] };

      return {
        ...state,
        filteredEntries: state.entries.filter(entry => {
          return entry.time.slice(0, 2) === payload;
        }),
      };
    default:
      throw new Error("Invalid action type");
  }
}
