import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
import { createContext } from "react";
import auth from "../firebase/Firebase.Config";




export const AuthContext = createContext(null);

const FirebaseProvider = ({children}) => {

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    // creat an user
    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password);        
    }

    // Update profile
    const updateUser = (displayName,photoURL) =>{
        // console.log(auth.currentUser);
        return updateProfile(auth.currentUser, {
            displayName: displayName,
            photoURL: photoURL
          })
    }

    //User LogIn
    const loginUser = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password);
    }

    // Googel LogIn
    const googleLogin = () =>{
        return signInWithPopup(auth, googleProvider);
    }

    // Github Login
    const githubLogin = () =>{
        return signInWithPopup(auth, githubProvider);
    }

    const allValues = {
        createUser,
        updateUser,
        loginUser,
        googleLogin,
        githubLogin
    }

    return (
        <AuthContext.Provider value={allValues}>
            {children}
        </AuthContext.Provider>
    );
};

export default FirebaseProvider;