import React, { Component } from 'react';
import Contact from './Contact';

class Contacts extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: 'John Doe',
        email: 'jdoe@gmail.com',
        phone: '555-5555'
      },
      {
        id: 2,
        name: 'Mary LaSalle',
        email: 'mlasalle@gmail.com',
        phone: '222-2222'
      },
      {
        id: 3,
        name: 'Bruce Dern',
        email: 'bdern@gmail.com',
        phone: '858-6666'
      }
    ]
  };

  render() {
    const { contacts } = this.state;
    return (
      <React.Fragment>
        {contacts.map(contact => (
          <Contact
            key={contact.id}
            contact={contact}
          />
        ))}
      </React.Fragment>
    );
  }
}

export default Contacts;
