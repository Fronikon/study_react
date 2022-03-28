const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const ADD_POST = 'ADD-POST';
const SEND_MESSAGE = 'SEND-MESSAGE';

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
            dialogs: [
                {
                    name: 'Dima',
                    avatar: 'http://archilab.online/images/1/123.jpg',
                    id: '1',
                },
                {
                    name: 'Sveta',
                    avatar: 'https://android-obzor.com/wp-content/uploads/2022/02/5-1.jpg',
                    id: '2'
                },
                {
                    name: 'Ira',
                    avatar: 'https://www.meme-arsenal.com/memes/b877babd9c07f94b952c7f152c4e264e.jpg',
                    id: '3'
                },
                {
                    name: 'Sergey',
                    avatar: 'https://i.pinimg.com/736x/f5/27/41/f52741fb62bf1d821948a49204406bdc.jpg',
                    id: '4'
                },
                {
                    name: 'Anton',
                    avatar: 'https://shapka-youtube.ru/wp-content/uploads/2021/02/prikolnaya-avatarka-dlya-patsanov.jpg',
                    id: '5'
                },
                {
                    name: 'Semen',
                    avatar: 'https://android-obzor.com/wp-content/uploads/2022/02/1-4.jpg',
                    id: '6'
                },
                {
                    name: 'Ulia',
                    avatar: 'https://i.pinimg.com/736x/f5/27/41/f52741fb62bf1d821948a49204406bdc.jpg',
                    id: '7'
                },
                {
                    name: 'Ura',
                    avatar: 'http://pm1.narvii.com/6889/74979d4d2744ec6e27995b6e866f091d04c0b40cr1-515-414v2_uhq.jpg',
                    id: '8'
                },
                {
                    name: 'Diana',
                    avatar: 'https://trikky.ru/wp-content/blogs.dir/1/files/2020/08/17/2859972401.jpg',
                    id: '9'
                }
            ],
            messages: [
                { message: 'Hello, how are you?', id: 1 },
                { message: 'Hi, i am OK, are you?', id: 2 },
                { message: 'All are well, thanks!!', id: 3 }
            ],
            newMessagesBody: '',
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
        if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newTextPost = action.text;
            this._callSubscriber(this._state);
        } else if (action.type === ADD_POST) {
            let newPost = {
                comment: this._state.profilePage.newTextPost,
                id: '7',
            }
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newTextPost = ''
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
            this._state.messagesPage.newMessagesBody = action.body;
            this._callSubscriber(this._state);
        } else if (action.type === SEND_MESSAGE) {
            let newMessage = {
                message: this._state.messagesPage.newMessagesBody,
                id: '7',
            }
            this._state.messagesPage.messages.push(newMessage);
            this._state.messagesPage.newMessagesBody = ''
            this._callSubscriber(this._state);
        }
    },
}

export function addPostActionCreater() {
    return {
        type: ADD_POST
    }
}
export function sendMassageActionCreater() {
    return {
        type: SEND_MESSAGE
    }
}

export function updateNewPostTextActionCreater(text) {
    return {
        type: UPDATE_NEW_POST_TEXT,
        text: text,
    }
}
export function updateNewMessageBodyActionCreater(body) {
    return {
        type: UPDATE_NEW_MESSAGE_BODY,
        body: body,
    }
}

export default store;