// // Import the necessary Firebase functions
// import { initializeApp } from "firebase/app";
// import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";

// Your Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyCH9Hk7N5HFwRf-aYSkrvWFaLujRGmUWJ0",
//   authDomain: "adhyayan-job-portal.firebaseapp.com",
//   projectId: "adhyayan-job-portal",
//   storageBucket: "adhyayan-job-portal.appspot.com",
//   messagingSenderId: "1045666769341",
//   appId: "1:1045666769341:web:24f2d1015d45b1d7e38ad4",
//   measurementId: "G-Y5VM7Q2CJX"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// // Initialize Firebase Authentication and Analytics
// const auth = getAuth(app);
// const provider = new GoogleAuthProvider();
// const analytics = getAnalytics(app);

// // Google Sign-In Function
// export const signInWithGoogle = async () => {
//   try {
//     const result = await signInWithPopup(auth, provider);
//     const user = result.user;
//     console.log('User signed in: ', user);
//     return user;
//   } catch (error) {
//     console.error('Error during Google login: ', error);
//     throw error;
//   }
// };

// // Logout Function
// export const logout = async () => {
//   try {
//     await auth.signOut();
//     console.log('User signed out');
//   } catch (error) {
//     console.error('Error during logout: ', error);
//   }
// };

// export default app;



// // // Import the functions you need from the SDKs you need
// // import { initializeApp } from "firebase/app";
// // import { getAnalytics } from "firebase/analytics";
// // // TODO: Add SDKs for Firebase products that you want to use
// // // https://firebase.google.com/docs/web/setup#available-libraries

// // // Your web app's Firebase configuration
// // // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// // const firebaseConfig = {
// //   apiKey: "AIzaSyCH9Hk7N5HFwRf-aYSkrvWFaLujRGmUWJ0",
// //   authDomain: "adhyayan-job-portal.firebaseapp.com",
// //   projectId: "adhyayan-job-portal",
// //   storageBucket: "adhyayan-job-portal.firebasestorage.app",
// //   messagingSenderId: "1045666769341",
// //   appId: "1:1045666769341:web:24f2d1015d45b1d7e38ad4",
// //   measurementId: "G-Y5VM7Q2CJX"
// // };

// // // Initialize Firebase
// // const app = initializeApp(firebaseConfig);
// // const analytics = getAnalytics(app);













// Import the necessary Firebase functions
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCH9Hk7N5HFwRf-aYSkrvWFaLujRGmUWJ0",
  authDomain: "adhyayan-job-portal.firebaseapp.com",
  projectId: "adhyayan-job-portal",
  storageBucket: "adhyayan-job-portal.appspot.com",
  messagingSenderId: "1045666769341",
  appId: "1:1045666769341:web:24f2d1015d45b1d7e38ad4",
  measurementId: "G-Y5VM7Q2CJX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export initialized Firebase services
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const analytics = getAnalytics(app);

export default app;
