const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT';

let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 100, 
    currentPage: 1,
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
        default:
            return state 
    }
}

export function followAC(userId) {
    return {
        type: FOLLOW,
        userId
    }
}

export function unFollowAC(userId) {
    return {
        type: UNFOLLOW,
        userId
    }
}

export function setUsersAC(users) {
    return {
        type: SET_USERS,
        users
    }
}

export function setCurrentPageAC(currentPage) {
    return {
        type: SET_CURRENT_PAGE,
        currentPage: currentPage
    }
}

export function setTotalUsersCountAC(userCount) {
    return {
        type: SET_TOTAL_USERS_COUNT,
        userCount: userCount
    }
}

export default usersReduce;