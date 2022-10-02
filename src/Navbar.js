import React from "react";

export default function Navbar(){
    return (
    <nav className="nav">
        <a href="/" className="site-title">
            Logo
            </a>
            <ul>
                <CustomLink href="/home">Home</CustomLink>
                <CustomLink href="/upload">Upload</CustomLink>
                <CustomLink href="/videos">Videos</CustomLink>
                <CustomLink href="/signup">Sign Up</CustomLink>
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