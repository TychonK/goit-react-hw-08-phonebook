import { connect } from 'react-redux'
import * as actions from '../../redux/actions'

function ListItems({ arr, filterWord, deleteContact }) {
    const listMarkup = arr.filter((val) => {
        if (filterWord === "") {
            return val
        } else if (val.name.toLowerCase().includes(filterWord.toLowerCase())) {
            return val
        }
    }).map((val, index) => {
        return (
            <li key={index}>{val.name}: {val.phone}
                <button className="delete-button" id={val.id} type="button" onClick={deleteContact}>Delete</button>
            </li>  
        )
    })     
    return (
        listMarkup
    )
}

const mapStateToProps = state => {
    return {
        arr: state.contacts,
        filterWord: state.filter,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        deleteContact: (e) => dispatch(actions.deleteContact(e))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListItems);