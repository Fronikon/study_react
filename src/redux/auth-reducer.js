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
                ...action.payload
            }
        default:
            return state 
    }
}

export function setAuthUserData(id, email, login, isAuth) {
    return {
        type: SET_USER_DATA,
        payload: {id, email, login, isAuth}
    }
}

export function getAuthUserData() {
    return (dispatch) => {
        return authAPI.getAuthStatus()
        .then(response => {
                if (response.resultCode === 0) {
                    let {id, email, login} = response.data
                    dispatch( setAuthUserData(id, email, login, true) )
                }
            })
    }
}

export function login(email, password, rememberMe, setStatus, setSubmitting) {
    return (dispatch) => {
        authAPI.login(email, password, rememberMe)
        .then(response => {
                if (response.resultCode === 0) {
                    dispatch(getAuthUserData())
                } else {
                    setStatus(response.messages);
                    setSubmitting(false);
                }
            })
    }
}

export function logOut() {
    return (dispatch) => {
        authAPI.logOut()
        .then(response => {
                if (response.resultCode === 0) {
                    dispatch(setAuthUserData(null, null, null, false))
                }
            })
    }
}

export default authReduce;