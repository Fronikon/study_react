import './index.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App.js';
import store from './redux/state';

function renderEntireTree(state) {
    ReactDOM.render(
        <React.StrictMode>
            <App
                state={state}
                dispatch={store.dispatch.bind(store)} />
        </React.StrictMode>,
        document.getElementById('root')
    );
}

renderEntireTree(store.getState())
store.subscribe(renderEntireTree)