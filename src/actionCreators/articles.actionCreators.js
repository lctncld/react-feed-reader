import * as Actions from '../actions/articles.actions';

export const fetchArticles = (name) => ({
  type: Actions.FETCH_ARTICLES_SEQUENCE,
  types: [
    Actions.FETCH_ARTICLES_REQUEST,
    Actions.FETCH_ARTICLES_SUCCESS,
    Actions.FETCH_ARTICLES_FAILURE,
  ],
  shouldCallApi: state => !state.articles[name],
  api: () => fetch(`http://localhost:4000/api/v1/feeds/${name}`)
    .then(response => response.json())
    .then(json => ({ payload: {name: name, value: json} })),
  payload: { name }
});
