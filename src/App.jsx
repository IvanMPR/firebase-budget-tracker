import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Toaster } from "react-hot-toast";
import { AuthProvider } from "../src/contexts/AuthContext";
import { BudgetTrackerProvider } from "./contexts/BudgetTrackerContext";
import Loader from "./components/Loader";

const SignupPage = lazy(() => import("./pages/SignupPage"));
const AppLayout = lazy(() => import("./pages/AppLayout"));
const PageNotFound = lazy(() => import("./pages/PageNotFound"));
const Home = lazy(() => import("./components/Home"));
const ProtectedRoute = lazy(() => import("./pages/ProtectedRoute"));

function App() {
  return (
    <BrowserRouter basename='/firebase-budget-tracker/'>
      <AuthProvider>
        <BudgetTrackerProvider>
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='signup' element={<SignupPage />} />
              <Route
                path='budget-tracker'
                element={
                  <ProtectedRoute>
                    <AppLayout />
                  </ProtectedRoute>
                }
              />
              <Route path='*' element={<PageNotFound />} />
            </Routes>
          </Suspense>
        </BudgetTrackerProvider>
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
            duration: 3000,
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
