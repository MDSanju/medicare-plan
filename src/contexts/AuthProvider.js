import React, { createContext } from "react";
import useFirebase from "../hooks/useFirebase";

// export it to get on custom hook useAuth
export const AuthContext = createContext();

// context API applied
const AuthProvider = ({ children }) => {
  const allContext = useFirebase();
  return (
    <AuthContext.Provider value={allContext}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
