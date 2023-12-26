import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignupPage from "./pages/SignupPage";
import Login from "./pages/Login";

import BudgetTracker from "./pages/BudgetTracker";
import PageNotFound from "./pages/PageNotFound";
import { SignupProvider } from "./components/contexts/SignupContext";

function App() {
  return (
    <BrowserRouter>
      <SignupProvider>
        <Routes>
          <Route path='/' element={<SignupPage />} />
          <Route path='login' element={<Login />} />
          <Route path='budget-tracker' element={<BudgetTracker />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </SignupProvider>
    </BrowserRouter>
  );
}

export default App;
