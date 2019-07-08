/* Import : NPM */
import React from 'react';
import PropTypes from 'prop-types';

/* Import : Local */
import Letter from 'src/components/Letter';
import './word.scss';

/* Code */
const Word = ({ word }) => (
  <div className="word">
    {Array.from(word).map((letter, index) => (
      <Letter key={index} letter={letter} />
    ))}
  </div>
);

Word.propTypes = {
  word: PropTypes.string.isRequired,
};

/* Export */
export default Word;
