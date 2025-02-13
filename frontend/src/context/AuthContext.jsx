import { createContext, useState, useEffect } from "react";
import axios from "../api/axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = async (username, password) => {
    try {
      const res = await axios.post("/auth/login", { username, password });
      localStorage.setItem("token", res.data.token);
      setUser(username);
    } catch (error) {
      console.error("Login error:", error.response?.data?.message || error.message);
    }
  };

  return (
    <AuthContext.Provider value={{ user, login }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
