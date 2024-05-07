import { initializeApp } from "firebase/app";
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword } from "firebase/auth";
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

  const googleProvider =  new GoogleAuthProvider();

  googleProvider.setCustomParameters({
    prompt: "select_account",
  });

  export const auth = getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
  export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);

  export const db = getFirestore();

  export const createUserDocumentFromAuth = async (
    userAuth,
    addAdditionalInformation = {displaName: 'Mike'}

  ) => {

    const userDocRef = doc(db, "users", userAuth.uid);

    const userSnapShot = await getDoc(userDocRef);

  //if user data does not exists 
  //create / set the document with the data from userAuth in my collection 

    if(!userSnapShot.exists()) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();

      try {
        await setDoc(userDocRef, {
          displayName,
          email,
          createdAt,
          ...addAdditionalInformation,
        });
      } catch (error){
        console.log("error creating the user", error.message);
      }
    }
  
  //if user data exists

return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if(!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
}

    //

