import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "./styles/main.css";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBx5QyW1a_0yKXCQmpU2xpXjwiegRmYHkI",
  authDomain: "hello-chat-c4a20.firebaseapp.com",
  projectId: "hello-chat-c4a20",
  storageBucket: "hello-chat-c4a20.appspot.com",
  messagingSenderId: "675018653299",
  appId: "1:675018653299:web:6988c0ec45fe9a2c5ff406",
  measurementId: "G-6H25CLPQ83",
};

// Initialize Firebase

export const Context = createContext(null);
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Context.Provider
      value={{
        app,
        auth,
        db,
      }}
    >
      <App />
    </Context.Provider>
  </React.StrictMode>
);
