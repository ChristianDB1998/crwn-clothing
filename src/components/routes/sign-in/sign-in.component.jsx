import { signInWithgooglePopup, createUserDocumentFromAuth } from "../../../utils/firebase/firebase.utils";

const SignIn = () => {
    const logGoogleUser = async() => {
        const { user }= await signInWithgooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
    }
    return(
        <div>
            <h1>I am the sign in page!</h1>
            <button onClick={logGoogleUser}>Sign In With Google Popup</button>
        </div>
    );
}

export default SignIn;