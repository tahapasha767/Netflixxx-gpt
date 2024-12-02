import {signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
//import { useNavigate } from "react-router-dom";
export const signup = (auth, email, password) => {
  //const navigate=useNavigate();
  return createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Extract user information
      const user = userCredential.user;
      console.log("User signed up successfully:", user);
     // navigate("/browse")

      // Return structured success response
      return {
        success: true,
        user: user,
        message: "User signed up successfully",
      };
    })
    .catch((error) => {
      console.error("Error signing up:", error.message);

      // Return structured error response
      return {
        success: false,
        user: null,
        message: error.message,
      };
    });
};
