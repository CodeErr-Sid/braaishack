import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [token, setToken] = useState(() => localStorage.getItem("admin:token") || null);

  const checkLogin = () => {
    const storedToken = localStorage.getItem("admin:token");
    if (storedToken) {
      setToken(storedToken);
      console.log(storedToken)
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }

  console.log(isAuthenticated)


  const login = (newToken) => {
    setToken(newToken);
    localStorage.setItem("admin:token", newToken);
    setIsAuthenticated(true);
  };

  const logout = () => {
    setToken(null);
    localStorage.removeItem("admin:token");
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, token, login, logout, checkLogin }}>
      {children}
    </AuthContext.Provider>
  );
};
