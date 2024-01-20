// import { db } from "./firebase";
// import { doc, updateDoc, arrayUnion } from "firebase/firestore";
// import { user as authUser } from "firebase/auth";
// import { user } from "./firebase";
// import { useAuthContext } from "./contexts/AuthContext";
export const initialState = {
  entries: JSON.parse(localStorage.getItem("entries")) || [],
  type: "inc",
  desc: "",
  amount: 0,
  isEditing: false,
  idToEdit: null,
  descToEdit: "",
  amountToEdit: 0,
};

export default function reducer(state, { type, payload }) {
  // const {pushEntryToFirestore} = useAuthContext();
  switch (type) {
    case "type":
      return { ...state, type: payload };
    case "desc":
      return { ...state, desc: payload };
    case "value":
      return { ...state, amount: payload };
    case "addEntry":
      const newEntry = {
        id: crypto.randomUUID(),
        type: state.type,
        desc: state.desc,
        amount: state.amount,
        time: new Date().toLocaleString("en-us", {
          day: "2-digit",
          month: "2-digit",
          year: "2-digit",
          hour: "2-digit",
          minute: "2-digit",
        }),
      };
      if (newEntry.desc === "" || newEntry.amount === 0) {
        alert("Please fill in all fields");
        return state;
      }
      // Update the entries field of the currently logged in user's document
      // const userDoc = doc(db, "users", user.uid); // replace "authUser.uid" with the ID of the currently logged in user
      // console.log(user.uid, "from user uid");
      // updateDoc(userDoc, {
      //   entries: arrayUnion(newEntry),
      // })
      //   .then(() => {
      //     console.log("Document successfully updated!");
      //   })
      //   .catch(error => {
      //     console.error("Error updating document: ", error);
      //   });
      // if (authUser) {
      //   // Write the new entry to the currently logged in user's document
      //   const userDoc = doc(db, "users", authUser.uid); // replace "authUser.uid" with the ID of the currently logged in user
      //   setDoc(
      //     userDoc,
      //     { entries: [...state.entries, newEntry] },
      //     { merge: true }
      //   )
      //     .then(() => {
      //       console.log("Document successfully written!");
      //     })
      //     .catch(error => {
      //       console.error("Error writing document: ", error);
      //     });
      // }

      return {
        ...state,
        entries: [...state.entries, newEntry],
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
    default:
      throw new Error("Invalid action type");
  }
}
