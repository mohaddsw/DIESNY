
const firebaseConfig = {
    apiKey: "AIzaSyAyYnJ41-GVsMJjk1R5ryN9qOTNmvwfTb8",
    authDomain: "diesnyplus-clone.firebaseapp.com",
    projectId: "diesnyplus-clone",
    storageBucket: "diesnyplus-clone.appspot.com",
    messagingSenderId: "875751637374",
    appId: "1:875751637374:web:0ff4b4ae9721169441332f"
  };
  
  // Initialize Firebase
  const firebaseapp =firebase. initializeApp(firebaseConfig);
  const db=firebaseapp.firestore()
  const auth=firebase.auth()
  const provider=new firebase.auth.GoogleAuthProvider()
  const storage=firebase.storage()
  export {auth,provider,storage};
  export default db