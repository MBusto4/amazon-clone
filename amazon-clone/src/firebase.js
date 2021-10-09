import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCS7Tjb58crtxznFOiDFXPvg2s-R_n0O8M",
    authDomain: "clone-e2b31.firebaseapp.com",
    projectId: "clone-e2b31",
    storageBucket: "clone-e2b31.appspot.com",
    messagingSenderId: "218061774845",
    appId: "1:218061774845:web:ee7bddbca5c30e45484394",
    measurementId: "G-Q9TJRXWXPM"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
// //database real time 
const db = firebaseApp.firestore()
// //authentification
const auth = firebase.auth()


async function signInWithAccount(email, password) {
    return auth.signInWithEmailAndPassword(email, password)
}

async function createAccount(email, password) {
    return auth.createUserWithEmailAndPassword(email, password)
}

export { db, auth, createAccount, signInWithAccount, };



// /*
// https://firebase.google.com/docs/web/setup
// */

