// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAbuRup-Qs_-CWNN3_9F5nAy_ZRhMm1wWU",
    authDomain: "home-service-79efa.firebaseapp.com",
    projectId: "home-service-79efa",
    storageBucket: "home-service-79efa.appspot.com",
    messagingSenderId: "497023185078",
    appId: "1:497023185078:web:45048329e39a44ad9c7617"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;