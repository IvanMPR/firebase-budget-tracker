import Header from "../components/Header";
import Amounts from "../app-components/Amounts";
import Inputs from "../app-components/Inputs";
import ListsParent from "../app-components/ListsParent";

function BudgetTracker() {
  return (
    <section>
      <Header />
      <div className=' w-screen flex flex-col items-center justify-center'>
        <Amounts />
        <Inputs />
        <ListsParent />
      </div>
    </section>
  );
}

export default BudgetTracker;
