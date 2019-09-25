/* Import : NPM */
import React from 'react';
import PropTypes from 'prop-types';

/* Import : Local */
import Letter from 'src/components/Letter';
import { isLetter } from 'src/data/letters';
import './letters.scss';

/* Code */
class Letters extends React.Component {
  // au 1er rendu du composant j'écoute un événement "keyup" sur tout le document
  componentDidMount() {
    document.addEventListener('keyup', this.addLetter);
  }

  // on déstructure l'évenement reçu en paramètre
  // pour extraire key (la propriété qui nous intéresse) directement
  addLetter = ({ key }) => {
    // je passe la lettre saisie en minuscule
    const lowerKey = key.toLowerCase();
    // je veux extraire les lettres actuelles de mes props
    // je peux éventuellement leur donner un alias
    const { letters: actualLetters } = this.props;
    // je vérifie que le caractère saisi est bien une lettre
    // et que je n'ai pas déjà saisi trop de lettres
    if (isLetter(lowerKey) && actualLetters.length < 7) {
      // faire une action / ajouter une lettre
      // j'ai accès ici à addLetter qui est dans mes props
      // je peux la récupérer
      const { addLetterToState } = this.props;
      // j'execute ma fonction transmise depuis le container
      // je lui passe la lettre en argument
      addLetterToState(lowerKey);
      // je regarde si mon tableau sera rempli après cet ajout
      if (actualLetters.length === 6) {
        // si oui, je déclenche quelque chose
        // je peux récupérer une fonction depuis mes props
        const { generateLoading } = this.props;
        generateLoading();
      }
    }
  }

  render() {
    // dans un composant sous forme de classe j'ai accès aux props
    // via this.props
    // je peux accéder à letters via this.props.letters
    // je peux déstrcturer pour récuperer letters directement
    const { letters } = this.props;
    return (
      <div id="letters">
        {letters.map((letter, index) => (
          // je comprends les risques
          // eslint-disable-next-line react/no-array-index-key
          <Letter key={index} letter={letter} />
        ))}
      </div>
    );
  }
}

Letters.propTypes = {
  letters: PropTypes.arrayOf(
    PropTypes.string,
  ).isRequired,
  addLetterToState: PropTypes.func.isRequired,
  generateLoading: PropTypes.func.isRequired,
};

/* Export */
export default Letters;
