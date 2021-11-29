import { useState } from 'react'
import { connect } from 'react-redux';
import { v4 as uuid } from 'uuid'

import * as actions from '../../redux/actions'

function Form({ onSubmit, existing }) {
    const nameId = uuid()
    const numberId = uuid()

    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const handleContactName = (e) => {
        setName(e.target.value)
    }

    const handleContactNumber = (e) => {
        setNumber(e.target.value)
    }

    const handleSubmit = (e) => {
      e.preventDefault();
      
        if (existing.some(e => e.name === name)) {
            alert(`${name} already exists.`)
            return
      }
      
        const obj = {
          name: name,
          phone: number,
        }

        onSubmit(obj)
        setName('')
        setNumber('')
    }

    return (
        <form onSubmit={handleSubmit}>
          <label htmlFor={nameId}>
            <h2>Name</h2>
          <input
            type="text"
              name="name"
              id={nameId}
              value={name}
            placeholder="Enter contact's name..."
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
              required
              onChange={handleContactName}
          />
          </label>
          <label htmlFor={numberId}>
            <h2>Number</h2>
            <input
              type="tel"
              name="number"
              id={numberId}
              value={number}
              placeholder="Enter contact's number..."
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
              required
              onChange={handleContactNumber}
            />

          </label>
          <button className="add-button" type="submit">Add contact</button>
        </form>
      )
}

const mapDispatchToProps = dispatch => {
  return {
    onSubmit: (obj) => dispatch(actions.addContact(obj))
  }
}

export default connect(null, mapDispatchToProps)(Form)