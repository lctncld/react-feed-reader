import * as Actions from '../actions/articles.actions';

const initialState = {
  isLoading: false,
};

const articlesReducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.FETCH_ARTICLES_REQUEST:
      return {
        ...state,
        isLoading: true,
        selectedFeed: action.payload.name,
      };
    case Actions.FETCH_ARTICLES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        [action.payload.name]: action.payload.value,
      }
    default:
      return state;
  }
};

export default articlesReducer;
