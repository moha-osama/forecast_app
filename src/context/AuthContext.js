import React, { useContext, useState } from "react";
import { auth } from "../firebase";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currUser, setCurrUser] = useState();
  const [isShown, setIsShown] = useState(false);

  function toggleForm() {
    setIsShown(!isShown);
  }

  function login(email, password) {
    return auth.signInWithEmailAndPassword(email, password);
  }

  function logout() {
    setCurrUser(false);
    return auth.signOut();
  }

  const value = { currUser, setCurrUser, login, logout, toggleForm, isShown };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
