import { authAPI } from './../api/api';

const SET_USER_DATA = 'SET-USER-DATA'

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
}

const authReduce = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true,
            }
        default:
            return state 
    }
}

export function setAuthUserData(id, email, login) {
    return {
        type: SET_USER_DATA,
        data: {id, email, login}
    }
}

export function getAuthUserData() {
    return (dispatch) => {
        authAPI.getAuthStatus()
        .then(response => {
                if (response.resultCode === 0) {
                    let {id, email, login} = response.data
                    dispatch( setAuthUserData(id, email, login) )
                }
            })
    }
}

export default authReduce;