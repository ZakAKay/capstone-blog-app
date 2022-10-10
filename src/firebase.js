import {initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";
import {getAuth} from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyAFLXoazRMIQiLXyWJdMfaymNDuJRba7zc",
    authDomain: "capstone-blog-app.firebaseapp.com",
    projectId: "capstone-blog-app",
    storageBucket: "capstone-blog-app.appspot.com",
    messagingSenderId: "845843450183",
    appId: "1:845843450183:web:e0a1bf4fe79c902acfe462"
  };

  const app = initializeApp(firebaseConfig)
  const auth = getAuth(app);
  const db = getFirestore(app)
  const storage = getStorage(app);

  export {auth, db, storage }