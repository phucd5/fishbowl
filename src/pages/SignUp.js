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
            alert("You already signed up. Please fill in your email and password!")
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
            alert("Please fill in your email and password!")
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
        
        
        <div className = 'Message'>Currently logged in as: { currentUser?.email } </div>
        <div >
            {!currentUser && 
            <div className = 'temp'>
            <div className = 'input-box'>
            <div className="email-ctn">
                <input className='email' ref={emailRef} placeholder="Email" required/>
            </div>
            <div className="password-ctn">
                <input className='password' type="password" ref={passwordRef} placeholder="Password" required/>
            </div>
            </div>
            <div className = 'btns'>
                <button className="sign-up-btn" disabled={loading || currentUser} onClick={(handleSignup)}>Sign Up</button>
                <button className="sign-up-btn" disabled={loading || currentUser} onClick={(handleLogin)}>Sign In</button> 
                </div></div>}
        {currentUser && <div className = 'btns'><button className= "log-out-btn" disabled={loading} onClick={handleLogout}>Log Out</button></div> }
        
        </div>
    </div>



  )
}
