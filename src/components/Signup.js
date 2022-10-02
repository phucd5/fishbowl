import React from 'react'
import { useRef, useState } from "react"
import { signUp, signIn, logout, useAuth } from "../firebase";

export default function SignUp() {

    const [loading, setLoading] = useState(false);
    const currentUser = useAuth();

    const emailRef = useRef();
    const passwordRef = useRef();

    async function handleSignup() {
        setLoading(true);
        try {
            await signUp(emailRef.current.value, passwordRef.current.value);
        }
        catch {
            alert("Error!")
        }
        setLoading(false);
        emailRef.current.value = ""
        passwordRef.current.value = ""
    }

    async function handleLogin() {
        setLoading(true);
        try {
            await signIn(emailRef.current.value, passwordRef.current.value);
        }
        catch {
            alert("Error!")
        }
        emailRef.current.value = ""
        passwordRef.current.value = ""
        setLoading(false);
    }

    async function handleLogout() {
        setLoading(true)
        try {
            logout();
        }
        catch {
            alert("Error!")
        }
        setLoading(false)

    }



  return (
    <div className="main">
        <div className="fields">
            <input ref={emailRef} placeholder="Email" />
            <input ref={passwordRef} placeholder-="Password" />
        </div>
        <div>Currently logged in as: { currentUser?.email } </div>
        <button disabled={loading || currentUser} onClick={(handleSignup)}>Sign Up</button>
        <button disabled={loading || currentUser} onClick={(handleLogin)}>Sign In</button>
        <button disabled={loading} onClick={handleLogout}>Log Out</button>
    </div>



  )
}
