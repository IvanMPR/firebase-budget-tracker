import { BrowserRouter, Routes, Route } from "react-router-dom";

import SignupPage from "./pages/SignupPage";
import Login from "./pages/Login";
import BudgetTracker from "./pages/BudgetTracker";
import PageNotFound from "./pages/PageNotFound";

import { SignupProvider } from "./components/contexts/SignupContext";
import { Toaster } from "react-hot-toast";

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
      <Toaster
        position='top-center'
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 4000,
          },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
            marginTop: "50px",
            backgroundColor: "bg-stone-100",
            color: "bg-stone-700",
          },
        }}
      />
    </BrowserRouter>
  );
}

export default App;
