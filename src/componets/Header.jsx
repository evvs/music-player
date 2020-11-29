import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNapster } from '@fortawesome/free-brands-svg-icons';

const Header = () => (
  <header className="_header">
    <h1>music</h1>
    <button type="button">
      <FontAwesomeIcon icon={faNapster} />
      <p>Libriary</p>
    </button>
  </header>
);

export default Header;
