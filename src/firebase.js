import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyC6M5J7EJb4Kc3T9M46c4II2JzpclwKa1A",
  authDomain: "linkedin-clone-be033.firebaseapp.com",
  projectId: "linkedin-clone-be033",
  storageBucket: "linkedin-clone-be033.appspot.com",
  messagingSenderId: "221925625957",
  appId: "1:221925625957:web:9276c8c394f2eaf56db68c",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };
