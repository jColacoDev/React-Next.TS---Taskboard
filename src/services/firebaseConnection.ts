import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAd705ZokMUtj3dXVktNFyR2z-N4bsmQDE",
  authDomain: "taskboard-403817.firebaseapp.com",
  projectId: "taskboard-403817",
  storageBucket: "taskboard-403817.appspot.com",
  messagingSenderId: "1078546807579",
  appId: "1:1078546807579:web:97979de97d89a698ae31be"
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);

export { db };
