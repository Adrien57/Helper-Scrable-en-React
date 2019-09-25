/* Import : NPM */
import React from 'react';
import PropTypes from 'prop-types';

/* Import : Local */
import Word from 'src/components/Word';
import './board.scss';

/* Code */
const Board = ({ status, words }) => (
  <div id="board">
    {status === 'typing' && <div id="board-image" />}
    {status === 'loading' && (
      <div id="board-words">
        <Word word="loading" />
      </div>
    )}
    {status === 'loaded' && (
      <div id="board-words">
        {words.map(word => (
          <Word key={word} word={word} />
        ))}
      </div>
    )}
  </div>
);

Board.propTypes = {
  status: PropTypes.oneOf(['typing', 'loading', 'loaded']).isRequired,
  words: PropTypes.arrayOf(
    PropTypes.string,
  ).isRequired,
};

/* Export */
export default Board;
