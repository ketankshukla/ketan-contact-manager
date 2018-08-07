import React from 'react';
import PropTypes from 'prop-types'

const Header = (props) => {
  const {branding} = props
  return (
    <div>
      <h1 style={headingStyle}>{branding}</h1>
    </div>
  );
};

Header.defaultProps = {
  branding: 'Contact Manager'
}

Header.PropTypes = {
  branding: PropTypes.string.required
}

const headingStyle = {
  color: 'red',
  fontSize: '50px'
}

export default Header;
