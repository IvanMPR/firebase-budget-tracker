import { BrowserRouter, Routes, Route } from "react-router-dom";

import SignupPage from "./pages/SignupPage";
import Login from "./pages/Login";
import BudgetTracker from "./pages/BudgetTracker";
import PageNotFound from "./pages/PageNotFound";

import { AuthProvider } from "../src/contexts/AuthContext";
import { Toaster } from "react-hot-toast";
import Home from "./components/Home";
import ProtectedRoute from "./pages/ProtectedRoute";
import { BudgetTrackerProvider } from "./contexts/BudgetTrackerContext";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='login' element={<Login />} />
          <Route path='signup' element={<SignupPage />} />
          <Route
            path='budget-tracker'
            element={
              <ProtectedRoute>
                <BudgetTrackerProvider>
                  <BudgetTracker />
                </BudgetTrackerProvider>
              </ProtectedRoute>
            }
          />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </AuthProvider>
      <Toaster
        position='bottom-center'
        reverseOrder={false}
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
            marginBottom: "35px",
            backgroundColor: "bg-stone-100",
            color: "bg-stone-700",
          },
        }}
      />
    </BrowserRouter>
  );
}

export default App;
