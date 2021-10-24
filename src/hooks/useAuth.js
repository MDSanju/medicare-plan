import { useContext } from "react";
import { AuthContext } from "../contexts/AuthProvider";

// context API custom hook, could be used this function on any component
const useAuth = () => {
  return useContext(AuthContext);
};

export default useAuth;
