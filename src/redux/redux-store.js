import {combineReducers, createStore} from 'redux';
import dialogReduce from './dialog-reducer';
import profileReduce from './profile-reducer';
import usersReduce from './users-reducer';

let reducers = combineReducers({
    messagesPage: dialogReduce,
    profilePage: profileReduce,
    usersPage: usersReduce,
});

let store = createStore(reducers)

export default store;