import React from 'react';
import { render } from 'react-dom';
import 'semantic-ui-css/semantic.min.css'
import './index.css';
import App from './components/App';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from './reducers'
import middleware from './middleware'

let store = createStore(reducer, middleware)

render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root')
);
