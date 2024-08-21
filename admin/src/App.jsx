import React, { useState, useEffect } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import Add from './pages/Add/Add';
import List from './pages/List/List';
import Orders from './pages/Orders/Orders';
import AdminLogin from './components/AdminLogin/AdminLogin';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthProvider, useAuth } from './contexts/AuthContext.jsx';

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, checkLogin, token } = useAuth();

  useEffect(() => {
    checkLogin();
  }, [token]);

  console.log("Token in localStorage:", localStorage.getItem("admin:token"));
console.log("Token in state:", token);
console.log("IsAuthenticated:", isAuthenticated);

  return isAuthenticated ? children : <Navigate to="/login" />;
};

const App = () => {
  return (
    <AuthProvider>
      <div className="app">
        <ToastContainer />
        <Routes>
          {/* Public Route */}
          <Route path="/login" element={<AdminLogin />} />

          {/* Protected Routes */}
          <Route
            path="/*"
            element={
              <ProtectedRoute>
                <Navbar />
                <hr />
                <div className="app-content">
                  <Sidebar />
                  <Routes>
                    <Route path="/add" element={<Add />} />
                    <Route path="/list" element={<List />} />
                    <Route path="/orders" element={<Orders />} />
                    <Route path="/" element={<Navigate to="/add" />} /> {/* Default Redirect */}
                  </Routes>
                </div>
              </ProtectedRoute>
            }
          />

        </Routes>
      </div>
    </AuthProvider>
  );
}

export default App;
