// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyAkv0YO_7BseiY5xb9Q_U5WKut_lB4LbGc",
//   authDomain: "careerspacesapp.firebaseapp.com",
//   projectId: "careerspacesapp",
//   storageBucket: "careerspacesapp.appspot.com",
//   messagingSenderId: "1023642701634",
//   appId: "1:221445168616:web:627d0533d0f77ae4dbd85d",
//   measurementId: "G-6HRWE0D310"
// };
// const firebaseConfig = {
//   apiKey: "AIzaSyBC-icTCglwnJGWbAiy9FrN4XEI76xpSy0",
//   authDomain: "fir-auth-58ae9.firebaseapp.com",
//   projectId: "fir-auth-58ae9",
//   storageBucket: "fir-auth-58ae9.appspot.com",
//   messagingSenderId: "409486673502",
//   appId: "1:409486673502:web:dd432c7570c80d5d2196cf",
//   measurementId: "G-N5WV300PKS"
//  };
const firebaseConfig = {
  apiKey: "AIzaSyAr-yQEsSPLMdinQ8GHITRYFUbiTwd8KAc",
  authDomain: "school-web-c3ed5.firebaseapp.com",
  projectId: "school-web-c3ed5",
  storageBucket: "school-web-c3ed5.appspot.com",
  messagingSenderId: "1066637057144",
  appId: "1:1066637057144:web:504912fab65a5f2333e18d",
  measurementId: "G-H26P0TE4N0"
};
// Initialize Firebase
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);
auth.useDeviceLanguage();

export { auth };
