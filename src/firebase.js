import firebase from "firebase"

// Initialize Firebase
var config = {
    apiKey: "AIzaSyD3BW8lqtAsmFS1og0E4LfisNh16Aau36Q",
    authDomain: "calculator-cc97a.firebaseapp.com",
    databaseURL: "https://calculator-cc97a.firebaseio.com",
    projectId: "calculator-cc97a",
    storageBucket: "calculator-cc97a.appspot.com",
    messagingSenderId: "791779280372"
};
firebase.initializeApp(config);

export default firebase;