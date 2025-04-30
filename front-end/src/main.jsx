import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAK0B5_oA-w9FMzbbSoE4BJcX2AEZXeGIU",
  authDomain: "my-react-fullstack-app.firebaseapp.com",
  projectId: "my-react-fullstack-app",
  storageBucket: "my-react-fullstack-app.firebasestorage.app",
  messagingSenderId: "868951680514",
  appId: "1:868951680514:web:722f2a6a842ae7516b691b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
