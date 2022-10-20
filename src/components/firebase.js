import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBMl9OCIiAYrlOGoTeZJ2N3ipteHUQqNyE",
  authDomain: "mern-stack-bd309.firebaseapp.com",
  projectId: "mern-stack-bd309",
  storageBucket: "mern-stack-bd309.appspot.com",
  messagingSenderId: "1099315156429",
  appId: "1:1099315156429:web:c5c8618df1e96520586084",
  measurementId: "G-782KJZH65M",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// Initialize Google auth and Provider

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// Initialize login page

export const signWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      console.log(result);
    })
    .catch((err) => {
      console.log(err);
    });
};
// Initialize logout

export const LogoutGoogle = () => {
  signOut(auth).then((res) => {
    if (signOut) {
      console.log("logout");
      //   console.log();
    } else {
      console.log("err");
    }
  });
};
