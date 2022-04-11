import { profileAPI } from './../api/api';

const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';

let initialState = {
    posts: [
        { comment: 'Hello World!', id: '1' },
        { comment: 'Прикольная стена.', id: '2' },
        { comment: 'Пишу о своём.', id: '3' },
        { comment: 'Привет всем!!!', id: '4' },
        { comment: 'Как прошел ваш день?', id: '5' },
        { comment: 'Прикол.', id: '6' }
    ],
    newTextPost: '',
    profile: null,
}

const profileReduce = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newTextPost: action.text,
            }
        };
        case ADD_POST: {
            let newPost = {
                comment: state.newTextPost,
                id: '7',
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
                newTextPost: ''
            }
        };
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        };
        default:
            return state 
    }
}

export function addPostActionCreater() {
    return {
        type: ADD_POST
    }
}
export function updateNewPostTextActionCreater(text) {
    return {
        type: UPDATE_NEW_POST_TEXT,
        text: text,
    }
}
export function setUserProfile(profile) {
    return {
        type: SET_USER_PROFILE,
        profile
    }
}

export function getUserProfile(userId) {
    return (dispatch) => {
        profileAPI.getProfile(userId).then(response => {
                dispatch(setUserProfile(response.data));
            })
    }
}

export default profileReduce;