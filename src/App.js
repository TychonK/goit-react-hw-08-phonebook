import './App.scss';
import { useEffect } from 'react';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

import ListItems from './components/Contacts_List/ListItems'
import Form from './components/Form/Form'
import Filter from './components/Filter/Filter'

import { connect } from 'react-redux'
import * as actions from './redux/actions'

function App({ contacts, filter, loading, onLoad }) {

  useEffect(() => {
    onLoad()
  }, [])

    return (
      <div className="App">
        <Form existing={contacts}/>
        <h2>Contacts</h2>
        <h3>Find contacts by name</h3>
        <Filter filter={filter}/>
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
    )
}

const mapStateToProps = state => {
  return {
    contacts: state.contacts,
    filter: state.filter,
    loading: state.loading,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onLoad: () => dispatch(actions.fetchOnPageLoad())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)