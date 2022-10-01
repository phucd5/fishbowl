import React from "react";



export default function Navbar(){
    const path = window.location.pathname
    return (
    <nav className="nav">
        <a href="/" className="site-title">
            Logo
            </a>
            <ul>
                <CustomLink href="/lectures">Lectures</CustomLink>
                <CustomLink href="/about">About</CustomLink>
                <CustomLink href="/schedules">Schedules</CustomLink>
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