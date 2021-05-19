// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase'
const firebaseConfig = {
  apiKey: "AIzaSyCO9l3oLcth_plYQ8F9jauI1sTmrf6-uic",
  authDomain: "facebook-clone-abb76.firebaseapp.com",
  projectId: "facebook-clone-abb76",
  storageBucket: "facebook-clone-abb76.appspot.com",
  messagingSenderId: "116794719654",
  appId: "1:116794719654:web:8b1b8608bdf95256f86367",
  measurementId: "G-C4VGTEFSSB"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebase.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()


export { auth, provider }
export default db