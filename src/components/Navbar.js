import React from "react";
import logo from '../logo.png'

export default function Navbar(){
    return (
    <nav className="nav">
        <a href="/" className="site-title">
        <img className="logo"src={logo} alt="Test"/>
        </a>
            <ul>
                <CustomLink href="/home">Home</CustomLink>
                <CustomLink href="/upload">Upload</CustomLink>
                <CustomLink href="/videos">Videos</CustomLink>
                <CustomLink href="/signup">Sign Up</CustomLink>
                <CustomLink href="/about">About</CustomLink>
        </ul>
    </nav>
    )
}

function CustomLink({href, children, ...props}){
    const path = window.location.pathname
    return (
    <li className={path === href ? "active" : ""}>
       <a href ={href} {...props}>{children}</a>
    </li>
    )
}