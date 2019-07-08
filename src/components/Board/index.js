/* Import : NPM */
import React from 'react';
import PropTypes from 'prop-types';

/* Import : Local */
import './board.scss';

/* Code */
const Board = ({ status }) => (
  <div id="board">
    {status === 'typing' && <div id="board-image" />}
    {status === 'loading'
      && <div id="board-words">loading</div>
    }
  </div>
);

Board.propTypes = {
  status: PropTypes.oneOf(['typing', 'loading', 'loaded']).isRequired,
};

/* Export */
export default Board;
