// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: "AIzaSyCF41ODvQUkqeZnOLEZNwVXXqQQ9cnWfSg",
  authDomain: "login-22df8.firebaseapp.com",
  databaseURL: "https://login-22df8-default-rtdb.firebaseio.com",
  projectId: "login-22df8",
  storageBucket: "login-22df8.appspot.com",
  messagingSenderId: "1074084935572",
  appId: "1:1074084935572:web:666950e37a47bd53028181",
  measurementId: "G-HMVVMHPW6E"
  }
};

const firebaseConfig = {
  apiKey: "AIzaSyCF41ODvQUkqeZnOLEZNwVXXqQQ9cnWfSg",
  authDomain: "login-22df8.firebaseapp.com",
  databaseURL: "https://login-22df8-default-rtdb.firebaseio.com",
  projectId: "login-22df8",
  storageBucket: "login-22df8.appspot.com",
  messagingSenderId: "1074084935572",
  appId: "1:1074084935572:web:666950e37a47bd53028181",
  measurementId: "G-HMVVMHPW6E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

