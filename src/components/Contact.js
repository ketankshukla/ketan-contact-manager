import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Contact extends Component {
  render() {
    const { contact } = this.props
    return (
      <div className="card card-body mb-3">
        <h4>{contact.name}</h4>
        <ul className="list-group">
          <li className="list-group-item">Email: {contact.email}</li>
          <li className="list-group-item">Phone: {contact.phone}</li>
        </ul>
      </div>
    )
  }
}

Contact.PropTypes = {
  name: PropTypes.string.required,
  email: PropTypes.string.required,
  phone: PropTypes.string.required
}

export default Contact
