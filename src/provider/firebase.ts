import * as firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBMCKUAbYOD5fGPFHoHdwuX8_3EHXGBSnU",
  authDomain: "labdigi2.firebaseapp.com",
  databaseURL: "https://labdigi2.firebaseio.com",
  projectId: "labdigi2",
  storageBucket: "labdigi2.appspot.com",
  messagingSenderId: "519987917252",
  appId: "1:519987917252:web:e7f8c505a935192f0eb491"
};

const firebaseApp = firebase.default.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export { db };
