import { initializeApp } from 'firebase/app';
import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
    apiKey: "AIzaSyC9khstzuIk-M9yiC1ilgxJsJq7p3sTZDE",
    authDomain: "dliriosinsumos.firebaseapp.com",
    projectId: "dliriosinsumos",
    storageBucket: "dliriosinsumos.appspot.com",
    messagingSenderId: "382769203974",
    appId: "1:382769203974:web:5ee8f4bf5ad72d2e30ec87",
    measurementId: "G-D28JQM3V83"
  };


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export default app;
