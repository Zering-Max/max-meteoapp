import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Welcome from "./pages/Welcome";
import UserAccount from "./pages/UserAccount";
import Login from "./pages/Login";
import Register from "./pages/Register";
import WeathersList from "./pages/WeathersList";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/account" element={<UserAccount />} />
        <Route path="/weatherslist" element={<WeathersList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
