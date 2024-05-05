import { initializeApp } from "firebase/app";
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc, Firestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCNQdMQ3Aze1wORe4U_WM7zbUUpTWhNyAw",
    authDomain: "crwn-clothing-db-ee8ad.firebaseapp.com",
    projectId: "crwn-clothing-db-ee8ad",
    storageBucket: "crwn-clothing-db-ee8ad.appspot.com",
    messagingSenderId: "153331549041",
    appId: "1:153331549041:web:fe9180efb36596fe19acd0"
};
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);

  const provider =  new GoogleAuthProvider();
  provider.setCustomParameters({
    prompt: "select_account"
  });

  export const auth = getAuth();
  export const signInWithgooglePopup = () => signInWithPopup(auth, provider);

  export const db = getFirestore();

  export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, "users", userAuth.uid);

    console.log(userDocRef);

    const userSnapShot = await getDoc(userDocRef);
    console.log(userSnapShot);
    console.log(userSnapShot.exists());

  //if user data does not exists 
  //create / set the document with the data from userAuth in my collection 

    if(!userSnapShot.exists()) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();

      try {
        await setDoc(userDocRef, {
          displayName,
          email,
          createdAt
        });
      } catch (error){
        console.log("error creating the user", error.message);
      }
    }
  
  //if user data exists
  

};

    //

