import * as Actions from '../actions/feeds.actions';

export const fetchFeeds = () => ({
  type: Actions.FETCH_FEEDS_SEQUENCE,
  types: [
    Actions.FETCH_FEEDS_REQUEST,
    Actions.FETCH_FEEDS_SUCCESS,
    Actions.FETCH_FEEDS_FAILURE
  ],
  shouldCallApi: state => !state.feeds.value.length,
  api: () => fetch(`http://localhost:4000/api/v1/feeds/`)
    .then(response => response.json())
    .then(json => ({ payload: { feeds: json } })),
  payload: {}
});
