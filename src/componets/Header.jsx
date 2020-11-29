import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCompactDisc } from '@fortawesome/free-solid-svg-icons';

const Header = () => (
  <header className="_header">
    <h1>music</h1>
    <button type="button">
      <FontAwesomeIcon icon={faCompactDisc} />
      <p>Libriary</p>
    </button>
  </header>
);

export default Header;
