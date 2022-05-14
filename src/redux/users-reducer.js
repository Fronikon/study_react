import { usersAPI } from './../api/api';

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';
const TOGGLE_IS_FOLLOWING_PROCESS = 'TOGGLE-IS-FOLLOWING-PROCESS';

let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 100, 
    currentPage: 1,
    isFetching: true,
    followingInProcess: [],
}

const usersReduce = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map( user => {
                    if (user.id === action.userId) {
                        return {...user, followed: true}
                    }
                    return user;
                })
            };
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map( user => {
                    if (user.id === action.userId) {
                        return {...user, followed: false}
                    }
                    return user;
                })
            };
        case SET_USERS:
            return {
                ...state,
                users: [...action.users] // должно быть так ( users: [...state.users, ...action.users] )
            };
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            };
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state,
                totalUsersCount: action.userCount,
            };
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching,
            };
        case TOGGLE_IS_FOLLOWING_PROCESS:
            return {
                ...state,
                followingInProcess: action.isFetching
                ? [...state.followingInProcess, action.userId]
                : state.followingInProcess.filter( id => id !== action.userId ),
            };
        default:
            return state 
    }
}

export function followSuccess(userId) {
    return {
        type: FOLLOW,
        userId
    }
}
export function unFollowSuccess(userId) {
    return {
        type: UNFOLLOW,
        userId
    }
}
export function setUsers(users) {
    return {
        type: SET_USERS,
        users
    }
}
export function setCurrentPage(currentPage) {
    return {
        type: SET_CURRENT_PAGE,
        currentPage: currentPage
    }
}
export function setTotalUsersCount(userCount) {
    return {
        type: SET_TOTAL_USERS_COUNT,
        userCount: userCount
    }
}
export function toggleIsFetching(isFetching) {
    return {
        type: TOGGLE_IS_FETCHING,
        isFetching
    }
}
export function tongleFollowingInProcess(isFetching, userId) {
    return {
        type: TOGGLE_IS_FOLLOWING_PROCESS,
        isFetching,
        userId
    }
}

export function getUsers(page, pageSize) {
    return (dispatch) => {
        dispatch(toggleIsFetching(true))
        dispatch(setCurrentPage(page))
        usersAPI.getUsers(page, pageSize)
            .then(response => {
                dispatch(toggleIsFetching(false));
                dispatch(setUsers(response.items));
                dispatch(setTotalUsersCount(response.totalCount));
            });
    }
}

export function follow(id) {
    return (dispatch) => {
        dispatch(tongleFollowingInProcess(true, id));
        usersAPI.follow(id)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(followSuccess(id))
                }
                dispatch(tongleFollowingInProcess(false, id));
            })
    }
}

export function unFollow(id) {
    return (dispatch) => {
        dispatch(tongleFollowingInProcess(true, id));
        usersAPI.unFollow(id)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(unFollowSuccess(id))
                }
                dispatch(tongleFollowingInProcess(false, id));
            })
    }
}

export default usersReduce;