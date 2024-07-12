// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";

// const firebaseConfig = {
//   apiKey: "AIzaSyCyAYCh8MqogGJB89OYVRnDHbQSCOgNNno",
//   authDomain: "spacex-fa5ed.firebaseapp.com",
//   projectId: "spacex-fa5ed",
//   storageBucket: "spacex-fa5ed.appspot.com",
//   messagingSenderId: "411207816867",
//   appId: "1:411207816867:web:8ce9e116e3100aee6bd116",
//   measurementId: "G-4TJMSJQQ4X",
// };

// const app = initializeApp(firebaseConfig);
// const auth = getAuth();

// export { app, auth };

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCyAYCh8MqogGJB89OYVRnDHbQSCOgNNno",
  authDomain: "spacex-fa5ed.firebaseapp.com",
  projectId: "spacex-fa5ed",
  storageBucket: "spacex-fa5ed.appspot.com",
  messagingSenderId: "411207816867",
  appId: "1:411207816867:web:8ce9e116e3100aee6bd116",
  measurementId: "G-4TJMSJQQ4X",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth();

export { app, auth };
