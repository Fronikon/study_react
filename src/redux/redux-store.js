import {applyMiddleware, combineReducers, createStore} from 'redux';
import authReduce from './auth-reducer';
import dialogReduce from './dialog-reducer';
import profileReduce from './profile-reducer';
import usersReduce from './users-reducer';
import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';


let reducers = combineReducers({
    messagesPage: dialogReduce,
    profilePage: profileReduce,
    usersPage: usersReduce,
    auth: authReduce,
    form: formReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware))

window.store = store;

export default store;