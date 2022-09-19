import { initializeApp } from 'firebase/app'
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'

import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBIq-tHFm6vcRxU4NKUuBQ5D8KGR6WvcU4",
    authDomain: "crwn-clothing-db-8ae8c.firebaseapp.com",
    projectId: "crwn-clothing-db-8ae8c",
    storageBucket: "crwn-clothing-db-8ae8c.appspot.com",
    messagingSenderId: "578463592459",
    appId: "1:578463592459:web:1a6d5d1cfe74ca6d56d70e"
};
  
// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
  
provider.setCustomParameters({
    prompt: "select_account"
})


export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)


export const db = getFirestore();
export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid)

    console.log(userDocRef)

    const userSnapshot = await getDoc(userDocRef)

    console.log(userSnapshot.exists())


    if(!userSnapshot.exists()) {
        const { displayName, email } = userAuth
        const createdAt = new Date()

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt
            })
        } catch (error) {
            console.log('error creating the user'. error.message)
        }
    }

    return userDocRef
    // if user data exists

    // if user data does not exist 


    // return userDocRef


}