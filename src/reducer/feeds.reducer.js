import * as Actions from '../actions/feeds.actions';

const initialState = {
  value: [],
  isLoading: false,
};

const feedReducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.FETCH_FEEDS_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case Actions.FETCH_FEEDS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        value: action.payload.feeds,
      };
    default:
      return state;
  }
};

export default feedReducer;
