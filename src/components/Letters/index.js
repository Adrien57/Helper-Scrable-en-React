/* Import : NPM */
import React from 'react';

/* Import : Local */
import Letter from 'src/components/Letter';
import './letters.scss';

/* Code */
const Letters = () => (
  <div id="letters">
    <Letter letter="r" />
    <Letter letter="e" />
    <Letter letter="a" />
    <Letter letter="c" />
    <Letter letter="t" />
  </div>
);

/* Export */
export default Letters;
