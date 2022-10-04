import React from "react";
import { useRef, useState } from "react";
import { signUp, signIn, signOutAuth, useAuth } from "../firebase";

export default function SignUp() {
  const [loading, setLoading] = useState(false);
  const currentUser = useAuth();

  const emailReference = useRef();
  const passwordReference = useRef();

  async function handleSignUp() {
    setLoading(true);
    try {
      await signUp(
        emailReference.current.value,
        passwordReference.current.value
      );
    } catch {
      alert(
        "The email is already assoicated with an account. Please login instead."
      );
    }
    setLoading(false);
    emailReference.current.value = "";
    passwordReference.current.value = "";
  }

  async function handleLogIn() {
    setLoading(true);
    try {
      await signIn(
        emailReference.current.value,
        passwordReference.current.value
      );
    } catch {
      alert("Please enter an email and password.");
    }
    emailReference.current.value = "";
    passwordReference.current.value = "";
    setLoading(false);
  }

  async function handleSignOut() {
    setLoading(true);
    try {
      signOutAuth();
    } catch {
      alert("You are not logged in!");
    }
    setLoading(false);
  }

  return (
    <div className="main">
      <div className="message">Logged in: {currentUser?.email} </div>
      <div>
        {!currentUser && (
          <div className="temp">
            <div className="input-box">
              <div className="email-ctn">
                <input
                  className="email-box"
                  ref={emailReference}
                  placeholder="Email"
                  required
                />
              </div>
              <div className="password-ctn">
                <input
                  className="password-box"
                  type="password"
                  ref={passwordReference}
                  placeholder="Password"
                  required
                />
              </div>
            </div>
            <div className="btns">
              <button
                className="sign-up-btn"
                disabled={loading || currentUser}
                onClick={handleSignUp}
              >
                Sign Up
              </button>
              <button
                className="sign-up-btn"
                disabled={loading || currentUser}
                onClick={handleLogIn}
              >
                Sign In
              </button>
            </div>
          </div>
        )}
        {currentUser && (
          <div className="btns">
            <button
              className="log-out-btn"
              disabled={loading}
              onClick={handleSignOut}
            >
              Log Out
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
