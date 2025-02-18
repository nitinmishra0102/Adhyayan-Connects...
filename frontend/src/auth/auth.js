// import { 
//   getAuth, 
//   GoogleAuthProvider, 
//   signInWithRedirect, 
//   getRedirectResult, 
//   signOut 
// } from "firebase/auth";
// import app from "./firebaseConfig";

// const auth = getAuth(app);
// const provider = new GoogleAuthProvider();

// // ✅ Google Sign-In Function (Using Redirect)
// export const signInWithGoogle = () => {
//   signInWithRedirect(auth, provider);
// };

// // ✅ Function to Get Redirect Result (Use in a component)
// export const getGoogleRedirectResult = async () => {
//   try {
//     const result = await getRedirectResult(auth);
//     if (result) {
//       return result.user; // Returns user object
//     }
//   } catch (error) {
//     console.error("Google Redirect Sign-In Error:", error);
//   }
// };

// // ✅ Logout Function
// export const logout = async () => {
//   try {
//     await signOut(auth);
//   } catch (error) {
//     console.error("Logout Error:", error);
//   }
// };



import { signInWithPopup, signInWithRedirect, getRedirectResult, signOut } from "firebase/auth";
import { auth, provider } from "./firebaseConfig";

// ✅ Google Sign-In (Popup method for regular login)
export const signInWithGooglePopup = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    console.log("User signed in: ", result.user);
    return result.user;
  } catch (error) {
    console.error("Error during Google sign-in (popup):", error);
    throw error;
  }
};

// ✅ Google Sign-In (Redirect method for login flow with redirection)
export const signInWithGoogleRedirect = async () => {
  try {
    console.log("Initiating Google sign-in with redirect...");
    await signInWithRedirect(auth, provider);
  } catch (error) {
    console.error("Error during Google sign-in (redirect):", error);
    throw error;
  }
};

// ✅ Function to get the result of Google Sign-In (after redirect)
export const getGoogleRedirectResult = async () => {
  try {
    const result = await getRedirectResult(auth);
    if (result && result.user) {
      console.log("Google Sign-In successful:", result.user);
      return result.user;
    } else {
      console.log("No user found in redirect result.");
    }
  } catch (error) {
    console.error("Error during Google redirect result:", error);
  }
  return null;
};

// ✅ Logout Function
export const logout = async () => {
  try {
    await signOut(auth);
    console.log("User logged out successfully.");
  } catch (error) {
    console.error("Error during logout:", error);
  }
};
