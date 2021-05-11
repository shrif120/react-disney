import firebase from "firebase/app";
import "firebase/auth"; // for authentication
import "firebase/storage"; // for storage
import "firebase/database"; // for realtime database
import "firebase/firestore"; // for cloud firestore
import "firebase/messaging"; // for cloud messaging
import "firebase/functions";
// import "firebase/<firebase>";
const firebaseConfig = {
  apiKey: "AIzaSyCQFr-CDnoZ2VCX_8mOJABS_cBnYzuNwcg",
  authDomain: "react-disney.firebaseapp.com",
  projectId: "react-disney",
  storageBucket: "react-disney.appspot.com",
  messagingSenderId: "274895858840",
  appId: "1:274895858840:web:28d7826887ced77a7e74ed",
  measurementId: "G-7M5XVVCKG7",
};
//   Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const provider = new firebase.auth.GoogleAuthProvider();
export { storage, auth, provider };
export default db;
