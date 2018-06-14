import React from 'react';
import ReactDOM from 'react-dom';
import App from './container/app'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import registerServiceWorker from './registerServiceWorker';
import reducers from './reducers';
import thunk from 'redux-thunk';
import './css/App.css';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers, window.__REDUX_DEVETOOLS_EXTENSION__ && window.__REDUX_DEVETOOLS_EXTENSION__())}>
        <App />
    </Provider>, document.getElementById('root'));
registerServiceWorker();
