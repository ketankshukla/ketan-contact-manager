import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Contact extends Component {
  render() {
    const { name, email, phone } = this.props.contact
    return (
      <div className="card card-body mb-3">
        <h4>{name}</h4>
        <ul className="list-group">
          <li className="list-group-item">Email: {email}</li>
          <li className="list-group-item">Phone: {phone}</li>
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
