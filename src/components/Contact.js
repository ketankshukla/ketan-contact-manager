import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Contact extends Component {
  state = {
    showContactInfo: false
  };

  onShowClick = e => {
    this.setState({ showContactInfo: !this.state.showContactInfo });
  };

  render() {
    const { name, email, phone } = this.props.contact;
    const { showContactInfo } = this.state;
    return (
      <div className="card card-body mb-3">
        {showContactInfo ? (
          <React.Fragment>
            <h4>
              {name}{' '}
              <i
                onClick={this.onShowClick}
                className="fa fa-angle-double-down"
              />
            </h4>
            <ul className="list-group">
              <li className="list-group-item">Email: {email}</li>
              <li className="list-group-item">Phone: {phone}</li>
            </ul>
          </React.Fragment>
        ) : (
          <h4>
            {name}{' '}
            <i
              onClick={this.onShowClick}
              className="fa fa-angle-double-right"
            />
          </h4>
        )}
      </div>
    );
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired
};

export default Contact;
