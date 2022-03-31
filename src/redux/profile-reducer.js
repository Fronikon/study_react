const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_POST = 'ADD-POST';

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
}

const profileReduce = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newTextPost: action.text,
            }
        }
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
        }
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

export default profileReduce;