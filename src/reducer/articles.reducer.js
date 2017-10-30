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
      };
    case Actions.FETCH_ARTICLES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        [action.payload.name]: action.payload.value,
      }
      case Actions.FETCH_ARTICLES_FAILURE:
      return {
        ...state,
        isLoading: false,
      }
    default:
      return state;
  }
};

export default articlesReducer;
