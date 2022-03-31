import {combineReducers, createStore} from 'redux';
import dialogReduce from './dialog-reducer';
import profileReduce from './profile-reducer';

let reducers = combineReducers({
    messagesPage: dialogReduce,
    profilePage: profileReduce,
});

let store = createStore(reducers)

export default store;