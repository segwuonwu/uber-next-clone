// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider, getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD4niLe6_9ZDGuv5zkv6VIE4SFnKoJvU8M",
  authDomain: "uber-next-clone-live-24142.firebaseapp.com",
  projectId: "uber-next-clone-live-24142",
  storageBucket: "uber-next-clone-live-24142.appspot.com",
  messagingSenderId: "794911385624",
  appId: "1:794911385624:web:a4456e7fb5277f4e823b6d",
  measurementId: "G-6M852Z3LTC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const provider = new GoogleAuthProvider();
const auth = getAuth();

export { app, provider, auth }