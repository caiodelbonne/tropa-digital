import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

export const AppRoutes = () => {
  const isLoggedIn = localStorage.getItem("loggedIn") === "true";

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={isLoggedIn ? <Dashboard /> : <Navigate to="/" />} />
    </Routes>
  );
};
