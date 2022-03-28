const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_POST = 'ADD-POST';

let store = {
    _state: {
        profilePage: {
            posts: [
                { comment: 'Hello World!', id: '1' },
                { comment: 'Прикольная стена.', id: '2' },
                { comment: 'Пишу о своём.', id: '3' },
                { comment: 'Привет всем!!!', id: '4' },
                { comment: 'Как прошел ваш день?', id: '5' },
                { comment: 'Прикол.', id: '6' }
            ],
            newTextPost: '',
        },
        messagesPage: {
            messages: [
                { message: 'hi', id: 1 },
                { message: 'hello', id: 2 },
                { message: 'yo', id: 3 }
            ],
            dialogs: [
                { name: 'Dima', id: '1' },
                { name: 'Sveta', id: '2' },
                { name: 'Ira', id: '3' },
                { name: 'Sergey', id: '4' },
                { name: 'Anton', id: '5' },
                { name: 'Semen', id: '6' },
                { name: 'Ulia', id: '7' },
                { name: 'Ura', id: '8' },
                { name: 'Diana', id: '9' }
            ],
        },
    },
    getState() {
        return this._state;
    },

    _callSubscriber() {
        console.log('empty')
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },

    dispatch(action) {
        if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newTextPost = action.text;
            this._callSubscriber(this._state);
        } else if (action.type === 'ADD-POST') {
            let newPost = {
                comment: this._state.profilePage.newTextPost,
                id: '7',
            }
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newTextPost = ''
            this._callSubscriber(this._state);
        }
    },
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

export default store;