const loggerMiddleWare = store => next => (action) => {
  // on a accès à store et donc à ses méthodes
  // store.getState() ou store.dispatch()
  // on a accès à la fonction next, qui permet de laisser passer une action
  // next(action);
  // on a accès à l'action, { type: 'LOADING' }
  // on pourra switcher sur les actions pour décider quoi faire
  console.log(action);
  next(action);
};

export default loggerMiddleWare;
