import { sign } from "crypto";
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
        apiKey: "AIzaSyDnklgdolzrDa5RwWdxgU4ML_PzzQXSJMg",
        authDomain: "campushood-5e1a4.firebaseapp.com",
        projectId: "campushood-5e1a4",
        storageBucket: "campushood-5e1a4.appspot.com",
        messagingSenderId: "592779565430",
        appId: "1:592779565430:web:77d44f159036afb29ec257",
        measurementId: "G-53LPRPGY4S"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
    signInWithPopup(auth, provider).then((result) => {
      console.log("User signed in successfully", result);
    }).catch((error) => {
      console.log("Error occurred: ", error);
    });
};