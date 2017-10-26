import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { withState } from 'recompose';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
