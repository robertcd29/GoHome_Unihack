import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";

// Firebase configuration object
const firebaseConfig = {
    apiKey: "AIzaSyB1AMtRC62RLvNLn2zEXkqMcQwpc_2fYJo",
    authDomain: "codpl-36ee8.firebaseapp.com",
    projectId: "codpl-36ee8",
    storageBucket: "codpl-36ee8.firebasestorage.app",
    messagingSenderId: "275211270112",
    appId: "1:275211270112:web:cc21db4690b050a713dd85",
    measurementId: "G-CZFSL4F1XF"   
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

export { db };
