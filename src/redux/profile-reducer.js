const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_POST = 'ADD-POST';

const profileReduce = (state, action) => {
    switch (action.type) {
        case UPDATE_NEW_POST_TEXT:
            state.newTextPost = action.text;
            return state;

        case ADD_POST:
            let newPost = {
                comment: state.newTextPost,
                id: '7',
            }
            state.posts.push(newPost);
            state.newTextPost = '';
            return state;
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