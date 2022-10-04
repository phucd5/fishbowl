import React from "react";
import logo from '../logo.png'
import { NavElements } from "./NavElements";

export default function Navbar(){
    return (
    <nav className="nav">
        <a href="/" className="site-title">
        <img className="logo"src={logo} alt="Logo"/>
        </a>
            <ul>
                <NavElements href="/signup">Account</NavElements>
                <NavElements href="/upload">Upload</NavElements>
                <NavElements href="/videos">Videos</NavElements>
                <NavElements href="/about">About</NavElements>
        </ul>
    </nav>
    )
}
