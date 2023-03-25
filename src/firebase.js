import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup
  
  } from "firebase/auth";
  import { getFirestore } from "firebase/firestore";
  import { getStorage } from "firebase/storage";

  
  const firebaseConfig = {
    apiKey: "AIzaSyAyYnJ41-GVsMJjk1R5ryN9qOTNmvwfTb8",
    authDomain: "diesnyplus-clone.firebaseapp.com",
    projectId: "diesnyplus-clone",
    storageBucket: "diesnyplus-clone.appspot.com",
    messagingSenderId: "875751637374",
    appId: "1:875751637374:web:0ff4b4ae9721169441332f"
  };
  
  // Initialize Firebase

  initializeApp(firebaseConfig);
  const db=getFirestore()
  const auth=getAuth()
  const provider=new GoogleAuthProvider()
  const storage=getStorage()
  export {auth,provider,storage,signInWithPopup};
  export default db