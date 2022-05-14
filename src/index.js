import './index.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App.js';
import store from './redux/redux-store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

function renderEntireTree(store) {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <Provider store={store}>
                    <App />
                </Provider>
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

renderEntireTree(store);