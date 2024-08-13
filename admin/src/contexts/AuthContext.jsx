import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [token, setToken] = useState(() => localStorage.getItem("admin:token") || null);

  console.log(isAuthenticated)


  useEffect(() => {
    const storedToken = localStorage.getItem("admin:token");
    if (storedToken) {
      setToken(storedToken);
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }, []);

  useEffect(() => {
    if (token) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }, [token]);

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
    <AuthContext.Provider value={{ isAuthenticated, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
