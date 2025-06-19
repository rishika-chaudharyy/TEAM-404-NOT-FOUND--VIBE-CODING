import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AnimatedHome from "./pages/AnimatedHome";
import Dashboard from "./pages/Dashboard";
import LoadingPage from "./pages/LoadingPage";
import Testimonial from "./pages/Testimonial";
import StrikingPage from "./pages/Striking";
import CustomerPage from "./pages/Customer";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AnimatedHome />} />
        <Route path="/loading" element={<LoadingPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/testimonial" element={<Testimonial />} />
        <Route path="/striking" element={<StrikingPage />} />
        <Route path="/customer" element={<CustomerPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
