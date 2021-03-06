import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Pages/Authentication/Firebase/firebase.init"

// initialize firebase app
initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [authError, setAuthError] = useState('');
    const [isLoading, setIsLoading] = useState(true)

    const auth = getAuth();

    // login process with google
    const googleProvider = new GoogleAuthProvider();

    const signInWithGoogle = (location, navigate) => {
        setIsLoading(true);
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                saveUser(user.email, user.displayName, 'PUT')
                setAuthError('');
                const destination = location?.state?.from || '/';
                navigate(destination);
            }).catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false));
    };
    
    // register user
    const registerUser = (name, email, Password, navigate) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, Password)
            .then((result) => {
                setUser(result.user);
                setAuthError('');
                const newUser = { email, displayName: name };
                setUser(newUser);
                // save user to the database
                saveUser(email, name, 'POST');
                // send name to firebase after creation
                updateProfile(auth.currentUser, {
                    displayName: name
                })
                .then(() => {

                })                
                navigate('/');
            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false));
    };

    // login user
    const loginUser = (email, password, location, navigate) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                setUser(result.user);
                const destination = location?.state?.from || '/';
                navigate(destination);
                setAuthError('');
            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false));
    };


    // observation to user state change when login
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({})
            }
            setIsLoading(false);
        });
        return () => unsubscribe;
    }, [auth])

    // save user in database
    const saveUser = (email, displayName, method) => {
        const user = { email, displayName };
        fetch('http://localhost:4000/users', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then()
    };

    // logout process
    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => { })
            .catch(error => {
                setAuthError(error.message)
            })
            .finally(() => setIsLoading(false));

    };

    return {
        user,
        authError,
        isLoading,
        signInWithGoogle,
        registerUser,
        loginUser,
        logOut
    }
}

export default useFirebase;