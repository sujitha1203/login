import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, sendPasswordResetEmail, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAm-V67UQJsdJdxr2TAPO9Oip0GJSuBkU0",
    authDomain: "login-caaea.firebaseapp.com",
    projectId: "login-caaea",
    storageBucket: "login-caaea.appspot.com",
    messagingSenderId: "289498641979",
    appId: "1:289498641979:web:d471b67439bbe5573d0e1e",
    measurementId: "G-14KRNK6Y4N"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);


const logInWithEmailAndPassword = async (email, password) => {
    try {
        await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
        console.error(err);
        toast.error(err.message);
    }
};

const registerWithEmailAndPassword = async (name, email, password, role) => {
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        const user = res.user;
        await addDoc(collection(db, "users"), {
            uid: user.uid,
            name,
            authProvider: "local",
            email,
            role
        });
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
};

const sendPasswordReset = async (email) => {
    try {
        await sendPasswordResetEmail(auth, email);
        alert("Password reset link sent!");
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
};

const logout = () => {
    signOut(auth);
};

export {
    auth,
    db,
    logInWithEmailAndPassword,
    registerWithEmailAndPassword,
    sendPasswordReset,
    logout,
};
