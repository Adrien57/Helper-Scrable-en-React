/* Import : NPM */
import React from 'react';

/* Import : Local */
// j'importe mes containers directement
import Board from 'src/containers/Board';
import Letters from 'src/containers/Letters';
import './app.scss';

/* Code */
const App = () => (
  <div id="app">
    <Board />
    <Letters />
  </div>
);

/* Export */
export default App;
