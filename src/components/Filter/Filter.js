import { connect } from "react-redux"
import * as actions from '../../redux/contactsActions'

function Filter({handleSearch}) {

    return (
        <input
            type="search"
            name="nameSearch"
            placeholder="Enter name"
            onChange={handleSearch}
        />
    )
}

const mapDispatchToProps = dispatch => {
    return {
        handleSearch: (e) => dispatch(actions.filter(e))
    }
}

export default connect(null, mapDispatchToProps)(Filter);