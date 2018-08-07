import React, { Component } from 'react';

const Context = React.createContext();

export class Provider extends Component {
  state = {
    contacts: [
      { id: 1, name: 'John Doe', email: 'jdoe@gmail.com', phone: '555-5555' },
      {
        id: 2,
        name: 'Mary LaSalle',
        email: 'mlasalle@gmail.com',
        phone: '222-2222'
      },
      { id: 3, name: 'Bruce Dern', email: 'bdern@gmail.com', phone: '858-6666' }
    ]
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
