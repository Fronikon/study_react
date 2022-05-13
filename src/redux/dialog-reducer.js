const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
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
}

const dialogReduce = (state = initialState, action) => {

    switch (action.type) {
        case SEND_MESSAGE:
            let newMessage = {
                message: action.message,
                id: '7',
            }
            return {
                ...state,
                messages: [ ...state.messages, newMessage],
            }
        
        default:
            return state 
    }
}

export function sendMassageActionCreater(message) {
    return {
        type: SEND_MESSAGE,
        message
    }
}

export default dialogReduce;