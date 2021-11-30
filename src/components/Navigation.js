import { NavLink } from "react-router-dom";

export default function Navigation() {
    return (
        <>
        <nav>
            <NavLink to="/" className="nav-link">Home</NavLink>
            <NavLink to="/register" className="nav-link">Register</NavLink>
            <NavLink to="/login" className="nav-link">Log In</NavLink>
            <NavLink to="/contacts" className="nav-link">Contacts</NavLink>
        </nav>
        <hr />
        </>
    )
}