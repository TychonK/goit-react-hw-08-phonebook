import { useEffect } from 'react';
import { useNavigate } from 'react-router';

import ListItems from './Contacts_List/ListItems'
import Form from './Form/Form'
import Filter from './Filter/Filter'
import Loader from "react-loader-spinner";

import { connect } from 'react-redux'
import * as actions from '../redux/contactsActions'

function Contacts({ contacts, filter, loading, onLoad }) {
    useEffect(() => {
        if (contacts.length === 0) {
            onLoad()
        } else {
            return
        }   
    }, [])

    const navigate = useNavigate();

    const handleGoBack = () => {
     navigate(-1)
    }
    
    return (
        <>
            <button type="button" onClick={handleGoBack} className="btn btn-primary hBack">
              &larr; Go back 
            </button>
          <div className="App">
            <Form existing={contacts} />
            
            <h2>Contacts</h2>
            <h3>Find contacts by name</h3>

            <Filter filter={filter} />
            
            <ul>
                {loading && <Loader
                    className="loader"
                    type="Puff"
                    color="#00BFFF"
                    height={100}
                    width={100}
                />}

                <ListItems arr={contacts} filter={filter} />
                
            </ul>
          </div>
        </>
    )
}

const mapStateToProps = state => {
  return {
    contacts: state.contacts.contacts,
    filter: state.contacts.filter,
    loading: state.contacts.loading,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onLoad: () => dispatch(actions.fetchOnPageLoad())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Contacts)