import {applyMiddleware, combineReducers, createStore, compose} from 'redux';
import authReduce from './auth-reducer';
import dialogReduce from './dialog-reducer';
import profileReduce from './profile-reducer';
import usersReduce from './users-reducer';
import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';
import appReduce from './app-reducer';


let reducers = combineReducers({
    messagesPage: dialogReduce,
    profilePage: profileReduce,
    usersPage: usersReduce,
    app: appReduce,
    auth: authReduce,
    form: formReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

window.__store__ = store;

export default store;