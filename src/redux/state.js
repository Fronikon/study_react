import dialogReduce from "./dialog-reducer";
import profileReduce from "./profile-reducer";

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
        this._state.profilePage = profileReduce(this._state.profilePage, action)
        this._state.messagesPage = dialogReduce(this._state.messagesPage, action)

        this._callSubscriber(this._state);
    },
}

export default store;