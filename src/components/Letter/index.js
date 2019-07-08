/* Import : NPM */
import React from 'react';
import PropTypes from 'prop-types';

/* Import : Local */
import './letter.scss';

/* Code */
const Letter = ({ letter }) => (
  <div className="letter">
    <div className="letter-symbol">{letter}</div>
  </div>
);

Letter.propTypes = {
  letter: PropTypes.string.isRequired,
};

/* Export */
export default Letter;
