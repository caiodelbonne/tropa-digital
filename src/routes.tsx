import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

const isLoggedIn = localStorage.getItem("loggedIn") === "true";

export const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Login />} />
    <Route path="/dashboard" element={isLoggedIn ? <Dashboard /> : <Navigate to="/" />} />
  </Routes>
);
