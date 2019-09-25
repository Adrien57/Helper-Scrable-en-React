// imports npm
import { connect } from 'react-redux';

// imports locaux
import Letters from 'src/components/Letters';
// je peux importer mes actions creators
import { newLetter, loading } from 'src/store/reducer';

// branchements
// mSTP > transpose des données du state aux props
// on a accès au state en paramètre d'entrée
// on retourne un object avec en clé le nom des props qui seront dispo dans le composant
// et en valeur, la valeur de la props
const mapStateToProps = state => ({
  letters: state.letters,
});

// mDTP
// transmet sous forme de props, des fonctions qui vont pouvoir
// modifier le state une fois executées
const mapDispatchToProps = dispatch => ({
  addLetterToState: (key) => {
    dispatch(newLetter(key));
  },
  generateLoading: () => {
    dispatch(loading());
  },
});

const LettersContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Letters);

// export
export default LettersContainer;
