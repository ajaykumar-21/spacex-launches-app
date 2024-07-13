import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Firebase configuration object containing API keys and identifiers for your Firebase project.
const firebaseConfig = {
  apiKey: "AIzaSyCyAYCh8MqogGJB89OYVRnDHbQSCOgNNno",
  authDomain: "spacex-fa5ed.firebaseapp.com",
  projectId: "spacex-fa5ed",
  storageBucket: "spacex-fa5ed.appspot.com",
  messagingSenderId: "411207816867",
  appId: "1:411207816867:web:8ce9e116e3100aee6bd116",
  measurementId: "G-4TJMSJQQ4X",
};

// Initializes the Firebase application with the provided configuration.
const app = initializeApp(firebaseConfig);

// Exports the authentication instance initialized with the app, making it available for use in other parts of the application.
const auth = getAuth(app);

export { auth };
