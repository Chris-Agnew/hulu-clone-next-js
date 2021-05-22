import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_CONFIG_KEY,
  authDomain: "hulu-app-858a9.firebaseapp.com",
  projectId: "hulu-app-858a9",
  storageBucket: "hulu-app-858a9.appspot.com",
  messagingSenderId: "250505922869",
  appId: "1:250505922869:web:56689f65e5482bb93ce47c",
};

firebase.initializeApp(firebaseConfig);
