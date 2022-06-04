import { getAuthUserData } from "./auth-reducer"

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS'

let initialState = {
    initialized: false,
}

const appReduce = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true,
            }
        default:
            return state 
    }
}

export function initializedSuccess() {
    return {
        type: INITIALIZED_SUCCESS
    }
}

export function initializeApp() {
    return async (dispatch) => {
        let promise = dispatch(getAuthUserData());
        
        await Promise.all([promise])
        dispatch(initializedSuccess())
    }
}

export default appReduce;