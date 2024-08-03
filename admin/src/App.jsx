import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import { Route, Routes } from 'react-router-dom';
import Add from './pages/Add/Add';
import List from './pages/List/List';
import Orders from './pages/Orders/Orders';
import AdminLogin from './components/AdminLogin/AdminLogin';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthProvider, useAuth } from './contexts/AuthContext.jsx';

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return children;
};

const App = () => {
  return (
    <AuthProvider>
      <div className="app">
        <ToastContainer />
        <Routes>
          <Route path="/login" element={<AdminLogin />} />
          <Route path="*" element={
            <ProtectedRoute>
              <Navbar />
              <hr />
              <div className="app-content">
                <Sidebar />
                <Routes>
                  <Route path="/add" element={<Add />} />
                  <Route path="/list" element={<List />} />
                  <Route path="/orders" element={<Orders />} />
                </Routes>
              </div>
            </ProtectedRoute>
          } />
        </Routes>
      </div>
    </AuthProvider>
  );
}

export default App;
