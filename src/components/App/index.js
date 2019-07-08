/* Import : NPM */
import React from 'react';

/* Import : Local */
import Board from 'src/components/Board';
import Letters from 'src/components/Letters';
import './app.scss';

/* Code */
const App = () => (
  <div id="app">
    <Board status="typing" />
    <Letters />
  </div>
);

/* Export */
export default App;
