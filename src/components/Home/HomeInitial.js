import { Link } from "react-router-dom"

export default function HomeInitial() {
    return (
    <>
        <h1>Welcome to the phonebook!</h1>
        <p>Please
            <Link to="/register"> register </Link>
            or
            <Link to="/login"> log-in </Link>
            to proceed to your personal phonebook
        </p>
    </>
    )
}