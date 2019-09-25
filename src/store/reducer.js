// état initial
const initialState = {
  letters: [],
  status: 'typing',
  words: [],
};

// action types
const NEW_LETTER = 'NEW_LETTER';
export const LOADING = 'LOADING';
const WORDS_RECEIVED = 'WORDS_RECEIVED';

// reducer
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    // pour mon action
    case NEW_LETTER:
      // je renvoie une copie du state modifié
      return {
        ...state,
        // je modifie letters, je crée un nouveau tableau
        letters: [
          // j'y déverse mes lettres actuelles
          ...state.letters,
          // j'ajoute la nouvelle à la fin
          action.key,
        ],
      };
    case LOADING:
      return {
        ...state,
        status: 'loading',
      };
    case WORDS_RECEIVED:
      return {
        ...state,
        words: [...action.words],
        status: 'loaded',
      };
    default:
      return state;
  }
};

// action creators
export const newLetter = key => ({
  type: NEW_LETTER,
  // key: key
  key,
});

export const loading = () => ({
  type: LOADING,
});

export const wordsReceived = words => ({
  type: WORDS_RECEIVED,
  words,
});

// selectors


// export
export default reducer;
