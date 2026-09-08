import LandingPage from "./pages/public/LandingPage";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/Footer/Footer";

import RegisterPage from "./pages/auth/RegisterPage";
import ForgotPassword from "./pages/auth/ForgotPassword";
import LoginPage from "./pages/auth/LoginPage";

import DashboardPage from "./pages/Donor/DashboardPage/DashboardPage";

import DonorLayout from "./Layouts/DonorLayout";

function App() {
  return (
    <div>

      <Header />

      <Routes>

        {/* Landing Page + Footer */}
        <Route
          path="/"
          element={
            <>
              <LandingPage />
              <Footer />
            </>
          }
        />

        {/* Login Page + Footer */}
        <Route
          path="/login"
          element={
            <>
              <LoginPage />
              <Footer />
            </>
          }
        />

        {/* Register Page - No Footer */}
        <Route
          path="/RegisterPage"
          element={
           <>
           <RegisterPage />
           <Footer/>
           </>}
        />

        {/* Forgot Password - No Footer */}
        <Route
          path="/ForgotPassword"
          element={
          <><ForgotPassword />
          <Footer/>
          </>}
        />

        {/* Donor Panel - No Footer */}
        <Route
          path="/donor"
          element={<DonorLayout />}
        >
          <Route
            index
            element={<DashboardPage />}
          />
        </Route>

      </Routes>

    </div>
  );
}

export default App;