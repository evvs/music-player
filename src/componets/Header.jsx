import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCompactDisc } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { toggleOpen } from '../redux_slices/libriary';

const Header = () => {
  const dispatch = useDispatch();

  return (
    <header className="_header">
      <h1>music</h1>
      <button type="button" onClick={() => dispatch(toggleOpen())}>
        <FontAwesomeIcon icon={faCompactDisc} />
        <p>Libriary</p>
      </button>
    </header>
  );
};

export default Header;
