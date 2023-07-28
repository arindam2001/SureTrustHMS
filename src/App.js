import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage/landingpage.js";
import AdminLogin from "./components/AdminLogin/adminlogin.js";
import DoctorLogin from "./components/DoctorLogin/doctorlogin.js";
import PatientLogin from "./components/PatientLogin/patientlogin.js";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/adminlogin" element={<AdminLogin />} />
        <Route path="/doctorlogin" element={<DoctorLogin />} />
        <Route path="/patientlogin" element={<PatientLogin />} />
      </Routes>
    </Router>
  );
}

export default App;
