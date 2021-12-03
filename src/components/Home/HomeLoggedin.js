import { connect } from 'react-redux'
import { Link } from "react-router-dom"

function HomeLoggedin({ userName }) {
    return (
        <>
            <h3>Hello, dear {userName}! Welcome to your personal phonebook.</h3>
            <p>Here you can add and delete as many contacts as you wish: <Link to="/contacts">contacts</Link></p>
        </>
    )
}

const mapStateToProps = state => {
  return {
    userName: state.userReducer.user.name,
  }
}

export default connect(mapStateToProps, null)(HomeLoggedin)