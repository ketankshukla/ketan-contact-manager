import React from 'react';
import PropTypes from 'prop-types'

const Header = (props) => {
  const {branding} = props
  return (
    <div>
      <h1 style={{color: 'red', fontSize: '50px'}}>{branding}</h1>
    </div>
  );
};

Header.defaultProps = {
  branding: 'Contact Manager'
}

Header.PropTypes = {
  branding: PropTypes.string.required
}

export default Header;
