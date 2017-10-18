import React from 'react';
import { applyMiddleware, createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { Route } from 'react-router-dom';
import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import callApiMiddleware from './middleware/callApiMiddleware';
import reducers from './reducer/index.reducer';
import FeedListContainer from './container/FeedListContainer';
import FeedViewContainer from './container/FeedViewContainer';
import './App.css';

function App() {
  const history = createHistory();
  const store = createStore(
    combineReducers({
      ...reducers,
      router: routerReducer,
    }),
    applyMiddleware(
      logger,
      thunk,
      routerMiddleware(history),
      callApiMiddleware,
    ),
  );

  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <div className="FeedApp">
          <Route path="/" component={FeedListContainer} />
          <Route path="/feed/:name" component={FeedViewContainer} />
        </div>
      </ConnectedRouter>
    </Provider>
  );
}

export default App;
