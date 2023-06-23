import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDUnjPIJz_Ti0HG9PgtGm_HQTGYEq_FDNc",
  authDomain: "societysync-2e49a.firebaseapp.com",
  projectId: "societysync-2e49a",
  storageBucket: "societysync-2e49a.appspot.com",
  messagingSenderId: "361332220856",
  appId: "1:361332220856:web:e7590685be54583330254d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;