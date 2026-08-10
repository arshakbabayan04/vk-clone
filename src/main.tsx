import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import RoutesList from './components/routes/RoutesList'
import './index.css'

import firebase from 'firebase/compat/app';
import AuthProvider from './components/providers/AuthProvider';

firebase.initializeApp({
  apiKey: "AIzaSyCAE4YE6tWRvBaQ3jW8abnVbCWKI8_pnjU",
  authDomain: "vk-copy-c2267.firebaseapp.com",
  projectId: "vk-copy-c2267",
  storageBucket: "vk-copy-c2267.firebasestorage.app",
  messagingSenderId: "462990828838",
  appId: "1:462990828838:web:e4c58fecc5946cc42ecde7"
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider>
      <RoutesList/> 
    </AuthProvider>
  </StrictMode>,
)

//https://www.youtube.com/watch?v=OyE49CsSdiU 2:07:00

