import axios from 'axios';

// je peux importer mes actions types au besoin ainsi que mes actions creators
import { LOADING, wordsReceived } from 'src/store/reducer';

const ajaxMiddleWare = store => next => (action) => {
  // on a accès à store et donc à ses méthodes
  // store.getState() ou store.dispatch()
  // on a accès à la fonction next, qui permet de laisser passer une action
  // next(action);
  // on a accès à l'action, { type: 'LOADING' }
  // on pourra switcher sur les actions pour décider quoi faire
  switch (action.type) {
    case LOADING: {
      // je laisse passer l'action
      next(action);
      // en parallèle je peux lancer ma requête axios
      // dans mon middleWare, je peux accéder au state puisque j'ai accès store
      const state = store.getState();
      const { letters: lettersFromState } = state;
      axios.post('http://localhost:3000/words', {
        letters: lettersFromState,
      })
        .then((response) => {
          // en cas de succès on recupère une réponse
          // cette réponse est un objet
          // je peux extraire la prioriété data qui contient les infos qui m'intéressent
          const { data } = response;
          // on cherche à modifier le state
          // on s'adresse au store pour qu'il dispatch une action
          // sans action creator
          // store.dispatch({
          //   type: 'WORDS_RECEIVED',
          //   words: data,
          // });
          // avec action creator
          store.dispatch(wordsReceived(data));
        })
        .catch(() => {
          console.log('error');
        });
      break;
    }
    default:
      // pour toutes les actions qui ne m'intéressent pas, je laisse passer
      next(action);
      break;
  }
};

export default ajaxMiddleWare;
