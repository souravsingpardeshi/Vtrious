import firebase from "firebase"
var firebaseConfig = {
    apiKey: "AIzaSyCxnZsc3zYOJkgp-DjPogalLnW_9mGTOsk",
    authDomain: "vtrious-project.firebaseapp.com",
    projectId: "vtrious-project",
    storageBucket: "vtrious-project.appspot.com",
    messagingSenderId: "1068366100593",
    appId: "1:1068366100593:web:4128a45b3e31dd788743d0",
    measurementId: "G-LJ8GV5ZL94"
  };
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  const auth  = firebase.auth();
  export {auth};
  export default db