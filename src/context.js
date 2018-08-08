import React, { Component } from 'react';

const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case 'DELETE_CONTACT':
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        )
      };
    default:
      return state;
  }
};

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
    ],
    dispatch: action => { 
      this.setState(state => reducer(state,action))
    }
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
