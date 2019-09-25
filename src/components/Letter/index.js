/* Import : NPM */
import React from 'react';
import PropTypes from 'prop-types';

/* Import : Local */
// utils
import { getLetterPoints } from 'src/data/letters';
// styles
import './letter.scss';

/* Code */
const Letter = ({ letter }) => (
  <div className="letter">
    <div className="letter-symbol">{letter}</div>
    <div className="letter-points">{getLetterPoints(letter)}</div>
  </div>
);

Letter.propTypes = {
  letter: PropTypes.string.isRequired,
};

/* Export */
export default Letter;
