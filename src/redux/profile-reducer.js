import { profileAPI } from './../api/api';

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_USER_STATUS = 'SET-USER-STATUS';

let initialState = {
    posts: [
        { comment: 'Hello World!', id: '1' },
        { comment: 'Прикольная стена.', id: '2' },
        { comment: 'Пишу о своём.', id: '3' },
        { comment: 'Привет всем!!!', id: '4' },
        { comment: 'Как прошел ваш день?', id: '5' },
        { comment: 'Прикол.', id: '6' }
    ],
    profile: null,
    status: '',
}

const profileReduce = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                comment: action.post,
                id: '7',
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
            }
        };
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        };
        case SET_USER_STATUS: {
            return {
                ...state,
                status: action.status
            }
        };
        default:
            return state 
    }
}

export function addPostActionCreater(post) {
    return {
        type: ADD_POST,
        post
    }
}
export function setUserProfile(profile) {
    return {
        type: SET_USER_PROFILE,
        profile
    }
}

export function setUserStatus(status) {
    return {
        type: SET_USER_STATUS,
        status
    }
}

export function getUserProfile(userId) {
    return (dispatch) => {
        profileAPI.getProfile(userId).then(response => {
                dispatch(setUserProfile(response.data));
            })
    }
}

export function getUserStatus(userId) {
    return (dispatch) => {
        profileAPI.getStatus(userId).then(response => {
                dispatch(setUserStatus(response.data));
            })
    }
}

export function updateUserStatus(status) {
    return (dispatch) => {
        profileAPI.updateStatus(status).then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(setUserStatus(status));
                }
            })
    }
}

export default profileReduce;