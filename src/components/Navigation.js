import { NavLink } from "react-router-dom";

export default function Navigation() {
    return (
        <>
        <nav>
            <NavLink exact to="/" className="nav-link">Home</NavLink>
            <NavLink exact to="/register" className="nav-link">Register</NavLink>
            <NavLink exact to="/login" className="nav-link">Log In</NavLink>
            <NavLink exact to="/contacts" className="nav-link">Contacts</NavLink>
        </nav>
        <hr />
        </>
    )
}