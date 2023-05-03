/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import React, { createContext, useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null);

const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
         return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const googleSignin = () => {
        setLoading(true);
        return signInWithPopup(auth , googleProvider)
    };

    const githubSignin = () => {
        setLoading(true);
        return signInWithPopup(auth , githubProvider)
    };

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (loggedUser) => {
            // console.log('logged in user inside auth state observer', loggedUser)
            setUser(loggedUser)
            setLoading(false);
        })

        return () => {
            unsubscribe();
        }

    },[])

    const authInfo = {
        user,
        auth,
        loading,
        setLoading,
        createUser,
        signIn,
        googleSignin,
        githubSignin,
        logOut

    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;