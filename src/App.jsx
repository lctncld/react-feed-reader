import React from 'react';
import { applyMiddleware, createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import callApiMiddleware from './middleware/callApiMiddleware';
import reducers from './reducer/index.reducer';
import FeedListContainer from './container/FeedListContainer';
import FeedViewContainer from './container/FeedViewContainer';
import { Container } from 'semantic-ui-react';
import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux';


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
      callApiMiddleware,
      routerMiddleware(history),
    ),
  );

  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Container >
          <Route path="/" component={FeedListContainer} />
          <Route path="/feed/:name" component={FeedViewContainer} />
          </Container>
      </ConnectedRouter>
    </Provider>
  );
}

export default App;
