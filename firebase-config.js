// firebase-config.js


const firebaseConfig = {
    apiKey: "AIzaSyDCfa2mWRF4B0CFgBX3NcJ5u6RjIiu56XQ",
    authDomain: "casaabertaapp.firebaseapp.com",
    projectId: "casaabertaapp",
    storageBucket: "casaabertaapp.firebasestorage.app",
    messagingSenderId: "148657840815",
    appId: "1:148657840815:web:cd6866a3b7a34b4efeaa5a",
    measurementId: "G-1FFNM8TJD1"
  };

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();