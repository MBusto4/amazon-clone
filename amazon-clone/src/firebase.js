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

// import { initializeApp } from 'firebase/app';
// import { getFirestore, doc, setDoc, collection } from 'firebase/firestore';
// import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//     apiKey: "AIzaSyCS7Tjb58crtxznFOiDFXPvg2s-R_n0O8M",
//     authDomain: "clone-e2b31.firebaseapp.com",
//     projectId: "clone-e2b31",
//     storageBucket: "clone-e2b31.appspot.com",
//     messagingSenderId: "218061774845",
//     appId: "1:218061774845:web:ee7bddbca5c30e45484394",
//     measurementId: "G-Q9TJRXWXPM"
// };

// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);

// const auth = getAuth();
// const fsDocument = doc
// const fsCollection = collection


// async function signInWithAccount(email, password) {
//     return signInWithEmailAndPassword(auth, email, password)
// }

// async function createAccount(email, password) {
//     return createUserWithEmailAndPassword(auth, email, password)
// }


// export { db, app, createAccount, signInWithAccount, auth, fsDocument, setDoc, fsCollection };
