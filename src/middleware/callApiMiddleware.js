/**
 * Taken from from redux docs:
 * http://redux.js.org/docs/recipes/ReducingBoilerplate.html#async-action-creators
 */
const callApiMiddleware = ({ getState, dispatch }) => next => action => {
  const {
    types,
    shouldCallApi = () => true,
    api,
    payload = {},
  } = action;

  if (!types) {
    return next(action);
  }

  if (!Array.isArray(types) || types.length !== 3 || !types.every(type => typeof type === 'string')) {
    throw new Error('Expected an array of three string types.');
  }

  if (typeof api !== 'function') {
    throw new Error('Expected \'api\' to be a function.');
  }

  if (!shouldCallApi(getState())) {
    return;
  }

  const [request, success, failure] = types;
  dispatch({ type: request, payload: payload, });
  return api().then(
    response => dispatch({ type: success, ...payload, ...response }),
    error => dispatch({ type: failure, ...payload, ...error })
  );
};


export default callApiMiddleware;
