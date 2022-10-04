export function NavElements({href, children, ...props}){
    const path = window.location.pathname
    return (
    <li className={path === href ? "active" : ""}>
       <a href ={href} {...props}>{children}</a>
    </li>
    )
}