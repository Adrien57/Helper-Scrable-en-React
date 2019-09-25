// imports npm
import { connect } from 'react-redux';

// imports locaux
import Board from 'src/components/Board';

// branchements
// mSTP > transpose des données du state aux props
const mapStateToProps = state => ({
  status: state.status,
  words: state.words,
});

// mDTP
// transmet sous forme de props, des fonctions qui vont pouvoir
// modifier le state une fois executées
const mapDispatchToProps = {};

const BoardContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Board);

// export
export default BoardContainer;
