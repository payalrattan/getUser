import React from 'react';
import PropTypes from 'prop-types';
import "./header.css";

const Header = ({ title }) => {
  return (
    <div className="header">
      All {title}
    </div>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired
};

export default Header;
