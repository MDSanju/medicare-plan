import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendEmailVerification,
  updateProfile,
} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.initialize";

// firebase authentication function called
initializeAuthentication();

// useFirebase custom hook
const useFirebase = () => {
  // use state hooks
  const [user, setUser] = useState({});
  const [userName, setUserName] = useState("");
  const [isLoading, setIsloading] = useState(true);
  const [login, setLogin] = useState(false);

  // google provider for google authentication
  const googleProvider = new GoogleAuthProvider();
  // call get auth function from firebase
  const auth = getAuth();

  // google authentication with this function
  const signInUsingGoogle = () => {
    setIsloading(true);
    // return from here for getting to login component to fix redirect url
    return signInWithPopup(auth, googleProvider);
  };

  // observe user state change
  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsloading(false);
    });
    return () => unsubscribed;
  }, []);

  // logout for google authentication
  const logout = () => {
    setIsloading(true);
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .finally(() => setIsloading(false));
  };

  // email-password authentication's (registration authentication)
  const createNewUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // email-password authentication's (login authentication)
  const loginWithEmailAndPassword = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // email verification
  const emailVerification = () => {
    sendEmailVerification(auth.currentUser).then((result) => {
      console.log(result);
    });
  };

  // user name update
  const setFullName = () => {
    updateProfile(auth.currentUser, { displayName: userName }).then(
      (result) => {}
    );
  };

  return {
    user,
    isLoading,
    userName,
    setUser,
    setFullName,
    signInUsingGoogle,
    logout,
    createNewUser,
    loginWithEmailAndPassword,
    setUserName,
    login,
    setLogin,
    emailVerification,
  };
};

export default useFirebase;
