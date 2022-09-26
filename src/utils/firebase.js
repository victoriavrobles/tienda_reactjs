// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration

const firebaseConfig = {

    apiKey: "AIzaSyCF1phxwsnr6TD8rfU863ay-O3N9v_ADvY",
    authDomain: "ecommerce-2438a.firebaseapp.com",
    projectId: "ecommerce-2438a",
    storageBucket: "ecommerce-2438a.appspot.com",
    messagingSenderId: "417593744036",
    appId: "1:417593744036:web:fe7da7c5e281a28fed6431"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Base de datos
export const db = getFirestore(app);