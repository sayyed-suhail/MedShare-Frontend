import { useState } from "react";
import LandingPage from "./pages/public/LandingPage";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import LoginPage from "./pages/auth/LoginPage";
import Header from "./components/header/Header";

import Footer from "./components/Footer/Footer";

import RegisterPage from "./pages/auth/RegisterPage";

import ForgotPassword from "./pages/auth/ForgotPassword";

function App() {
 

  return (
    <>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/RegisterPage" element={<RegisterPage/>} />
          <Route path="/ForgotPassword" element={<ForgotPassword/>} />
          
        </Routes>
        <Footer/>
      </div>
    </>
  );
}

export default App;
