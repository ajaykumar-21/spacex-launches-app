# spacex-launches-app

This project is a SpaceX Launches List App built using React. The app fetches data from the SpaceX API and displays a list of launches with filter and search functionality. It also includes a simple authentication system with login and signup screens.

## Table of Contents

- [Features](#features)
- [Technology](#technology)
- [Usage](#usage)

## Features

- View a list of SpaceX launches.
- Search and filter launches by date, mission name, rocket type, and more.
- User authentication with Firebase (login and signup).
- Persistent user sessions.
- Responsive design.

## Technology

- **React:** Frontend library for building the user interface.
- **React Router:** Library for handling routing in the app.
- **Firebase Authentication:** Service for user authentication.
- **Axios:** Promise-based HTTP client for making API requests.
- **SpaceX API:** Public API for fetching SpaceX launch data.
- **CSS Modules:** Scoped CSS for styling components.

## Instructions to Run the App Locally

1. Clone the Repository:
   -git clone https://github.com/username/spacex-launches-app.git
   -cd spacex-launches-app

2. install Dependencies:
   Make sure you have Node.js and npm installed. Then, install the necessary dependencies:
   -npm install

3. Set Up Firebase:
   Ensure you have a Firebase project set up and replace the Firebase configuration in your firebase.js file with your project's credentials.

   import { initializeApp } from "firebase/app";
   import { getAuth } from "firebase/auth";

   const firebaseConfig = {
   apiKey: "YOUR_API_KEY",
   authDomain: "YOUR_AUTH_DOMAIN",
   projectId: "YOUR_PROJECT_ID",
   storageBucket: "YOUR_STORAGE_BUCKET",
   messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
   appId: "YOUR_APP_ID",
   };

   const app = initializeApp(firebaseConfig);
   export const auth = getAuth(app);

4. Run the Application:
   Start the development server:

- npm start
  This command will start the app, and you can view it in your browser at http://localhost:3000.
