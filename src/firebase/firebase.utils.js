import firebase from "firebase/app";
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyA8CE6cmO3e84VpfChKyM44KDe28bn5OMk",
    authDomain: "parangelmata.firebaseapp.com",
    databaseURL: "https://parangelmata.firebaseio.com",
    projectId: "parangelmata",
    storageBucket: "parangelmata.appspot.com",
    messagingSenderId: "824823048409",
    appId: "1:824823048409:web:b667f9d23208d7003576c8",
    measurementId: "G-9JB6YF1SYF"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
    prompt: 'select_account'
})

export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;