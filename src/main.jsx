import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles.css'
import { ChakraProvider } from '@chakra-ui/react'


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDVf3UZsdfRLh4BnxU6JTu0fHrxiod0Gcs",
  authDomain: "react-solartan.firebaseapp.com",
  projectId: "react-solartan",
  storageBucket: "react-solartan.appspot.com",
  messagingSenderId: "791225659430",
  appId: "1:791225659430:web:63108729ed84daef82f6e7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <ChakraProvider>
    <App />
  </ChakraProvider>
)
